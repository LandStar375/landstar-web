import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import VehicleCard from "@/components/VehicleCard";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import { vehicles } from "@/data/vehicles";
import { BUSINESS } from "@/data/constants";
import { HiOutlineClock, HiOutlineGlobeAlt, HiOutlineMapPin } from "react-icons/hi2";
import GoogleReviews from "@/components/GoogleReviews";

export const metadata: Metadata = {
  title: "Car Rental Perth | Affordable Car Hire Perth",
  description:
    "Looking for car rental Perth? Star Rental offers affordable and reliable car hire all over Perth. Browse sedans, SUVs, utes, and family vehicles.",
  keywords: [
    "car rental Perth",
    "car hire Perth",
    "cheap car rental Perth",
    "Star Rental",
    "daily weekly car hire Perth",
    "affordable car rental Perth",
    "reliable car hire WA",
    "best car rental Perth",
    "car hire near me Perth",
    "rent a car Perth",
    "vehicle hire Perth",
    "budget car rental Perth",
    "short term car rental Perth",
    "long term car hire Perth",
  ],
  openGraph: {
    title: "Car Rental Perth | Affordable Car Hire Perth | Star Rental",
    description:
      "Looking for car rental Perth? Star Rental offers affordable and reliable car hire all over Perth.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Star Rental – Affordable Car Rental Perth",
      },
    ],
  },
  alternates: {
    canonical: "https://starrental.com.au",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Perth | Affordable Car Hire Perth | Star Rental",
    description:
      "Looking for car rental Perth? Star Rental offers affordable and reliable car hire all over Perth.",
  },
};

const featuredVehicles = vehicles.filter((vehicle) => vehicle.featured).slice(0, 6);

const rentalSteps = [
  {
    number: "01",
    title: "Browse the Fleet",
    description: "Compare our most popular vehicles and choose the one that fits your trip.",
  },
  {
    number: "02",
    title: "Call or Message Us",
    description: "Tell us your dates and preferences so we can confirm pricing and availability.",
  },
  {
    number: "03",
    title: "Pick Up and Drive",
    description: "Finalize the details, collect the keys, and head out with confidence.",
  },
];

const faqs = [
  {
    question: "How do I check vehicle availability?",
    answer:
      "Call or email us with your preferred dates, trip details, and vehicle type. We will confirm options and pricing directly.",
  },
  {
    question: "Do you offer longer rental periods?",
    answer:
      "Yes. We support daily, weekly, and longer-term hire depending on the vehicle and your schedule.",
  },
  {
    question: "What kind of vehicles do you offer?",
    answer:
      "Our fleet covers sedans, hatchbacks, SUVs, utes, and people movers for city travel, family trips, and practical work use.",
  },
  {
    question: "Can I contact you instead of booking through a form?",
    answer:
      "Yes. Phone and email are both primary contact options, which keeps the booking process simple and direct.",
  },
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
        <svg
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <p className="text-base text-slate-700">{children}</p>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 block text-lg font-semibold text-white transition-colors hover:text-brand-100"
    >
      {value}
    </a>
  ) : (
    <p className="mt-2 text-lg font-semibold text-white">{value}</p>
  );

  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">
        <span className="text-base">{icon}</span>
        <span>{label}</span>
      </div>
      {content}
    </div>
  );
}

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <HeroSection />

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal animation="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                Popular Picks
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Featured Vehicles
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Browse popular choices for city trips, family travel, business use,
                and practical work needs.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  phoneNumber={BUSINESS.phoneHref}
                />
              ))}
            </div>
          </ScrollReveal>
          <div className="mt-10 text-center">
            <Button href="/cars" variant="primary">
              View All Vehicles
            </Button>
          </div>
        </div>
      </section>

      <ScrollReveal animation="fade-up">
        <section className="bg-white px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                Simple Process
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Renting Made Simple
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Three clear steps from browsing to pickup.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {rentalSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-slate-500">
              No complicated checkout flow - just pick a vehicle, contact us, and
              we confirm the details quickly.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <ScrollReveal animation="fade-right">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/why-landstar.jpg"
                alt="Reliable car rental Perth – Star Rental quality vehicle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                Why Rent With Us
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Why Star Rental?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                At Star Rental, we focus on providing high-quality car rental
                Perth services for daily travel, business use, and personal trips.
                Our vehicles are clean, well-maintained, and ready for immediate
                use. We provide service all over Perth.
              </p>
              <div className="mt-8 space-y-4">
                <CheckItem>Affordable car rental Perth pricing</CheckItem>
                <CheckItem>No hidden charges – transparent pricing</CheckItem>
                <CheckItem>Flexible daily, weekly &amp; long-term hire</CheckItem>
                <CheckItem>Reliable, well-maintained vehicles</CheckItem>
                <CheckItem>Friendly local service in Perth</CheckItem>
              </div>
              <div className="mt-8">
                <Button href="/about" variant="secondary">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal animation="fade-up">
        <GoogleReviews />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section className="bg-white px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                Helpful Answers
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                The essentials customers usually ask before booking.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section className="bg-slate-50 px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                Car Hire Across Perth
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Affordable Car Rental Available All Over Perth
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                No matter where you are in Perth, Star Rental provides reliable
                and affordable car hire to get you on the road.
              </p>
            </div>
            <p className="mt-6 text-center text-sm text-slate-500">
              We are committed to providing convenient and dependable car hire
              solutions throughout Perth.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <section className="bg-brand-700 px-6 py-16 text-white md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-100">
              Ready When You Are
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Book Your Car Rental in Perth
            </h2>
            <p className="mt-4 text-lg text-brand-100">
              If you are looking for car rental Perth, Star Rental is ready
              to help. Contact us today to book your vehicle and enjoy a smooth
              and stress-free rental experience.
            </p>
            <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
              <InfoCard
                icon={<HiOutlineClock className="h-5 w-5" />}
                label="Hours"
                value={BUSINESS.businessHours}
              />
              <InfoCard
                icon={<HiOutlineMapPin className="h-5 w-5" />}
                label="Address"
                value={BUSINESS.location}
                href={BUSINESS.mapsUrl}
              />
              <InfoCard
                icon={<HiOutlineGlobeAlt className="h-5 w-5" />}
                label="Coverage"
                value={BUSINESS.serviceArea}
              />
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 transition-colors duration-200 hover:bg-brand-50"
              >
                Call {BUSINESS.phone}
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Send Us a Message
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
