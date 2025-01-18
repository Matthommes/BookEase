"use client";

export default function Feature() {
  return (
    <section className="py-10 px-6 lg:px-20">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-4">
        What is Clyne? 👀
      </h1>
      <p className="text-lg lg:text-2xl text-center text-gray-600 mb-8">
        Your booking, smarter and simpler. Manage appointments, connect with
        clients, and grow your business—all in one place.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md hover:scale-105 hover:shadow-2xl transition">
          <div className="text-4xl mb-4">📅</div>
          <h3 className="text-xl font-semibold mb-2">
            Customizable Booking Pages
          </h3>
          <p className="text-gray-500">
            Create unique booking links tailored to your services and schedule.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md hover:scale-105 hover:shadow-2xl transition">
          <div className="text-4xl mb-4">🔔</div>
          <h3 className="text-xl font-semibold mb-2">
            Real-Time Notifications
          </h3>
          <p className="text-gray-500">
            Stay updated with instant notifications for new bookings and
            changes.
          </p>
        </div>
        <div className="text-center p-6 border border-purple-400 shadow-lg rounded-md hover:scale-105 hover:shadow-2xl transition">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
          <p className="text-gray-500">
            Hassle-free and secure payment integrations for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
