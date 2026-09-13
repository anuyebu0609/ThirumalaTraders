import React from "react";

// Product Videos
import { ProductVideo1 } from "./assets/ProductVideosSample/ProductVideosSample";
import { ProductVideo2 } from "./assets/ProductVideosSample/ProductVideosSample";
import { ProductVideo3 } from "./assets/ProductVideosSample/ProductVideosSample";
import { ProductVideo4 } from "./assets/ProductVideosSample/ProductVideosSample";

const ProductVideos = () => {
  const products = [
    {
      video: ProductVideo1,
      title: "Metal Valve",
      description:
        "High-quality metal valves designed for reliable flow control in industrial piping and plumbing applications.",
    },

    {
      video: ProductVideo2,
      title: "Butt Weld Elbow",
      description:
        "Durable butt weld elbows providing strong and secure pipe connections for industrial piping systems.",
    },

    {
      video: ProductVideo3,
      title: "Fire Sprinklers",
      description:
        "Reliable fire sprinkler products designed to support effective fire protection and safety systems.",
    },

    {
      video: ProductVideo4,
      title: "Flanged Ball Valve",
      description:
        "Strong and dependable flanged ball valves designed for efficient shut-off and flow control applications.",
    },
  ];

  return (
    <section className="w-full bg-[#F8F9FA] py-12 md:py-16 lg:py-20">
      <div className="w-[92%] md:w-[90%] max-w-[1400px] mx-auto">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">

          {/* Small Heading */}
          <div className="flex items-center justify-center gap-3 mb-3">

            <span className="w-10 md:w-12 h-[2px] bg-[#E21B23]"></span>

            <span
              className="
                text-[#E21B23]
                text-[11px]
                sm:text-[12px]
                md:text-[14px]
                font-bold
                uppercase
                tracking-wide
              "
            >
              Our Product Showcase
            </span>

            <span className="w-10 md:w-12 h-[2px] bg-[#E21B23]"></span>

          </div>

          {/* Main Heading */}
          <h2
            className="
              text-[#18324A]
              text-[27px]
              sm:text-[32px]
              md:text-[38px]
              lg:text-[42px]
              font-bold
              leading-tight
            "
          >
            A Closer Look at{" "}
            <span className="text-[#E21B23]">
              Our Products
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              max-w-[850px]
              mx-auto
              mt-3
              text-[#4B6075]
              text-[13px]
              sm:text-[14px]
              md:text-[16px]
              leading-6
              md:leading-7
            "
          >
            Explore some of our industrial products through real
            product videos. We provide quality pipes, fittings,
            valves and fire protection products for a wide range
            of industrial applications.
          </p>

        </div>

        {/* =====================================================
            PRODUCT VIDEO GRID
        ====================================================== */}
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

          {products.map((product, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border
                border-[#E1E6EA]
                rounded-xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* =================================================
                  VIDEO
              ================================================== */}
              <div
                className="
                  relative
                  w-full
                  aspect-[16/10]
                  bg-[#101820]
                  overflow-hidden
                "
              >

                <video
                  src={product.video}
                  className="
                    block
                    w-full
                    h-full
                    object-cover
                    object-center
                    group-hover:scale-[1.03]
                    transition-transform
                    duration-500
                  "
                  controls
                  playsInline
                  preload="metadata"
                />

                {/* Product Number */}
                <div
                  className="
                    absolute
                    top-3
                    left-3
                    w-[34px]
                    h-[34px]
                    rounded-full
                    bg-[#E21B23]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-[12px]
                    font-bold
                    shadow-md
                    pointer-events-none
                  "
                >
                  0{index + 1}
                </div>

              </div>

              {/* =================================================
                  PRODUCT CONTENT
              ================================================== */}
              <div
                className="
                  px-4
                  sm:px-5
                  py-5
                  md:py-6
                  text-center
                "
              >

                {/* Product Title */}
                <h3
                  className="
                    text-[#18324A]
                    text-[16px]
                    sm:text-[17px]
                    md:text-[18px]
                    font-bold
                    mb-2
                  "
                >
                  {product.title}
                </h3>

                {/* Red Line */}
                <div
                  className="
                    w-10
                    h-[2px]
                    bg-[#E21B23]
                    mx-auto
                    mb-3
                    transition-all
                    duration-300
                    group-hover:w-16
                  "
                ></div>

                {/* Product Description */}
                <p
                  className="
                    text-[#52677A]
                    text-[12px]
                    sm:text-[13px]
                    md:text-[14px]
                    leading-6
                  "
                >
                  {product.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductVideos;