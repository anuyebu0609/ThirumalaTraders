
import React from "react";
import {
  Handshake,
  MessageCircle,
  ShieldCheck,
  Headset,
} from "lucide-react";

const ClientHandling = () => {
  const clientServices = [
    {
      icon: <Headset size={25} />,
      title: "Personalized Support",
      description:
        "We understand every client's requirements and provide support tailored to their business needs.",
    },
    {
      icon: <MessageCircle size={25} />,
      title: "Clear Communication",
      description:
        "We maintain transparent communication to help clients make confident and informed decisions.",
    },
    {
      icon: <ShieldCheck size={25} />,
      title: "Reliable Product Guidance",
      description:
        "Our team helps clients identify suitable pipes, fittings, valves, and industrial products.",
    },
    {
      icon: <Handshake size={25} />,
      title: "Long-Term Partnership",
      description:
        "We believe in building lasting relationships through trust, service, and consistent support.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#E21B23]"></span>

            <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#E21B23]">
              CLIENT RELATIONSHIPS
            </span>

            <span className="h-[2px] w-10 bg-[#E21B23]"></span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#163653] sm:text-4xl lg:text-[42px]">
            Building Strong{" "}
            <span className="text-[#E21B23]">
              Client Relationships
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-gray-600 sm:text-base">
            At Thirumala Traders, we value every client. We focus on
            understanding your requirements, recommending suitable products,
            and providing reliable support throughout our business relationship.
          </p>
        </div>

        {/* Client Image */}
        <div className="relative mx-auto mb-14 max-w-[1050px]">
          {/* Decorative Red Background */}
          <div className="absolute -left-2 -top-2 h-full w-full rounded-2xl bg-[#E21B23] sm:-left-3 sm:-top-3"></div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-md">
            <img
              src="https://ik.imagekit.io/opzxy97kk/8635442a-fc20-4efe-bd98-cc139476a3bb.jpeg?updatedAt=1791988787309"
              alt="Thirumala Traders team discussing industrial products with a client"
              className="h-[260px] w-full object-cover object-center sm:h-[380px] lg:h-[460px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Client Handling Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clientServices.map((service, index) => (
            <article
              key={index}
              className="group flex h-full flex-col items-center rounded-xl border border-gray-200 bg-white px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E21B23] hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#E21B23] bg-white text-[#E21B23] transition-colors duration-300 group-hover:bg-[#E21B23] group-hover:text-white">
                {service.icon}
              </div>

              {/* Card Title */}
              <h3 className="mb-3 text-base font-bold leading-6 text-[#163653]">
                {service.title}
              </h3>

              {/* Card Description */}
              <p className="text-sm leading-6 text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-gray-600 sm:text-base">
            Your requirements matter to us.{" "}
            <span className="font-bold text-[#E21B23]">
              Your trust drives our commitment.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientHandling;
