import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS } from "@/data/constants";
import {
  HiOutlineClock,
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineRefresh,
} from "react-icons/hi";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlineTruck,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Car Rental Services Perth | Daily, Weekly & Long Term Hire",
  description:
    "Explore car rental services in Perth with Star Rental Club. Daily, weekly, and long-term car hire available in East Cannington and surrounding suburbs.",
  keywords: [
    "car rental services Perth",
    "vehicle hire Perth",
    "car hire East Cannington",
    "long term car rental Perth",
    "daily car rental Perth",
    "weekly car hire Perth",
    "business car rental Perth",
    "replacement vehicle rental Perth",
    "airport car rental Perth",
  ],
  openGraph: {
    title: "Car Rental Services Perth | Daily, Weekly & Long Term Hire | Star Rental Club",
    description:
      "Explore car rental services in Perth with Star Rental Club. Daily, weekly, and long-term car hire available in East Cannington and surrounding suburbs.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Star Rental Club – Car Rental Services Perth",
      },
    ],
  },
  alternates: {
    canonical: "https://starrental.com.au/services",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Services Perth | Daily, Weekly & Long Term Hire | Star Rental Club",
    description:
      "Explore car rental services in Perth with Star Rental Club. Daily, weekly, and long-term car hire available in East Cannington and surrounding suburbs.",
  },
};

const services = [
  {
    icon: <HiOutlineClock className="h-6 w-6" />,
    title: "Daily Car Rental Perth",
    description:
      "Need a car for a day? Our daily car rental Perth service offers affordable rates for errands, appointments, short business trips, and same-day transport needs across Perth.",
    features: ["Competitive daily rates", "Quick and easy booking", "Wide vehicle selection"],
  },
  {
    icon: <HiOutlineCalendar className="h-6 w-6" />,
    title: "Weekly Car Hire Perth",
    description:
      "Save more with weekly car hire in Perth. Ideal for holidays, extended work trips, family travel, or anytime you need reliable transport for several days running.",
    features: ["Better value per day", "Great for holidays", "Simple phone or email booking"],
  },
  {
    icon: <HiOutlineDocumentText className="h-6 w-6" />,
    title: "Long-Term Car Rental Perth",
    description:
      "Looking for long-term vehicle hire in Perth? We offer flexible, cost-effective car rental without lock-in contracts — perfect for extended personal or work use.",
    features: ["No unnecessary contracts", "Flexible scheduling", "Consistent affordable pricing"],
  },
  {
    icon: <HiOutlineBriefcase className="h-6 w-6" />,
    title: "Business Car Rental",
    description:
      "Reliable business car rental for Perth professionals. Whether it's client meetings, site visits, or daily operations, we keep your team moving with dependable vehicles.",
    features: ["Professional fleet options", "Straightforward booking", "Suitable for teams"],
  },
  {
    icon: <HiOutlineGlobeAlt className="h-6 w-6" />,
    title: "Airport Transfer & Travel Support",
    description:
      "Arriving in Perth or picking someone up? Our vehicle hire makes airport transfers and visitor travel easy with flexible scheduling and a range of comfortable cars.",
    features: ["Flexible pickup times", "Visitor-friendly service", "Multiple vehicle options"],
  },
  {
    icon: <HiOutlineRefresh className="h-6 w-6" />,
    title: "Replacement Vehicle Services",
    description:
      "Car in the shop? Our replacement vehicle service keeps you on the road while your own car is being repaired or serviced — no disruption to your daily routine.",
    features: ["Available during repairs", "Short or extended hire", "Fast and responsive support"],
  },
];

const vehicleTypes = [
  {
    type: "Sedans",
    description:
      "Fuel-efficient sedans perfect for Perth city driving, daily commutes, and professional business travel.",
    image: "/images/cars/toyota_camry.png",
  },
  {
    type: "SUVs",
    description:
      "Spacious SUVs built for family road trips, weekend getaways, and comfortable long-distance journeys.",
    image: "/images/cars/mazda_cx8.png",
  },
  {
    type: "Utes",
    description:
      "Tough and reliable utes for tradies, job sites, heavy gear transport, and practical work use across Perth.",
    image: "/images/cars/hilux.png",
  },
  {
    type: "Hatchbacks & People Movers",
    description:
      "Budget-friendly hatchbacks for quick errands or roomy people movers for group and family travel.",
    image: "/images/cars/KIA Carnival.png",
  },
];

const useCases = [
  {
    title: "Family Travel & Weekend Trips",
    description:
      "Customers planning weekend trips, school holiday travel, or airport pickups often need a vehicle with more space and comfort.",
  },
  {
    title: "Business & Work-Related Transport",
    description:
      "Professionals and trades need vehicle hire for meetings, site visits, local travel, and practical day-to-day work requirements.",
  },
  {
    title: "Temporary Transport Needs",
    description:
      "Daily and weekly rentals help when you need temporary transport without the complexity of a long booking process.",
  },
  {
    title: "Replacement Vehicles During Repairs",
    description:
      "A rental can bridge the gap while your own car is being repaired, serviced, or temporarily unavailable.",
  },
];

const steps = [
  {
    icon: <HiOutlineMagnifyingGlass className="h-7 w-7" />,
    title: "Browse",
    desc: "Check our fleet and compare vehicle types that match your trip or transport need.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className="h-7 w-7" />,
    title: "Contact",
    desc: "Call or email us with your dates, preferences, and vehicle questions.",
  },
  {
    icon: <HiOutlineCheckCircle className="h-7 w-7" />,
    title: "Confirm",
    desc: "We confirm availability, pricing, and the rental details you need before pickup.",
  },
  {
    icon: <HiOutlineTruck className="h-7 w-7" />,
    title: "Drive",
    desc: "Collect the vehicle and get moving with a rental that suits your plans.",
  },
];

const servicesFaqs = [
  {
    question: "Do you offer car rental in East Cannington?",
    answer:
      "Yes, Star Rental Club is based in East Cannington and serves all nearby Perth areas including Perth CBD, Cannington, Victoria Park, Bentley, and surrounding suburbs.",
  },
  {
    question: "Can I rent a car for long-term use?",
    answer:
      "Yes. We provide flexible long-term car rental options in Perth. Contact us directly so we can discuss vehicle options and your preferred schedule.",
  },
  {
    question: "Do you offer affordable car hire?",
    answer:
      "Yes, we focus on budget-friendly car rental services in Perth without hidden charges. Our pricing is transparent across daily, weekly, and long-term hire.",
  },
  {
    question: "What vehicle types are available for rental?",
    answer:
      "Our rental options include sedans, hatchbacks, SUVs, utes, and people movers, depending on the type of trip or transport need you have.",
  },
  {
    question: "Do you offer daily and weekly car rental?",
    answer:
      "Yes. Star Rental Club supports both daily and weekly car hire, making it easier to book transport for short local use, holidays, or temporary travel needs.",
  },
  {
    question: "How do I request a quote for car rental services?",
    answer:
      "You can contact us by phone, email, or through the website contact form with your dates, vehicle preference, and travel details.",
  },
];

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: servicesFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />

      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 px-4 py-12 text-white sm:px-6 sm:py-16 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Services
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <ScrollReveal animation="fade-right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/our_service_4.png"
                alt="Couple loading luggage into SUV – car rental services for every travel need in Perth"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                Why Choose Us
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Car Rental Services in Perth for Every Travel Need
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Explore flexible and affordable car rental services in Perth with{" "}
                {BUSINESS.name}. Daily, weekly, and long-term vehicle hire for
                individuals, families, and businesses across East Cannington and
                surrounding Perth areas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <ScrollReveal animation="fade-right" className="order-2 md:order-1">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                Simple & Clear
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Flexible Car Rental Without Complication
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Finding the right car rental in Perth should be simple. At Star
                Rental Club, we offer clear pricing, easy booking, and reliable
                vehicles so you can focus on your journey instead of the process.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Get in Touch
                </Button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" className="order-1 md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/our_service_2.png"
                alt="Simple car hire booking – flexible rental services Perth"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                What We Offer
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Rental Options for Everyday, Family, and Business Use
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} animation="fade-up" delay={index * 100}>
                <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-auto space-y-2 pt-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <HiOutlineCheckCircle className="h-4 w-4 flex-shrink-0 text-brand-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                Common Use Cases
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Car Rental Services for Different Needs
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                Our car rental services in Perth are designed for different
                situations. Here are some of the most common reasons customers
                choose Star Rental Club.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <ScrollReveal key={useCase.title} animation="fade-up" delay={index * 100}>
                <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-gray-600">{useCase.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Fleet Support
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Vehicle Types Available for Different Journeys
              </h2>
              <p className="mt-2 text-gray-500">
                Compare common vehicle categories before choosing the right rental.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicleTypes.map((vehicleType, index) => (
              <ScrollReveal key={vehicleType.type} animation="fade-up" delay={index * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative aspect-[3/2] bg-gradient-to-br from-slate-50 to-slate-100">
                    <Image
                      src={vehicleType.image}
                      alt={`${vehicleType.type} for hire in Perth – Star Rental Club`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{vehicleType.type}</h3>
                    <p className="mt-1 text-sm leading-7 text-gray-600">
                      {vehicleType.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/cars" variant="primary">
              View Full Fleet
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                How It Works
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Simple Car Rental Process in Perth
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} animation="fade-up" delay={index * 100}>
                <article className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
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
                Service FAQs
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Questions About Our Car Rental Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {servicesFaqs.map((faq, index) => (
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

      <ScrollReveal animation="fade-up">
        <section className="bg-gray-50 px-6 py-16 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Service Area
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Car Rental Services Across Perth
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Star Rental Club is based in East Cannington, Western Australia,
                and provides car rental services across:
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {["Perth CBD", "East Cannington", "Cannington", "Victoria Park", "Bentley", "Surrounding Suburbs"].map(
                (area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-5 text-center shadow-sm"
                  >
                    <p className="text-sm font-semibold text-gray-900">{area}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="bg-brand-700 px-6 py-16 text-white md:px-12">
        <ScrollReveal animation="fade-up">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Need a Vehicle That Fits Your Plans?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-brand-100">
              Contact {BUSINESS.name} to discuss car rental services, compare
              vehicle types, and request booking details for your preferred dates.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                Call {BUSINESS.phone}
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Send a Message
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
