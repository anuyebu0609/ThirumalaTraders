
import React, { useState } from "react";
import {
  Award,
  ShieldCheck,
  FileCheck,
  ExternalLink,
  Download,
  Image as ImageIcon,
} from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Fire and Safety Association of Tamilnadu Certificate",
      description:
        "Officially recognized as a member of the Fire & Safety Association of Tamil Nadu.",
      type: "Membership Certificate",
      icon: FileCheck,
      link: "https://ik.imagekit.io/opzxy97kk/b3586c4e-7919-484c-aec5-ad2337bcc7b9.jpeg?updatedAt=1791892263403",
    },

    // Add more certificates here when needed.
    // {
    //   id: 2,
    //   title: "Quality Assurance Certificate",
    //   description: "Your certificate description.",
    //   type: "Quality Certificate",
    //   icon: ShieldCheck,
    //   link: "YOUR_IMAGE_OR_PDF_URL",
    // },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-[92%] max-w-[1400px]">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E21B23] sm:text-sm">
            Our Commitment
          </p>

          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-4xl">
            Certification
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E21B23]" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
            At Thirumala Traders, we value quality, reliability, and
            professional service. Explore our certificates and
            supporting documents to learn more about our business
            credentials and industry associations.
          </p>
        </div>

        {/* Responsive Certificate Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>

        {/* Bottom Information */}
        <div className="mt-10 rounded-xl border border-red-100 bg-red-50/70 px-5 py-7 text-center sm:mt-12 sm:px-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#E21B23] shadow-sm">
            <ShieldCheck size={25} />
          </div>

          <h2 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Quality and Trust Matter to Us
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-gray-600">
            We strive to provide dependable industrial products and
            professional service while building long-term relationships
            with our customers and business partners.
          </p>
        </div>
      </div>
    </section>
  );
};

const CertificateCard = ({ certificate }) => {
  const [imageError, setImageError] = useState(false);

  const Icon = certificate.icon;
  const isPdf = /\.pdf(?:$|[?#])/i.test(certificate.link);

  const handleDownload = async () => {
    try {
      // Fetch the image/PDF so cross-origin downloads can work
      // when the hosting server permits browser access.
      const response = await fetch(certificate.link);

      if (!response.ok) {
        throw new Error("Unable to download certificate");
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `${certificate.title.replace(
        /[^a-z0-9]+/gi,
        "-"
      )}.${isPdf ? "pdf" : "jpg"}`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch (error) {
      // Fallback: open the original file if cross-origin download
      // is blocked by the hosting server.
      window.open(certificate.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article className="group min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
      {/* Actual Certificate Preview */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gray-50 p-3 sm:h-64 md:h-60 lg:h-64">
        {!imageError && certificate.link && !isPdf ? (
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full w-full items-center justify-center"
            aria-label={`Preview ${certificate.title}`}
          >
            <img
              src={certificate.link}
              alt={certificate.title}
              className="h-full w-full rounded-md object-contain transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          </a>
        ) : (
          <div className="flex flex-col items-center justify-center px-5 text-center">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-red-100 bg-white text-[#E21B23] shadow-sm">
              {imageError ? (
                <ImageIcon size={30} />
              ) : (
                <Icon size={30} />
              )}
            </div>

            <p className="text-sm font-bold text-gray-800">
              {imageError
                ? "Certificate Preview Unavailable"
                : certificate.type}
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              {imageError
                ? "Check the certificate URL and image permissions."
                : isPdf
                  ? "Open the PDF to view your certificate."
                  : "Certificate preview"}
            </p>
          </div>
        )}

        <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-[#E21B23] transition-all duration-300 group-hover:h-1.5" />
      </div>

      {/* Certificate Details */}
      <div className="p-5 sm:p-6">
        <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-[#E21B23]">
          {certificate.type}
        </span>

        <h2 className="mt-4 text-lg font-bold leading-7 text-gray-900">
          {certificate.title}
        </h2>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
          {certificate.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-5 flex items-center gap-3">
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-md bg-[#E21B23] px-3 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <ExternalLink size={16} />
            <span>View Certificate</span>
          </a>

          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex shrink-0 items-center justify-center rounded-md border border-gray-300 px-4 py-3 text-gray-700 transition hover:border-red-600 hover:text-red-600"
            aria-label={`Download ${certificate.title}`}
            title="Download certificate"
          >
            <Download size={18} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Certificates;
