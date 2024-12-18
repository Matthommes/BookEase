export default function BusinessDetails() {
  return (
    <main className="h-screen flex items-center justify-center ">
      <div className="max-w-md w-full  p-6 ">
        <h1 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
          Business Information
        </h1>
        <form className="space-y-4">
          {/* Business Name */}
          <div>
            <label
              htmlFor="businessName"
              className="block text-gray-700 font-medium mb-2"
            >
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              placeholder="Enter your business name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label
              htmlFor="logo"
              className="block text-gray-700 font-medium mb-2"
            >
              Logo
            </label>
            <input
              type="file"
              id="logo"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Industry */}
          <div>
            <label
              htmlFor="industry"
              className="block text-gray-700 font-medium mb-2"
            >
              Industry
            </label>
            <select
              id="industry"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
            >
              <option value="">Select your industry</option>
              <option value="salon">Salon</option>
              <option value="consulting">Consulting</option>
              <option value="fitness">Fitness</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your business address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Briefly describe your business"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
