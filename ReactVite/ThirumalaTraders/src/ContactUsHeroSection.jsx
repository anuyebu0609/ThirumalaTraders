```jsx
import React from "react";
import {
  Headset,
  ArrowDown,
} from "lucide-react";

const ContactUsHeroSection = () => {
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

      <div className="relative mx-auto w-[95%] max-w-[1400px] py-12 sm:py-16 lg:w-[90%] lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT SIDE - CONTENT */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm">
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

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Our team values every customer relationship and is committed
              to helping you find suitable products for your requirements.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E21B23] px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-red-700"
              >
                CONTACT OUR TEAM
                <ArrowDown size={17} />
              </button>

              <a
                href="tel:+919840568560"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3.5 text-sm font-bold text-gray-800 transition duration-300 hover:border-[#E21B23] hover:text-[#E21B23]"
              >
                <Headset size={17} />
                Call Us
              </a>
            </div>

            {/* Trust message */}
            <div className="mt-8 border-l-4 border-[#E21B23] pl-4">
              <p className="text-lg font-bold text-gray-900">
                Your Industrial Supply Partner
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Quality products. Dependable service. Long-term relationships.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - YOUR TEAM IMAGE */}
          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">

            {/* Red decorative background */}
            <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-[#E21B23] sm:-left-4 sm:-top-4" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-xl">
              <img
                src="https://ik.imagekit.io/opzxy97kk/5140159f-3ea6-4280-a91b-f6d5905a9dba.jpeg?updatedAt=1791988787804"
                alt="Thirumala Traders team assisting with customer requirements"
                className="block h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[480px]"
                loading="lazy"
              />
            </div>

            {/* Image caption */}
            <div className="absolute -bottom-5 right-4 max-w-[85%] rounded-xl bg-white px-5 py-4 shadow-lg sm:right-6">
              <p className="text-base font-bold text-gray-900">
                Meet Our Team
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Here to support your industrial supply needs.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-800 via-red-500 to-red-700" />
    </section>
  );
};

export default ContactUsHeroSection;
```