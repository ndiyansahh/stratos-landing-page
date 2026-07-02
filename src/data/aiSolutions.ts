export type PlatformStat = {
  name: string;
  responseRate: string;
  avgResponseTime: string;
  satisfaction: string;
};

export type AiSolution = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  readTime: string;
  author: string;
  date: string;
  platforms?: PlatformStat[];
  challenge: string[];
  solutionGroups: { title: string; points: string[] }[];
  results: string[];
  techStack: { label: string; items: string }[];
};

export const aiSolutions: AiSolution[] = [
  {
    slug: "ai-agent-chat-integration",
    eyebrow: "Business Intelligence Solution",
    title: "AI Agent Chat Integration",
    summary:
      "Seamlessly integrate AI chat agents with your data from ERP or other databases. Deploy across WhatsApp, Telegram, and Instagram to provide 24/7 customer service without increasing overhead.",
    readTime: "~2 MIN",
    author: "Handi Sulyansah",
    date: "Jan 28, 2025",
    platforms: [
      { name: "WhatsApp", responseRate: "99%", avgResponseTime: "12s", satisfaction: "96%" },
      { name: "Telegram", responseRate: "97%", avgResponseTime: "8s", satisfaction: "93%" },
      { name: "Instagram", responseRate: "95%", avgResponseTime: "15s", satisfaction: "92%" },
      { name: "Custom Apps", responseRate: "98%", avgResponseTime: "6s", satisfaction: "97%" },
    ],
    challenge: [
      "Increasing customer support requests overwhelming their team",
      "Average response time of 24 minutes causing customer frustration",
      "Inconsistent service quality across different communication channels",
      "Inability to scale customer support without massive hiring",
    ],
    solutionGroups: [
      {
        title: "Multi-Platform AI Chat Integration",
        points: [
          "Developed a unified API connecting to WhatsApp, Telegram, and Instagram",
          "Created custom AI models trained on the client's knowledge base and past interactions",
          "Implemented real-time translation supporting multiple languages",
          "Designed seamless handoff to human agents for complex issues",
        ],
      },
      {
        title: "Business System Connectivity",
        points: [
          "Built secure connectors to the client's ERP and CRM systems",
          "Developed custom data extraction and transformation processes",
          "Implemented real-time inventory and order status checking capabilities",
          "Created a personalized recommendation engine based on purchase history",
        ],
      },
    ],
    results: [
      "98% reduction in average response time (24 minutes to 30 seconds)",
      "94% customer satisfaction rating (up from 76%)",
      "172% increase in conversion rate from chat interactions",
      "65% reduction in support team workload",
      "ROI achieved within just 3 months of implementation",
    ],
    techStack: [
      { label: "NLP / AI", items: "LLM-based conversational models, custom-trained models, sentiment analysis" },
      { label: "Integration", items: "REST APIs, WebSockets, custom webhooks" },
      { label: "Messaging", items: "WhatsApp Business API, Telegram Bot API, Instagram Messaging API" },
      { label: "Backend", items: "Node.js, TypeScript, containerized microservices" },
      { label: "Security", items: "End-to-end encryption, OAuth 2.0, custom data protection layer" },
    ],
  },
  {
    slug: "ai-powered-crm-platform",
    eyebrow: "Ecommerce Solutions",
    title: "AI-Powered CRM Platform",
    summary:
      "Manage customer interactions across multiple ecommerce platforms like Tokopedia, Shopee, and TikTok Shop in one unified dashboard. Our AI handles inquiries, maintains top service ratings, and increases conversion rates.",
    readTime: "~3 MIN",
    author: "Handi Sulyansah",
    date: "Feb 15, 2025",
    platforms: [
      { name: "WhatsApp", responseRate: "99%", avgResponseTime: "12s", satisfaction: "96%" },
      { name: "Telegram", responseRate: "97%", avgResponseTime: "8s", satisfaction: "93%" },
      { name: "Instagram", responseRate: "95%", avgResponseTime: "15s", satisfaction: "92%" },
      { name: "Custom Apps", responseRate: "98%", avgResponseTime: "6s", satisfaction: "97%" },
    ],
    challenge: [
      "Managing fragmented customer conversations across multiple platforms",
      "Prolonged response times averaging 24 minutes per inquiry",
      "Customer satisfaction rates of only 76% due to inconsistent service",
      "Low conversion rate of 3.2% from customer inquiries",
      "Inability to track the complete customer journey",
    ],
    solutionGroups: [
      {
        title: "Unified Communication Hub",
        points: [
          "Developed seamless integrations with Tokopedia, Shopee, TikTok Shop, and other marketplaces",
          "Created instant message synchronization across all channels",
          "Implemented AI-driven customer profile unification and history tracking",
          "Built automated conversation categorization and priority assignment",
        ],
      },
      {
        title: "Intelligent Response System",
        points: [
          "Designed a predictive response engine with context-aware suggestions",
          "Created a dynamic templating system with personalization capabilities",
          "Implemented natural language processing for intent recognition",
          "Developed automated follow-up sequences based on customer behavior",
        ],
      },
    ],
    results: [
      "Response time reduced from 24 minutes to just 30 seconds (98% reduction)",
      "Customer satisfaction increased from 76% to 94% (24% improvement)",
      "Conversion rate grew from 3.2% to 8.7% (172% increase)",
      "65% decrease in support team workload",
      "46% growth in repeat purchase frequency",
      "38% increase in average order value",
      "ROI achieved within just 4 months of deployment",
    ],
    techStack: [
      { label: "Integration", items: "RESTful APIs, WebSockets, platform-specific SDKs" },
      { label: "AI / ML", items: "Natural language understanding, sentiment analysis, intent classification" },
      { label: "Frontend", items: "React-based dashboard with real-time notifications" },
      { label: "Backend", items: "Scalable microservices architecture with message queueing" },
      { label: "Analytics", items: "Conversion tracking, multi-touch attribution, A/B testing framework" },
    ],
  },
];
