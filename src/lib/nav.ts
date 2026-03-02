// Iflexion-style sitemap (no Blog, no Portfolio - to add in features later)
export const siteName = "Frexora Tech";
/** Brand name for logo (image may be from template; text ensures correct name) */
export const logoName = "Frexora";
export const tagline = "Global innovation and connected solutions";

export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Engagement Models", href: "/services#engagement-models" },
      { label: "Full Project Outsourcing", href: "/services#full-project-outsourcing" },
      { label: "Dedicated Teams", href: "/services#dedicated-teams" },
      { label: "Developers for Hire", href: "/services#developers" },
      { label: "Software Development", href: "/services#software-development" },
      { label: "Web Application Development", href: "/services#web-development" },
      { label: "Mobile App Development", href: "/services#mobile-development" },
      { label: "UX/UI Design", href: "/services#ux-ui-design" },
      { label: "MVP Development", href: "/services#mvp-development" },
      { label: "Quality Assurance", href: "/services#qa" },
      { label: "E-Commerce", href: "/services#ecommerce" },
      { label: "Cloud & DevOps", href: "/services#cloud-devops" },
      { label: "Data & Analytics", href: "/services#data-analytics" },
      { label: "Artificial Intelligence", href: "/services#ai" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Healthcare", href: "/industries#healthcare" },
      { label: "Retail", href: "/industries#retail" },
      { label: "Logistics", href: "/industries#logistics" },
      { label: "Insurance", href: "/industries#insurance" },
      { label: "Manufacturing", href: "/industries#manufacturing" },
      { label: "Finance", href: "/industries#finance" },
      { label: "Energy & Utilities", href: "/industries#energy" },
      { label: "Professional Services", href: "/industries#professional-services" },
    ],
  },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
