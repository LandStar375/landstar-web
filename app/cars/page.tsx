import type { Metadata } from "next";
import VehicleCard from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";
import { vehicles } from "@/data/vehicles";
import { BUSINESS } from "@/data/constants";

export const metadata: Metadata = {
  title: "Rental Cars in Perth | Star Rental Club Fleet",
  description:
    "Browse rental cars in Perth and East Cannington. Choose from sedans, SUVs, utes, and family vehicles with flexible pricing at Star Rental Club.",
  keywords: [
    "rental cars Perth",
    "car hire fleet East Cannington",
    "SUV rental Perth",
    "ute hire Perth",
    "sedan rental Perth",
    "people mover hire Perth",
    "Star Rental Club fleet",
    "affordable car hire Perth",
  ],
  openGraph: {
    title: "Rental Cars in Perth | Star Rental Club Fleet",
    description:
      "Browse rental cars in Perth and East Cannington. Choose from sedans, SUVs, utes, and family vehicles with flexible pricing at Star Rental Club.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Star Rental Club Fleet – Rental Cars Perth",
      },
    ],
  },
  alternates: {
    canonical: "https://starrental.com.au/cars",
  },
};

export default function CarsPage() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Rental Cars in Perth
        </h1>
        <p className="mt-3 max-w-3xl mx-auto text-lg text-gray-600 text-center">
          Looking for reliable car rental in Perth? Browse our fleet of sedans,
          SUVs, utes, and family cars available for hire in East Cannington and
          surrounding Perth areas. Short-term or long-term — choose the right
          car for your needs.
        </p>
        <p className="mt-2 max-w-3xl mx-auto text-base text-gray-500 text-center">
          Our vehicles are well-maintained and ready for daily commuting, family
          trips, or work use with flexible and affordable pricing.
        </p>
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <ScrollReveal key={vehicle.id} animation="fade-up" delay={index * 100}>
            <VehicleCard
              vehicle={vehicle}
              phoneNumber={BUSINESS.phoneHref}
            />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up">
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Car Hire Options in Perth
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-8">
              From compact sedans for daily driving to SUVs and utes for family
              trips or work use, Star Rental Club provides flexible car hire
              options in East Cannington and nearby areas. Contact us to check
              availability or book your vehicle today.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-800"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
