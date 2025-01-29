"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
          >
            Clyne
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" className="mr-2">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button>
              <Link href="/register">Get Started </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
