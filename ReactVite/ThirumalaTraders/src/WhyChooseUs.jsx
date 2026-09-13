const WhyChooseUs = () => {
  const items = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shield-check"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "High Quality Products",
      text: "We source only the best",
      text2: "from trusted manufacturers.",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-truck"
        >
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      ),
      title: "On-Time Delivery",
      text: "We ensure your orders",
      text2: "reach you as promised.",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-dollar-sign"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      ),
      title: "Competitive Pricing",
      text: "Get the best value",
      text2: "for your investment.",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-handshake"
        >
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="m21 3 1 11h-2" />
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </svg>
      ),
      title: "Expert Support",
      text: "Our team is always here to help",
      text2: "you find the solution.",
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart-plus"
        >
          <path d="M16 5h6" />
          <path d="M19 2v6" />
          <path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18" />
          <path d="M4.564 5H12" />
          <path d="M6.25 14h12.712a2 2 0 0 0 1.991-1.57l.172-1.041" />
          <circle cx="18" cy="20" r="2" />
          <circle cx="8" cy="20" r="2" />
        </svg>
      ),
      title: "Wide Product Range",
      text: "From pipes & fittings to valves,",
      text2: "safetty items and more.",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[#F8F9FA]
        py-7
        md:py-8
        overflow-hidden
      "
    >
      {/* ================= HEADING ================= */}

      <h2
        className="
          text-[26px]
          md:text-[30px]
          lg:text-[32px]
          font-bold
          text-center
          text-black
        "
      >
        WHY CHOOSE US
      </h2>

      {/* RED LINE */}

      <div
        className="
          w-14
          h-1
          bg-[#E21B23]
          rounded-full
          mx-auto
          mt-3
        "
      ></div>

      {/* ================= FEATURES ================= */}

      <div
        className="
          w-[94%]
          max-w-[1400px]
          mx-auto
          mt-5
          grid
          grid-cols-2
          md:grid-cols-5
        "
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              why-item
              flex flex-col
              items-center
              justify-center
              gap-2
              sm:gap-3
              px-2
              sm:px-3
              md:px-4
              py-3
              md:py-4

              ${
                index !== 4
                  ? "md:border-r md:border-black"
                  : ""
              }
            `}
          >
            {/* ================= ICON ================= */}

            <div
              className="
                why-icon
                shrink-0
                w-[52px]
                h-[52px]
                sm:w-[58px]
                sm:h-[58px]
                md:w-[62px]
                md:h-[62px]
                rounded-full
                bg-[#E21B23]
                flex
                items-center
                justify-center
                shadow-md
              "
            >
              {item.icon}
            </div>

            {/* ================= TEXT ================= */}

            <div className="min-w-0 w-full text-center">
              <h3
                className="
                  text-[14px]
                  sm:text-[16px]
                  md:text-[18px]
                  lg:text-[20px]
                  font-semibold
                  text-black
                  leading-tight
                  text-center
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-[12px]
                  sm:text-[13px]
                  md:text-[14px]
                  lg:text-[16px]
                  text-black
                  mt-1
                  leading-snug
                  font-[400]
                  text-center
                "
              >
                {item.text}
              </p>

              <p
                className="
                  text-[12px]
                  sm:text-[13px]
                  md:text-[14px]
                  lg:text-[16px]
                  text-black
                  mt-1
                  leading-snug
                  font-[400]
                  text-center
                "
              >
                {item.text2}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= FLOATING ANIMATION ================= */}

      <style>{`
        .why-icon {
          animation: floatIcon 3s ease-in-out infinite;

          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        @keyframes floatIcon {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .why-item:hover .why-icon {
          transform:
            translateY(-8px)
            scale(1.06);

          box-shadow:
            0 10px 20px
            rgba(0,0,0,.2);
        }

        /* ================= MOBILE BORDERS ================= */

        @media (max-width: 639px) {

          /* Vertical divider between the 2 columns */
          .why-item:nth-child(odd) {
            border-right:
              1px solid
              rgba(0,0,0,.3);
          }

          /* Horizontal divider after first row */
          .why-item:nth-child(1),
          .why-item:nth-child(2) {
            border-bottom:
              1px solid
              rgba(0,0,0,.3);
          }

          /* Horizontal divider after second row */
          .why-item:nth-child(3),
          .why-item:nth-child(4) {
            border-bottom:
              1px solid
              rgba(0,0,0,.3);
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 400px) {

          .why-item {
            gap: 4px;
            padding-left: 2px;
            padding-right: 2px;
          }

          .why-icon {
            width: 48px;
            height: 48px;
          }

          .why-icon svg {
            width: 24px;
            height: 24px;
          }

          .why-item h3 {
            font-size: 11px;
          }

          .why-item p {
            font-size: 9px;
          }
        }

        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {

          .why-icon {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;