"use client";

import Loading from "@/app/loading";
import api from "@/utils/api";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useToast } from "@/hooks/use-toast";

export default function TokenPage({ params }) {
  const { token } = use(params);
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  const verifyToken = async (email) => {
    try {
      const response = await api.post("/auth/verify", { token, email });
      const data = await response.data;

      Cookies.set("token", data.token);
      router.push("/onboarding");
    } catch (error) {
      console.log("Token verification failed:", error);
      toast({
        variant: "destructive",
        title: "Verification Failed",
        description:
          error.response?.data?.message || "Please try logging in again",
      });
      router.push("/login");
    }
  };

  useEffect(() => {
    const handleVerification = async () => {
      if (!token) {
        toast({
          variant: "destructive",
          title: "Invalid Token",
          description:
            "No verification token found. Please try logging in again.",
        });
        router.push("/login");
        return;
      }

      const userEmail = localStorage.getItem("userEmail");
      if (!userEmail) {
        toast({
          variant: "destructive",
          title: "Missing Information",
          description: "Email not found. Please try logging in again.",
        });
        router.push("/login");
        return;
      }

      await verifyToken(userEmail);
    };

    handleVerification().finally(() => {
      setIsLoading(false);
    });
  }, [token, router, toast]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }

  return null;
}
