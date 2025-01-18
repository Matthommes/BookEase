"use client";

export default function HowItWorks() {
  return (
    <section className="py-12 px-6 lg:px-20 bg-gray-50">
      <h2 className="text-2xl lg:text-4xl text-center font-bold mb-6">
        How Clyne Works
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-10">
        {/* Step 1 */}
        <div className="text-center lg:text-left">
          <div className="text-indigo-600 text-5xl mb-4">🛠️</div>
          <h3 className="text-xl font-semibold mb-2">1. Customize Your Page</h3>
          <p className="text-gray-600">
            Personalize your booking page to match your brand and services. Add
            your availability, business info, and more.
          </p>
        </div>
        {/* Step 2 */}
        <div className="text-center lg:text-left">
          <div className="text-indigo-600 text-5xl mb-4">📧</div>
          <h3 className="text-xl font-semibold mb-2">2. Share Your Link</h3>
          <p className="text-gray-600">
            Send your booking link to clients or embed it on your website.
          </p>
        </div>
        {/* Step 3 */}
        <div className="text-center lg:text-left">
          <div className="text-indigo-600 text-5xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">3. Manage with Ease</h3>
          <p className="text-gray-600">
            View, approve, and manage bookings on your dashboard with real-time
            updates.
          </p>
        </div>
      </div>
    </section>
  );
}
