
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    customers: 0,
    products: 0,
    brands: 0,
  });

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // ================= COUNT ANIMATION =================
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            // Smooth ease-out animation
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              experience: Math.floor(10 * easeOut),
              customers: Math.floor(5000 * easeOut),
              products: Math.floor(1000 * easeOut),
              brands: Math.floor(20 * easeOut),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                experience: 10,
                customers: 5000,
                products: 1000,
                brands: 20,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F8F9FA] py-6 "
    >
      <div
        className="
          w-[92%]
          sm:w-[90%]
          lg:w-[88%]
          xl:w-[85%]
          max-w-[1400px]
          mx-auto
        "
      >
        {/* ================= CARDS GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            md:gap-6
          "
        >
          {/* =====================================================
              YEARS OF EXPERIENCE
          ====================================================== */}
          <div
            className="
              w-full
              min-h-[220px]
              sm:min-h-[230px]
              flex
              flex-col
              justify-center
              items-center
              p-6
              bg-white
              border
              border-gray-200
              rounded-xl
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            {/* ICON */}
            <div
              className="
                w-[76px]
                h-[76px]
                flex
                items-center
                justify-center
                bg-[#FFF1F1]
                rounded-full
                mb-4
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E21B23"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
                <path d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402" />
                <path d="m20 9-3 9" />
                <path d="m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34" />
                <path d="M7 18 4 9" />
                <circle cx="12" cy="4" r="2" />
                <circle cx="20" cy="7" r="2" />
                <circle cx="4" cy="7" r="2" />
              </svg>
            </div>

            {/* CONTENT */}
            <h4 className="text-[28px] sm:text-[30px] font-bold text-black leading-none">
              {counts.experience}+
            </h4>

            <p className="text-[14px] sm:text-[15px] text-[#1F2937] text-center mt-3 font-medium">
              Years of Experience
            </p>
          </div>

          {/* =====================================================
              HAPPY CUSTOMERS
          ====================================================== */}
          <div
            className="
              w-full
              min-h-[220px]
              sm:min-h-[230px]
              flex
              flex-col
              justify-center
              items-center
              p-6
              bg-white
              border
              border-gray-200
              rounded-xl
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            {/* ICON */}
            <div
              className="
                w-[76px]
                h-[76px]
                flex
                items-center
                justify-center
                bg-[#FFF1F1]
                rounded-full
                mb-4
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E21B23"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 21a8 8 0 0 0-16 0" />
                <circle cx="10" cy="8" r="5" />
                <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
              </svg>
            </div>

            {/* CONTENT */}
            <h4 className="text-[28px] sm:text-[30px] font-bold text-black leading-none">
              {counts.customers}+
            </h4>

            <p className="text-[14px] sm:text-[15px] text-[#1F2937] text-center mt-3 font-medium">
              Happy Customers
            </p>
          </div>

          {/* =====================================================
              PRODUCTS
          ====================================================== */}
          <div
            className="
              w-full
              min-h-[220px]
              sm:min-h-[230px]
              flex
              flex-col
              justify-center
              items-center
              p-6
              bg-white
              border
              border-gray-200
              rounded-xl
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            {/* ICON */}
            <div
              className="
                w-[76px]
                h-[76px]
                flex
                items-center
                justify-center
                bg-[#FFF1F1]
                rounded-full
                mb-4
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E21B23"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                <path d="m7 16.5-4.74-2.85" />
                <path d="m7 16.5 5-3" />
                <path d="M7 16.5v5.17" />
                <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                <path d="m17 16.5-5-3" />
                <path d="m17 16.5 4.74-2.85" />
                <path d="M17 16.5v5.17" />
                <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                <path d="M12 8 7.26 5.15" />
                <path d="m12 8 4.74-2.85" />
                <path d="M12 13.5V8" />
              </svg>
            </div>

            {/* CONTENT */}
            <h4 className="text-[28px] sm:text-[30px] font-bold text-black leading-none">
              {counts.products}+
            </h4>

            <p className="text-[14px] sm:text-[15px] text-[#1F2937] text-center mt-3 font-medium">
              Products
            </p>
          </div>

          {/* =====================================================
              BRANDS
          ====================================================== */}
          <div
            className="
              w-full
              min-h-[220px]
              sm:min-h-[230px]
              flex
              flex-col
              justify-center
              items-center
              p-6
              bg-white
              border
              border-gray-200
              rounded-xl
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            {/* ICON */}
            <div
              className="
                w-[76px]
                h-[76px]
                flex
                items-center
                justify-center
                bg-[#FFF1F1]
                rounded-full
                mb-4
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E21B23"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                <path d="M11 12 5.12 2.2" />
                <path d="m13 12 5.88-9.8" />
                <path d="M8 7h8" />
                <circle cx="12" cy="17" r="5" />
                <path d="M12 18v-2h-.5" />
              </svg>
            </div>

            {/* CONTENT */}
            <h4 className="text-[28px] sm:text-[30px] font-bold text-black leading-none">
              {counts.brands}+
            </h4>

            <p className="text-[14px] sm:text-[15px] text-[#1F2937] text-center mt-3 font-medium">
              Brands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

