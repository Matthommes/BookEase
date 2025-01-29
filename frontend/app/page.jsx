import { CTASection } from "@/components/cta";
import { InteractiveDemo } from "@/components/demo";
import { FAQSection } from "@/components/faq";
import { Features } from "@/components/feature";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { InteractiveFeatures } from "@/components/ifeatures";
import { IntegrationsLogos } from "@/components/logos";
import { Navbar } from "@/components/nav";
import { Pricing } from "@/components/pricing";
import { CustomizationShowcase } from "@/components/showcase";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";



export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <CustomizationShowcase />
      <IntegrationsLogos />
      <InteractiveFeatures />
      <FAQSection />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}
