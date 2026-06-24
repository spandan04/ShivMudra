// lib/services-mock-data.ts

export interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  benefits: { icon: string; title: string; desc: string }[];
  features: { icon: string; label: string; value: string }[];
  process: { step: number; title: string; desc: string }[];
  idealFor: string[];
}

export const servicesMockData: Record<string, ServiceDetail> = {
  "mutual-funds": {
    id: "mutual-funds",
    name: "Mutual Funds",
    tagline: "Professionally managed. Purposefully planned.",
    overview: "Invest in a diversified portfolio of professionally managed mutual funds to build long-term wealth. Our curated selection process ensures your investments align perfectly with your risk appetite, financial goals, and investment horizon. Benefit from disciplined investing and expert fund management without the hassle of tracking individual stocks.",
    benefits: [
      { icon: "PieChart", title: "Diversification", desc: "Spread risk across multiple assets and sectors to minimize volatility." },
      { icon: "UserCircle", title: "Expert Management", desc: "Benefit from professional research and active fund management." },
      { icon: "Droplets", title: "Liquidity", desc: "Easy to buy, sell, or switch between funds based on your needs." },
      { icon: "Search", title: "Transparency", desc: "Regular reporting and complete transparency on holdings and expenses." }
    ],
    features: [
      { icon: "Wallet", label: "Minimum Investment", value: "₹500 SIP" },
      { icon: "Gauge", label: "Risk Level", value: "Low to High" },
      { icon: "Calendar", label: "Investment Horizon", value: "3+ Years" },
      { icon: "Target", label: "Ideal For", value: "Long-term wealth creation" }
    ],
    process: [
      { step: 1, title: "Goal Assessment", desc: "Understand your financial goals and expectations." },
      { step: 2, title: "Risk Profiling", desc: "Evaluate risk appetite and investment horizon." },
      { step: 3, title: "Fund Selection", desc: "Choose the right funds aligned to your goals." },
      { step: 4, title: "Portfolio Monitoring", desc: "Continuous tracking and periodic rebalancing." }
    ],
    idealFor: [
      "First-time investors looking for guided wealth creation",
      "Professionals seeking disciplined investing through SIPs",
      "Families planning for major life events (education, marriage)",
      "Retirees looking for steady income through SWPs"
    ]
  },
  "portfolio-management": {
    id: "portfolio-management",
    name: "Portfolio Management",
    tagline: "Bespoke strategies. Exceptional execution.",
    overview: "Our Portfolio Management Services (PMS) offer customized investment solutions designed for High Net Worth Individuals (HNIs). We actively manage your wealth by investing across equities, fixed income, and alternative assets, aiming for superior risk-adjusted returns while adhering to a strict investment philosophy.",
    benefits: [
      { icon: "Settings", title: "Customization", desc: "Tailor-made portfolios built specifically for your unique financial goals." },
      { icon: "TrendingUp", title: "Active Management", desc: "Continuous monitoring and dynamic asset allocation to capture market opportunities." },
      { icon: "Eye", title: "Direct Ownership", desc: "You directly own the underlying securities in your demat account." },
      { icon: "Shield", title: "Risk Control", desc: "Stringent risk management frameworks to protect capital during downturns." }
    ],
    features: [
      { icon: "Wallet", label: "Minimum Investment", value: "₹50 Lakhs" },
      { icon: "Gauge", label: "Risk Level", value: "Moderate to High" },
      { icon: "Calendar", label: "Investment Horizon", value: "5+ Years" },
      { icon: "Target", label: "Ideal For", value: "Aggressive wealth growth" }
    ],
    process: [
      { step: 1, title: "Discovery", desc: "Deep dive into your financial situation and aspirations." },
      { step: 2, title: "Strategy Design", desc: "Crafting a bespoke asset allocation strategy." },
      { step: 3, title: "Execution", desc: "Deploying capital across curated investment opportunities." },
      { step: 4, title: "Active Review", desc: "Ongoing portfolio optimization and performance reporting." }
    ],
    idealFor: [
      "High Net Worth Individuals (HNIs) and Ultra-HNIs",
      "Business owners seeking to diversify their personal wealth",
      "Investors looking for concentrated, high-conviction portfolios",
      "Those desiring a dedicated portfolio manager and personalized service"
    ]
  },
  "wealth-management": {
    id: "wealth-management",
    name: "Wealth Management",
    tagline: "Holistic planning. Generational impact.",
    overview: "Comprehensive wealth management that goes beyond traditional investing. We look at your entire financial picture—including investments, taxes, estate planning, and insurance—to create a unified strategy that preserves your legacy and maximizes your wealth across generations.",
    benefits: [
      { icon: "Layers", title: "Holistic Approach", desc: "Integration of all aspects of your financial life into a single cohesive plan." },
      { icon: "Briefcase", title: "Consolidated Reporting", desc: "A unified view of your entire net worth across all asset classes." },
      { icon: "HeartHandshake", title: "Family Office Experience", desc: "Premium, white-glove service catering to complex family dynamics." },
      { icon: "Scale", title: "Tax Efficiency", desc: "Strategies designed to minimize tax liabilities and maximize after-tax returns." }
    ],
    features: [
      { icon: "Wallet", label: "Minimum Investment", value: "Custom" },
      { icon: "Gauge", label: "Risk Level", value: "Customized" },
      { icon: "Calendar", label: "Investment Horizon", value: "Generational" },
      { icon: "Target", label: "Ideal For", value: "Complete wealth orchestration" }
    ],
    process: [
      { step: 1, title: "Comprehensive Audit", desc: "Reviewing all existing assets, liabilities, and structures." },
      { step: 2, title: "Blueprint Creation", desc: "Developing a holistic wealth preservation and growth plan." },
      { step: 3, title: "Implementation", desc: "Executing strategies across investments, tax, and legal frameworks." },
      { step: 4, title: "Generational Review", desc: "Periodic adjustments and family wealth education." }
    ],
    idealFor: [
      "Ultra-High Net Worth Families with complex financial structures",
      "Promoters and founders undergoing liquidity events",
      "Families requiring succession and estate planning",
      "Individuals seeking a 'Family Chief Financial Officer'"
    ]
  }
};

// Fallback data generator for services not explicitly defined above
export const getServiceDetail = (slug: string): ServiceDetail => {
  if (servicesMockData[slug]) {
    return servicesMockData[slug];
  }

  // Fallback for undefined slugs
  const formattedName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    id: slug,
    name: formattedName,
    tagline: "Expertly managed. Strategically aligned.",
    overview: `Our ${formattedName} service provides institutional-grade solutions tailored to your unique financial profile. We leverage deep market expertise, rigorous research, and advanced risk management protocols to ensure your capital is positioned optimally for both preservation and growth in dynamic market environments.`,
    benefits: [
      { icon: "CheckCircle2", title: "Strategic Allocation", desc: "Optimal positioning of capital based on macro-economic trends." },
      { icon: "TrendingUp", title: "Performance Focus", desc: "Relentless pursuit of risk-adjusted returns across market cycles." },
      { icon: "Shield", title: "Risk Mitigation", desc: "Advanced downside protection frameworks to preserve capital." },
      { icon: "Eye", title: "Total Transparency", desc: "Clear, concise reporting on performance, costs, and strategy." }
    ],
    features: [
      { icon: "Wallet", label: "Minimum Investment", value: "Varies" },
      { icon: "Gauge", label: "Risk Level", value: "Profile Based" },
      { icon: "Calendar", label: "Investment Horizon", value: "Customizable" },
      { icon: "Target", label: "Ideal For", value: "Strategic Wealth Building" }
    ],
    process: [
      { step: 1, title: "Consultation", desc: "Initial meeting to understand your objectives." },
      { step: 2, title: "Analysis", desc: "Deep dive into requirements and market conditions." },
      { step: 3, title: "Strategy", desc: "Formulation of a bespoke approach." },
      { step: 4, title: "Execution", desc: "Implementation and continuous monitoring." }
    ],
    idealFor: [
      "Astute investors seeking professional management",
      "Professionals aiming for structured wealth creation",
      "Families planning for multi-generational wealth transfer"
    ]
  };
};
