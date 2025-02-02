import Link from "next/link";
import { Button } from "../ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.2] -z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Start Growing Your Business Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of successful businesses using Clyne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <Link href="/register">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white bg-white/10 border-white hover:bg-white"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
