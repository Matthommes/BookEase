import { Button } from "../ui/button";

export const InteractiveDemo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">See How It Works</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the simplicity of our booking system with our
              interactive demo.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Choose Your Service</h3>
                  <p className="text-gray-600">
                    Select from your list of services or create custom ones.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Set Your Availability</h3>
                  <p className="text-gray-600">
                    Define when you're available and let clients book instantly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Get Booked</h3>
                  <p className="text-gray-600">
                    Receive bookings and automatic confirmations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
              <Button size="lg">Watch Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
