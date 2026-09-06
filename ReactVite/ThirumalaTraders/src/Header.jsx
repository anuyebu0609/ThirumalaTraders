import {Logo} from "./assets/HeaderImage/HeaderImage"
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Brands", href: "#brands" },
  { name: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.04)] bg-white sticky top-0 z-50">
      <div className="w-[95%] md:w-[90%] mx-auto">
        {/* ================= OVERLAY ================= */}

        {menuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/30 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between py-3">
          {/* ================= LOGO ================= */}

          <a href="#home">
            <img
              src={Logo}
              alt="Thirumala Traders Logo"
              className="w-[90px] md:w-[110px]"
            />
          </a>

          {/* ================= DESKTOP MENU ================= */}

          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="
                    relative
                    text-[16px]
                    lg:text-[18px]
                    font-medium
                    text-[#1F2937]
                    transition-all
                    duration-300

                    hover:text-[#E21B23]

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:w-0
                    after:h-[3px]
                    after:bg-[#E21B23]
                    after:transition-all
                    after:duration-300
                    after:content-['']

                    hover:after:w-full
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* ================= GET A QUOTE ================= */}

            <li>
              <a
                href="#quote"
                className="
                  group
                  relative
                  overflow-hidden
                  inline-block
                  px-6
                  py-2
                  rounded-full
                  border-2
                  border-[#E21B23]
                  font-semibold
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    bg-[#E21B23]
                    origin-bottom
                    transition-transform
                    duration-500
                    group-hover:scale-y-0
                  "
                />

                <span
                  className="
                    relative
                    z-10
                    text-white
                    transition-colors
                    duration-500
                    group-hover:text-[#E21B23]
                  "
                >
                  Get a Quote
                </span>
              </a>
            </li>
          </ul>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E21B23"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />

              <path d="M7 8h10" />
              <path d="M7 12h10" />
              <path d="M7 16h10" />
            </svg>
          </button>
        </div>

        {/* ================= MOBILE DRAWER ================= */}

        <div
          className={`
            md:hidden
            fixed
            top-0
            right-0
            z-50
            w-[280px]
            h-screen
            bg-white
            shadow-[-5px_0_20px_rgba(0,0,0,0.08)]
            transition-transform
            duration-500
            ease-in-out

            ${
              menuOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >
          {/* ================= CLOSE BUTTON ================= */}

          <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <img
              src={Logo}
              alt="Thirumala Traders Logo"
              className="w-[80px]"
            />

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E21B23"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ================= MOBILE LINKS ================= */}

          <div className="flex flex-col items-center gap-8 mt-12">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  relative
                  text-[20px]
                  font-medium
                  text-[#1F2937]
                  transition-colors
                  duration-300

                  hover:text-[#E21B23]

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:w-0
                  after:h-[3px]
                  after:bg-[#E21B23]
                  after:transition-all
                  after:duration-300
                  after:content-['']

                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            ))}

            {/* ================= MOBILE GET QUOTE ================= */}

            <a
              href="#quote"
              onClick={() => setMenuOpen(false)}
              className="
                group
                relative
                overflow-hidden
                inline-block
                px-8
                py-3
                rounded-full
                border-2
                border-[#E21B23]
                font-semibold
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-[#E21B23]
                  origin-bottom
                  transition-transform
                  duration-500
                  group-hover:scale-y-0
                "
              />

              <span
                className="
                  relative
                  z-10
                  text-white
                  transition-colors
                  duration-500
                  group-hover:text-[#E21B23]
                "
              >
                Get a Quote
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;