import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import VehicleCard from "@/components/VehicleCard";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import { vehicles } from "@/data/vehicles";
import { BUSINESS } from "@/data/constants";
import { HiOutlineClock, HiOutlineGlobeAlt, HiOutlineMapPin } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Car Rental Perth | Affordable Car Hire Perth",
  description:
    "Looking for car rental Perth? Star Rental Club offers affordable and reliable car hire in East Cannington, Perth CBD, and surrounding suburbs. Browse sedans, SUVs, utes, and family vehicles.",
  keywords: [
    "car rental Perth",
    "car hire Perth",
    "car hire East Cannington",
    "Perth CBD car rental",
    "Star Rental Club",
    "daily weekly car hire Perth",
    "affordable car rental Perth",
    "reliable car hire WA",
  ],
  openGraph: {
    title: "Car Rental Perth | Affordable Car Hire Perth | Star Rental Club",
    description:
      "Looking for car rental Perth? Star Rental Club offers affordable and reliable car hire in East Cannington, Perth CBD, and surrounding suburbs.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Star Rental Club – Affordable Car Rental Perth",
      },
    ],
  },
  alternates: {
    canonical: "https://starrental.com.au",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Perth | Affordable Car Hire Perth | Star Rental Club",
    description:
      "Looking for car rental Perth? Star Rental Club offers affordable and reliable car hire in East Cannington, Perth CBD, and surrounding suburbs.",
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

const testimonials = [
  {
    quote:
      "The process was easy from the first call. The Corolla was clean, reliable, and exactly what I needed for a week of local travel.",
    name: "Sarah M.",
    detail: "Sedan rental for weekday travel",
    rating: 5,
    timeAgo: "2 weeks ago",
  },
  {
    quote:
      "We needed extra space for a family trip and the Tucson was perfect. Clear pricing, quick replies, and no last-minute hassle.",
    name: "James T.",
    detail: "SUV rental for a weekend getaway",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    quote:
      "Booked a ute for work use and everything was straightforward. Good vehicle, fair rate, and a team that actually followed through.",
    name: "Priya K.",
    detail: "Ute rental for business use",
    rating: 5,
    timeAgo: "3 weeks ago",
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
                alt="Reliable car rental Perth – Star Rental Club quality vehicle"
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
                Why Star Rental Club?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                At Star Rental Club, we focus on providing high-quality car rental
                Perth services for daily travel, business use, and personal trips.
                Our vehicles are clean, well-maintained, and ready for immediate
                use. Based in East Cannington, we serve customers throughout Perth
                CBD, Cannington, nearby eastern suburbs, and the greater Perth
                region.
              </p>
              <div className="mt-8 space-y-4">
                <CheckItem>Affordable car rental Perth pricing</CheckItem>
                <CheckItem>No hidden charges – transparent pricing</CheckItem>
                <CheckItem>Flexible daily, weekly &amp; long-term hire</CheckItem>
                <CheckItem>Reliable, well-maintained vehicles</CheckItem>
                <CheckItem>Friendly local service in East Cannington</CheckItem>
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
        <section className="bg-slate-50 px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center gap-3">
                <svg className="h-8 w-8" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-semibold text-slate-500">Google Reviews</span>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-4xl font-bold text-slate-900">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                What Our Customers Say
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Real feedback from renters using different vehicles for different trips.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-xs text-slate-400">{testimonial.timeAgo}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <p className="text-xs text-slate-400">{testimonial.detail}</p>
                    <svg className="h-4 w-4 opacity-40" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
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
                Service Areas
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Serving Perth and Surrounding Areas
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Our car rental Perth services are based in East Cannington, Western
                Australia, allowing us to serve customers across the region.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
              {["Perth CBD", "East Cannington", "Cannington", "Eastern Suburbs", "Greater Perth"].map(
                (area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm"
                  >
                    <p className="text-base font-semibold text-slate-900">{area}</p>
                  </div>
                )
              )}
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
              If you are looking for car rental Perth, Star Rental Club is ready
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
