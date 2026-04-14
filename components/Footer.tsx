import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { BUSINESS } from "@/data/constants";

const PAGE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Cars" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const FOOTER_BRAND_NAME = "Star Rental";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-28 sm:px-6 md:pb-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          <div>
            <Link href="/">
              <Image
                src="/images/Logo/starRental logo.png"
                alt="Star Rental – Car Rental Perth"
                width={220}
                height={65}
                className="w-[180px] brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Affordable and reliable car rental in Perth. We offer sedans, SUVs, utes, and family vehicles
              for daily, weekly, and long-term hire all over Perth.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-brand-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Call Star Rental"
              >
                <HiOutlinePhone className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-brand-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Email Star Rental"
              >
                <HiOutlineEnvelope className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-brand-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Find Star Rental on Google Maps"
              >
                <HiOutlineMapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {PAGE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] min-w-[44px] items-center text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact &amp; Hours</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <a
                  href={`tel:${BUSINESS.phoneHref}`}
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineEnvelope className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineClock className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <span>{BUSINESS.businessHours}</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS.location}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineGlobeAlt className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <span>{BUSINESS.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {FOOTER_BRAND_NAME}. All rights reserved.
          <div className="mt-2">
            Powered by{" "}
            <a
              href="https://ezilab.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-300 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              EZILAB.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
