import Link from "next/link";
import {
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { BUSINESS } from "@/data/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Cars" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const FOOTER_BRAND_NAME = "Star Rentals Club";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <h2 className="text-lg font-semibold text-white">{FOOTER_BRAND_NAME}</h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Straightforward car rental support, local pickup guidance, and
              direct booking contact for drivers across {BUSINESS.serviceArea}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] min-w-[44px] items-center text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Contact Details</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneHref}`}
                  className="inline-flex min-h-[44px] items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <HiOutlinePhone className="h-5 w-5 text-brand-300" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex min-h-[44px] items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <HiOutlineEnvelope className="h-5 w-5 text-brand-300" />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.bookingEmail}`}
                  className="inline-flex min-h-[44px] items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <HiOutlineEnvelope className="h-5 w-5 text-brand-300" />
                  <span>{BUSINESS.bookingEmail}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Rental Info</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <HiOutlineClock className="mt-0.5 h-5 w-5 text-brand-300" />
                <div>
                  <span className="block font-medium text-slate-200">Hours</span>
                  {BUSINESS.businessHours}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-0.5 h-5 w-5 text-brand-300" />
                <div>
                  <span className="block font-medium text-slate-200">Address</span>
                  <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {BUSINESS.location}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineGlobeAlt className="mt-0.5 h-5 w-5 text-brand-300" />
                <div>
                  <span className="block font-medium text-slate-200">Coverage</span>
                  {BUSINESS.serviceArea}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {FOOTER_BRAND_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
