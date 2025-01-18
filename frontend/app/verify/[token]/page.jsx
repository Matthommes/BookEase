"use client";

import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { handleApiError } from "@/lib/apiError";
import axios from "axios";

export default function TokenPage({ params }) {
  const { token } = use(params);
  const router = useRouter();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const [isVerifying, setIsVerifying] = useState(false);

  const verifyToken = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify`,
        { token },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200 || response.status === 201)
        router.push("/onboarding/welcome");
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      setError(errorMessage || "Unable to verify your token");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing token.");
      router.push("/login");
      return;
    }

    verifyToken();
  }, [token, router]);
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {isLoading ? (
        <>
          <h1 className="text-2xl font-bold">Verifying your token...</h1>
          <p className="text-gray-500 mt-2">
            Please wait while we confirm your identity.
          </p>
        </>
      ) : error ? (
        <>
          <h1 className="text-2xl font-bold text-red-600">
            Verification Failed
          </h1>
          <p className="text-gray-500 mt-2">{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            onClick={() => router.push("/login")}
          >
            Go to Login
          </button>
        </>
      ) : null}
    </main>
  );
}
