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
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 px-4 py-12 text-white sm:px-6 sm:py-16 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
             Cars 
          </h1>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </>
  );
}
