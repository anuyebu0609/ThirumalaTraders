
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ShieldCheck,
  Tag,
  Truck,
  Headset,
  Send,
  FileText,
  Upload,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "919840568560";

const productCategories = [
  "MS Pipes",
  "CS Pipes",
  "SS Pipes",
  "Pipe Fittings",
  "Industrial Valves",
  "Flanges",
  "Fasteners",
  "Other Products",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const allowedFileTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(150, "Email cannot exceed 150 characters."),

  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      const mobile =
        digits.length === 12 && digits.startsWith("91")
          ? digits.slice(2)
          : digits;

      return /^[6-9]\d{9}$/.test(mobile);
    }, "Enter a valid 10-digit Indian mobile number."),

  company: z
    .string()
    .trim()
    .max(150, "Company name cannot exceed 150 characters.")
    .optional(),

  category: z
    .string()
    .min(1, "Please select a product category.")
    .refine(
      (value) => productCategories.includes(value),
      "Please select a valid product category."
    ),

  requirements: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters.")
    .max(2000, "Requirements cannot exceed 2000 characters."),

  attachment: z
    .any()
    .optional()
    .refine(
      (files) => !files || files.length === 0 || files[0].size <= MAX_FILE_SIZE,
      "File size must be 5 MB or less."
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        allowedFileTypes.includes(files[0].type),
      "Only PDF, DOC, DOCX, JPG, and PNG files are allowed."
    ),
});

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality Products",
    description: "Trusted industrial products for your requirements.",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    description: "Cost-effective solutions for your business.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "Reliable service to support your projects.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description: "Our team is ready to assist with your enquiry.",
  },
];

const GetaQuote = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      category: "",
      requirements: "",
      attachment: undefined,
    },
    mode: "onTouched",
  });

  const selectedFiles = watch("attachment");
  const selectedFile = selectedFiles?.[0];

  const onSubmit = (data) => {
    const message = [
      "Hello Thirumala Traders!",
      "",
      "I would like to request a quotation.",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Company: ${data.company?.trim() || "Not provided"}`,
      `Product Category: ${data.category}`,
      "",
      "Requirements:",
      data.requirements,
      "",
      `Attachment: ${
        selectedFile
          ? selectedFile.name
          : "Not provided"
      }`,
      selectedFile
        ? "I will attach the file separately in this WhatsApp chat."
        : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    const whatsappWindow = window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    if (!whatsappWindow) {
      window.location.href = whatsappURL;
    }

    setSubmitted(true);
  };

  const inputClass = (fieldName) =>
    `mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#102B4E] outline-none transition placeholder:text-gray-400 focus:border-[#E21B23] focus:ring-2 focus:ring-red-100 ${
      errors[fieldName] ? "border-red-500" : "border-gray-200"
    }`;

  const ErrorText = ({ message }) =>
    message ? (
      <p className="mt-1.5 text-xs leading-5 text-red-600" role="alert">
        {message}
      </p>
    ) : null;

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto w-[95%] max-w-[1400px] lg:w-[90%]">
        {/* Section heading only — no navbar or hero */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[#E21B23]">
            Quick & Easy
          </p>

          <h1 className="text-3xl font-extrabold text-[#102B4E] sm:text-4xl">
            Get a <span className="text-[#E21B23]">Quote</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Tell us about your industrial product requirements.
            Our team will help you with pricing and suitable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-12">
          {/* Company benefits */}
          <aside className="rounded-2xl bg-gray-50 p-6 sm:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-[#E21B23]">
              Why Choose Us
            </p>

            <h2 className="text-2xl font-extrabold leading-tight text-[#102B4E] sm:text-3xl">
              Your Industrial Supply Partner
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              We supply MS, CS and SS pipes, pipe fittings,
              industrial valves and more. Contact us for your
              project and business requirements.
            </p>

            <div className="mt-8 space-y-6">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E21B23] text-white shadow-md">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#102B4E]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-5">
              <p className="text-sm font-semibold text-[#102B4E]">
                Have questions?
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-[#E21B23] transition hover:text-red-800"
              >
                <MessageCircle size={19} />
                Chat with our team
              </a>

              <p className="mt-2 text-sm text-gray-600">
                +91 98405 68560
              </p>
            </div>
          </aside>

          {/* Quote form */}
          <div
            id="quote-form"
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_35px_rgba(16,43,78,0.07)] sm:p-8 lg:p-9"
          >
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#E21B23]">
                <FileText size={25} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#102B4E]">
                  Request a Quote
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Fill in your details and send your enquiry directly
                  to our WhatsApp team.
                </p>
              </div>
            </div>

            {submitted && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800"
              >
                <CheckCircle size={20} className="mt-0.5 shrink-0" />
                <p>
                  WhatsApp has been opened. Please press Send in
                  WhatsApp to submit your enquiry. If you selected a
                  file, attach it manually in the chat.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="quote-name"
                    className="text-sm font-semibold text-[#102B4E]"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="quote-name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Enter your name"
                    {...register("name")}
                    className={inputClass("name")}
                  />

                  <ErrorText message={errors.name?.message} />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="quote-email"
                    className="text-sm font-semibold text-[#102B4E]"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="quote-email"
                    type="email"
                    autoComplete="email"
                    maxLength={150}
                    placeholder="Enter your email address"
                    {...register("email")}
                    className={inputClass("email")}
                  />

                  <ErrorText message={errors.email?.message} />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="quote-phone"
                    className="text-sm font-semibold text-[#102B4E]"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="quote-phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={20}
                    placeholder="+91 98765 43210"
                    {...register("phone")}
                    className={inputClass("phone")}
                  />

                  <ErrorText message={errors.phone?.message} />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="quote-company"
                    className="text-sm font-semibold text-[#102B4E]"
                  >
                    Company Name{" "}
                    <span className="font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="quote-company"
                    type="text"
                    autoComplete="organization"
                    maxLength={150}
                    placeholder="Enter your company name"
                    {...register("company")}
                    className={inputClass("company")}
                  />

                  <ErrorText message={errors.company?.message} />
                </div>

                {/* Product category */}
                <div>
                  <label
                    htmlFor="quote-category"
                    className="text-sm font-semibold text-[#102B4E]"
                  >
                    Product Category{" "}
                    <span className="text-red-600">*</span>
                  </label>

                  <select
                    id="quote-category"
                    {...register("category")}
                    className={`${inputClass("category")} cursor-pointer`}
                  >
                    <option value="">Select product category</option>

                    {productCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                  <ErrorText message={errors.category?.message} />
                </div>

                {/* Requirements */}
                <div>
                  <label
                    htmlFor="quote-requirements"
                    className="text-sm font-semibold text-[#102B4E]"
                  >
                    Message / Requirements{" "}
                    <span className="text-red-600">*</span>
                  </label>

                  <textarea
                    id="quote-requirements"
                    rows={4}
                    maxLength={2000}
                    placeholder="Tell us about the product, quantity, size, specifications, etc."
                    {...register("requirements")}
                    className={`${inputClass("requirements")} resize-y`}
                  />

                  <ErrorText message={errors.requirements?.message} />

                  <p className="mt-1 text-right text-xs text-gray-400">
                    {(watch("requirements") || "").length}/2000
                  </p>
                </div>

                {/* Optional attachment */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="quote-attachment"
                    className="text-sm font-semibold text-[#102B4E]"
                  >
                    Attach File{" "}
                    <span className="font-normal text-gray-400">
                      (Optional, maximum 5 MB)
                    </span>
                  </label>

                  <label
                    htmlFor="quote-attachment"
                    className={`mt-2 flex min-h-[84px] cursor-pointer items-center gap-4 rounded-lg border border-dashed p-4 transition hover:border-[#E21B23] hover:bg-red-50/30 ${
                      errors.attachment
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[#102B4E]">
                      <Upload size={21} />
                    </span>

                    <span className="min-w-0">
                      <span className="block break-words text-sm font-medium text-[#102B4E]">
                        {selectedFile
                          ? selectedFile.name
                          : "Choose a file or browse"}
                      </span>

                      <span className="mt-1 block text-xs text-gray-500">
                        PDF, DOC, DOCX, JPG, PNG
                      </span>
                    </span>

                    <input
                      id="quote-attachment"
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      {...register("attachment")}
                      className="sr-only"
                    />
                  </label>

                  <ErrorText message={errors.attachment?.message} />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#E21B23] px-5 py-3.5 font-bold text-white shadow-md transition duration-200 hover:bg-[#BF171E] focus:outline-none focus:ring-4 focus:ring-red-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={18} />
                Request Quote on WhatsApp
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-gray-500">
                Your enquiry opens in WhatsApp. Press Send there to
                submit your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetaQuote;
