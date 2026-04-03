import type { Metadata } from "next";
import { BUSINESS } from "@/data/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Review the rental terms and conditions for Star Rentals Club, including renter responsibilities, coverage options, return rules, and business hours.",
  openGraph: {
    title: "Terms and Conditions | Land Star Car Rental",
    description:
      "Review the rental terms and conditions for Star Rentals Club, including renter responsibilities, coverage options, return rules, and business hours.",
  },
  alternates: {
    canonical: "https://landstar.com.au/terms-and-conditions",
  },
};

const businessName = "Star Rentals Club";

const responsibilities = [
  "The vehicle must be returned to the Star Rentals Club yard at 92 Mallard Way Cannington 6107 WA at the agreed time.",
  "Driving under the influence of alcohol or drugs is prohibited.",
  "The renter and any additional drivers must hold valid driver licenses.",
  "The renter is responsible for any breach of these terms by an additional driver.",
  "Only authorized drivers listed on the rental may operate the vehicle.",
  "The vehicle must be driven on sealed or paved roads only.",
  "Do not drive through floodwater, creeks, rivers, or other water hazards.",
  "Do not carry surfboards or other items on the roof of the vehicle.",
  "A $950 fee applies if the key is not returned with the vehicle.",
  "Return the vehicle with a full tank of unleaded petrol. Any shortage is charged at $3.00 per litre.",
  "Return the vehicle in a clean condition or a $75 cleaning fee applies.",
  "Smoking, vaping, or carrying pets in the vehicle incurs a $200 cleaning fee.",
  "A $25 administration fee applies to each traffic infringement in addition to the fine.",
  "The vehicle must not be used for security patrols, courier services, or similar commercial duty unless approved in writing.",
  "Standard operating distance is within 500 km of Perth, including Geraldton, Paynes Find, Southern Cross, Jerramungup, and Albany.",
  "An additional $150 fee applies to approved extended travel areas including Exmouth, Carnarvon, Monkey Mia, Kalbarri, Meekatharra, Kalgoorlie, Norseman, and Esperance.",
];

const standardCover = [
  "Cost: $0.00 per day",
  "Single vehicle excess: $4000 regardless of fault",
  "Maximum accidental damage liability: $4000",
];

const peaceOfMindCover = [
  "Cost: $17.00 per day",
  "Single vehicle excess: $500 regardless of fault",
  "Maximum single vehicle damage liability: $500 when all rental terms are followed",
];

const singleVehicleExamples = [
  "Scratches to paintwork",
  "Minor dents or dings on body panels",
  "Scuff marks on alloy wheels",
  "Cracked or chipped side mirrors",
  "Cracked or chipped headlights or taillights",
  "Bent or cracked number plates",
  "Low-speed bumper damage",
  "Broken or missing wiper blades",
  "Damage to plastic trim or mouldings",
  "Windshield cracks or chips without collision",
  "Door edge dents from walls or poles",
  "Reversing damage from low objects such as bollards or fences",
  "Underbody scrapes from driveways or uneven roads",
  "Minor bumper or side skirt scuffs from tight parking",
  "Punctured or flat tyres caused by curb or pothole impact",
  "Sensor misalignment or related minor impact damage",
];

const singleVehicleExcessDetails = [
  "Collisions with stationary objects such as poles, barriers, and trees",
  "Damage caused by scraping curbs or reversing into walls",
  "Damage caused by off-road driving, potholes, suspension impact, or underbody strikes",
  "Any incident where no third-party vehicle is involved",
];

const excludedDamages = [
  "Intentional, reckless, or impaired driving damage, including driving under the influence of drugs or alcohol",
  "Unauthorized use, including travel outside the approved geographical area or use by an unauthorized driver",
  "Interior damage such as stains, burns, rips, or other preventable damage",
  "Mechanical damage caused by ignoring dashboard warnings or continuing to drive after a fault appears",
  "Towing the vehicle without prior authorization from Star Rentals Club",
  "Leaving the vehicle unlocked or leaving the keys inside the vehicle",
  "Underbody or water damage regardless of cause",
  "Theft or loss caused by failing to secure the vehicle or return the keys",
  "Any damage incurred while breaching this rental agreement",
];

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <h2 className="text-2xl font-semibold text-slate-900">
      <span className="mr-3 text-slate-500">{number}.</span>
      {title}
    </h2>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <section className="bg-slate-100 px-6 py-12 md:px-12 md:py-16">
      <article className="mx-auto max-w-4xl border border-slate-300 bg-white shadow-sm">
        <header className="border-b border-slate-200 px-6 py-10 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            {businessName}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700">
            These terms and conditions are supplementary to, and do not
            override, any rights or obligations under the Competition and
            Consumer Act or similar State laws. References to &quot;the
            vehicle&quot; mean the rental vehicle covered by this agreement.
          </p>
        </header>

        <div className="px-6 py-10 md:px-12">
          <section className="border-b border-slate-200 pb-10">
            <SectionTitle number="1" title="Responsibilities of the Renter" />
            <ol className="mt-6 list-decimal space-y-3 pl-6 text-base leading-8 text-slate-700 marker:font-semibold marker:text-slate-500">
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="border-b border-slate-200 py-10">
            <SectionTitle
              number="2"
              title="Insurance Options and Damage Liability"
            />
            <p className="mt-6 text-base leading-8 text-slate-700">
              {businessName} offers two levels of coverage so you can choose
              the level of protection that suits your rental.
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Standard Cover
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-slate-500">
                  Collision Damage Responsibility
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
                  {standardCover.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Peace of Mind Cover
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-slate-500">
                  Reduced Liability Protection
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
                  {peaceOfMindCover.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Single Vehicle Damage Examples
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
                {singleVehicleExamples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-8 text-slate-700">
                Important: The $500 cap applies only when the incident is
                accidental and all rental terms have been followed. Negligence,
                reckless driving, or a breach of this agreement removes that
                cap and full repair costs may apply.
              </p>
            </div>
          </section>

          <section className="border-b border-slate-200 py-10">
            <SectionTitle number="3" title="What Single Vehicle Excess Means" />
            <p className="mt-6 text-base leading-8 text-slate-700">
              Single vehicle excess is the maximum amount payable if the rental
              vehicle is damaged in an incident where no other vehicle is
              involved. This includes:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
              {singleVehicleExcessDetails.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-8 text-slate-700">
              Under Standard Cover, the single vehicle excess is $4000. Under
              Peace of Mind Cover, it is reduced to $500, but it is never
              waived to zero.
            </p>
          </section>

          <section className="border-b border-slate-200 py-10">
            <SectionTitle
              number="4"
              title="Excluded Damage and Non-Waivable Events"
            />
            <ul className="mt-6 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
              {excludedDamages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="border-b border-slate-200 py-10">
            <SectionTitle
              number="5"
              title="Pre-Rental and Post-Rental Inspections"
            />
            <p className="mt-6 text-base leading-8 text-slate-700">
              All vehicles are inspected before and after each rental. Renters
              are encouraged to review the vehicle condition with a{" "}
              {businessName} representative at pick-up and note any existing
              damage to avoid disputes on return.
            </p>
          </section>

          <section className="border-b border-slate-200 py-10">
            <SectionTitle number="6" title="Business Hours" />
            <p className="mt-6 text-base leading-8 text-slate-700">
              Monday to Saturday: 8:00 AM to 5:00 PM
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Vehicle handover and returns are arranged during current
              operating hours unless otherwise confirmed by {businessName} in
              writing.
            </p>
          </section>

          <section className="border-b border-slate-200 py-10">
            <SectionTitle number="7" title="Vehicle Tracking and Recovery" />
            <p className="mt-6 text-base leading-8 text-slate-700">
              {businessName} vehicles may be fitted with tracking devices for
              security and recovery purposes. If a vehicle is overdue, not
              returned, or believed to be stolen, {businessName} may track,
              disable, and recover the vehicle and may share relevant personal
              details with authorities in the event of theft or a serious
              breach of this agreement.
            </p>
          </section>

          <section className="pt-10">
            <SectionTitle number="8" title="Contact Details" />
            <dl className="mt-6 grid gap-4 text-base leading-8 text-slate-700 md:grid-cols-2">
              <div>
                <dt className="font-semibold text-slate-900">Phone</dt>
                <dd>{BUSINESS.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Info Email</dt>
                <dd>{BUSINESS.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Bookings Email</dt>
                <dd>{BUSINESS.bookingEmail}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Address</dt>
                <dd>{BUSINESS.location}</dd>
              </div>
            </dl>
          </section>
        </div>
      </article>
    </section>
  );
}
