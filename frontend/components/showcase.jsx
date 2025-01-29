import { Wand2 } from "lucide-react";
import { Layout } from "lucide-react";
import { Palette } from "lucide-react";

export const CustomizationShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Your Brand, Your Way</h2>
          <p className="text-xl text-gray-600">
            Fully customizable booking pages that match your brand
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4 hover:-translate-x-2 transition-transform duration-300">
              <div className="p-3 rounded-lg bg-purple-100">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Custom Branding</h3>
                <p className="text-gray-600">
                  Match your booking page to your brand with custom colors,
                  logos, and fonts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 hover:-translate-x-2 transition-transform duration-300">
              <div className="p-3 rounded-lg bg-blue-100">
                <Layout className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Custom Domain</h3>
                <p className="text-gray-600">
                  Use your own domain for a seamless booking experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 hover:-translate-x-2 transition-transform duration-300">
              <div className="p-3 rounded-lg bg-green-100">
                <Wand2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Custom Fields</h3>
                <p className="text-gray-600">
                  Add custom intake forms and fields to collect the information
                  you need.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/api/placeholder/600/400"
                alt="Customization Demo"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-purple-100 rounded-2xl -z-10" />
            <div className="absolute -left-8 -top-8 w-40 h-40 bg-blue-100 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
