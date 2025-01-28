"use client";

import Loading from "@/app/loading";
import api from "@/utils/api";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const onVerification = () => {};

export default function TokenPage({ params }) {
  const { token } = use(params);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const verifyToken = async (email) => {
    try {
      setIsLoading(true);
      const response = await api.post("/auth/verify", { token, email });
      const data = await response.data;
      
      Cookies.set("token", data.token);
      router.push("/onboarding/welcome");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      verifyToken(userEmail);
    } else {
      router.push("/login");
    }
  }, [token, router]);

  if (isLoading) return <Loading />;
}
