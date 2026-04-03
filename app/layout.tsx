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
  metadataBase: new URL("https://landstar.com.au"),
  title: {
    template: "%s | Land Star Car Rental",
    default: "Land Star Car Rental",
  },
  description:
    "Land Star Car Rental — browse our fleet of quality rental vehicles and get in touch today. Serving Australia with reliable, affordable car hire.",
  keywords: [
    "car rental",
    "car hire",
    "Land Star",
    "rental vehicles",
    "Perth car rental",
    "Cannington car hire",
    "affordable car rental Australia",
  ],
  openGraph: {
    type: "website",
    siteName: "Land Star Car Rental",
    locale: "en_AU",
  },
  alternates: {
    canonical: "https://landstar.com.au",
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
              name: "Land Star Car Rental",
              url: "https://landstar.com.au",
              telephone: "+61469716030",
              email: "info@starrental.com.au",
              address: {
                "@type": "PostalAddress",
                streetAddress: "92 Mallard Way",
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
                name: "West Perth, Australia",
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
