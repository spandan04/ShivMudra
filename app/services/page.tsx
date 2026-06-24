import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceCategories } from "@/components/services/ServiceCategories";
import { WhyShivMudra } from "@/components/services/WhyShivMudra";
import { ConsultationCTA } from "@/components/services/ConsultationCTA";

export const metadata: Metadata = {
  title: "Our Services | Shiv Mudra Wealth Management",
  description: "Comprehensive financial services tailored to help you build, protect, and grow your wealth.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafaf8]">
        <ServicesHero />
        <ServiceCategories />
        <WhyShivMudra />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}
