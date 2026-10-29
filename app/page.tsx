import AboutSection from "@/sections/home/AboutSection";
import HeroSection from "@/sections/home/HeroSection";
import ServiceSection from "@/sections/home/ServiceSection";
import TeamSection from "@/sections/home/TeamSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import FaqsSection from "@/sections/home/FaqsSection";

export default function Home() {
  return (
    <main>
      {/* Landing page sections */}
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <TeamSection />
      <TestimonialSection />
      <FaqsSection />
    </main>
  );
}
