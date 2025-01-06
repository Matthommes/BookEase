"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="py-8 mt-20 text-center bg-white">
      {/* Heading and Subheading */}
      <div className="mb-8">
        <motion.h1
          className="text-3xl md:text-6xl mb-4 font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Find <span className="text-purple-500">Experts</span>. Grow{" "}
          <span className="text-purple-500">Businesses</span>
        </motion.h1>
        <motion.h3
          className="mb-6 text-xl font-medium"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Search and book trusted services in seconds, or join our platform to
          connect with more customers.
        </motion.h3>
      </div>

      {/* Buttons */}
      <motion.div
        className="flex space-x-4 justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Link
          className="py-1 px-6 bg-purple-500 hover:bg-purple-700 text-white rounded-sm font-bold"
          href="/register"
        >
          Get Started
        </Link>
        <Link
          className="py-1 px-6 rounded-sm hover:bg-purple-50 text-purple-500 border-2 border-purple-500 font-bold"
          href="/search"
        >
          Search
        </Link>
      </motion.div>

      {/* Illustration */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/undraw_booking.svg" // Replace with the path to your Undraw illustration
          alt="Booking Illustration"
          width={500}
          height={300}
          className="rounded-md"
        />
      </motion.div>
    </main>
  );
} 