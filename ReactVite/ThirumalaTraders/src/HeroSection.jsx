import { useState, useEffect } from "react";

import {
  HeroImage1,
  HeroImage2,
  HeroImage3,
  HeroImage4,
} from "../src/assets/HeroSectionImage/HeroSectionImage";

const HeroSection = () => {
  const images = [
    HeroImage1,
    HeroImage2,
    HeroImage3,
    HeroImage4,
  ];
  const [currentImage, setCurrentImage] = useState(0);
  /* ===========================
     AUTO SLIDE
  =========================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  /* ===========================
     NEXT SLIDE
  =========================== */
  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };
  /* ===========================
     PREVIOUS SLIDE
  =========================== */
  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* ===========================
          HERO IMAGE CONTAINER
          EXACT RATIO: 1774 / 887
      =========================== */}
      <div className="relative w-full aspect-[1774/887] overflow-hidden">

        {/* ===========================
            SLIDER
        =========================== */}
        <div
          className="
            flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index} className="min-w-full w-full h-full flex items-center justify-center overflow-hidden"
            >
              <img
                src={image} alt={`TMT Industrial Products Banner ${index + 1}`} draggable="false"
                className="block w-full h-full object-contain object-center select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
        {/* ===========================
            PREVIOUS BUTTON
        =========================== */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-1 sm:left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20
flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
rounded-full bg-white/90 text-[#DC2626]
shadow-md text-sm sm:text-lg md:text-xl transition-all duration-300 hover:bg-[#DC2626] hover:text-white hover:scale-110"
        >
          ❮
        </button>
        {/* ===========================
            NEXT BUTTON
        =========================== */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="
            absolute
            right-1
            sm:right-2
            md:right-4
            lg:right-6
            top-1/2
            -translate-y-1/2
            z-20
            flex
            items-center
            justify-center
            w-8
            h-8
            sm:w-10
            sm:h-10
            md:w-12
            md:h-12
            rounded-full
            bg-white/90
            text-[#DC2626]
            shadow-md
            text-sm
            sm:text-lg
            md:text-xl
            transition-all
            duration-300
            hover:bg-[#DC2626]
            hover:text-white
            hover:scale-110
          "
        >
          ❯
        </button>
        {/* ===========================
            SLIDER DOTS
        =========================== */}
        <div
          className="
            absolute
            bottom-2
            sm:bottom-3
            md:bottom-5
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-1.5
            sm:gap-2
            md:gap-3
            z-20
          "
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                rounded-full
                transition-all
                duration-300

                ${
                  currentImage === index
                    ? `
                      w-5 h-1.5
                      sm:w-7 sm:h-2
                      md:w-9
                      bg-[#E21B23]
                    `
                    : `
                      w-1.5 h-1.5
                      sm:w-2 sm:h-2
                      bg-white/90
                    `
                }
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;