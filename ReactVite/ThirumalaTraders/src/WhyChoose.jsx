const WhyChoose = () => {
  const items = [
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E21B23"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2 2 1.1-.03a1 1 0 0 1 1 .82L6.8 17.14A1 1 0 0 0 7.8 18H18" />
          <path d="M4.5 5H21l-1 6.2a2 2 0 0 1-2 1.8H6.3" />
          <circle cx="8" cy="20" r="2" />
          <circle cx="18" cy="20" r="2" />
        </svg>
      ),
      title: "Wide Range of Products",
      text: "Everything you need under one roof.",
    },

    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E21B23"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13c0 5-3.5 7.5-7.7 9C8.5 20.5 4 18 4 13V6c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C13.5 4.8 16 6 20 6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "Trusted Quality",
      text: "Sourced from leading manufacturers.",
    },

    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E21B23"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 15H6a4 4 0 0 0-4 4v2" />
          <path d="M22 17.5c0 2.5-1.75 3.75-3.83 4.47a.5.5 0 0 1-.34 0C15.75 21.25 14 20 14 17.5V14a.5.5 0 0 1 .5-.5c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76 0c.87.76 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
      title: "Expert Support",
      text: "Our team is here to help you find the right solution.",
    },

    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E21B23"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 6v5a1 1 0 0 0 1 1h6.1a1 1 0 0 1 .7.3l.9.9a1 1 0 0 1 .3.7V17a1 1 0 0 1-1 1h-3" />
          <path d="M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.2 4.2" />
          <path d="M9 18h5" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="16" cy="18" r="2" />
        </svg>
      ),
      title: "Pan India Delivery",
      text: "Fast and reliable delivery across India.",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[#E21B23]
        py-7
        md:py-8
        overflow-hidden
      "
    >

      {/* ================= HEADING ================= */}

      <h2
        className="
          text-[19px]
          sm:text-[22px]
          md:text-[27px]
          lg:text-[30px]
          font-bold
          text-center
          text-white
          whitespace-nowrap
          px-2
        "
      >
        WHY CHOOSE THIRUMALA TRADERS?
      </h2>


      {/* ================= FEATURES ================= */}

      <div
        className="
          w-[94%]
          max-w-[1400px]
          mx-auto
          mt-5
          grid
          grid-cols-2
          md:grid-cols-4
        "
      >

        {items.map((item, index) => (
          <div
            key={index}
            className={`
              why-item
              flex
              items-center
              gap-2
              sm:gap-3
              px-2
              sm:px-3
              md:px-4
              py-3
              md:py-4

              ${
                index !== 3
                  ? "md:border-r md:border-white/40"
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
                bg-white
                flex
                items-center
                justify-center
                shadow-md
              "
            >
              {item.icon}
            </div>


            {/* ================= TEXT ================= */}

            <div className="min-w-0">

              <h3
                className="
                  text-[12px]
                  sm:text-[14px]
                  md:text-[16px]
                  lg:text-[17px]
                  font-semibold
                  text-white
                  leading-tight
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-[10px]
                  sm:text-[12px]
                  md:text-[13px]
                  lg:text-[14px]
                  text-white/90
                  mt-1
                  leading-snug
                "
              >
                {item.text}
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

        @media (max-width: 639px) {

          .why-item:nth-child(odd) {
            border-right:
              1px solid
              rgba(255,255,255,.3);
          }

          .why-item:nth-child(-n+2) {
            border-bottom:
              1px solid
              rgba(255,255,255,.3);
          }

        }

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

        @media (prefers-reduced-motion: reduce) {

          .why-icon {
            animation: none;
          }

        }

      `}</style>

    </section>
  );
};

export default WhyChoose;