import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS } from "@/data/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Land Star Car Rental. Call, email, or send us a message - we're here to help you find the right vehicle.",
  keywords: [
    "contact Land Star",
    "car rental enquiry",
    "book a rental car Perth",
    "car hire contact Cannington",
  ],
  openGraph: {
    title: "Contact Us | Land Star Car Rental",
    description:
      "Get in touch with Land Star Car Rental. Call, email, or send us a message - we're here to help you find the right vehicle.",
  },
  alternates: {
    canonical: "https://starrental.com.au/contact",
  },
};

interface ContactPageProps {
  searchParams: Promise<{
    vehicle?: string | string[];
    price?: string | string[];
  }>;
}

function getSingleValue(value?: string | string[]) {
  return typeof value === "string" ? value : "";
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const selectedVehicle = getSingleValue(params.vehicle);
  const selectedPrice = getSingleValue(params.price);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 px-4 py-12 text-white sm:px-6 sm:py-16 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-100 sm:mt-4 sm:text-lg">
            Have a question or ready to book? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16 md:px-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <ScrollReveal animation="fade-right" className="lg:col-span-3">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mb-8 text-gray-500">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm
                key={`${selectedVehicle}-${selectedPrice}`}
                selectedVehicle={selectedVehicle}
                selectedPrice={selectedPrice}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-4 font-semibold text-gray-900">Business Hours</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-medium text-gray-900">8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-4 font-semibold text-gray-900">Quick Contact</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="text-xs uppercase tracking-wide text-gray-500">Phone</p>
                    <a
                      href={`tel:${BUSINESS.phoneHref}`}
                      className="inline-flex min-h-[44px] items-center font-medium text-brand-700 hover:underline"
                    >
                      {BUSINESS.phone}
                    </a>
                  </li>
                  <li>
                    <p className="text-xs uppercase tracking-wide text-gray-500">Info Email</p>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="inline-flex min-h-[44px] items-center font-medium text-brand-700 hover:underline"
                    >
                      {BUSINESS.email}
                    </a>
                  </li>
                  <li>
                    <p className="text-xs uppercase tracking-wide text-gray-500">Booking Email</p>
                    <a
                      href={`mailto:${BUSINESS.bookingEmail}`}
                      className="inline-flex min-h-[44px] items-center font-medium text-brand-700 hover:underline"
                    >
                      {BUSINESS.bookingEmail}
                    </a>
                  </li>
                  <li>
                    <p className="text-xs uppercase tracking-wide text-gray-500">Location</p>
                    <a
                      href={BUSINESS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center font-medium text-brand-700 hover:underline"
                    >
                      {BUSINESS.location}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-brand-700 p-6 text-center text-white">
                <p className="text-lg font-semibold">Need a car urgently?</p>
                <p className="mt-2 text-sm text-brand-100">
                  Call us directly for same-day availability.
                </p>
                <a
                  href={`tel:${BUSINESS.phoneHref}`}
                  className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                >
                  Call Now
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
