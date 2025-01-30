import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      features: ["100 bookings/mo", "Email reminders", "Basic analytics"],
    },
    {
      name: "Pro",
      price: "$79",
      features: [
        "Unlimited bookings",
        "SMS reminders",
        "Advanced analytics",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Everything in Pro",
        "Custom integration",
        "Dedicated support",
        "SLA",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 bg-white ${
                plan.popular ? "ring-2 ring-purple-600 shadow-xl" : "shadow-lg"
              }`}
            >
              {plan.popular && (
                <span className="px-3 py-1 text-sm text-purple-600 bg-purple-100 rounded-full">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mt-4">{plan.name}</h3>
              <div className="text-3xl font-bold my-4">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/register">
                <Button
                  className={
                    plan.popular
                      ? "w-full bg-purple-600 hover:bg-purple-700"
                      : "w-full"
                  }
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
