import { AchievementsSection } from "@/components/home/AchievementsSection";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { CTABanner } from "@/components/home/CTABanner";
import { DirectorCallout } from "@/components/home/DirectorCallout";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { HeroSection } from "@/components/home/HeroSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProductsOverview } from "@/components/home/ProductsOverview";
import { SafetyProcess } from "@/components/home/SafetyProcess";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyIntro />
      <ProductsOverview />
      <IndustriesSection />
      <WhyChooseUs />
      <SafetyProcess />
      <FeaturedCategories />
      <ServicesSection />
      <StatsSection />
      <DirectorCallout />
      <AchievementsSection />
      <CTABanner />
    </>
  );
}
