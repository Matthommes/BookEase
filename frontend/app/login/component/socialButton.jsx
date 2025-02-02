"use client";

import { serverUrl } from "@/app/register/utils/urls";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function SocialButton({ provider, logoSrc, altText, label }) {
  const router = useRouter();
  const handleLogin = () => router.push(`${serverUrl}/api/auth/${provider}`);
  return (
    <button
      onClick={handleLogin}
      aria-label={altText}
      className="w-full flex items-center justify-center px-4 py-1 border border-purple-300 rounded-md font-medium text-gray-500 bg-transparent hover:bg-purple-50 transition ease-in-out duration-200"
    >
      <Image
        src={logoSrc}
        width={200}
        height={200}
        alt={altText}
        className="w-5 h-5 mr-2"
        
      />
      {label}
    </button>
  );
}
