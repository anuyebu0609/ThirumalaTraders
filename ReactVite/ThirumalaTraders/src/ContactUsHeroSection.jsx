

import React from "react";
import {
  Headset,
  MessageCircle,
  ShieldCheck,
  Clock,
  ArrowDown,
} from "lucide-react";

const ContactUsHeroSection = () => {
  const contactFeatures = [
    {
      icon: <MessageCircle size={21} />,
      title: "Product Enquiries",
      description: "Get help choosing the right products.",
    },
    {
      icon: <ShieldCheck size={21} />,
      title: "Trusted Assistance",
      description: "Reliable support from our team.",
    },
    {
      icon: <Clock size={21} />,
      title: "Quick Response",
      description: "We're here to answer your questions.",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact-information")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-white to-red-50">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[45px] border-red-50" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-red-100/40 blur-3xl" />

      <div className="relative mx-auto w-[92%] max-w-[1400px] py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left: Main content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm">
              <Headset size={18} />
              We're Here to Help
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600 sm:text-base">
              Get in Touch
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Let's Talk About
              <span className="block text-red-600">
                Your Requirements.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Looking for quality pipes, fittings, valves, fire-fighting
              equipment, or industrial supplies? The Thirumala Traders
              team is ready to help you with product enquiries, quotations,
              bulk orders, and dealer enquiries.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                CONTACT OUR TEAM
                <ArrowDown size={17} />
              </button>

              <a
                href="tel:+919840568560"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3.5 text-sm font-bold text-gray-800 transition hover:border-red-600 hover:text-red-600"
              >
                <Headset size={17} />
                Call Us
              </a>
            </div>
          </div>

          {/* Right: Content card, no images */}
          <div className="relative">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-red-900/5 sm:p-8">
              <div className="mb-6 flex items-center gap-4 border-b border-gray-100 pb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white">
                  <Headset size={28} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    How Can We Help?
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Your industrial supply partner
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {contactFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-xl bg-gray-900 p-5 text-white">
                <p className="text-sm font-semibold text-gray-300">
                  Have a specific requirement?
                </p>
                <p className="mt-2 text-lg font-bold">
                  Tell us what you need.
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Send us your enquiry and our team can assist you with
                  the next steps.
                </p>
              </div>
            </div>

            {/* Small decorative accent */}
            <div className="absolute -right-2 -top-2 -z-10 h-24 w-24 rounded-tr-2xl border-r-4 border-t-4 border-red-600" />
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-800 via-red-500 to-red-700" />
    </section>
  );
};

export default ContactUsHeroSection;
