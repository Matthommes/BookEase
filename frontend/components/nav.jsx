"use client";

import Link from "next/link";
import Image from "next/image";
import brandLogo from "@/public/brand-logo.png";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center font-bold px-4 py-2">
      <Link href="/">
        <div className="flex justify-center items-center">
          <Image
            src={brandLogo}
            alt="BookSmartly Logo"
            className="h-auto w-16 sm:w-20 lg:w-24" 
            priority
          />
        </div>
      </Link>

      <ul className="flex space-x-6 text-sm md:text-base text-gray-500">
        <li className="hidden md:flex">
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
