"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {


  return (
    <nav className="flex flex-row justify-between items-center font-bold">
      <Link href="/">
        {/* <Image src="/logo.png" alt="BookEase Logo" width={100} height={100} />
         */}
        BOOKSMARTLY
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
