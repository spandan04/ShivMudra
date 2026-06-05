import { ConsultationForm } from "@/components/ConsultationForm";
import { FeaturedSolutions } from "@/components/FeaturedSolutions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarketDashboard } from "@/components/MarketDashboard";
import { MarketSnapshot } from "@/components/MarketSnapshot";
import { News } from "@/components/News";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MarketSnapshot />
      <Services />
      <FeaturedSolutions />
      <MarketDashboard />
      <News />
      <WhyChoose />
      <Testimonials />
      <ConsultationForm />
      <Footer />
    </main>
  );
}
