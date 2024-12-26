"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialButton from "../login/component/socialButton";
import brandLogo from "@/public/brand-logo.png";
import { useRouter } from "next/navigation";
import { handleApiError } from "@/lib/apiError";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validation
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw data;
      }
      router.push("/verify");
    } catch (error) {
      const errorMessage = await handleApiError(error);
      setErrors({ server: errorMessage });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="h-screen flex justify-center items-center p-4 sm:p-8">
      <div className="w-full max-w-sm flex flex-col text-left p-8">
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
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create your account
        </h1>
        <p className="font-medium text-sm text-gray-500 mb-4">
          Get started accepting booking the smart way.
        </p>

        <div className="space-y-4 w-full mb-6">
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

        <hr className="border-purple-300 w-full my-4" />

        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col">
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-1 mb-2 border-purple-600 focus-visible:ring-purple-400"
            />
            {errors && (
              <p className="text-red-500 text-xs">
                {errors.email || errors.server}
              </p>
            )}

            {isSubmitting ? (
              <Button disabled className="bg-purple-500">
                <Loader2 className="animate-spin" />
              </Button>
            ) : (
              <Button className="font-semibold bg-purple-600 hover:bg-purple-700">
                Send register link
              </Button>
            )}
          </div>
        </form>

        <p className="text-left text-gray-500 font-medium mb-2 text-xs">
          By signing up, you agree to our{" "}
          <Link
            href="/terms-and-privacy"
            className="text-purple-400 underline hover:text-purple-600"
          >
            Terms & Privacy.
          </Link>
        </p>
        <p className="text-left text-gray-500 font-medium text-xs">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-purple-400 underline hover:text-purple-600"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
