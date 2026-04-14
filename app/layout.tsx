import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FloatingCallButton from "@/components/FloatingCallButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://starrental.com.au"),
  title: {
    template: "%s | Star Rental – Car Hire Perth",
    default: "Car Rental Perth | Affordable Car Hire Perth | Star Rental",
  },
  description:
    "Looking for car rental Perth? Star Rental offers affordable and reliable car hire all over Perth. Browse sedans, SUVs, utes, and family vehicles.",
  keywords: [
    "car rental Perth",
    "car hire Perth",
    "Star Rental",
    "cheap car rental Perth",
    "affordable car hire WA",
    "rent a car Perth",
    "vehicle hire Perth",
    "best car rental Perth",
    "budget car hire Perth",
    "affordable car rental Australia",
    "car hire near me Perth",
    "short term car rental Perth",
    "long term car hire Perth",
  ],
  authors: [{ name: "Star Rental" }],
  openGraph: {
    type: "website",
    url: "https://starrental.com.au",
    siteName: "Star Rental",
    locale: "en_AU",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Star Rental – Affordable Car Rental Perth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Perth | Affordable Car Hire Perth | Star Rental",
    description:
      "Looking for car rental Perth? Star Rental offers affordable and reliable car hire all over Perth.",
    images: ["/images/hero-bg.jpg"],
  },
  alternates: {
    canonical: "https://starrental.com.au",
    languages: {
      "en-AU": "https://starrental.com.au",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-base">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRental",
              name: "Star Rental",
              description:
                "Affordable and reliable car rental in Perth. Star Rental offers sedans, SUVs, utes, and people movers for daily, weekly, and long-term hire all over Perth.",
              url: "https://starrental.com.au",
              telephone: "+61469716030",
              email: "info@starrental.com.au",
              address: {
                "@type": "PostalAddress",
                streetAddress: "92 mallard way",
                addressLocality: "Cannington",
                addressRegion: "WA",
                postalCode: "6107",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -32.0173,
                longitude: 115.9389,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              priceRange: "$$",
              areaServed: {
                "@type": "Place",
                name: "Perth, Western Australia",
              },
            }),
          }}
        />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <header>
          <Navigation />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
        <FloatingCallButton />
      </body>
    </html>
  );
}
