import { Star } from "lucide-react";
import { Card } from "./ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Blessing Onas",
      role: "Lash Studio Owner",
      image: "/api/placeholder/64/64",
      content:
        "Clyne transformed my business. I've reduced no-shows by 80% and saved countless hours on scheduling.",
      rating: 5,
    },
    {
      name: "Matthew Akahomen",
      role: "Online Car shop",
      image: "/api/placeholder/64/64",
      content:
        "The automated reminders and easy rescheduling have made my life so much easier. My clients love it too!",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Life Coach",
      image: "/api/placeholder/64/64",
      content:
        "Finally, a booking system that understands my needs. The AI suggestions for scheduling are spot-on.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Loved by Businesses Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
