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
    template: "%s | Star Rental Club – Car Hire Perth",
    default: "Car Rental Perth | Affordable Car Hire Perth | Star Rental Club",
  },
  description:
    "Looking for car rental Perth? Star Rental Club offers affordable and reliable car hire in East Cannington, Perth CBD, and surrounding suburbs.",
  keywords: [
    "car rental Perth",
    "car hire Perth",
    "Star Rental Club",
    "cheap car rental East Cannington",
    "affordable car hire WA",
    "rent a car Perth",
    "vehicle hire Perth",
    "East Cannington car hire",
    "Perth CBD car rental",
    "affordable car rental Australia",
  ],
  authors: [{ name: "Star Rental Club" }],
  openGraph: {
    type: "website",
    siteName: "Star Rental Club",
    locale: "en_AU",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Star Rental Club – Affordable Car Rental Perth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Perth | Affordable Car Hire Perth | Star Rental Club",
    description:
      "Looking for car rental Perth? Star Rental Club offers affordable and reliable car hire in East Cannington, Perth CBD, and surrounding suburbs.",
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
              name: "Star Rental Club",
              description:
                "Affordable and reliable car rental in Perth. Star Rental Club offers sedans, SUVs, utes, and people movers for daily, weekly, and long-term hire from East Cannington, WA.",
              url: "https://starrental.com.au",
              telephone: "+61469716030",
              email: "info@starrental.com.au",
              address: {
                "@type": "PostalAddress",
                streetAddress: "92 Mallard Way",
                addressLocality: "East Cannington",
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
