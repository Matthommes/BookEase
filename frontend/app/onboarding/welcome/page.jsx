import Link from 'next/link'


export default function Welcome() {
  return (
    <main className="h-screen flex items-center justify-center bg-gray">
      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto p-8">
        {/* Left Column */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-purple-700">
            Welcome to BookSmartly!
          </h1>
          <p className="text-lg text-gray-600">
            Let’s set up your account to get started with bookings. We’ll guide
            you through the process step by step.
          </p>
          <Link href="/onboarding/business-info">
              <button className="mt-2 px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition">
                Get Started
              </button>
          </Link>
        </div>

        {/* Right Column (Image Placeholder for Now) */}
        <div className="hidden md:block md:w-1/2">
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">Illustration/Image Here</span>
          </div>
        </div>
      </div>
    </main>
  );
}
