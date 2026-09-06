import {
  JindalStar,
  Leader,
  Zoloto,
  Sant,
  Kartar,
  AR,
  Guru,
  VS,
} from "./assets/OurBrandsImage/OurBrandsImage";

const OurBrands = () => {

  const brands = [
    {
      image: JindalStar,
      name: "Jindal Star",
    },
    {
      image: Leader,
      name: "Leader",
    },
    {
      image: Zoloto,
      name: "Zoloto",
    },
    {
      image: Sant,
      name: "Sant",
    },
    {
      image: Kartar,
      name: "Kartar",
    },
    {
      image: AR,
      name: "AR",
    },
    {
      image: Guru,
      name: "H. Guru",
    },
    {
      image: VS,
      name: "VS",
    },
  ];


  return (
    <section
      className="
        w-full
        bg-[#F8F9FA]
        py-6
        overflow-hidden
      "
    >

      {/* ================= HEADING ================= */}

      <div
        className="
          w-[95%]
          md:w-[92%]
          mx-auto
        "
      >

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
          OUR BRANDS
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

      </div>


      {/* ================= BRAND SLIDER ================= */}

      <div
        className="
          w-full
          overflow-hidden
          mt-10
        "
      >

        <div className="brand-slider">

          <div className="brand-track">


            {/* ================= FIRST SET ================= */}

            {brands.map((brand, index) => (

              <div
                key={`first-${index}`}
                className="brand-item"
              >

                <div className="brand-card">

                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="brand-image"
                  />

                </div>

              </div>

            ))}


            {/* ================= DUPLICATE SET ================= */}

            {brands.map((brand, index) => (

              <div
                key={`second-${index}`}
                className="brand-item"
                aria-hidden="true"
              >

                <div className="brand-card">

                  <img
                    src={brand.image}
                    alt=""
                    className="brand-image"
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ================= CSS ================= */}

      <style>{`

        /* ================= SLIDER ================= */

        .brand-slider {
          width: 100%;
          overflow: hidden;
          position: relative;
        }


        /* ================= TRACK ================= */

        .brand-track {
          display: flex;
          width: max-content;
          flex-shrink: 0;
          will-change: transform;

          animation-timing-function: linear;
          animation-iteration-count: infinite;

          animation-name: brandMoveSM;
          animation-duration: 26s;
        }


        /* ================= MOBILE ITEM ================= */

        .brand-item {
          width: 100vw;
          min-width: 100vw;
          max-width: 100vw;

          flex: 0 0 100vw;

          padding: 0 10px;
          box-sizing: border-box;
        }


        /* ================= CARD ================= */

        .brand-card {
          width: 100%;
          height: 190px;

          border: 2px solid #d1d5db;
          border-radius: 14px;

          background: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;
          box-sizing: border-box;

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }


        /* ================= IMAGE ================= */

        .brand-image {
          width: 100%;
          height: 100%;

          object-fit: contain;

          padding: 15px;

          display: block;
          box-sizing: border-box;

          transition:
            transform 0.35s ease;
        }


        /* ================= HOVER EFFECT ================= */

        .brand-card:hover {
          transform: scale(1.03);

          border-color: #E21B23;

          box-shadow:
            0 10px 30px
            rgba(0, 0, 0, 0.12);
        }


        .brand-card:hover .brand-image {
          transform: scale(1.04);
        }


        /* ================= MOBILE ANIMATION ================= */

        @keyframes brandMoveSM {

          0% {
            transform:
              translate3d(0, 0, 0);
          }

          100% {
            transform:
              translate3d(-800vw, 0, 0);
          }

        }


        /* ================= SM ================= */

        @media (max-width: 767px) {

          .brand-track {
            animation-name: brandMoveSM;
            animation-duration: 26s;
          }

          .brand-item {
            width: 100vw;
            min-width: 100vw;
            max-width: 100vw;

            flex-basis: 100vw;
          }

          .brand-card {
            height: 190px;
          }

        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {

          .brand-track {
            animation-duration: 28s;
          }

          .brand-card {
            height: 175px;
          }

          .brand-image {
            padding: 12px;
          }

        }


        /* ================= MD ================= */

        @media (
          min-width: 768px
        ) and (
          max-width: 1023px
        ) {

          .brand-track {
            animation-name: brandMoveMD;
            animation-duration: 22s;
          }

          .brand-item {
            width: 25vw;
            min-width: 25vw;
            max-width: 25vw;

            flex: 0 0 25vw;

            padding: 0 8px;
          }

          .brand-card {
            height: 170px;
          }

          .brand-image {
            padding: 12px;
          }

        }


        /* ================= MD ANIMATION ================= */

        @keyframes brandMoveMD {

          0% {
            transform:
              translate3d(0, 0, 0);
          }

          100% {
            transform:
              translate3d(-200vw, 0, 0);
          }

        }


        /* ================= LG ================= */

        @media (
          min-width: 1024px
        ) and (
          max-width: 1279px
        ) {

          .brand-track {
            animation-name: brandMoveLG;
            animation-duration: 20s;
          }

          .brand-item {
            width: 16.666667vw;
            min-width: 16.666667vw;
            max-width: 16.666667vw;

            flex: 0 0 16.666667vw;

            padding: 0 7px;
          }

          .brand-card {
            height: 155px;
          }

          .brand-image {
            padding: 10px;
          }

        }


        /* ================= LG ANIMATION ================= */

        @keyframes brandMoveLG {

          0% {
            transform:
              translate3d(0, 0, 0);
          }

          100% {
            transform:
              translate3d(-133.333336vw, 0, 0);
          }

        }


        /* ================= XL ================= */

        @media (min-width: 1280px) {

          .brand-track {
            animation-name: brandMoveXL;
            animation-duration: 22s;
          }

          .brand-item {
            width: 12.5vw;
            min-width: 12.5vw;
            max-width: 12.5vw;

            flex: 0 0 12.5vw;

            padding: 0 8px;
          }

          .brand-card {
            height: 155px;
          }

          .brand-image {
            padding: 10px;
          }

        }


        /* ================= XL ANIMATION ================= */

        @keyframes brandMoveXL {

          0% {
            transform:
              translate3d(0, 0, 0);
          }

          100% {
            transform:
              translate3d(-100vw, 0, 0);
          }

        }


        /* ================= 2XL ================= */

        @media (min-width: 1536px) {

          .brand-track {
            animation-duration: 24s;
          }

          .brand-card {
            height: 165px;
          }

        }


        /* ================= TOUCH DEVICES ================= */

        @media (hover: none) {

          .brand-card:hover {
            transform: none;
            border-color: #d1d5db;
            box-shadow: none;
          }

          .brand-card:hover .brand-image {
            transform: none;
          }

        }


        /* ================= ACCESSIBILITY ================= */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .brand-track {
            animation: none;
          }

        }

      `}</style>

    </section>
  );
};

export default OurBrands;