"use client";

export default function HowItWorks() {
  return (
    <section className="py-10 px-6 lg:px-20 ">
      {/* Section Intro */}
      <h2 className="text-2xl lg:text-4xl text-center font-bold mb-6">
        How It Works 🚀
      </h2>
      <p className="text-lg lg:text-xl text-center text-gray-600 mb-10">
        Setting up your booking platform has never been easier. Here's how Clyne
        empowers your business:
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">1️⃣ Sign Up</h3>
          <p className="text-gray-500">
            Create an account and provide basic details about your business.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">2️⃣ Customize</h3>
          <p className="text-gray-500">
            Use our intuitive interface to set up services, availability, and
            booking preferences. Add your logo and brand colors.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">3️⃣ Share</h3>
          <p className="text-gray-500">
            Share your personalized booking link with clients via email, social
            media, or your website.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">4️⃣ Accept Bookings</h3>
          <p className="text-gray-500">
            Clients can easily book appointments or services, and you'll receive
            instant notifications.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">5️⃣ Manage & Grow</h3>
          <p className="text-gray-500">
            Track your bookings, manage clients, and analyze data to improve
            your services.
          </p>
        </div>
      </div>
    </section>
  );
}
