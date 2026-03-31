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
  title: "Car Rental Services",
  description:
    "Explore Land Star car rental services for daily, weekly, and long-term hire. Compare practical vehicle hire options for families, business use, airport travel, and replacement transport.",
  keywords: [
    "car rental services",
    "daily car rental",
    "weekly car hire",
    "long-term car rental",
    "business car hire",
    "replacement vehicle rental",
    "airport car rental services",
  ],
  openGraph: {
    title: "Car Rental Services | Land Star Car Rental",
    description:
      "Daily, weekly, and long-term vehicle hire for local travel, family trips, airport pickup needs, business use, and replacement transport.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: <HiOutlineClock className="h-6 w-6" />,
    title: "Daily Car Rental",
    description:
      "Daily car rental is ideal when you need a practical vehicle for errands, appointments, short business travel, or same-week plans without committing to a longer hire period.",
    features: ["Flexible pickup planning", "Competitive short-term hire", "Practical vehicle choices"],
  },
  {
    icon: <HiOutlineCalendar className="h-6 w-6" />,
    title: "Weekly Car Hire",
    description:
      "Weekly car hire gives customers more flexibility for holidays, family travel, temporary transport, and longer local driving needs.",
    features: ["Better value for longer use", "Suitable for family trips", "Simple booking by phone or email"],
  },
  {
    icon: <HiOutlineDocumentText className="h-6 w-6" />,
    title: "Long-Term Vehicle Hire",
    description:
      "If you need transport for an extended period, long-term vehicle hire helps bridge ongoing travel needs with practical rental terms.",
    features: ["Useful for temporary transport gaps", "Flexible scheduling", "Clear rental communication"],
  },
  {
    icon: <HiOutlineBriefcase className="h-6 w-6" />,
    title: "Business Rentals",
    description:
      "Business car rental supports site visits, meetings, staff transport, and day-to-day work travel with dependable vehicle options.",
    features: ["Suitable for professionals and teams", "Straightforward contact process", "Practical fleet options"],
  },
  {
    icon: <HiOutlineGlobeAlt className="h-6 w-6" />,
    title: "Airport and Travel Support",
    description:
      "Travel plans often need flexible transport. We help customers arrange vehicle hire that suits airport pickups, visitor travel, and trip planning.",
    features: ["Helpful for visitor travel", "Flexible contact-based planning", "Vehicle options for different trip types"],
  },
  {
    icon: <HiOutlineRefresh className="h-6 w-6" />,
    title: "Replacement Transport",
    description:
      "When your own vehicle is unavailable, replacement transport can help keep work, family, and daily plans moving with less disruption.",
    features: ["Useful during repairs or servicing", "Short-term or extended enquiries", "Responsive booking support"],
  },
];

const vehicleTypes = [
  {
    type: "Sedans",
    description:
      "Comfortable and efficient for local driving, weekday travel, and business use.",
    image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=600&h=400&fit=crop",
  },
  {
    type: "SUVs",
    description:
      "A practical option for family trips, weekend plans, and customers wanting extra comfort.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
  },
  {
    type: "Utes",
    description:
      "Useful for work needs, site visits, gear transport, and practical carrying capacity.",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&h=400&fit=crop",
  },
  {
    type: "People Movers and Hatchbacks",
    description:
      "Suitable for either extra passenger space or smaller local driving needs, depending on the trip.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
  },
];

const useCases = [
  {
    title: "Family Travel",
    description:
      "Customers planning weekend trips, school holiday travel, or airport pickups often need a vehicle with more space and comfort.",
  },
  {
    title: "Business and Work Use",
    description:
      "Professionals and trades need vehicle hire for meetings, local travel, and practical day-to-day work requirements.",
  },
  {
    title: "Short-Term Local Driving",
    description:
      "Daily and weekly rentals help when you need temporary transport without the complexity of a long booking process.",
  },
  {
    title: "Replacement Vehicle Needs",
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
    question: "Do you offer daily and weekly car rental?",
    answer:
      "Yes. Land Star supports both daily and weekly car hire, making it easier to book transport for short local use, holidays, or temporary travel needs.",
  },
  {
    question: "Can I enquire about long-term vehicle hire?",
    answer:
      "Yes. If you need a rental for an extended period, contact us directly so we can discuss vehicle options and your preferred schedule.",
  },
  {
    question: "What vehicle types are available for rental?",
    answer:
      "Our rental options include sedans, hatchbacks, SUVs, utes, and people movers, depending on the type of trip or transport need you have.",
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
            Car Rental Services for Different Travel Needs
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-base text-brand-100 sm:mt-4 sm:text-lg">
            Explore daily, weekly, and long-term vehicle hire from {BUSINESS.name}
            for local driving, family trips, business transport, travel support,
            and replacement vehicle needs.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Service Overview
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Flexible Vehicle Hire Without Unnecessary Complexity
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                Many customers looking for car rental services are comparing more
                than just price. They also want the right vehicle type, clear
                communication, flexible hire options, and a booking process that
                feels practical from start to finish.
              </p>
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
                <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
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
                Which Rental Service Is Right for You?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                Different customers rent for different reasons. These are some of
                the most common situations where a practical vehicle hire option
                makes a real difference.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <ScrollReveal key={useCase.title} animation="fade-up" delay={index * 100}>
                <article className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">{useCase.description}</p>
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
                <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={vehicleType.image}
                      alt={vehicleType.type}
                      fill
                      className="object-cover"
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
                A Simple Booking Process for Vehicle Hire
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
