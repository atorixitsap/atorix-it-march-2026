import { seoData } from "@/seo/seoData";

import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: seoData.home.title,
  description: seoData.home.description,
  keywords: seoData.home.keywords,
  openGraph: seoData.home.openGraph,
  alternates: {
    canonical: seoData.home.canonical,
  },
};

export default function HomePage() {
  return (
    <>
      {/* ✅ SCHEMA ADDED */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.home.schema),
        }}
      />

      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <FeaturesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
