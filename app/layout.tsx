import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiv Mudra Wealth Management LLP",
  description:
    "Premium wealth management, investment advisory, and financial planning for long-term wealth creation.",
  openGraph: {
    title: "Shiv Mudra Wealth Management LLP",
    description:
      "Build, protect, and grow your wealth with personalized financial strategies.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-[#1a1a1a] bg-[#fafaf8] selection:bg-[#ff9933]/20 selection:text-[#0b2341]">
        {children}
      </body>
    </html>
  );
}
