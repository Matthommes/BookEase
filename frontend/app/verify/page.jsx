"use client";

import brandLogo from "../../public/brand-logo.png";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import api from "@/utils/api";
import Loading from "@/components/loading";
import { useToast } from "@/hooks/use-toast";
import { Timer, Mail, CheckCircle2 } from "lucide-react";
import { ToastAction } from "@/components/ui/toast";

export default function Verify() {
  const [email, setEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);

  const handleResend = async (email) => {
    try {
      setIsLoading(true);
      await api.post(`/auth/resend`, { email });
      toast({
        title: "Email Sent Successfully",
        description: "Please check your email address!",
      });
      setCanResend(false);
      setCountdown(60);
    } catch (error) {
      console.log("Resend error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed to send email.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    setEmail(storedEmail);

    const timer = setTimeout(() => {
      setCanResend(true);
    }, 60000);

    setIsLoading(false);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval;
    if (!canResend) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [canResend]);

  if (isLoading) return <Loading />;

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href="/" className="block text-center">
          <Image
            src={brandLogo}
            alt="BookSmartly Logo"
            className="w-32 mx-auto transition-transform hover:scale-105"
            priority
          />
        </Link>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-purple-700 mb-2">
              Check Your Email
            </h1>
            <p className="text-gray-600">
              We've sent a verification link to{" "}
              <span className="font-semibold text-purple-700">{email}</span>
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <CheckCircle2 className="w-4 h-4" />
              <span>Check your spam folder if you don't see the email</span>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            {canResend ? (
              <button
                onClick={() => handleResend(email)}
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Resend verification email
              </button>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-gray-500">
                <Timer className="w-4 h-4" />
                <span>
                  Resend available in{" "}
                  <span className="font-medium">{countdown}</span> seconds
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
