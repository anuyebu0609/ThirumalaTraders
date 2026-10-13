
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Handshake,
  ArrowRight,
} from "lucide-react";

// WhatsApp business number (country code + number, without + or spaces)
const WHATSAPP_NUMBER = "919840568560";

// Form validation schema
const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(80, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .regex(
      /^[+]?[0-9\s()-]{7,20}$/,
      "Please enter a valid phone number."
    ),

  subject: z
    .string()
    .min(1, "Please select a subject."),

  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters.")
    .max(1500, "Message cannot exceed 1500 characters."),
});

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    const whatsappMessage = `
NEW WEBSITE ENQUIRY
------------------------------
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}
------------------------------
Sent from the Thirumala Traders website.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp with the pre-filled enquiry
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    // Clear the form after opening WhatsApp
    reset();
  };

  const inputClass =
    "mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100";

  const errorClass = "mt-1 text-xs text-red-600";

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-[92%] max-w-[1400px]">

        {/* Contact Information + Message Form */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">

          {/* LEFT: OUR CONTACT INFORMATION */}
          <div className="flex flex-col">
            <div className="mb-7 flex items-center gap-4">
              <h2 className="whitespace-nowrap text-xl font-bold text-gray-900 md:text-2xl">
                Our Contact Information
              </h2>
              <span className="h-[2px] w-10 shrink-0 bg-red-600" />
            </div>

            {/* Location */}
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-md">
                <MapPin size={25} />
              </div>

              <div className="pt-1">
                <h3 className="font-semibold text-gray-900">
                  Our Location
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Old No. 24, New No. 51,
                  <br />
                  Sembudoss Street, 1st Floor,
                  <br />
                  Chennai - 600001, Tamil Nadu, India
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=New+No+51+Sembudoss+Street+Chennai+600001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-800"
                >
                  Get Directions <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-md">
                <Phone size={24} />
              </div>

              <div className="pt-1">
                <h3 className="font-semibold text-gray-900">
                  Phone
                </h3>
                <a
                  href="tel:+916383944557"
                  className="mt-1 block text-sm leading-6 text-gray-600 hover:text-red-600"
                >
                  +91 63839 44557
                </a>
                <a
                  href="tel:+919840568560"
                  className="block text-sm leading-6 text-gray-600 hover:text-red-600"
                >
                  +91 98405 68560
                </a>
                <a
                  href="tel:+914448578045"
                  className="block text-sm leading-6 text-gray-600 hover:text-red-600"
                >
                  044-4857 8045
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-md">
                <Mail size={24} />
              </div>

              <div className="min-w-0 pt-1">
                <h3 className="font-semibold text-gray-900">
                  Email
                </h3>
                <a
                  href="mailto:thirumalatraders2021@yahoo.com"
                  className="mt-1 block break-all text-sm leading-6 text-gray-600 hover:text-red-600"
                >
                  thirumalatraders2021@yahoo.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-md">
                <Clock size={24} />
              </div>

              <div className="pt-1">
                <h3 className="font-semibold text-gray-900">
                  Working Hours
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="rounded-lg border border-red-100 bg-red-50 p-5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 pt-1 text-red-600">
                  <Handshake size={42} />
                </div>

                <div>
                  <h3 className="font-bold text-red-600">
                    Need a Quote or Bulk Order?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Get in touch with our team for product
                    enquiries, competitive pricing, and reliable
                    delivery.
                  </p>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      "Hello Thirumala Traders, I would like to enquire about a quotation or bulk order."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-md border border-red-600 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
                  >
                    GET A QUOTE <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SEND US A MESSAGE */}
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-md sm:p-8">
            <div className="mb-7">
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
                  Send Us a Message
                </h2>
                <span className="h-[2px] w-10 bg-red-600" />
              </div>

              <span className="mt-3 block h-[2px] w-6 bg-red-600" />

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Fill out the form below and we’ll get back to you
                as soon as possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-800"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    {...register("fullName")}
                    aria-invalid={!!errors.fullName}
                    className={`${inputClass} ${
                      errors.fullName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.fullName && (
                    <p className={errorClass}>
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-800"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                    className={`${inputClass} ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className={errorClass}>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-800"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    {...register("phone")}
                    aria-invalid={!!errors.phone}
                    className={`${inputClass} ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className={errorClass}>
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-800"
                  >
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="subject"
                    {...register("subject")}
                    aria-invalid={!!errors.subject}
                    className={`${inputClass} ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Request a Quote">Request a Quote</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Dealer Enquiry">Dealer Enquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className={errorClass}>
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-800"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Type your message here..."
                  {...register("message")}
                  aria-invalid={!!errors.message}
                  className={`${inputClass} resize-y`}
                />
                {errors.message && (
                  <p className={errorClass}>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={17} />
                SEND MESSAGE
              </button>

              <p className="text-xs leading-5 text-gray-500">
                Your validated enquiry will open in WhatsApp.
                Please press Send in WhatsApp to deliver your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
