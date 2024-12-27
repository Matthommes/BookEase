"use client";

import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useAuth } from "@/app/context/authContext";
import { handleApiError } from "@/lib/apiError";

export default function TokenPage({ params }) {
  const {token} = use(params);
  const router = useRouter();
  const [error, setError] = useState();
  const { verify } = useAuth();

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing token.");
      router.push("/login");
      return;
    }

    const verifyToken = async () => {
      try {
        await verify(token);
        router.push("/onboarding/welcome");
      } catch (error) {
        const errorMessage = await handleApiError(error);
        setError(errorMessage);
        router.push("/login");
      }
    };

    verifyToken();
  }, [token, verify, router]);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">
        {error || "Verifying your token..."}
      </h1>
      <p className="text-gray-500 mt-2">
        Please wait while we confirm your identity.
      </p>
    </main>
  );
}
