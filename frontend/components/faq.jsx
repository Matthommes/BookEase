"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How customizable are the booking pages?",
      answer:
        "Completely customizable! Change colors, fonts, add your logo, use custom domains, and create custom intake forms. Make it truly yours.",
    },
    {
      question: "Can I integrate with my existing calendar?",
      answer:
        "Yes! We integrate seamlessly with Google Calendar, Outlook, and other major calendar providers.",
    },
    {
      question: "How do the automated reminders work?",
      answer:
        "You can set up email and SMS reminders with custom timing and messages. Reduce no-shows automatically!",
    },
    {
      question: "What types of payments do you support?",
      answer:
        "We support all major payment providers including Stripe, PayPal, and Square. Accept deposits, full payments, or customize your payment terms.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "py-4 max-h-40"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
