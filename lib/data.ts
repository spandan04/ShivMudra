import {
  Award,
  BriefcaseBusiness,
  Eye,
  GraduationCap,
  BrainCog,
  Landmark,
  LineChart,
  LockKeyhole,
  PiggyBank,
  ShieldCheck,
  Target,
  TrendingUp,
  Users
} from "lucide-react";

export const navItems = [
  { label: "Market Data", href: "/market-data" },
  { label: "Wealth Services", href: "/services" },
  { label: "Advisory", href: "/advisory" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#contact" }
];

export const marketCards = [
  {
    name: "NIFTY",
    value: "22,514.65",
    change: "+0.85%",
    positive: true,
    data: [22110, 22240, 22310, 22280, 22450, 22510, 22514]
  },
  {
    name: "SENSEX",
    value: "74,227.63",
    change: "+0.72%",
    positive: true,
    data: [73150, 73480, 73920, 73840, 74200, 74160, 74227]
  },
  {
    name: "GOLD",
    value: "₹71,450",
    change: "-0.21%",
    positive: false,
    data: [71680, 71610, 71720, 71480, 71510, 71370, 71450]
  },
  {
    name: "USD/INR",
    value: "83.45",
    change: "-0.00%",
    positive: false,
    data: [83.48, 83.46, 83.47, 83.45, 83.45, 83.44, 83.45]
  }
];

export const homeServices = [
  {
    title: "Investment Solutions",
    icon: TrendingUp,
    items: [
      { label: "Mutual Funds", href: "https://www.amfiindia.com/" },
      { label: "SIP Planning", href: "https://www.investor.gov/introduction-investing/investing-basics/glossary/systematic-investment-plan-sip" },
      { label: "Equity Investments", href: "https://www.nseindia.com/invest" },
      { label: "Fixed Income", href: "https://www.rbi.org.in/" }
    ]
  },
  {
    title: "Wealth Advisory",
    icon: Landmark,
    items: [
      { label: "Wealth Management", href: "https://www.sebi.gov.in/" },
      { label: "Portfolio Management", href: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doPmr=yes" },
      { label: "Retirement Planning", href: "https://www.npscra.nsdl.co.in/" },
      { label: "Goal-Based Investing", href: "https://investor.sebi.gov.in/" }
    ]
  },
  {
    title: "Financial Protection",
    icon: ShieldCheck,
    items: [
      { label: "Insurance Advisory", href: "https://irdai.gov.in/" },
      { label: "Tax Planning", href: "https://www.incometax.gov.in/" },
      { label: "Bonds", href: "https://www.rbi.org.in/" },
      { label: "Demat Account Opening", href: "https://www.cdslindia.com/" }
    ]
  }
];

export const services = [
  {
    title: "Investment Solutions",
    icon: TrendingUp,
    items: [
      { label: "Mutual Funds", href: "/services/mutual-funds" },
      { label: "SIP Planning", href: "/services/sip-planning" },
      { label: "Equity Investments", href: "/services/equity-investments" },
      { label: "Fixed Income", href: "/services/fixed-income" }
    ]
  },
  {
    title: "Wealth Advisory",
    icon: Landmark,
    items: [
      { label: "Wealth Management", href: "/services/wealth-management" },
      { label: "Portfolio Management", href: "/services/portfolio-management" },
      { label: "Retirement Planning", href: "/services/retirement-planning" },
      { label: "Goal-Based Investing", href: "/services/goal-based-investing" }
    ]
  },
  {
    title: "Financial Protection",
    icon: ShieldCheck,
    items: [
      { label: "Insurance Advisory", href: "/services/insurance-advisory" },
      { label: "Tax Planning", href: "/services/tax-planning" },
      { label: "Bonds", href: "/services/bonds" },
      { label: "Demat Account Opening", href: "/services/demat-account-opening" }
    ]
  }
];

export const solutions = [
  {
    title: "Wealth Creation",
    icon: PiggyBank,
    copy: "Aggressive growth strategies focusing on long-term capital appreciation through diversified equity exposure.",
    imageUrl: "/solutions/wealth_creation.png"
  },
  {
    title: "Capital Protection",
    icon: LockKeyhole,
    copy: "Conservative portfolios prioritizing capital preservation with stable, risk-adjusted returns.",
    imageUrl: "/solutions/capital_protection.png"
  },
  {
    title: "Retirement Planning",
    icon: Target,
    copy: "Structured income generation strategies to ensure financial independence during your golden years.",
    imageUrl: "/solutions/retirement_planning.png"
  },
  {
    title: "Legacy Planning",
    icon: Award,
    copy: "Sophisticated trust and estate structures to ensure seamless wealth transfer to the next generation.",
    imageUrl: "/solutions/legacy_planning.png"
  }
];

export const niftyData = [
  { day: "Mon", value: 22220 },
  { day: "Tue", value: 22360 },
  { day: "Wed", value: 22295 },
  { day: "Thu", value: 22470 },
  { day: "Fri", value: 22514 },
  { day: "Sat", value: 22620 }
];

export const sensexData = [
  { day: "Mon", value: 73620 },
  { day: "Tue", value: 73910 },
  { day: "Wed", value: 73840 },
  { day: "Thu", value: 74180 },
  { day: "Fri", value: 74227 },
  { day: "Sat", value: 74410 }
];

export const gainers = [
  { name: "HDFC Bank", price: "₹1,684.20", change: "+2.84%" },
  { name: "Tata Steel", price: "₹166.35", change: "+2.41%" },
  { name: "Infosys", price: "₹1,489.80", change: "+1.92%" },
  { name: "Axis Bank", price: "₹1,178.15", change: "+1.63%" }
];

export const losers = [
  { name: "Asian Paints", price: "₹2,938.60", change: "-1.45%" },
  { name: "Nestle India", price: "₹2,404.10", change: "-1.12%" },
  { name: "Britannia", price: "₹5,132.75", change: "-0.94%" },
  { name: "Divi's Labs", price: "₹4,298.50", change: "-0.71%" }
];

export const newsTabs = {
  "Market News": [
    "Domestic indices close higher as banking and infrastructure shares lead risk appetite.",
    "Mid-cap funds continue to see steady inflows amid disciplined SIP participation.",
    "Gold softens as investors assess global bond yields and currency movements."
  ],
  Economy: [
    "India's services activity remains resilient, supported by credit growth and urban consumption.",
    "RBI commentary keeps liquidity expectations balanced for long-duration investors.",
    "Fiscal consolidation and capex quality stay central to long-term market confidence."
  ],
  "Corporate News": [
    "Large private banks report stable asset quality and healthy deposit mobilization.",
    "IT majors focus on AI-led productivity programs as global deal cycles normalize.",
    "Manufacturing-linked companies expand capacity on strong domestic order books."
  ],
  "Personal Finance": [
    "Goal-based portfolios help investors stay disciplined through volatile market phases.",
    "Term insurance and emergency liquidity remain foundational for young families.",
    "Tax-efficient rebalancing can improve after-tax portfolio outcomes over time."
  ]
};

export const reasons = [
  {
    title: "Unbiased Advice",
    icon: BrainCog,
    copy: "Our recommendations are driven purely by your interests, completely free from conflict."
  },
  {
    title: "Expert Team",
    icon: GraduationCap,
    copy: "Led by seasoned professionals with decades of collective market experience."
  },
  {
    title: "Radical Transparency",
    icon: Eye,
    copy: "Clear communication regarding fees, risks, and portfolio performance at all times."
  },
  {
    title: "Consistent Growth",
    icon: TrendingUp,
    copy: "A proven track record of delivering robust risk-adjusted returns across market cycles."
  }
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Entrepreneur",
    quote:
      "The Shiv Mudra team brought structure to our family investments and made every decision feel measured.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=240&q=80",
    rating: 5
  },
  {
    name: "Nisha Rao",
    role: "Senior Executive",
    quote:
      "Their retirement plan gave us clarity across income, insurance, and portfolio risk.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=80",
    rating: 5
  },
  {
    name: "Kabir Shah",
    role: "Second-generation Business Owner",
    quote:
      "We value the transparency, the calm advice, and the long-term view they bring to wealth.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=240&q=80",
    rating: 5
  }
];

export const footerColumns = [
  {
    title: "Company",
    links: ["About Us", "Our Philosophy", "Leadership", "Compliance"]
  },
  {
    title: "Services",
    links: ["Mutual Funds", "Portfolio Advisory", "Insurance", "Estate Planning"]
  },
  {
    title: "Resources",
    links: ["Market Insights", "Investor Education", "Disclosure", "Privacy Policy"]
  }
];

export const stats = [
  { value: "₹500Cr+", label: "Assets Managed" },
  { value: "15+", label: "Years Experience" }
];

export const serviceIcons = { Users, BriefcaseBusiness, LineChart };
