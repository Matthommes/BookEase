"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <main className="py-8 mt-20 text-center">
      <div>
        <h1 className="text-3xl md:text-6xl mb-4 font-bold">
          Find Experts. Grow Businesses.
        </h1>
        <h3 className="mb-6 text-xl font-medium">
          Search and book trusted services in seconds, or join our platform to
          connect with more customers.
        </h3>
        <div className="flex space-x-4 justify-center">
          <Link className=" py-1 px-6 bg-blue-700 text-white font-bold " href="/register">
            Get Started
          </Link>
          <Link
            className=" py-1 px-6 text-blue-400 border-2 border-blue-400"
            href="/search"
          >
            Search
          </Link>
        </div>
      </div>
    </main>
  );
}
