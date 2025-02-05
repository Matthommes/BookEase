"use client"

import { CTASection } from "@/components/layout/cta";
import { InteractiveDemo } from "@/components/layout/demo";
import { FAQSection } from "@/components/layout/faq";
import { Features } from "@/components/layout/feature";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/hero";
import { InteractiveFeatures } from "@/components/layout/ifeatures";
import { IntegrationsLogos } from "@/components/layout/logos";
import { Navbar } from "@/components/layout/nav";
import { Pricing } from "@/components/layout/pricing";
import { CustomizationShowcase } from "@/components/layout/showcase";
import { Stats } from "@/components/layout/stats";
import { Testimonials } from "@/components/layout/testimonials";

export default function MainLayout() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <CustomizationShowcase />
      <IntegrationsLogos />
      <InteractiveDemo />
      <InteractiveFeatures />
      <Testimonials />
      <Pricing />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}