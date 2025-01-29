"use client";
import React, { useState } from "react";
import {
  Wand2,
  Layout,
  Palette,
  Check,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  LockIcon,
  ArrowRight,
} from "lucide-react";

const BrandingPreview = ({ color }) => (
  <div className="w-full h-[400px] bg-white p-6 rounded-lg">
    <div className="flex items-center justify-between mb-8">
      <div className={`h-8 w-32 bg-${color}-600 rounded-md`} />
      <nav className="flex gap-4">
        {["Home", "Services", "About", "Contact"].map((item) => (
          <div key={item} className={`text-sm text-${color}-600 font-medium`}>
            {item}
          </div>
        ))}
      </nav>
    </div>

    <div className="grid grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="p-4 border rounded-lg hover:shadow-md transition-shadow"
        >
          <div className={`w-full h-24 bg-${color}-100 rounded-md mb-3`} />
          <div className={`h-4 w-3/4 bg-${color}-200 rounded mb-2`} />
          <div className={`h-4 w-1/2 bg-${color}-100 rounded`} />
        </div>
      ))}
    </div>
  </div>
);

const DomainPreview = () => (
  <div className="w-full h-[400px] bg-white p-6 rounded-lg">
    <div className="mb-8 relative">
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
        <div className="flex-shrink-0 text-gray-400">
          <LockIcon className="h-4 w-4" />
        </div>
        <input
          type="text"
          value="booking.yourdomain.com"
          readOnly
          className="ml-2 bg-transparent border-none focus:outline-none text-sm w-full"
        />
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <Calendar className="h-5 w-5 text-blue-600" />
        <div className="flex-1">
          <div className="h-4 w-1/4 bg-blue-100 rounded mb-2" />
          <div className="h-4 w-1/2 bg-gray-100 rounded" />
        </div>
      </div>

      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-4 border rounded-lg">
          <Clock className="h-5 w-5 text-gray-400" />
          <div className="flex-1">
            <div className="h-4 w-1/4 bg-gray-100 rounded mb-2" />
            <div className="h-4 w-1/2 bg-gray-100 rounded" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CustomFieldsPreview = () => (
  <div className="w-full h-[400px] bg-white p-6 rounded-lg">
    <div className="space-y-6">
      <div className="border rounded-lg p-4">
        <h4 className="font-medium mb-4">Booking Information</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-green-600" />
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 border rounded-md px-3 py-2"
            />
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-green-600" />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 border rounded-md px-3 py-2"
            />
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-green-600" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 border rounded-md px-3 py-2"
            />
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-medium mb-4">Custom Questions</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">
              What's your preferred communication method?
            </label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Email</option>
              <option>Phone</option>
              <option>Text</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2">
              Any specific requirements?
            </label>
            <textarea
              className="w-full border rounded-md px-3 py-2 h-20"
              placeholder="Tell us more..."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const CustomizationShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Custom Branding",
      description:
        "Match your booking page to your brand with custom colors, logos, and fonts.",
      color: "purple",
      preview: BrandingPreview,
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Custom Domain",
      description: "Use your own domain for a seamless booking experience.",
      color: "blue",
      preview: DomainPreview,
    },
    {
      icon: <Wand2 className="h-6 w-6" />,
      title: "Custom Fields",
      description:
        "Add custom intake forms and fields to collect the information you need.",
      color: "green",
      preview: CustomFieldsPreview,
    },
  ];

  const ActivePreview = features[activeFeature].preview;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Your Brand, Your Way
          </h2>
          <p className="text-xl text-gray-600">
            Fully customizable booking pages that match your brand
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer
                  ${
                    activeFeature === index
                      ? "bg-white shadow-lg scale-105"
                      : "hover:bg-white/50"
                  }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`p-3 rounded-lg bg-${feature.color}-100 transition-colors duration-300`}
                >
                  {React.cloneElement(feature.icon, {
                    className: `h-6 w-6 text-${feature.color}-600`,
                  })}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    {activeFeature === index && (
                      <Check className={`h-4 w-4 text-${feature.color}-600`} />
                    )}
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
              <ActivePreview color={features[activeFeature].color} />

              {/* Floating UI Elements */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-purple-100 rounded-2xl -z-10 animate-pulse" />
            <div className="absolute -left-8 -top-8 w-40 h-40 bg-blue-100 rounded-2xl -z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationShowcase;
