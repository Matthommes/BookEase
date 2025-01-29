import { Bell } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { Users } from "lucide-react";
import { Calendar } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "AI-Powered Scheduling",
      description:
        "Smart algorithms learn from your preferences and optimize your calendar automatically.",
      gradient: "from-purple-500 to-blue-500",
      icon: Calendar,
      delay: 0.1,
    },
    {
      title: "Client Management",
      description:
        "Keep track of client preferences, history, and automate follow-ups.",
      gradient: "from-blue-500 to-cyan-500",
      icon: Users,
      delay: 0.2,
    },
    {
      title: "Smart Reminders",
      description: "Reduce no-shows with intelligent, multi-channel reminders.",
      gradient: "from-cyan-500 to-green-500",
      icon: Bell,
      delay: 0.3,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Get insights into your business with detailed reports and trends.",
      gradient: "from-green-500 to-emerald-500",
      icon: BarChart3,
      delay: 0.4,
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">
            Everything you need to succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
              <div
                className={`h-12 w-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-2 mb-6`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
