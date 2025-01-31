"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import api from "@/utils/api";
import { validateEmail } from "../utils/formValidation";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decoded = jwtDecode(token);
      const redirectPath = decoded.onboardingComplete
        ? "/dashboard"
        : "/onboarding";
      router.push(redirectPath);
    }
  }, [router]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate email
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.post("/auth/register", formData);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("userEmail", formData.email);
        router.push("/verify");
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during registration"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm flex flex-col bg-white rounded-lg"
    >
      <div className="grid w-full items-center gap-2 mb-4">
        <Label htmlFor="email" className="text-gray-700">
          Email Address
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="mt-1 border-purple-600 focus-visible:ring-purple-400"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      <Button
        disabled={isSubmitting}
        className={`font-semibold mb-2 ${
          isSubmitting
            ? "bg-purple-500 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700"
        }`}
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin text-white" />
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
}
