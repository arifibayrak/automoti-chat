import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQSection } from "@/components/FAQSection";
import { CTAWaitlist } from "@/components/CTAWaitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <HowItWorks />
        <FAQSection />
        <CTAWaitlist />
      </main>
      <Footer />
    </>
  );
}
