"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import SocialButton from "../login/component/socialButton";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(true);
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <div className="h-screen flex justify-center items-center p-4 sm:p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col text-left p-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create your account
        </h1>
        <p className="font-medium text-sm text-gray-500 mb-4">
          Get started accepting booking the smart way.
        </p>

        {/* SOCIAL BUTTON */}

        <div className="space-y-4 w-full">
          <SocialButton
            logoSrc="/google-logo.svg"
            altText="Google Logo"
            label="Continue with Google"
          />
          <SocialButton
            logoSrc="/apple-logo.svg"
            altText="Apple Logo"
            label="Continue with Apple"
          />
        </div>

        <hr className="border-gray-300 w-full my-8" />

        <div className="grid w-full max-w-sm items-center gap-1.5 space-y-2 mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="mt-1 mb-3"
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          {isSubmitting ? (
            <Button disabled>
              <Loader2 className="animate-spin" />
            </Button>
          ) : (
            <Button className="font-semibold">Continue</Button>
          )}
        </div>
        <p className="text-left text-gray-500 font-medium mb-2 text-xs">
          By signing up, you agree to our{" "}
          <Link
            href="/register"
            className="text-blue-400 underline hover:text-blue-600"
          >
            Terms & Privacy.
          </Link>
        </p>
        <p className="text-left text-gray-500 font-medium text-xs">
          Already have an account?{"  "}
          <Link
            href="/register"
            className="text-blue-400 underline hover:text-black"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
