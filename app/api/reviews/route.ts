import { NextResponse } from "next/server";
import { BUSINESS } from "@/data/constants";

interface GoogleReview {
  authorAttribution: {
    displayName: string;
    photoUri?: string;
  };
  rating: number;
  text?: { text: string };
  relativePublishTimeDescription: string;
}

interface PlaceDetailsResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Google Places API key not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${BUSINESS.googlePlaceId}?fields=rating,userRatingCount,reviews&key=${apiKey}`,
      {
        headers: { "Content-Type": "application/json" },
        next: { revalidate: 3600 }, // cache for 1 hour
      }
    );

    if (!res.ok) {
      throw new Error(`Google API responded with ${res.status}`);
    }

    const data: PlaceDetailsResponse = await res.json();

    const reviews = (data.reviews ?? []).slice(0, 5).map((r) => ({
      name: r.authorAttribution.displayName,
      photo: r.authorAttribution.photoUri ?? null,
      rating: r.rating,
      text: r.text?.text ?? "",
      timeAgo: r.relativePublishTimeDescription,
    }));

    return NextResponse.json({
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
      reviews,
    });
  } catch (err) {
    console.error("Failed to fetch Google reviews:", err);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
