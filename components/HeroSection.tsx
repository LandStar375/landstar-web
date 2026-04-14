import Image from "next/image";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[400px] text-white sm:min-h-[500px] md:min-h-[600px]">
      <Image
        src="/images/hero-bg.jpg"
        alt="Affordable car rental Perth – Star Rental vehicle on the road"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 md:to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[400px] w-full max-w-6xl items-center px-4 sm:min-h-[500px] sm:px-6 md:min-h-[600px] md:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300 sm:text-sm">
            Perth Car Hire
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:mt-3 sm:text-4xl md:text-5xl lg:text-6xl">
            Affordable Car Hire in Perth
          </h1>
          <p className="mt-3 max-w-xl text-base text-gray-200 sm:mt-4 sm:text-lg md:text-xl">
            Daily, weekly, and long-term rental cars all over Perth.
            Choose from sedans, SUVs, utes, and family vehicles with simple local
            booking.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
            <a
              href="/cars"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              View Cars
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
