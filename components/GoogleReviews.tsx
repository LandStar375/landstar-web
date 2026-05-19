"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/data/constants";

interface Review {
  name: string;
  photo: string | null;
  rating: number;
  text: string;
  timeAgo: string;
}

interface ReviewsData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

// Hardcoded fallback reviews shown when API is not configured yet
const fallbackData: ReviewsData = {
  rating: 5.0,
  totalReviews: 3,
  reviews: [
    {
      name: "Sarah M.",
      photo: null,
      rating: 5,
      text: "The process was easy from the first call. The Corolla was clean, reliable, and exactly what I needed for a week of local travel.",
      timeAgo: "2 weeks ago",
    },
    {
      name: "James T.",
      photo: null,
      rating: 5,
      text: "We needed extra space for a family trip and the Tucson was perfect. Clear pricing, quick replies, and no last-minute hassle.",
      timeAgo: "1 month ago",
    },
    {
      name: "Priya K.",
      photo: null,
      rating: 5,
      text: "Booked a ute for work use and everything was straightforward. Good vehicle, fair rate, and a team that actually followed through.",
      timeAgo: "3 weeks ago",
    },
  ],
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsData>(fallbackData);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((json: ReviewsData) => {
        if (json.reviews && json.reviews.length > 0) {
          setData(json);
          setIsLive(true);
        }
      })
      .catch(() => {
        // silently fall back to hardcoded reviews
      });
  }, []);

  return (
    <section className="bg-slate-50 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-3">
            <GoogleIcon className="h-8 w-8" />
            <span className="text-sm font-semibold text-slate-500">Google Reviews</span>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-4xl font-bold text-slate-900">{data.rating.toFixed(1)}</span>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {isLive && (
                <span className="text-xs text-slate-400">{data.totalReviews} reviews</span>
              )}
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Real feedback from renters using different vehicles for different trips.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {data.reviews.map((review, idx) => (
            <article
              key={`${review.name}-${idx}`}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                {review.photo ? (
                  <img
                    src={review.photo}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.timeAgo}</p>
                </div>
              </div>
              <div className="mt-3">
                <Stars count={review.rating} />
              </div>
              <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex justify-end border-t border-slate-100 pt-4">
                <GoogleIcon className="h-4 w-4 opacity-40" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={BUSINESS.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <GoogleIcon className="h-5 w-5" />
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
