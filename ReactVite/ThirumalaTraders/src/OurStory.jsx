
import { OurStoryImage } from "./assets/AboutUsImage/OurStoryImage";

const OurStory = () => {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto grid w-[92%] max-w-[1200px] grid-cols-1 items-center gap-8 md:w-[90%] md:grid-cols-2 md:gap-10 lg:gap-14">

        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[28px] font-bold text-black md:text-[32px] lg:text-[36px]">
            Quality Products.
          </h2>

          <h2 className="mb-4 text-[28px] font-bold leading-tight text-[#E21B23] md:text-[32px] lg:text-[36px]">
            Long-Lasting Relationships
          </h2>

          <p className="text-[15px] leading-6 text-black md:text-[16px]">
            Thirumala Traders is a well-established and popular trader
            with an excellent track record for customer satisfaction.
            We deal in all types of pipe fittings and valves and have
            never compromised on quality or the services provided to
            our customers.
          </p>

          <p className="mt-5 text-[15px] leading-6 text-black md:text-[16px]">
            Our goal is to keep our customers happy and provide them
            with products at very competitive prices. We assure you
            that we will give you the best service at any time.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[420px] overflow-hidden rounded-xl md:max-w-[460px] lg:max-w-[500px]">
            <img
              src={OurStoryImage}
              alt="Thirumala Traders products and workplace"
              className="block h-[280px] w-full rounded-xl object-cover sm:h-[320px] md:h-[340px] lg:h-[360px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
