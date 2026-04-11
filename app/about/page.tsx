import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS } from "@/data/constants";
import {
  HiOutlineShieldCheck,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
  HiOutlineUserGroup,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "About Star Rental Club | Car Rental in Cannington & Perth",
  description:
    "Learn about Star Rental Club, a Cannington-based car rental service providing reliable vehicles, transparent pricing, and flexible car hire across Perth and surrounding areas.",
  keywords: [
    "about Star Rental Club",
    "car rental Cannington",
    "car hire business Perth",
    "reliable car rental Perth",
    "family and business car hire Perth",
    "East Cannington car rental",
  ],
  openGraph: {
    title: "About Star Rental Club | Car Rental in Cannington & Perth",
    description:
      "Learn about Star Rental Club, a Cannington-based car rental service providing reliable vehicles, transparent pricing, and flexible car hire across Perth and surrounding areas.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "About Star Rental Club – Car Rental Perth",
      },
    ],
  },
  alternates: {
    canonical: "https://starrental.com.au/about",
  },
};

const offeringCards = [
  {
    icon: <HiOutlineTruck className="h-6 w-6" />,
    title: "Wide Vehicle Range",
    description:
      "Choose from sedans, SUVs, utes, and family cars for daily travel, weekend plans, and practical work use across Perth.",
  },
  {
    icon: <HiOutlineCurrencyDollar className="h-6 w-6" />,
    title: "Transparent Pricing",
    description:
      "No confusion, no hidden fees. Our car hire pricing is upfront and clear so you know exactly what you're paying before you book.",
  },
  {
    icon: <HiOutlineCalendar className="h-6 w-6" />,
    title: "Flexible Rental Options",
    description:
      "Daily, weekly, or long-term — we offer flexible car rental terms that fit your schedule, whether it's a quick errand or an extended trip.",
  },
  {
    icon: <HiOutlineUserGroup className="h-6 w-6" />,
    title: "Friendly Customer Support",
    description:
      "Our team is responsive and easy to reach. Ask questions, confirm availability, and plan your rental with confidence.",
  },
];

const valueCards = [
  {
    icon: <HiOutlineShieldCheck className="h-7 w-7" />,
    title: "Reliable Vehicles",
    description:
      "Every car in our fleet is well-maintained and ready to go. We focus on clean, dependable vehicles you can trust from pickup to return.",
  },
  {
    icon: <HiOutlineEye className="h-7 w-7" />,
    title: "Clear Communication",
    description:
      "No runarounds. We keep things honest and straightforward so you always know what you're booking, what it costs, and how to reach us.",
  },
  {
    icon: <HiOutlineHeart className="h-7 w-7" />,
    title: "Customer-First Approach",
    description:
      "We put your needs first — whether you're a local driver, a family planning a trip, or a business needing reliable transport in Perth.",
  },
];

const audienceCards = [
  {
    title: "Local Drivers",
    description:
      "Need a practical rental for errands, appointments, or daily commutes? We provide straightforward car hire for everyday transport across Perth.",
  },
  {
    title: "Families",
    description:
      "From SUVs to people movers, we help families book vehicles with the space and comfort needed for trips, holidays, and weekend travel.",
  },
  {
    title: "Businesses",
    description:
      "Professionals and teams can arrange reliable vehicle hire for meetings, site visits, staff movement, and temporary business transport.",
  },
  {
    title: "Visitors to Perth",
    description:
      "Visiting Perth and need temporary wheels? We offer flexible car hire from East Cannington with easy phone and email booking.",
  },
];

const aboutFaqs = [
  {
    question: "Where is Star Rental Club based?",
    answer:
      "Star Rental Club is based in East Cannington, Perth. Customers can contact us directly for availability, pricing, and pickup information.",
  },
  {
    question: "What types of vehicles does Star Rental Club offer?",
    answer:
      "We offer a wide range including sedans, SUVs, utes, hatchbacks, and people movers for local travel, family use, and business needs across Perth.",
  },
  {
    question: "What makes Star Rental Club different from other car rental companies?",
    answer:
      "We focus on reliable vehicles, clear and honest communication, flexible hire options, and transparent pricing that helps customers book with confidence.",
  },
  {
    question: "How can I contact Star Rental Club?",
    answer:
      "You can reach us by phone, email, or through our website contact form to ask about vehicle availability, pricing, and booking details.",
  },
];

const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aboutFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }}
      />

      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 px-4 py-12 text-white sm:px-6 sm:py-16 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <ScrollReveal animation="fade-right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about-office.jpg"
                alt="Star Rental Club office and customer service setting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                Who We Are
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                About Star Rental Club – Car Rental in Perth
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Star Rental Club is a trusted car rental service based in East
                Cannington, Perth, providing reliable and affordable vehicle hire
                for local drivers, families, and businesses. Our goal is to make
                car rental simple, clear, and accessible for customers across
                Perth and surrounding areas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal animation="fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Our Story
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
              A Simple Idea Behind Star Rental Club
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Star Rental Club was built around a simple idea: car rental should
              be easy to understand and easy to arrange. Many customers struggle
              with confusing pricing and unclear booking processes, so we focus
              on transparency, communication, and practical vehicle options.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Based in East Cannington, we help customers choose the right
              vehicles for daily travel, family trips, business use, and
              temporary transport needs across Perth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                What We Offer
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Car Hire Built Around Real Customer Needs
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                We focus on the things customers actually look for when choosing
                a car rental company: reliable vehicles, flexible hire terms,
                clear pricing, and responsive support.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {offeringCards.map((card, index) => (
              <ScrollReveal key={card.title} animation="fade-up" delay={index * 100}>
                <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {card.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Why Choose Us
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                What Customers Expect From a Reliable Rental Business
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {valueCards.map((card, index) => (
              <ScrollReveal key={card.title} animation="fade-up" delay={index * 100}>
                <article className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {card.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Who We Help
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Vehicle Hire for Different Types of Trips and Drivers
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                Our service is designed for a range of use cases, from short city
                travel to longer personal or business transport needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {audienceCards.map((card, index) => (
              <ScrollReveal key={card.title} animation="fade-up" delay={index * 100}>
                <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">{card.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Frequently Asked Questions
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                About {BUSINESS.name}
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {aboutFaqs.map((faq, index) => (
              <ScrollReveal key={faq.question} animation="fade-up" delay={index * 80}>
                <article className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-700 px-6 py-16 text-white md:px-12">
        <ScrollReveal animation="fade-up">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Looking for Reliable Car Rental in Perth?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-brand-100">
              Contact Star Rental Club to discuss vehicle options, pricing, and
              booking details for your next rental in Perth.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                Contact Us
              </a>
              <a
                href="/cars"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Browse Our Fleet
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
