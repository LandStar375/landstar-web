"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { VehicleCardProps } from "@/types";
import { BUSINESS } from "@/data/constants";

export default function VehicleCard({
  vehicle,
  phoneNumber,
}: VehicleCardProps) {
  const [selecting, setSelecting] = useState(false);
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const telHref = `tel:${phoneNumber}`;
  const vehicleAccent = "#596626";
  const pricingTiers = [
    { label: "1-2 Days", price: vehicle.pricePerDay },
    { label: "3-4 Days", price: Math.max(vehicle.pricePerDay - 5, 35) },
    { label: "5-6 Days", price: Math.max(vehicle.pricePerDay - 8, 32) },
    { label: "7+ Days", price: Math.max(vehicle.pricePerDay - 10, 30) },
  ];

  const vehicleButtonStyle = {
    "--vehicle-button-color": vehicleAccent,
  } as CSSProperties;

  function buildMailHref(tierIndex: number) {
    const tier = pricingTiers[tierIndex];
    return `mailto:${BUSINESS.bookingEmail}?subject=${encodeURIComponent(
      `Vehicle Booking Request – ${vehicle.name}`
    )}&body=${encodeURIComponent(
      `Dear Star Rental Club Team,\n\nI am interested in hiring the ${vehicle.name} (${vehicle.type}, ${vehicle.seats}-seater, ${vehicle.transmission}, ${vehicle.fuelType}) for the ${tier.label} rate at $${tier.price}/day.\n\nCould you please confirm availability and provide details on the booking process, required documents, and any applicable terms?\n\nPreferred pick-up date: \nPreferred return date: \nPick-up location: \n\nI look forward to hearing from you.\n\nKind regards,\n[Your Name]\n[Your Contact Number]`
    )}`;
  }

  function handleEmailClick() {
    if (selectedTier !== null) {
      window.open(buildMailHref(selectedTier), "_blank");
      setSelecting(false);
      setSelectedTier(null);
    } else {
      setSelecting(true);
    }
  }

  function handleTierSelect(index: number) {
    setSelectedTier(index);
    window.open(buildMailHref(index), "_blank");
    setSelecting(false);
    setSelectedTier(null);
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100" />
        )}
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} – car hire Perth`}
          fill
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`object-contain object-center p-4 sm:p-5 transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="min-h-[3.5rem] text-xl font-bold text-slate-900">{vehicle.name}</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 sm:text-sm">
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-center">{vehicle.type}</div>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-center">{vehicle.seats} Seats</div>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-center">{vehicle.transmission}</div>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-center">{vehicle.fuelType}</div>
        </div>
        <div className={`rounded-2xl border bg-slate-50/70 transition-colors ${selecting ? "border-brand-400 ring-2 ring-brand-200" : "border-slate-200"}`}>
          <div className="border-b border-slate-200 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {selecting ? "Select Your Rental Duration" : "Rental Pricing Guide"}
            </p>
          </div>
          <div className="divide-y divide-slate-200">
            {pricingTiers.map((tier, index) => (
              <button
                key={tier.label}
                type="button"
                onClick={() => selecting && handleTierSelect(index)}
                className={`flex w-full items-center justify-between gap-4 px-4 py-3 text-sm text-left transition-colors ${
                  selecting
                    ? "cursor-pointer hover:bg-brand-50 active:bg-brand-100"
                    : "cursor-default"
                } ${selectedTier === index ? "bg-brand-50" : ""}`}
              >
                <span className={selecting ? "font-medium text-slate-900" : "text-slate-700"}>{tier.label}</span>
                <span className="font-semibold text-slate-900">
                  ${tier.price}
                  <span className="ml-1 text-xs font-medium text-slate-500">/day</span>
                </span>
              </button>
            ))}
          </div>
        </div>
        {selecting && (
          <p className="text-center text-sm font-medium text-brand-700">
            Please select your preferred rental duration above to proceed with the email
          </p>
        )}
        <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
          <a
            href={telHref}
            className="vehicle-card-button vehicle-card-button-primary"
            style={vehicleButtonStyle}
          >
            Call to Book
          </a>
          <button
            onClick={handleEmailClick}
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
