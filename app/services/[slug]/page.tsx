import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceDetailsHero } from "@/components/services/ServiceDetailsHero";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import { ServiceContent } from "@/components/services/ServiceContent";
import { getServiceDetail } from "@/lib/services-mock-data";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceDetail(params.slug);
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.name} | Shiv Mudra Wealth Management`,
    description: service.overview,
  };
}

export default function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const serviceData = getServiceDetail(params.slug);

  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafaf8]">
        <ServiceDetailsHero 
          name={serviceData.name} 
          tagline={serviceData.tagline} 
          description={serviceData.overview} 
        />
        
        <section className="py-24">
          <div className="section-shell flex flex-col lg:flex-row gap-12">
            <ServiceSidebar />
            <ServiceContent data={serviceData} />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
