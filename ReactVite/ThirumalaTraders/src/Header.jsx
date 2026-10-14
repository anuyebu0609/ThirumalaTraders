import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./assets/HeaderImage/HeaderImage";

const linkClass = `
  relative text-[16px] lg:text-[18px] font-medium
  text-[#1F2937] transition-all duration-300
  hover:text-[#E21B23]
  after:absolute after:left-0 after:-bottom-2
  after:w-0 after:h-[3px] after:bg-[#E21B23]
  after:transition-all after:duration-300
  after:content-[''] hover:after:w-full
`;

const mobileLinkClass = `
  relative text-[20px] font-medium text-[#1F2937]
  transition-colors duration-300 hover:text-[#E21B23]
  after:absolute after:left-0 after:-bottom-2
  after:w-0 after:h-[3px] after:bg-[#E21B23]
  after:transition-all after:duration-300
  after:content-[''] hover:after:w-full
`;

const quoteButtonClass = `
  group relative inline-flex items-center justify-center
  overflow-hidden rounded-full border-2 border-[#E21B23]
  bg-[#E21B23] px-6 py-2 font-semibold
  transition-all duration-300 hover:bg-white
`;

const QuoteButton = ({ mobile = false, onClick }) => (
  <Link
    to="/GetQuote"
    onClick={onClick}
    className={`${quoteButtonClass} ${mobile ? "px-8 py-3" : ""}`}
  >
    <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-[#E21B23]">
      Get a Quote
    </span>
  </Link>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.04)]">
      <div className="mx-auto w-[95%] md:w-[90%]">
        {/* Mobile overlay */}
        {menuOpen && (
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={closeMenu}
          />
        )}

        {/* Header content */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} aria-label="Thirumala Traders Home">
            <img
              src={Logo}
              alt="Thirumala Traders Logo"
              className="w-[90px] md:w-[110px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation">
            <ul className="hidden items-center gap-8 md:flex lg:gap-10">
              <li>
                <Link to="/" className={linkClass}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/AboutUs" className={linkClass}>
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/#products" className={linkClass}>
                  Products
                </Link>
              </li>

              <li>
                <Link to="/Certificates" className={linkClass}>
                  Certificates
                </Link>
              </li>

              <li>
                <Link to="/ContactUs" className={linkClass}>
                  Contact Us
                </Link>
              </li>

              <li>
                <QuoteButton />
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
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
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 8h10" />
              <path d="M7 12h10" />
              <path d="M7 16h10" />
            </svg>
          </button>
        </div>

        {/* Mobile navigation drawer */}
        <div
          id="mobile-navigation"
          className={`
            fixed right-0 top-0 z-50 h-screen w-[280px] max-w-[85vw]
            overflow-y-auto bg-white
            shadow-[-5px_0_20px_rgba(0,0,0,0.08)]
            transition-transform duration-300 ease-in-out md:hidden
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          aria-hidden={!menuOpen}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between border-b border-gray-100 p-5">
            <Link to="/" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              <img
                src={Logo}
                alt="Thirumala Traders Logo"
                className="w-[80px]"
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              tabIndex={menuOpen ? 0 : -1}
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
                aria-hidden="true"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer links */}
          <nav
            aria-label="Mobile navigation"
            className="mt-10 flex flex-col items-center gap-8 pb-10"
          >
            <Link
              to="/"
              onClick={closeMenu}
              className={mobileLinkClass}
              tabIndex={menuOpen ? 0 : -1}
            >
              Home
            </Link>

            <Link
              to="/AboutUs"
              onClick={closeMenu}
              className={mobileLinkClass}
              tabIndex={menuOpen ? 0 : -1}
            >
              About Us
            </Link>

            <Link
              to="/#products"
              onClick={closeMenu}
              className={mobileLinkClass}
              tabIndex={menuOpen ? 0 : -1}
            >
              Products
            </Link>

            <Link
              to="/Certificates"
              onClick={closeMenu}
              className={mobileLinkClass}
              tabIndex={menuOpen ? 0 : -1}
            >
              Certificates
            </Link>

            <Link
              to="/ContactUs"
              onClick={closeMenu}
              className={mobileLinkClass}
              tabIndex={menuOpen ? 0 : -1}
            >
              Contact Us
            </Link>

            <QuoteButton mobile onClick={closeMenu} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;