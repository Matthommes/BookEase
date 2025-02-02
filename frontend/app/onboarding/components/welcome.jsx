"use client ";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";

export const WelcomeStep = ({ handleNext }) => (
  <div className="text-center space-y-6">
    <CheckCircle className="w-16 h-16 text-purple-600 mx-auto" />
    <h2 className="text-2xl font-bold">Welcome to Clyne!</h2>
    <p className="text-gray-600 max-w-md mx-auto">
      Let's get your booking website set up. We'll collect some information
      about your business to create a professional and personalized booking
      experience for your clients.
    </p>
    <Button onClick={handleNext} className="bg-purple-600 hover:bg-purple-700">
      Get Started <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  </div>
);
