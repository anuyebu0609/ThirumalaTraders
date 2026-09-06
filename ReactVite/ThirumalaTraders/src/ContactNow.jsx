const ContactNow = () => {
  return (
    <div className="max-w-[100%] bg-[#E21B23] py-6">
      <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-2 gap-6">

        {/* Contact Information */}
        <div className="flex flex-row items-center justify-center gap-4">
          
          {/* Phone Icon */}
          <div
            className="
              shrink-0
              w-[52px] h-[52px]
              sm:w-[58px] sm:h-[58px]
              md:w-[62px] md:h-[62px]
              rounded-full
              bg-white
              flex items-center justify-center
              shadow-md
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E21B23"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2a9 9 0 0 1 9 9" />
              <path d="M13 6a5 5 0 0 1 5 5" />
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
          </div>

          {/* Text */}
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
              Need help finding the right product?
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
              Call us now or send an inquiry.
            </p>
          </div>
        </div>

        {/* Call Button */}
        <div className="flex items-center justify-center">
          <a
            href="tel:6383944557"
            className="
              group
              bg-white
              text-[#E21B23]
              hover:bg-[#B9151C]
              hover:text-white
              font-semibold
              text-[15px]
              sm:text-[16px]
              md:text-[18px]
              py-3
              sm:py-4
              px-6
              sm:px-8
              rounded-lg
              text-center
              flex
              items-center
              justify-center
              gap-3
              shadow-md
              hover:shadow-lg
              hover:scale-105
              transition-all
              duration-300
            "
          >
            {/* Small Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9.01 10.73a16 16 0 0 0 4.26 4.26l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
            </svg>

            <span>Call Now</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactNow;