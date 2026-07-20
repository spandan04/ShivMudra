import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/nri-corner/HeroSection";
import CredibilitySection from "@/components/nri-corner/CredibilitySection";
import WhyNriCorner from "@/components/nri-corner/WhyNriCorner";
import RelationshipManager from "@/components/nri-corner/RelationshipManager";
import DocumentCenter from "@/components/nri-corner/DocumentCenter";
import FaqSection from "@/components/nri-corner/FaqSection";
import InvestmentProcess from "@/components/nri-corner/InvestmentProcess";
import InvestmentOptions from "@/components/nri-corner/InvestmentOptions";

import ContactForm from "@/components/nri-corner/ContactForm";

export const metadata: Metadata = {
  title: "NRI Corner - Investment Solutions | Shiv Mudra Wealth Management",
  description: "Helping NRIs manage, grow, and protect their wealth in India through investment solutions, demat services, mutual funds, and financial advisory.",
};

export default function NriCornerPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CredibilitySection />
      <RelationshipManager />
      <WhyNriCorner />
      <InvestmentProcess />
      <InvestmentOptions />
      <DocumentCenter />
      <FaqSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
