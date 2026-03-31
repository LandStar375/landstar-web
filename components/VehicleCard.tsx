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
    { label: "3-5 Days", price: Math.max(vehicle.pricePerDay - 5, 35) },
    { label: "6-7+ Days", price: Math.max(vehicle.pricePerDay - 10, 30) },
  ];
  const bookingHref = `mailto:${BUSINESS.bookingEmail}?subject=${encodeURIComponent(
    `Booking enquiry - ${vehicle.name}`
  )}&body=${encodeURIComponent(
    `Hi, I would like to book the ${vehicle.name} listed from $${vehicle.pricePerDay}/day.`
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
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-slate-900">{vehicle.name}</h3>
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              From
            </p>
            <p className="mt-1 text-2xl font-bold text-vehicle-700">
              ${vehicle.pricePerDay}
              <span className="text-sm font-medium text-slate-500">/day</span>
            </p>
          </div>
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
              Dummy Pricing Guide
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
          <a
            href={bookingHref}
            className="vehicle-card-button vehicle-card-button-secondary"
            style={vehicleButtonStyle}
          >
            Email Us
          </a>
        </div>
      </div>
    </article>
  );
}
