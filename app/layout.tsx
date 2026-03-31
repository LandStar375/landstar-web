import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FloatingCallButton from "@/components/FloatingCallButton";
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
  title: {
    template: "%s | Land Star Car Rental",
    default: "Land Star Car Rental",
  },
  description:
    "Land Star Car Rental — browse our fleet of quality rental vehicles and get in touch today. Serving Australia with reliable, affordable car hire.",
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
