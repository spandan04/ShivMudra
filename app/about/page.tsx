import React from 'react';
import AboutUs from '@/components/AboutUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Shiv Mudra Wealth Management LLP',
  description: 'Learn about Shiv Mudra Wealth Management LLP, our mission, approach, and how we help individuals, families, and NRIs build, protect and grow their wealth.',
};

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutUs />
      <Footer />
    </main>
  );
}
