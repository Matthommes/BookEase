"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

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
  const [formData, setFormData] = useState({
    // Business Details
    businessName: "",
    businessType: "",
    description: "",
    services: [],
    address: "",
    businessHours: "",
    // Owner Details
    ownerName: "",
    ownerTitle: "",
    ownerBio: "",
    phoneNumber: "",
    // Brand Details
    primaryColor: "#6D28D9", // Default purple
    logo: null,
    socialLinks: {
      facebook: "",
      instagram: "",
      twitter: "",
    },
  });

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

  const WelcomeStep = () => (
    <div className="text-center space-y-6">
      <CheckCircle className="w-16 h-16 text-purple-600 mx-auto" />
      <h2 className="text-2xl font-bold">Welcome to BookSmartly!</h2>
      <p className="text-gray-600 max-w-md mx-auto">
        Let's get your booking website set up. We'll collect some information
        about your business to create a professional and personalized booking
        experience for your clients.
      </p>
      <Button
        onClick={handleNext}
        className="bg-purple-600 hover:bg-purple-700"
      >
        Get Started <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );

  const BusinessDetailsStep = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="businessName">Business Name</Label>
        <Input
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleInputChange}
          placeholder="Enter your business name"
          className="border-purple-600 focus-visible:ring-purple-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessType">Business Type</Label>
        <Select
          onValueChange={(value) =>
            handleInputChange({ target: { name: "businessType", value } })
          }
          value={formData.businessType}
        >
          <SelectTrigger className="border-purple-600 focus:ring-purple-400">
            <SelectValue placeholder="Select your business type" />
          </SelectTrigger>
          <SelectContent>
            {BUSINESS_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Business Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Tell us about your business"
          className="border-purple-600 focus-visible:ring-purple-400"
          rows={4}
        />
      </div>
    </div>
  );

  const OwnerDetailsStep = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="ownerName">Your Name</Label>
        <Input
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          className="border-purple-600 focus-visible:ring-purple-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="ownerTitle">Your Title</Label>
        <Input
          id="ownerTitle"
          name="ownerTitle"
          value={formData.ownerTitle}
          onChange={handleInputChange}
          placeholder="e.g. Owner, Director, Lead Trainer"
          className="border-purple-600 focus-visible:ring-purple-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Business Phone</Label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter your business phone"
          className="border-purple-600 focus-visible:ring-purple-400"
        />
      </div>
    </div>
  );

  const PreviewStep = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
        <h3 className="text-xl font-bold">
          {formData.businessName || "Your Business Name"}
        </h3>
        <p className="text-gray-600">
          {formData.description || "Your business description will appear here"}
        </p>
        <div className="border-t pt-4">
          <p className="font-medium">Owner: {formData.ownerName}</p>
          <p className="text-gray-600">{formData.ownerTitle}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600">
            Your booking page will be available at:
            <br />
            <span className="font-mono">
              booksmartly.com/
              {formData.businessName?.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 0:
        return <WelcomeStep />;
      case 1:
        return <BusinessDetailsStep />;
      case 2:
        return <OwnerDetailsStep />;
      case 4:
        return <PreviewStep />;
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
