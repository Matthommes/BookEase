"use client";

export default function Feature() {
  return (
    <section className="py-10 px-6 lg:px-20">
      {/* Section Intro */}
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-4">
        Why Choose Clyne? 💡
      </h1>
      <p className="text-lg lg:text-xl text-center text-gray-600 mb-8">
        Clyne is a versatile and customizable booking platform designed to fit
        the needs of diverse businesses—from nail salons and doctors to rental
        apartments and personal trainers. Streamline your bookings, grow your
        brand, and offer clients an exceptional experience.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">
            ✂️ Tailored for Any Business
          </h3>
          <p className="text-gray-500">
            Whether you're a salon, clinic, apartment rental, or a personal
            trainer, Clyne adapts to your specific needs.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">🛠️ Easy Customization</h3>
          <p className="text-gray-500">
            Customize your booking pages with just a few clicks. Define
            services, availability, and even add branding elements.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">📅 Seamless Scheduling</h3>
          <p className="text-gray-500">
            Manage appointments, sync with calendars, and keep your schedule
            organized in one place.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">🔒 Secure Payments</h3>
          <p className="text-gray-500">
            Accept payments securely and provide clients with peace of mind when
            booking.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">📊 Data Insights</h3>
          <p className="text-gray-500">
            Get actionable insights on bookings, client behavior, and revenue to
            grow your business.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-2">🤝 Client Management</h3>
          <p className="text-gray-500">
            Store client details and booking history to build stronger
            relationships.
          </p>
        </div>
      </div>
    </section>
  );
}
