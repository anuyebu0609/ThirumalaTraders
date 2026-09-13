import React from "react";

// Delivery Images
import { DeliveryImage1 } from "./assets/DeliveryImage/DeliveryImage";
import { DeliveryImage2 } from "./assets/DeliveryImage/DeliveryImage";
import { DeliveryImage3 } from "./assets/DeliveryImage/DeliveryImage";
import { DeliveryImage4 } from "./assets/DeliveryImage/DeliveryImage";

const OurDelivery = () => {
  const deliveryItems = [
    {
      image: DeliveryImage1,
      title: "Safe & Secure Packaging",
      description:
        "We ensure all products are packed with utmost care to reach you in perfect condition.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 17h4V5H2v12h3" />
          <path d="M14 8h4l4 4v5h-8V8Z" />
          <circle cx="7.5" cy="17.5" r="2.5" />
          <circle cx="16.5" cy="17.5" r="2.5" />
        </svg>
      ),
    },

    {
      image: DeliveryImage2,
      title: "Bulk Supply Ready",
      description:
        "We handle large orders with efficient storage and quick dispatch systems.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },

    {
      image: DeliveryImage3,
      title: "On-Time Delivery",
      description:
        "Our logistics team ensures prompt delivery to your business or project site.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },

    {
      image: DeliveryImage4,
      title: "Wide Distribution Range",
      description:
        "From pipes to fittings and industrial products, we deliver across Chennai and nearby areas.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
          <path d="M9 7h6" />
          <path d="M9 11h6" />
          <path d="M9 15h6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="w-[92%] md:w-[90%] max-w-[1400px] mx-auto">

        {/* ================= SECTION HEADING ================= */}
        <div className="text-center mb-8 md:mb-10">

          {/* Small Heading */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 md:w-12 h-[2px] bg-[#E21B23]"></span>

            <span className="text-[#E21B23] text-[12px] md:text-[14px] font-bold uppercase tracking-wide">
              Our Delivery Network
            </span>

            <span className="w-10 md:w-12 h-[2px] bg-[#E21B23]"></span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[#18324A] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-tight">
            Delivering Across{" "}
            <span className="text-[#E21B23]">
              Chennai & Beyond
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-[850px] mx-auto mt-3 text-[#4B6075] text-[14px] md:text-[16px] leading-7">
            We ensure safe, timely and reliable delivery of your orders.
            Our strong logistics network and dedicated team help us reach you,
            no matter where you are.
          </p>
        </div>

        {/* ================= DELIVERY CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

          {deliveryItems.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white
                border
                border-[#E4E8EC]
                rounded-xl
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* ================= IMAGE ================= */}
              <div
                className="
                  relative
                  w-full
                  aspect-[16/9]
                  overflow-hidden
                  rounded-t-xl
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    block
                    w-full
                    h-full
                    object-cover
                    object-center
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/10
                    transition-all
                    duration-300
                  "
                ></div>
              </div>

              {/* ================= ICON ================= */}
              <div className="relative flex justify-center h-0 z-30">
                <div
                  className="
                    absolute
                    -top-[29px]
                    w-[58px]
                    h-[58px]
                    rounded-full
                    bg-white
                    border-[2px]
                    border-[#E21B23]
                    flex
                    items-center
                    justify-center
                    text-[#E21B23]
                    shadow-md
                  "
                >
                  {item.icon}
                </div>
              </div>

              {/* ================= CARD CONTENT ================= */}
              <div
                className="
                  text-center
                  px-4
                  sm:px-5
                  pt-[42px]
                  pb-6
                  min-h-[150px]
                "
              >
                {/* Title */}
                <h3
                  className="
                    text-[#18324A]
                    text-[16px]
                    sm:text-[17px]
                    md:text-[18px]
                    font-bold
                    mb-3
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-[#52677A]
                    text-[12px]
                    sm:text-[13px]
                    md:text-[14px]
                    leading-6
                  "
                >
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurDelivery;