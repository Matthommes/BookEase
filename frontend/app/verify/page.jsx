"use client";

import brandLogo from "../../public/brand-logo.png";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Verify() {
  const [email, setEmail] = useState(null); // Start with `null` to indicate "loading"

  useEffect(() => {
    try {
      const user = localStorage.getItem("user");
      if (user) {
        setEmail(user); // Set the email if found in localStorage
      } else {
        setEmail("your registered email"); // Fallback value
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error.message);
      setEmail("your registered email"); // Fallback value in case of an error
    }
  }, []);

  // Show nothing (or a loading indicator) while email is being fetched
  if (email === null) {
    return <p className="text-center mt-6">Loading...</p>; // Or a spinner/loader
  }

  return (
    <main className="flex flex-col items-center h-screen">
      {/* Divider and Logo */}
      <hr className="border-purple-300 w-full my-6" />
      <Link href="/" aria-label="Navigate to homepage">
        <Image
          src={brandLogo}
          alt="BookSmartly Logo"
          className="w-24 my-6"
          priority
        />
      </Link>

      {/* Confirmation Message */}
      <div className="text-center px-4">
        <h1 className="text-2xl font-bold my-4 text-purple-700">
          Your verification email is on its way! ✈
        </h1>
        <p className="text-base text-gray-700">
          We’ve sent an email to <span className="font-semibold">{email}</span>.
        </p>
        <p className="mt-2 text-gray-600">
          Please check your spam folder if you don’t see it in your inbox.
        </p>
      </div>

      {/* Footer or Additional Actions */}
      <footer className="mt-auto mb-6 text-sm text-center text-gray-500">
        <p>
          Didn’t receive the email?{" "}
          <Link href="/resend" className="text-purple-600 underline">
            Resend verification email
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}
