"use client";

import { Button } from "../ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Book Smarter,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Grow Faster
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Intelligent scheduling that adapts to your business. Save time,
            reduce no-shows, and delight your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Start Free Trial
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="w-full">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
