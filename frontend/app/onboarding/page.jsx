"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Palette,
  Globe,
  Users,
  MessageSquare,
  Building2,
  CreditCard,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const OnboardingPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Business Profile
    businessName: "",
    businessType: "",
    website: "",
    customDomain: "",

    // Schedule Settings
    workingHours: {
      start: "09:00",
      end: "17:00",
    },
    breakTime: "60",
    bufferTime: "15",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    },

    // Service Setup
    services: [
      {
        name: "",
        duration: "60",
        price: "",
        description: "",
        color: "#7C3AED",
      },
    ],

    // Customization
    brandColor: "#7C3AED",
    logo: null,

    // Client Management
    intakeFields: {
      name: true,
      email: true,
      phone: true,
      customFields: [],
    },

    // Notifications
    reminderTiming: ["24h", "1h"],
    notificationChannels: {
      email: true,
      sms: false,
    },
    reminderTemplates: {
      email: "",
      sms: "",
    },

    // Payment Settings
    acceptPayments: false,
    depositRequired: false,
    depositAmount: "0",
    currency: "USD",
    stripeConnected: false,
    cancelPolicy: "flexible", // flexible, moderate, strict
    refundPolicy: "100",

    // Final Setup
    termsAccepted: false,
    marketingEmails: false,
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Setup Complete!",
        description: "Your booking platform is ready to use.",
        duration: 5000,
      });

      router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Setup Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    // Previous steps remain the same...
    {
      title: "Business Profile",
      icon: <Building2 className="w-6 h-6" />,
      fields: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Business Name
            </label>
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => updateFormData("businessName", e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Your Business Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Business Type
            </label>
            <select
              value={formData.businessType}
              onChange={(e) => updateFormData("businessType", e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Type</option>
              <option value="salon">Salon</option>
              <option value="consulting">Consulting</option>
              <option value="healthcare">Healthcare</option>
              <option value="fitness">Fitness</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Website (Optional)
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => updateFormData("website", e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="https://yourbusiness.com"
            />
          </div>
        </div>
      ),
    },
    // ... Previous steps continue

    {
      title: "Final Setup",
      icon: <CheckCircle className="w-6 h-6" />,
      fields: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h4 className="font-medium text-lg mb-4">Setup Summary</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Business Name</span>
                <span className="font-medium">{formData.businessName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Services</span>
                <span className="font-medium">{formData.services.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Working Hours</span>
                <span className="font-medium">
                  {formData.workingHours.start} - {formData.workingHours.end}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Online Payments</span>
                <span className="font-medium">
                  {formData.acceptPayments ? "Enabled" : "Disabled"}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={(e) =>
                  updateFormData("termsAccepted", e.target.checked)
                }
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2">I accept the terms and conditions</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.marketingEmails}
                onChange={(e) =>
                  updateFormData("marketingEmails", e.target.checked)
                }
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2">
                Send me product updates and marketing emails (optional)
              </span>
            </label>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((s, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step > index + 1
                        ? "bg-purple-500"
                        : step === index + 1
                        ? "bg-purple-500"
                        : "bg-gray-200"
                    } text-white mb-2`}
                  >
                    {step > index + 1 ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      s.icon
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{s.title}</span>
                </motion.div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((step - 1) / (steps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Form Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {steps[step - 1].title}
              </h2>
              {steps[step - 1].fields}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className={`flex items-center px-4 py-2 rounded-lg ${
                step === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
            <button
              onClick={() => {
                if (step === steps.length) {
                  handleSubmit();
                } else {
                  setStep(step + 1);
                }
              }}
              disabled={isSubmitting}
              className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-purple-300"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  {step === steps.length ? "Complete Setup" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingPage;