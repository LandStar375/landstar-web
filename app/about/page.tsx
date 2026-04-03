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
  title: "About Star Rental Club – Car Hire Cannington, Perth",
  description:
    "Learn about Star Rental Club, a Cannington-based car rental business offering reliable vehicles, transparent pricing, flexible hire terms, and friendly service in Perth, WA.",
  keywords: [
    "about Star Rental Club",
    "car rental company Cannington",
    "car hire business Perth",
    "reliable car rental Australia",
    "family and business car hire",
  ],
  openGraph: {
    title: "About Star Rental Club – Car Hire Cannington, Perth",
    description:
      "Learn how Star Rental Club helps drivers, families, and business customers with reliable vehicles, clear pricing, and flexible car hire in Perth.",
  },
  alternates: {
    canonical: "https://starrental.com.au/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const offeringCards = [
  {
    icon: <HiOutlineTruck className="h-6 w-6" />,
    title: "Wide Vehicle Range",
    description:
      "Choose from sedans, hatchbacks, SUVs, utes, and people movers for daily travel, family plans, and practical work use.",
  },
  {
    icon: <HiOutlineCurrencyDollar className="h-6 w-6" />,
    title: "Clear Pricing",
    description:
      "Our approach to car hire is straightforward, with transparent pricing and no unnecessary confusion around the rental process.",
  },
  {
    icon: <HiOutlineCalendar className="h-6 w-6" />,
    title: "Flexible Rental Terms",
    description:
      "We support short-term and longer vehicle hire needs, making it easier to arrange a rental that fits your schedule.",
  },
  {
    icon: <HiOutlineUserGroup className="h-6 w-6" />,
    title: "Friendly Support",
    description:
      "Our team focuses on responsive communication so customers can ask questions, confirm availability, and plan with confidence.",
  },
];

const valueCards = [
  {
    icon: <HiOutlineShieldCheck className="h-7 w-7" />,
    title: "Reliability",
    description:
      "We focus on clean, well-presented vehicles and a rental process that feels dependable from the first enquiry to pickup.",
  },
  {
    icon: <HiOutlineEye className="h-7 w-7" />,
    title: "Transparency",
    description:
      "Customers should understand what they are booking, what the vehicle suits, and how to contact us without chasing hidden details.",
  },
  {
    icon: <HiOutlineHeart className="h-7 w-7" />,
    title: "Customer First",
    description:
      "We aim to help local drivers, business customers, families, and visitors find practical vehicle hire options without unnecessary friction.",
  },
];

const audienceCards = [
  {
    title: "Local Drivers",
    description:
      "Need a practical rental for errands, appointments, or temporary transport? We provide straightforward car hire for local driving needs.",
  },
  {
    title: "Family Travel",
    description:
      "From SUVs to people movers, we help families book vehicles with the space and comfort needed for day trips and longer drives.",
  },
  {
    title: "Business Use",
    description:
      "Businesses and professionals can arrange reliable vehicle hire for meetings, site visits, team movement, and temporary transport support.",
  },
  {
    title: "Flexible Enquiries",
    description:
      `Based at ${BUSINESS.location}, we also support ${BUSINESS.serviceArea.toLowerCase()} through direct phone and email contact.`,
  },
];

const aboutFaqs = [
  {
    question: "Where is Star Rental Club based?",
    answer: `Star Rental Club is based at ${BUSINESS.location}. Customers can contact us directly for availability, pricing, and pickup information.`,
  },
  {
    question: "What types of vehicles does Star Rental Club offer?",
    answer:
      "We offer a practical range that includes sedans, hatchbacks, SUVs, utes, and people movers for local travel, family use, and business needs.",
  },
  {
    question: "What makes Star Rental Club different from other car rental companies?",
    answer:
      "Our focus is on reliable vehicles, straightforward communication, flexible hire options, and transparent pricing that helps customers book with confidence.",
  },
  {
    question: "How can I contact Star Rental Club?",
    answer:
      "You can contact us by phone, email, or through the website contact form to ask about vehicle availability, pricing, and booking details.",
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
            About {BUSINESS.name} Car Rental
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-base text-brand-100 sm:mt-4 sm:text-lg">
            Learn more about {BUSINESS.name}, a car rental business focused on
            reliable vehicles, flexible car hire, and straightforward service
            for local drivers, families, business customers, and visitors.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <ScrollReveal animation="fade-right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop"
                alt="Star Rental Club office and customer service setting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Our Story
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                A Practical Approach to Car Rental
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                {BUSINESS.name} was built around a simple goal: make vehicle hire
                easier to understand and easier to arrange. Customers searching
                for car rental in Cannington or flexible car hire support want a
                team that answers clearly, offers suitable vehicles, and keeps
                the process moving.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                Based at {BUSINESS.location}, we help drivers compare vehicle
                types, discuss travel needs, and arrange rentals for city use,
                family travel, business movement, and general transport needs.
              </p>
            </div>
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
                <article className="rounded-2xl bg-white p-6 shadow-sm">
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
                <article className="rounded-2xl bg-white p-6 shadow-sm">
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
              Looking for Reliable Car Rental Support?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-brand-100">
              Contact {BUSINESS.name} to discuss vehicle options, pricing, and
              booking details for your next rental.
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
