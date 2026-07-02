export type ClientCase = {
  slug: string;
  category: string;
  tag: string;
  name: string;
  scope: string;
  deliverables: string[];
  outcome: string;
};

export const clients: ClientCase[] = [
  {
    slug: "lippo-group",
    category: "Retail & Supply Chain",
    tag: "Inventory · New Retail",
    name: "Lippo Group — New Retail Division",
    scope: "Stockopname system design & development",
    deliverables: [
      "Designed and built a digital stockopname platform replacing manual spreadsheet-based reconciliation across Lippo's new retail outlets.",
      "Enabled real-time, multi-outlet stock visibility with automated discrepancy alerts for store managers.",
      "Delivered end-to-end: stakeholder requirements gathering through to production deployment and handover.",
    ],
    outcome:
      "Significant reduction in stock reconciliation time; improved audit accuracy and visibility across retail network.",
  },
  {
    slug: "transcorp",
    category: "Retail & Supply Chain",
    tag: "Inventory · Operations",
    name: "Transcorp — Operations & Logistics Division",
    scope: "Stockopname & inventory management platform",
    deliverables: [
      "Developed a stockopname management system tailored to Transcorp's multi-unit operational and reporting requirements.",
      "Integrated with existing internal workflows to surface accurate, real-time inventory data for management reporting.",
      "Streamlined audit and reconciliation cycles across business units, reducing manual effort.",
    ],
    outcome:
      "Centralised inventory platform deployed across business units; materially improved data accuracy and reduced manual audit cycles.",
  },
  {
    slug: "ruang-rumi",
    category: "Retail & Supply Chain",
    tag: "Retail · POS & Inventory",
    name: "Ruang Rumi Coffeeshop — Store Operations (Pilot)",
    scope: "POS system integration & inventory sync advisory",
    deliverables: [
      "Advised on integration architecture between point-of-sale systems and central inventory management for pilot store operations.",
      "Identified sync bottlenecks in the existing stock-update pipeline and proposed a near-real-time event-driven solution.",
      "Provided technical documentation and handover to the internal engineering team for implementation.",
    ],
    outcome:
      "Delivered a clear integration roadmap that reduced inventory-sync lag, enabling more accurate stock-level reporting at the store level.",
  },
  {
    slug: "blue-bird-group",
    category: "Retail & Supply Chain",
    tag: "Logistics · Tech Advisory",
    name: "Blue Bird Group — Procurement & Operations",
    scope: "Procurement tools & IT consulting",
    deliverables: [
      "Served as embedded IT consultant for Blue Bird's procurement team — assessed existing workflows and recommended technology improvements.",
      "Delivered custom tooling for vendor management, purchase order tracking, and approval workflow automation.",
      "Provided ongoing advisory on operational technology stack and system integrations.",
    ],
    outcome:
      "Improved procurement team operational efficiency; reduced manual coordination overhead in vendor and order management workflows.",
  },
  {
    slug: "bank-mandiri",
    category: "Fintech & Payments",
    tag: "Banking · Digital Infra",
    name: "Bank Mandiri — Digital Banking Initiative",
    scope: "Fintech infrastructure advisory & API integration",
    deliverables: [
      "Provided technical advisory on payment API architecture and multi-partner integration strategy for digital banking workflows.",
      "Leveraged deep expertise in disbursement routing and fintech compliance to guide the integration approach.",
      "Reviewed API design, security standards, and SLA frameworks for payment processing pipelines.",
    ],
    outcome:
      "Delivered a structured integration playbook and API design recommendations aligned with OJK compliance requirements.",
  },
  {
    slug: "modalku",
    category: "Fintech & Payments",
    tag: "Fintech · Lending",
    name: "Modalku (Funding Societies) — Lending Platform",
    scope: "Lending flow optimisation & technical consulting",
    deliverables: [
      "Consulted on loan disbursement flow architecture, drawing on direct experience building BNPL and P2P lending systems.",
      "Identified performance bottlenecks in the disbursement pipeline and proposed a multi-partner agnostic routing layer.",
      "Advised on SLA optimisation strategies — translating a 7-day to 4-day SLA improvement into a replicable framework.",
    ],
    outcome:
      "Provided a clear disbursement architecture blueprint enabling faster partner onboarding and reduced SLA variability.",
  },
  {
    slug: "tokopedia",
    category: "Fintech & Payments",
    tag: "Payments · E-commerce",
    name: "Tokopedia Merchant Services — Payment Integration",
    scope: "Payment gateway integration & developer tooling",
    deliverables: [
      "Supported merchant payment integration work building reliable gateway abstraction layers across multiple Indonesian payment providers.",
      "Developed internal developer tooling to streamline payment integration testing and certification for merchant onboarding.",
      "Provided technical documentation and integration guides adopted by the merchant solutions team.",
    ],
    outcome:
      "Reduced merchant payment integration time through standardised tooling and clear API abstraction, improving onboarding velocity.",
  },
  {
    slug: "ai-consulting",
    category: "AI Integration & Product",
    tag: "AI Consulting",
    name: "Multiple SME & Enterprise Clients",
    scope: "AI automation, chatbot & RAG implementation",
    deliverables: [
      "Designed and implemented AI-powered workflow automation — document processing, automated customer responses, and operational task automation across multiple clients.",
      "Built customer service chatbots using Retrieval-Augmented Generation (RAG), enabling accurate context-aware responses grounded in client knowledge bases.",
      "Delivered AI adoption advisory: identifying high-ROI automation opportunities mapped to each client's specific operational context.",
    ],
    outcome:
      "Multiple SME clients reduced manual operational workload through targeted AI automation, with measurable improvement in customer response time and operational throughput.",
  },
  {
    slug: "homa",
    category: "AI Integration & Product",
    tag: "SaaS Product",
    name: "HOMA — Service Management Platform (Multi-client)",
    scope: "Full-stack service management system",
    deliverables: [
      "Architected and built HOMA — a full-stack service management SaaS (Next.js 14, TypeScript, PostgreSQL/Neon, Drizzle ORM) deployed across multiple cleaning and facility service businesses.",
      "Features: booking management, automated invoice generation, WhatsApp reminder integration via N8N, and Xendit payment gateway.",
      "Designed as a scalable multi-tenant platform, currently serving multiple business clients with ongoing feature expansion.",
    ],
    outcome:
      "Platform live and serving multiple SME clients, demonstrating end-to-end SaaS delivery from architecture to production.",
  },
  {
    slug: "umkm-startups",
    category: "AI Integration & Product",
    tag: "Digital Transformation",
    name: "Several UMKM & Growing Startups",
    scope: "Technology advisory & custom software delivery",
    deliverables: [
      "Provided hands-on technology consulting to multiple Indonesian SMEs and early-stage startups — spanning system architecture, tech stack selection, and custom software delivery.",
      "Built inventory management systems, internal tooling, and customer-facing applications tailored to each client's operational model.",
      "Offered ongoing advisory on scaling technology infrastructure as businesses grow.",
    ],
    outcome:
      "Enabled multiple businesses to replace manual processes with reliable digital systems, reducing operational overhead and improving data visibility.",
  },
];
