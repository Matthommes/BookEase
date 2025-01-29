import { Globe } from "lucide-react";
import { FileText } from "lucide-react";
import { Palette } from "lucide-react";

export const InteractiveFeatures = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Make It Yours</h2>
            <p className="text-xl text-gray-600 mb-8">
              Create booking experiences that feel like they were built just for
              you.
            </p>

            <div className="space-y-6">
              <div className="group cursor-pointer">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <Palette className="w-4 h-4 text-purple-600" />
                  </div>
                  <h3 className="font-semibold group-hover:text-purple-600 transition-colors">
                    Custom Design
                  </h3>
                </div>
                <div className="pl-11">
                  <p className="text-gray-600">
                    Your colors, your fonts, your brand identity - all in your
                    booking page.
                  </p>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
                    Custom Forms
                  </h3>
                </div>
                <div className="pl-11">
                  <p className="text-gray-600">
                    Create custom intake forms and questionnaires for your
                    clients.
                  </p>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Globe className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="font-semibold group-hover:text-green-600 transition-colors">
                    Custom Domain
                  </h3>
                </div>
                <div className="pl-11">
                  <p className="text-gray-600">
                    Use your own domain for a seamless booking experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Interactive Demo UI */}
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <div className="space-y-4">
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="h-20 bg-purple-100 rounded-lg"></div>
                  <div className="h-20 bg-blue-100 rounded-lg"></div>
                  <div className="h-20 bg-green-100 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
