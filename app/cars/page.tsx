import type { Metadata } from "next";
import VehicleCard from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";
import { vehicles } from "@/data/vehicles";
import { BUSINESS } from "@/data/constants";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Browse the full range of Land Star rental vehicles — sedans, SUVs, utes, and people movers available for hire across Australia.",
  openGraph: {
    title: "Our Fleet | Land Star Car Rental",
    description:
      "Browse the full range of Land Star rental vehicles — sedans, SUVs, utes, and people movers available for hire across Australia.",
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
