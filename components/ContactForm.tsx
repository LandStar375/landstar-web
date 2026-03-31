"use client";

import { useState } from "react";
import { ContactFormData, ValidationErrors } from "@/types";
import { validateContactForm } from "@/utils/validation";
import Button from "@/components/Button";

interface ContactFormProps {
  selectedVehicle?: string;
  selectedPrice?: string;
}

function buildPrefilledMessage(selectedVehicle?: string, selectedPrice?: string) {
  if (!selectedVehicle) {
    return "";
  }

  const priceText = selectedPrice ? ` listed from $${selectedPrice}/day` : "";
  return `I am interested in the ${selectedVehicle}${priceText}. Please share availability and booking details.`;
}

export default function ContactForm({
  selectedVehicle = "",
  selectedPrice = "",
}: ContactFormProps) {
  const prefilledMessage = buildPrefilledMessage(selectedVehicle, selectedPrice);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: prefilledMessage,
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: prefilledMessage,
      });
    }
  }

  if (submitted) {
    return (
      <p className="text-green-700 text-lg font-medium" role="status">
        Thank you for your inquiry. We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {selectedVehicle && (
        <div className="rounded-xl border border-brand-100 bg-brand-50 p-4 text-sm text-brand-900">
          <p className="font-semibold">Selected vehicle</p>
          <p className="mt-1">
            {selectedVehicle}
            {selectedPrice ? ` from $${selectedPrice}/day` : ""}
          </p>
          <p className="mt-2 text-brand-700">
            We&apos;ve started the message for you. Add your name, phone number,
            and any booking details before sending.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
        />
      </div>

      <Button type="submit" variant="primary">
        Send Inquiry
      </Button>
    </form>
  );
}
