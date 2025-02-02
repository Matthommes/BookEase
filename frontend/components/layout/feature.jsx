"use client"

import {
  Calendar,
  Users,
  Bell,
  BarChart3,
  Palette,
  Globe,
  Clock,
  MessageSquare,
  Smartphone,
  CreditCard,
  Settings,
  CheckCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

 export const Features = () => {
  const featureCategories = [
    {
      title: "Core Booking Features",
      features: [
        {
          title: "AI-Powered Scheduling",
          description:
            "Smart algorithms learn from your preferences and optimize your calendar automatically.",
          gradient: "from-purple-500 to-blue-500",
          icon: Calendar,
        },
        {
          title: "Availability Management",
          description:
            "Set your working hours, breaks, and buffer times with flexible scheduling options.",
          gradient: "from-blue-500 to-cyan-500",
          icon: Clock,
        },
        {
          title: "Instant Confirmations",
          description:
            "Automatic booking confirmations and calendar updates in real-time.",
          gradient: "from-cyan-500 to-green-500",
          icon: CheckCircle,
        },
      ],
    },
    {
      title: "Customization & Branding",
      features: [
        {
          title: "Service Listings",
          description:
            "Create and customize detailed service listings with pricing and duration.",
          gradient: "from-pink-500 to-rose-500",
          icon: Settings,
        },
        {
          title: "Custom Branding",
          description:
            "Personalize your booking page with your logo, colors, and fonts.",
          gradient: "from-rose-500 to-orange-500",
          icon: Palette,
        },
        {
          title: "Custom Domain",
          description:
            "Use your own domain for a professional and branded booking experience.",
          gradient: "from-orange-500 to-amber-500",
          icon: Globe,
        },
      ],
    },
    {
      title: "Client Experience",
      features: [
        {
          title: "Client Management",
          description:
            "Keep track of client preferences, history, and automate follow-ups.",
          gradient: "from-emerald-500 to-teal-500",
          icon: Users,
        },
        {
          title: "Smart Reminders",
          description:
            "Reduce no-shows with intelligent, multi-channel reminders.",
          gradient: "from-teal-500 to-cyan-500",
          icon: Bell,
        },
        {
          title: "Custom Forms",
          description:
            "Collect exactly the information you need with customizable intake forms.",
          gradient: "from-cyan-500 to-blue-500",
          icon: MessageSquare,
        },
      ],
    },
    {
      title: "Business Tools",
      features: [
        {
          title: "Analytics Dashboard",
          description:
            "Get insights into your business with detailed reports and trends.",
          gradient: "from-violet-500 to-purple-500",
          icon: BarChart3,
        },
        {
          title: "Mobile Friendly",
          description:
            "Fully responsive design for seamless booking on any device.",
          gradient: "from-purple-500 to-fuchsia-500",
          icon: Smartphone,
        },
        {
          title: "Payment Integration",
          description:
            "Accept payments and deposits with integrated payment processing.",
          gradient: "from-fuchsia-500 to-pink-500",
          icon: CreditCard,
        },
      ],
    },
  ];

  const FeatureCard = ({ feature }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.2,
          rootMargin: "-50px",
        }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={cardRef}
        className="relative rounded-2xl p-8 bg-white shadow-lg transition-all duration-500"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            feature.gradient
          } transition-opacity duration-500
            lg:opacity-0 lg:group-hover:opacity-5
            ${isVisible ? "opacity-5" : "opacity-0"}`}
          style={{
            borderRadius: "1rem",
          }}
        />
        <div
          className={`h-12 w-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-2 mb-6`}
        >
          <feature.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    );
  };

  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline your booking process and grow your
            business
          </p>
        </div>

        <div className="space-y-20">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-semibold text-center mb-12">
                {category.title}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <FeatureCard key={featureIndex} feature={feature} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
