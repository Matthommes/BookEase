"use client";


import Link from "next/link";
import Image from "next/image";
import SocialButton from "./component/socialButton";
import LoginForm from "./component/loginForm";


export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center p-4 sm:p-8">
      <div className="w-full max-w-sm flex flex-col text-left p-8">
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image
              src="/icons/brand-logo.png"
              alt="Clyne Logo"
              width={96}
              height={96} 
              className="h-auto w-16 sm:w-20 lg:w-24 mb-10"
              priority
              quality={75}
            />
          </div>
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h1>
        <p className="font-medium text-sm text-gray-500 mb-4">
          Enter your credentials to jump right in.
        </p>

        {/* SOCIAL BUTTON OUTSIDE FORM */}
        <div className="space-y-4 w-full mb-4">
          <SocialButton
            provider="google"
            logoSrc="/google-logo.svg"
            altText="Google Logo"
            label="Continue with Google"
          />
          <SocialButton
            provider="apple"
            logoSrc="/apple-logo.svg"
            altText="Apple Logo"
            label="Continue with Apple"
          />
        </div>

        <hr className="border-purple-300 w-full my-4" />

        <LoginForm />
        <p className="text-left text-gray-500 font-medium text-xs">
          Don't have an account yet?{" "}
          <Link
            href="/register"
            className="text-purple-400 underline hover:text-purple-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
