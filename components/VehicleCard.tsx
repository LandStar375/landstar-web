"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { VehicleCardProps } from "@/types";
import { BUSINESS } from "@/data/constants";

export default function VehicleCard({
  vehicle,
  phoneNumber,
}: VehicleCardProps) {
  const telHref = `tel:${phoneNumber}`;
  const vehicleAccent = "#596626";
  const pricingTiers = [
    { label: "1-2 Days", price: vehicle.pricePerDay },
    { label: "3-4 Days", price: Math.max(vehicle.pricePerDay - 5, 35) },
    { label: "5-6 Days", price: Math.max(vehicle.pricePerDay - 8, 32) },
    { label: "7+ Days", price: Math.max(vehicle.pricePerDay - 10, 30) },
  ];
  const weeklyRate = Math.max(vehicle.pricePerDay - 10, 30);
  const bookingHref = `mailto:${BUSINESS.bookingEmail}?subject=${encodeURIComponent(
    `Vehicle Booking Request – ${vehicle.name}`
  )}&body=${encodeURIComponent(
    `Dear Star Rental Club Team,\n\nI am interested in hiring the ${vehicle.name} (${vehicle.type}, ${vehicle.seats}-seater, ${vehicle.transmission}, ${vehicle.fuelType}) at the weekly rate of $${weeklyRate}/day.\n\nCould you please confirm availability and provide details on the booking process, required documents, and any applicable terms?\n\nPreferred pick-up date: \nPreferred return date: \nPick-up location: \n\nI look forward to hearing from you.\n\nKind regards,\n[Your Name]\n[Your Contact Number]`
  )}`;
  const vehicleButtonStyle = {
    "--vehicle-button-color": vehicleAccent,
  } as CSSProperties;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-contain object-center p-4 sm:p-5"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{vehicle.name}</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 sm:text-sm">
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-center">{vehicle.type}</div>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-center">{vehicle.seats} Seats</div>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-center">{vehicle.transmission}</div>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-center">{vehicle.fuelType}</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70">
          <div className="border-b border-slate-200 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Rental Pricing Guide
            </p>
          </div>
          <div className="divide-y divide-slate-200">
            {pricingTiers.map((tier) => (
              <div
                key={tier.label}
                className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-slate-700"
              >
                <span>{tier.label}</span>
                <span className="font-semibold text-slate-900">
                  ${tier.price}
                  <span className="ml-1 text-xs font-medium text-slate-500">/day</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
          <a
            href={telHref}
            className="vehicle-card-button vehicle-card-button-primary"
            style={vehicleButtonStyle}
          >
            Call to Book
          </a>
          <button
            onClick={() => window.open(bookingHref, "_blank")}
            className="vehicle-card-button vehicle-card-button-secondary"
            style={vehicleButtonStyle}
          >
            Email Us
          </button>
        </div>
      </div>
    </article>
  );
}
