
import React from "react";
import {
  ShieldCheck,
  ClipboardCheck,
  PackageCheck,
  Headset,
} from "lucide-react";

const AboutUsProcess = () => {
  const processSteps = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "Trusted Product Sourcing",
      points: [
        "Source industrial products from trusted manufacturers and suppliers.",
        "Offer a wide range of pipes, fittings, valves, and safety equipment.",
      ],
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "Quality & Inspection",
      points: [
        "Focus on product quality, specifications, and reliable sourcing.",
        "Help customers identify products suitable for their requirements.",
      ],
    },
    {
      number: "03",
      icon: PackageCheck,
      title: "Order Handling & Delivery",
      points: [
        "Handle product enquiries and orders with care.",
        "Coordinate order fulfilment to support smooth and reliable delivery.",
      ],
    },
    {
      number: "04",
      icon: Headset,
      title: "Customer Support",
      points: [
        "Assist with product enquiries, quotations, and bulk orders.",
        "Build lasting business relationships through responsive service.",
      ],
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto w-[90%] max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-14 text-center sm:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E21B23]">
            Our Commitment
          </p>

          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-4xl">
            Our Quality & Service Process
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#E21B23]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From trusted product sourcing to customer support, we focus on
            quality, dependable service, and meeting the industrial supply
            requirements of our customers.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal dotted line on desktop */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[18px] hidden border-t-2 border-dotted border-[#E21B23]/60 lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative"
                >
                  {/* Timeline marker */}
                  <div className="relative z-10 mb-7 flex h-10 items-center lg:h-9">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#E21B23] text-white shadow-sm ring-1 ring-red-100">
                      <span className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="h-full rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg sm:p-6 lg:border-0 lg:p-0 lg:shadow-none lg:hover:translate-y-0 lg:hover:shadow-none">
                    {/* Icon and step number */}
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-[#E21B23]">
                        <Icon size={25} strokeWidth={1.8} />
                      </div>

                      <span className="text-3xl font-extrabold text-gray-100">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-bold leading-7 text-gray-900">
                      {step.title}
                    </h3>

                    <ul className="space-y-3">
                      {step.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm leading-6 text-gray-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E21B23]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-12 rounded-xl border border-red-100 bg-red-50/70 px-6 py-6 text-center sm:mt-14 sm:px-10">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Your Trusted Partner for Industrial Supplies
          </h3>

          <p className="mx-auto mt-2 max-w-3xl text-sm leading-7 text-gray-600">
            Thirumala Traders is committed to helping customers find the
            right products with dependable service and a focus on quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsProcess;
