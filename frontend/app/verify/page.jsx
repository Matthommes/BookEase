"use client";

import brandLogo from "../../public/brand-logo.png";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { serverUrl } from "@/app/register/utils/urls";

export const handleResend = async (email) => {
  try {
    await axios.post(
      `${serverUrl}/api/auth/resend`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error("Resend error:", error);
    alert("Failed to resend email. Please try again.");
  }
};

export default function Verify() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    setEmail(storedEmail || "your registered email");
  }, []);

  if (email === null) {
    return <p className="text-center mt-6">Loading...</p>;
  }

  return (
    <main className="flex flex-col items-center h-screen">
      <hr className="border-purple-300 w-full my-6" />
      <Link href="/" aria-label="Navigate to homepage">
        <Image
          src={brandLogo}
          alt="BookSmartly Logo"
          className="w-24 my-6"
          priority
        />
      </Link>

      <div className="text-center px-4">
        <h1 className="text-2xl font-bold my-4 text-purple-700">
          Your verification email is on its way! ✈
        </h1>
        <p className="text-base text-gray-700">
          We've sent an email to <span className="font-semibold">{email}</span>.
        </p>
        <p className="mt-2 text-gray-600">
          Please check your spam folder if you don't see it in your inbox.
        </p>
      </div>

      <footer className="mt-auto mb-6 text-sm text-center text-gray-500">
        <p>
          Didn't receive the email?{" "}
          <button
            onClick={() => handleResend(email)}
            className="text-purple-600 underline"
          >
            Resend verification email
          </button>
          .
        </p>
      </footer>
    </main>
  );
}
