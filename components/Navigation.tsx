"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import { BUSINESS } from "@/data/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Cars" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[56px] items-center justify-between gap-6 py-2 md:min-h-[72px] md:py-3">
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-950 md:text-2xl">
            <span className="text-brand-700">Land</span> Star
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <ul className="flex items-center gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-flex min-h-[44px] min-w-[44px] items-center rounded-full px-4 py-2 text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href={`tel:${BUSINESS.phoneHref}`} variant="primary">
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
