"use client";

import Loading from "@/app/loading";
import api from "@/utils/api";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useToast } from "@/hooks/use-toast";
import { jwtDecode } from "jwt-decode";

export default function TokenPage({ params }) {
  const { token } = use(params);
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  const handleError = (error) => {
    console.log("Token verification failed:", {
      error,
      response: error.response,
      message: error.message,
    });
    toast({
      variant: "destructive",
      title: "Verification Failed",
      description:
        error.response?.data?.message || "Please try logging in again",
    });
    router.push("/login");
  };

  const process = async (response) => {
    try {
      
      if (!response?.data?.jwt) {
        throw new Error("No JWT found in response");
      }

      const { jwt } = response.data;
     

      const decoded = jwtDecode(jwt);
      const redirectPath = decoded.onboardingComplete
        ? "/dashboard"
        : "/onboarding";
      
      Cookies.set("token", jwt);
      router.push(redirectPath);
    } catch (error) {
      console.log("Error in process function:", error);
      handleError(error);
    }
  };

  const verifyOauthToken = async () => {
    try {
      const response = await api.post("/auth/swap", { token });
      await process(response);
    } catch (error) {
      console.log("OAuth verification error:", error);
      handleError(error);
    }
  };

  const verifyEmailToken = async (email) => {
    try {
      const response = await api.post("/auth/verify", { token, email });
      await process(response);
    } catch (error) {
      console.log("Email verification error:", error);
      handleError(error);
    }
  };

  const showTokenError = (title, description) => {
    console.error("Token error:", { title, description });
    toast({
      variant: "destructive",
      title,
      description,
    });
    router.push("/login");
  };

  useEffect(() => {
    const handleVerification = async () => {
      try {
        // console.log("Starting verification. Token:", {
        //   exists: !!token,
        //   length: token?.length,
        //   prefix: token?.substring(0, 6),
        // });

        if (!token) {
          showTokenError(
            "Invalid Token",
            "No verification token found. Please try logging in again."
          );
          return;
        }

        // Ensure token is a string and trim any whitespace
        const cleanToken = String(token).trim();
        console.log("Clean token prefix:", cleanToken.substring(0, 6));

        if (cleanToken.startsWith("EMAIL_")) {
          const userEmail = localStorage.getItem("userEmail");

          if (!userEmail) {
            showTokenError(
              "Missing Information",
              "Email not found. Please try logging in again."
            );
            return;
          }
          await verifyEmailToken(userEmail);
        } else if (cleanToken.startsWith("OAUTH_")) {
          await verifyOauthToken();
        } else {
          console.error(
            "Invalid token format. Token prefix:",
            cleanToken.substring(0, 6)
          );
          showTokenError(
            "Invalid Token Format",
            "Invalid token format. Please try logging in again."
          );
        }
      } catch (error) {
        console.error("Error in handleVerification:", error);
        handleError(error);
      }
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
