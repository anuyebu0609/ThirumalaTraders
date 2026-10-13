
import React from "react";
import { MapPin, Navigation, Phone } from "lucide-react";

const ContactUsMap = () => {
  const address =
    "Old No. 24, New No. 51, Sembudoss Street, 1st Floor, Chennai 600001, Tamil Nadu, India";

  // Google Maps embedded location
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&z=17&output=embed`;

  // Opens Google Maps directions for the exact address entered above
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}&travelmode=driving`;

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto w-[92%] max-w-[1400px]">
        {/* Section Heading */}
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Find Us on the Map
          </h2>
          <span className="h-[2px] w-12 bg-red-600" />
        </div>

        <p className="mb-6 text-sm leading-6 text-gray-600 md:text-base">
          Visit Thirumala Traders at our Chennai location.
          Get directions to our store using Google Maps.
        </p>

        {/* Map and Address */}
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-gray-200 shadow-md lg:grid-cols-[1fr_300px]">
          {/* Google Map */}
          <div className="relative h-[320px] sm:h-[400px] lg:h-[450px]">
            <iframe
              title="Thirumala Traders Google Maps Location"
              src={mapUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address Card */}
          <div className="flex flex-col justify-center bg-white p-6 md:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-md">
              <MapPin size={27} />
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600">
              Our Location
            </p>

            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Thirumala Traders
            </h3>

            <p className="text-sm leading-7 text-gray-600">
              Old No. 24, New No. 51,
              <br />
              Sembudoss Street, 1st Floor,
              <br />
              Chennai - 600001,
              <br />
              Tamil Nadu, India.
            </p>

            <div className="my-5 h-px w-full bg-gray-200" />

            <a
              href="tel:+919840568560"
              className="mb-5 inline-flex items-center gap-2 text-sm text-gray-700 hover:text-red-600"
            >
              <Phone size={17} className="text-red-600" />
              +91 98405 68560
            </a>

            {/* Get Directions Button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              <Navigation size={17} />
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsMap;
