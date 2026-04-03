import type { Metadata } from "next";
import VehicleCard from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";
import { vehicles } from "@/data/vehicles";
import { BUSINESS } from "@/data/constants";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Browse the full range of Star Rental Club vehicles — sedans, SUVs, utes, and people movers available for hire in Perth, WA.",
  keywords: [
    "rental cars Perth",
    "hire car fleet Cannington",
    "SUV rental Perth",
    "ute hire Western Australia",
    "sedan rental Cannington WA",
    "people mover hire Perth",
    "Star Rental Club fleet",
  ],
  openGraph: {
    title: "Our Fleet – Rental Cars Perth | Star Rental Club",
    description:
      "Browse the full range of Star Rental Club vehicles — sedans, SUVs, utes, and people movers available for hire in Perth, WA.",
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
          Our Fleet
        </h1>
        <p className="mt-2 text-lg text-gray-600 text-center">
          Find the perfect vehicle for your next trip
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
      </div>
    </section>
  );
}
