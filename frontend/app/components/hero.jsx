"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <main className="py-8 mt-20 text-center">
      <div>
        <h1 className="text-3xl md:text-6xl mb-4 font-bold">
          Find <span className="text-purple-500">Experts</span>. Grow <span className="text-purple-500">Businesses</span>
        </h1>
        <h3 className="mb-6 text-xl font-medium">
          Search and book trusted services in seconds, or join our platform to
          connect with more customers.
        </h3>
        <div className="flex space-x-4 justify-center">
          <Link
            className=" py-1 px-6 bg-purple-500 hover:bg-purple-700 text-white rounded-sm fon "
            href="/register"
          >
            Get Started
          </Link>
          <Link
            className=" py-1 px-6 rounded-sm hover:bg-purple-50  text-purple-500 border-2 border-purple-500"
            href="/search"
          >
            Search
          </Link>
        </div>
      </div>
    </main>
  );
}
