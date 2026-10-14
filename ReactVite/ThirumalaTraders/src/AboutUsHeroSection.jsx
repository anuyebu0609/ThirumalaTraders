
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-[95%] max-w-[1200px] grid-cols-1 items-center gap-10 md:w-[90%] md:grid-cols-2 md:gap-12 lg:gap-14">

        {/* Left Side - Image */}
        <div className="relative mx-auto w-full max-w-[560px] md:order-1">
          {/* Red Decorative Shape */}
          <div className="absolute -left-3 -top-3 h-full w-full rounded-xl bg-[#E21B23] sm:-left-4 sm:-top-4" />

          {/* Office Image */}
          <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-lg">
            <img
              src="https://ik.imagekit.io/opzxy97kk/Thirumala%20Traders%20Office%20Workspace.png"
              alt="Thirumala Traders office and team representative"
              className="block h-[320px] w-full object-cover object-center sm:h-[400px] lg:h-[450px]"
              fetchPriority="high"
            />
          </div>

          {/* Bottom Label */}
          <div className="absolute -bottom-4 right-4 rounded-lg bg-white px-5 py-3 shadow-lg sm:right-6">
            <p className="text-sm font-bold text-[#163653]">
              Thirumala Traders
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Quality • Trust • Reliability
            </p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center md:order-2">
          <p className="mb-4 text-sm font-bold uppercase tracking-[2px] text-[#E21B23]">
            Trusted Industrial Products Supplier
          </p>

          <h1 className="text-3xl font-bold leading-tight text-[#163653] sm:text-4xl lg:text-[46px]">
            Leading The Way In Quality{" "}
            <span className="text-[#E21B23]">
              And Innovation
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-700">
            Thirumala Traders is a trusted distributor of MS, CS, SS
            pipes, pipe fittings, and industrial valves. We are committed
            to providing quality products, competitive pricing, and
            dependable customer service to meet the needs of diverse
            industries.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-700">
            We value long-term business relationships and work to
            understand every client's requirements, delivering reliable
            product support from enquiry to supply.
          </p>

          {/* Clients */}
          <div className="mt-6 border-l-4 border-[#E21B23] pl-4">
            <h2 className="text-lg font-bold text-[#163653]">
              Our Valued Clients
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-700 sm:text-base">
              Indian Oil, L&T, and Tako Mega Construction, among
              others.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/ContactUs"
              className="inline-flex items-center justify-center rounded-md bg-[#E21B23] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#bd151c]"
            >
              Contact Us
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="/Certificates"
              className="inline-flex items-center justify-center rounded-md border border-[#163653] px-6 py-3 text-sm font-semibold text-[#163653] transition duration-300 hover:bg-[#163653] hover:text-white"
            >
              View Certificates
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
