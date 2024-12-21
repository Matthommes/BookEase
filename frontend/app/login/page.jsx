"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialButton from "./component/socialButton";
import brandLogo from "../../public/brand-logo.png";

export default function Login() {
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
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image
              src={brandLogo}
              alt="BookSmartly Logo"
              className="h-auto w-16 sm:w-20 lg:w-24 mb-10"
              priority
            />
          </div>
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h1>
        <p className="font-medium text-sm text-gray-500 mb-4">
          Enter your credentials to jump right in.
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

        <hr className="border-purple-300 w-full my-8" />

        <div className="grid w-full max-w-sm items-center gap-1.5 space-y-2 mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="mt-1 mb-3 border-purple-600 focus-visible:ring-purple-400"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          {isSubmitting ? (
            <Button disabled className="bg-purple-500">
              <Loader2 className="animate-spin" />
            </Button>
          ) : (
            <Button className="font-semibold bg-purple-600 hover:bg-purple-700">
              Continue
            </Button>
          )}
        </div>
        <p className="text-left text-gray-500 font-medium text-xs">
          Don't have an account yet?{" "}
          <Link
            href="/register"
            className="text-purple-400 underline hover:text-purple-600"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
