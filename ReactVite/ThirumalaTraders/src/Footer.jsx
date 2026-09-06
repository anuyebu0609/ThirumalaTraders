
import React from "react";
import { Logo } from "./assets/HeaderImage/HeaderImage";
import {
  Email,
  Whatsapp,
} from "../src/assets/FooterImage/FooterImage";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1F2937] py-8">

      {/* ================= MAIN FOOTER ================= */}
      <div className="w-[95%] md:w-[90%] mx-auto">

        {/* ================= FOOTER GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8 md:gap-8">

          {/* ================= LOGO & ABOUT ================= */}
          <div className="flex flex-col items-start min-w-0">

            <img
              src={Logo}
              alt="Vinoth Kumar Health Advisor"
              className="w-[90px] sm:w-[110px] md:w-[120px] mb-3"
            />

            <p className="text-[11px] sm:text-[13px] md:text-[16px] font-medium text-white leading-5 md:leading-6">
              Your trusted partner for pipes, fittings,
              valves and industrial solutions.
            </p>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="flex items-center gap-3 sm:gap-4 mt-4">

              {/* EMAIL */}
              <a
                href="mailto:thirumalatraders2021@yahoo.com"
                aria-label="Send Email"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={Email}
                  alt="Email"
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919840568560"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={Whatsapp}
                  alt="WhatsApp"
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </a>

            </div>
          </div>


          {/* ================= QUICK LINKS ================= */}
          <div className="flex flex-col items-start min-w-0">

            <h3 className="text-[15px] sm:text-[17px] md:text-xl font-bold text-white mb-3 md:mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 md:space-y-3">

              <li>
                <a
                  href="/"
                  className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="/brands"
                  className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300"
                >
                  Brands
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>

            </ul>
          </div>


          {/* ================= PRODUCT CATEGORIES ================= */}
          <div className="flex flex-col items-start min-w-0">

            <h3 className="text-[15px] sm:text-[17px] md:text-xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Product Categories
            </h3>

            <ul className="space-y-2 md:space-y-3">

              <li>
                <a
                  href="/products"
                  className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300 leading-5"
                >
                  Valves
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300 leading-5"
                >
                  Pipes &amp; Fittings
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300 leading-5"
                >
                  Fire Fighting Equipment
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300 leading-5"
                >
                  Safety Items
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300 leading-5"
                >
                  Industrial Accessories
                </a>
              </li>

            </ul>
          </div>


          {/* ================= CONTACT US ================= */}
          <div className="flex flex-col items-start min-w-0">

            <h3 className="text-[15px] sm:text-[17px] md:text-xl font-bold text-white mb-3 md:mb-4">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4 w-full">

              {/* ================= ADDRESS ================= */}
              <div className="flex items-start gap-2 sm:gap-3 w-full">

                {/* Location Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-[2px]"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

                <p className="text-[11px] sm:text-[13px] md:text-[15px] font-medium text-white leading-5 md:leading-6">
                  Old No.24, New No.51,
                  <br />
                  Sembudoss Street,
                  <br />
                  1st Floor, Chennai - 600001.
                </p>

              </div>


              {/* ================= PHONE ================= */}
              <div className="flex items-start gap-2 sm:gap-3 w-full">

                {/* Phone Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-[2px]"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>

                <div className="flex flex-col gap-1 min-w-0">

                  <a
                    href="tel:+916383944557"
                    className="text-[11px] sm:text-[13px] md:text-[15px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300 leading-5 md:leading-6 whitespace-nowrap"
                  >
                    +91 63839 44557
                  </a>

                  <a
                    href="tel:+919840568560"
                    className="text-[11px] sm:text-[13px] md:text-[15px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300 leading-5 md:leading-6 whitespace-nowrap"
                  >
                    +91 98405 68560
                  </a>

                  <a
                    href="tel:04448578045"
                    className="text-[11px] sm:text-[13px] md:text-[15px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300 leading-5 md:leading-6 whitespace-nowrap"
                  >
                    044-4857 8045
                  </a>

                </div>

              </div>


              {/* ================= EMAIL ================= */}
              <div className="flex items-start gap-2 sm:gap-3 w-full">

                {/* Email Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-[2px]"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                  />
                </svg>

                <a
                  href="mailto:thirumalatraders2021@yahoo.com"
                  className="text-[11px] sm:text-[13px] md:text-[15px] font-medium text-white hover:text-[#E21B23] transition-colors duration-300 leading-5 md:leading-6 break-all"
                >
                  thirumalatraders2021@yahoo.com
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>




    </footer>
  );
};

export default Footer;

