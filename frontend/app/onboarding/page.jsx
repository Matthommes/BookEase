"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { WelcomeStep } from "./components/welcome";
import { BusinessDetailsStep } from "./components/business-deet";
import { OwnerDetailsStep } from "./components/owner-deets";
import { PreviewStep } from "./components/preview";

const BUSINESS_TYPES = [
  "Health & Wellness",
  "Professional Services",
  "Beauty & Personal Care",
  "Education & Training",
  "Fitness & Sports",
  "Events & Entertainment",
  "Home Services",
  "Other",
]; 

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = [
    {
      title: "Welcome",
      description: "Let's create your professional booking website",
    },
    {
      title: "Business Details",
      description: "Tell us about your business",
    },
    {
      title: "Owner Information",
      description: "Add your personal touch",
    },
    {
      title: "Brand & Customization",
      description: "Make it uniquely yours",
    },
    {
      title: "Preview",
      description: "See your website",
    },
  ];

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <WelcomeStep handleNext={handleNext} />;
      case 1:
        return (
          <BusinessDetailsStep
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <OwnerDetailsStep
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 4:
        return <PreviewStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <Progress value={(step / (steps.length - 1)) * 100} className="h-2" />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">{steps[step].title}</h2>
            <p className="text-gray-600">{steps[step].description}</p>
          </div>
        </div>

        {/* Form content */}
        <div className="bg-white rounded-xl shadow-sm p-8">{renderStep()}</div>

        {/* Navigation buttons */}
        {step > 0 && (
          <div className="mt-8 flex justify-between">
            <Button
              onClick={handleBack}
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Back
            </Button>
            <Button
              onClick={handleNext}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {step === steps.length - 1 ? "Complete" : "Continue"}{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
