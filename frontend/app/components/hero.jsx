import Link from "next/link";

export default function Hero() {
  return (
    <main className="py-6 mt-20 text-center">
      <div>
        <h1 className="text-5xl mb-4">Find Experts. Grow Businesses.</h1>
        <h3 className="mb-6">
          Search and book trusted services in seconds, or join our platform to
          connect with more customers.
        </h3>
        <div className="flex space-x-4 justify-center">
          <Link
            className="px-6 py-3 bg-blue-600 text-white rounded-full"
            href="/register"
          >
            Get Started
          </Link>
          <Link
            className="px-6 py-3  text-blue-400 border-2 border-blue-400 rounded-full"
            href="/search"
          >
            Search
          </Link>
        </div>
      </div>
    </main>
  );
}
