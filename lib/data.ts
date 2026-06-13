export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  details: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
}

export interface Certification {
  id: number;
  name: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'it-asset-disposal',
    title: 'IT Asset Disposal',
    description:
      'Compliant disposal of laptops, desktops, servers, and networking equipment with full chain-of-custody documentation.',
    details: [
      'Legally compliant disposal under the E-Waste (Management) Rules, 2016',
      'Form 6 documentation issued for every consignment',
      'Full chain-of-custody tracking from pickup to processing',
      'Asset tagging and inventory reconciliation',
      'Secure transport with GPS-tracked vehicles',
    ],
  },
  {
    id: 2,
    slug: 'data-destruction',
    title: 'Secure Data Destruction',
    description:
      'NIST 800-88 compliant data wiping and physical destruction with a Certificate of Destruction issued per device.',
    details: [
      'NIST 800-88 compliant data wiping for functional storage',
      'Physical shredding for non-functional or high-security media',
      'Certificate of Destruction issued for every device',
      'Witnessed destruction available on request',
      'Audit-ready documentation for compliance reporting',
    ],
  },
  {
    id: 3,
    slug: 'ewaste-recycling',
    title: 'E-Waste Recycling',
    description:
      'CPCB-authorised recycling of all electronic waste categories with sustainability reporting.',
    details: [
      'CPCB-authorised recycling protocols',
      'Processing of all e-waste categories',
      'Zero-landfill commitment',
      'CO2 savings and environmental impact reporting',
      'Responsible recovery of precious and base metals',
    ],
  },
  {
    id: 4,
    slug: 'refurbishment',
    title: 'IT Asset Refurbishment',
    description:
      'Extend asset lifecycle through certified refurbishment and responsible remarketing.',
    details: [
      'Testing and grading of viable assets',
      'Certified repair and refurbishment',
      'Responsible remarketing channels',
      'Value recovery returned to your organisation',
      'Data sanitisation before resale',
    ],
  },
  {
    id: 5,
    slug: 'epr-compliance',
    title: 'EPR Compliance',
    description:
      'Extended Producer Responsibility documentation, Form 6 issuance, and CPCB compliance support.',
    details: [
      'Extended Producer Responsibility documentation',
      'Form 6 issuance under E-Waste Rules, 2016',
      'CPCB compliance support and advisory',
      'Annual returns and audit assistance',
      'Producer registration guidance',
    ],
  },
  {
    id: 6,
    slug: 'sustainability-reporting',
    title: 'Sustainability Reporting',
    description:
      'CO2 savings calculation, environmental impact reports, and ESG documentation for your organisation.',
    details: [
      'CO2 savings calculation per consignment',
      'Environmental impact reports',
      'ESG documentation for corporate reporting',
      'Material recovery summaries',
      'Custom sustainability dashboards',
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'understanding-e-waste-rules-2016',
    title: 'Understanding the E-Waste (Management) Rules, 2016',
    excerpt:
      'A practical guide for enterprises on staying compliant with India\u2019s e-waste regulations.',
    content:
      'The E-Waste (Management) Rules, 2016 set out the legal framework for the responsible disposal of electronic waste in India. Enterprises that generate e-waste are obligated to ensure their assets are handed to CPCB-authorised recyclers, with Form 6 documentation maintained as proof of compliant disposal. This guide walks through what the rules require, what documentation you need, and how to build a defensible compliance trail for audits.',
    category: 'Compliance',
    date: '2025-01-15',
  },
  {
    id: 2,
    slug: 'why-certified-data-destruction-matters',
    title: 'Why Certified Data Destruction Matters',
    excerpt:
      'Retired devices retain sensitive data. Here is why certified destruction is non-negotiable.',
    content:
      'When IT assets reach end-of-life, the data they hold remains a liability until it is verifiably destroyed. Certified data destruction \u2014 whether through NIST 800-88 compliant wiping or physical shredding \u2014 ensures that confidential information cannot be recovered. A Certificate of Destruction provides the documented proof your security and compliance teams need.',
    category: 'Data Security',
    date: '2025-02-10',
  },
  {
    id: 3,
    slug: 'building-a-sustainable-it-asset-lifecycle',
    title: 'Building a Sustainable IT Asset Lifecycle',
    excerpt:
      'From procurement to disposal, a circular approach to IT assets reduces cost and environmental impact.',
    content:
      'A sustainable IT asset lifecycle considers the environmental impact of devices from the moment they are procured through to their responsible disposal. By extending asset life through refurbishment, recovering value through remarketing, and recycling what cannot be reused, organisations reduce both cost and carbon footprint while meeting their ESG commitments.',
    category: 'Sustainability',
    date: '2025-03-05',
  },
];

export const certifications: Certification[] = [
  { id: 1, name: 'CPCB Authorised', description: 'Central Pollution Control Board authorisation under the E-Waste (Management) Rules, 2016.' },
  { id: 2, name: 'EPR Registration', description: 'Extended Producer Responsibility registration for compliant e-waste handling.' },
  { id: 3, name: 'ISO 14001:2015', description: 'Environmental Management System certification.' },
  { id: 4, name: 'ISO 9001:2015', description: 'Quality Management System certification.' },
  { id: 5, name: 'ISO 27001:2022', description: 'Information Security Management System certification.' },
  { id: 6, name: 'ISO 45001:2018', description: 'Occupational Health and Safety Management certification.' },
  { id: 7, name: 'R2v3', description: 'Responsible Recycling certification for electronics recyclers.' },
  { id: 8, name: 'KSPCB Authorised', description: 'Karnataka State Pollution Control Board authorisation.' },
];

export const faqs: FAQ[] = [
  {
    question: 'How is data securely destroyed?',
    answer:
      'We use NIST 800-88 compliant data wiping for functional storage devices and physical shredding for non-functional or high-security cases. Every destruction event is documented and a Certificate of Destruction is issued.',
  },
  {
    question: 'Do you provide Form 6 documentation?',
    answer:
      'Yes. Form 6 is issued for all e-waste processed under the E-Waste (Management) Rules, 2016. This is your compliance record for CPCB purposes.',
  },
  {
    question: 'Do you offer pan-India pickup?',
    answer:
      'Yes. We operate pickup services across 245+ cities and towns in India, with primary coverage in Bangalore, Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR.',
  },
  {
    question: 'What types of IT assets do you accept?',
    answer:
      'Laptops, desktops, servers, workstations, networking equipment, printers, scanners, UPS systems, mobile devices, tablets, and all peripheral electronics.',
  },
  {
    question: 'Are you CPCB authorised?',
    answer:
      'Yes. E-Hasiru holds CPCB Authorisation under the E-Waste (Management) Rules, 2016. We are also ISO certified and R2v3 certified.',
  },
];
