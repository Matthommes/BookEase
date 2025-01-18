"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { validate } from "@/app/register/utils/formValidation";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

   useEffect(() => {
    localStorage.setItem("user", formData.email);
  }, [formData.email]); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Email validation
    const emailError = validate(formData.email);
    if (emailError) {
      setErrors((prev) => ({
        ...prev,
        email: emailError,
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201)
        router.push("/verify");
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        server: error.response?.data?.message || "Unable to log you in",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm flex flex-col text-left"
    >
      <div className="grid w-full max-w-sm items-center gap-1.5 space-y mb-4">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="mt-1  border-purple-600 focus-visible:ring-purple-400"
        />
        {errors && (
          <p className="text-red-500 text-xs mb-1">
            {errors.email || errors.server}
          </p>
        )}
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
    </form>
  );
}
