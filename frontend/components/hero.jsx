"use client";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Effortless Booking,{" "}
          <span className="animate-pulse">Customized for You</span>
        </h1>
        <p className="text-lg lg:text-2xl font-light mb-8">
          Whether you're running a salon, managing a clinic, or renting
          apartments, Clyne adapts to your business needs seamlessly.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 hover:bg-gray-100 transition">
          Get Started Now
        </button>
      </div>
    </section>
  );
}
