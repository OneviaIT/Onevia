import type { LucideIcon } from 'lucide-react';
import {
  Box,
  Database,
  Cpu,
  CheckCircle2,
  Terminal,
  Activity,
  Code2,
  Cloud,
} from 'lucide-react';

export type Project = {
  title: string;
  client?: string;
  category: string;
  summary: string;
  outcome?: string;
  tags: string[];
  image?: string;
  video?: string;
  url?: string;
  year?: string;
};

// Add delivered projects here. The "Our work" section on Home renders from this list.
export const projects: Project[] = [
  {
    title: 'Tender',
    category: 'AI & Agents',
    summary:
      'Agentic commerce, settled instantly with PayPal. Every person and business gets an AI agent with its own PayPal-backed wallet and spending guardrails. Agents discover needs, negotiate offers with other agents, and settle payments automatically, all supervised from a real-time command center built on AG Grid.',
    outcome: 'Legal tender (money) + to tender an offer (what agents do when they negotiate and buy).',
    tags: ['Agentic AI', 'PayPal', 'AG Grid', 'Real-time'],
    image: '/projects/tender.svg',
    url: 'https://tender-web-686i.onrender.com',
  },
  {
    title: 'Storage Metrics Analyzer',
    client: 'Chrome Extension (Manifest V3)',
    category: 'Software & Web',
    summary:
      'A lightweight Chrome extension for capturing and comparing browser storage usage across the UI modules of any web application.',
    outcome: 'Pinpoints which modules bloat browser storage.',
    tags: ['Chrome Extension', 'Manifest V3', 'Developer tooling'],
    image: '/projects/storage-metrics.svg',
  },
  {
    title: 'Waikkala Grinding Mills: Tea Shop',
    client: 'React E-commerce',
    category: 'Software & Web',
    summary: 'A modern, responsive React e-commerce application for Ceylon tea products.',
    outcome: 'A smooth online shopping experience for Ceylon tea.',
    tags: ['React', 'E-commerce', 'Responsive'],
    video: '/projects/waikkala.mp4',
  },
  {
    title: 'MemoryWeave',
    category: 'AI & Agents',
    summary:
      'A persistent, hierarchical memory framework that gives Qwen-powered AI agents genuine long-term memory. The agent remembers who you are, what you prefer, and what you have discussed, across sessions, days and weeks.',
    outcome: 'Agents that remember across sessions.',
    tags: ['Agent memory', 'Qwen', 'LLM'],
    image: '/projects/memoryweave.svg',
  },
  {
    title: 'AI Chatbot for Existing Products',
    category: 'AI & Agents',
    summary:
      'An AI chatbot integrated safely into a product that is already live, with scoped data access and guardrails, so users get instant answers without a rebuild.',
    outcome: 'Instant answers inside your product, with no rebuild.',
    tags: ['Chatbot', 'Product integration', 'Guardrails'],
    image: '/projects/ai-chatbot.svg',
  },
  {
    title: 'AI Incident Reporter for SaaS',
    category: 'AI & Agents',
    summary:
      'An agentic assistant that reports and summarises incidents for any SaaS application, turning raw signals into clear, actionable reports for the team.',
    outcome: 'Faster, clearer incident reports for every team.',
    tags: ['Agentic AI', 'SaaS', 'Incident management'],
    image: '/projects/incident-reporter.svg',
  },
  {
    title: 'Realtime AI Voice Assistant',
    category: 'AI & Agents',
    summary:
      'A realtime voice assistant powered by an agentic flow: it listens, reasons with tools, and responds naturally in conversation.',
    outcome: 'Natural, hands-free conversations that get things done.',
    tags: ['Voice AI', 'Agentic flow', 'Realtime'],
    image: '/projects/voice-assistant.svg',
  },
  {
    title: 'Caravan Web',
    client: 'UI/UX Design (Figma)',
    category: 'UI/UX Design',
    summary: 'Web experience design for a caravan project, from layout and flows to the visual system.',
    outcome: 'A cohesive visual system across every page.',
    tags: ['Figma', 'Web design', 'UI/UX'],
    image: '/projects/ux-caravan.png',
  },
  {
    title: 'Virtual Help',
    client: 'UI/UX Design (Figma)',
    category: 'UI/UX Design',
    summary: 'Interface design for a virtual help platform, focused on clear flows and approachable screens.',
    outcome: 'Clear flows that make help easy to find.',
    tags: ['Figma', 'Product design', 'UI/UX'],
    image: '/projects/ux-virtualhelp.png',
  },
  {
    title: 'Flexify',
    client: 'UI/UX Design (Figma)',
    category: 'UI/UX Design',
    summary: 'Mobile app design for an exercise companion, built around simple, motivating interactions.',
    outcome: 'Simple interactions that keep users motivated.',
    tags: ['Figma', 'Mobile app', 'UI/UX'],
    image: '/projects/ux-flexify.png',
  },
  {
    title: 'WattSaver',
    client: 'UI/UX Design (Figma)',
    category: 'UI/UX Design',
    summary: 'Design for an energy-saving app that makes electricity usage easy to understand and act on.',
    outcome: 'Energy usage that is easy to understand and act on.',
    tags: ['Figma', 'Mobile app', 'UI/UX'],
    image: '/projects/ux-wattsaver.png',
  },
  {
    title: 'Hotel Booking System',
    client: 'UI/UX Design (Figma)',
    category: 'UI/UX Design',
    summary: 'End-to-end booking experience design for a hotel management information system.',
    outcome: 'A smooth path from search to confirmed booking.',
    tags: ['Figma', 'Booking flow', 'UI/UX'],
    image: '/projects/ux-hotel-booking.png',
  },
  {
    title: 'SkyLink',
    client: 'UI/UX Design (Figma)',
    category: 'UI/UX Design',
    summary: 'Interface design for a triathlon-focused platform with clean, energetic screens.',
    outcome: 'Clean, energetic screens built for athletes.',
    tags: ['Figma', 'Web design', 'UI/UX'],
    image: '/projects/ux-skylink.png',
  },
  {
    title: 'Blender Animation: Motion Study',
    client: 'Blender 3D',
    category: '3D & Animation',
    summary: 'A 3D animation sequence modelled, lit and rendered in Blender.',
    outcome: 'Smooth, polished motion from concept to final render.',
    tags: ['Blender', '3D modelling', 'Animation'],
    video: '/projects/blender-animation-1.mp4',
  },
  {
    title: 'Blender Animation: Scene Render',
    client: 'Blender 3D',
    category: '3D & Animation',
    summary: 'A short animated scene built in Blender, from modelling and materials to final render.',
    outcome: 'Detailed materials and lighting in every frame.',
    tags: ['Blender', 'Rendering', 'Animation'],
    video: '/projects/blender-animation-2.mp4',
  },
  {
    title: 'Blender Animation: Visual Story',
    client: 'Blender 3D',
    category: '3D & Animation',
    summary: 'A third Blender animation exploring camera movement, lighting and visual storytelling.',
    outcome: 'Camera and light working together to tell a story.',
    tags: ['Blender', 'Lighting', 'Animation'],
    video: '/projects/blender-animation-3.mp4',
  },
];

export const company = {
  name: 'Onevia Labs',
  founded: 2026,
  tagline: 'Everything as a Service. One Partner. Infinite Possibilities.',
  altTagline: 'Your Vision. Our Technology. Onevia Labs.',
  shortPitch:
    'One accountable technology partner across the entire software lifecycle: build, scale, and operate.',
  // Production URL. Update if the live domain differs.
  url: 'https://onevia.lk',
  email: 'hello@onevialabs.com',
  phone: '+94 76 070 4768',
  location: 'Colombo, Sri Lanka',
  country: 'Sri Lanka',
  region: 'Western Province',
  city: 'Colombo',
  geo: { lat: 6.9271, lng: 79.8612 },
  social: {
    linkedin: 'https://www.linkedin.com/company/onevialabs',
  },
};

export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
  // { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export type Service = {
  slug: string;
  abbr: string;
  name: string;
  tagline: string;
  short: string;
  description: string;
  icon: LucideIcon;
  accent: string; // tailwind text color class for the icon
  capabilities: string[];
  outcomes: string[];
  featured?: boolean;
  buildToOrder: string;
  inbuilt?: { title: string; body: string; points: string[] };
  specialties?: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: 'saas',
    abbr: 'SaaS',
    name: 'Software as a Service',
    tagline: 'Ship product faster',
    short: 'End-to-end subscription product development.',
    description:
      'From multi tenant architecture and billing to onboarding, modernization, and ongoing enhancement, we build and run the product so you can focus on the business.',
    icon: Box,
    accent: 'text-accent',
    capabilities: [
      'Multi tenant architecture',
      'Billing & subscriptions',
      'Onboarding & activation',
      'Legacy modernization',
      'Ongoing enhancement',
      'Usage metering & plans',
    ],
    outcomes: ['Faster time to market', 'Lower maintenance overhead', 'Predictable delivery'],
    featured: true,
    buildToOrder:
      'We design and build Software as a Service platforms around your customer requirements: your workflows, your pricing model, your users. From multi tenant architecture to subscription billing and onboarding, we deliver a product that is yours, built to grow with your customer base.',
  },
  {
    slug: 'baas',
    abbr: 'BaaS',
    name: 'Backend as a Service',
    tagline: 'Secure, managed backends',
    short: 'Secure APIs, auth, databases and serverless.',
    description:
      'Secure APIs, authentication and authorization, database architecture, serverless backends, and fully managed, monitored infrastructure.',
    icon: Database,
    accent: 'text-blue-400',
    capabilities: [
      'REST & GraphQL APIs',
      'Authentication & RBAC',
      'Database architecture',
      'Serverless functions',
      'Managed infrastructure',
      'Monitoring & alerting',
    ],
    outcomes: ['Secure by default', 'Scales with demand', 'Less ops burden'],
    buildToOrder:
      'Backends are designed around your data, traffic and security requirements: APIs, authentication, databases and serverless services, built and operated to your specification.',
  },
  {
    slug: 'aiaas',
    abbr: 'AIaaS',
    name: 'Artificial Intelligence as a Service',
    tagline: 'Practical, production AI',
    short: 'LLM integrations, RAG assistants and agents.',
    description:
      'Practical AI that ships: LLM integrations, RAG and knowledge assistants, AI agents and workflow automation, intelligent document processing, and rigorous model integration and evaluation.',
    icon: Cpu,
    accent: 'text-purple-400',
    capabilities: [
      'LLM integration',
      'RAG & knowledge assistants',
      'AI agents & automation',
      'Document intelligence',
      'Model evaluation',
      'Guardrails & safety',
    ],
    outcomes: ['Measurable productivity', 'Responsible deployment', 'Human in the loop'],
    featured: true,
    buildToOrder:
      'Need something specific? We build AI solutions to your requirements, from knowledge assistants and workflow automation to fully custom agentic platforms.',
    inbuilt: {
      title: 'Ready to use AI platform',
      body: 'Alongside custom builds, Onevia Labs offers an inbuilt AIaaS platform so you can start using AI in your business without building the foundations first.',
      points: [
        'Faster start than a ground up build',
        'Guardrails and evaluation included',
        'Extend or customise to your needs',
      ],
    },
    specialties: [
      {
        title: 'Agentic AI platforms',
        body: 'Our engineers build agentic platforms: AI agents that plan, use tools, call your systems and complete multi step work, with human in the loop controls and full observability.',
      },
      {
        title: 'Safe integration into existing products',
        body: 'We have experience adding AI to products you already run, safely: scoped data access, prompt and output guardrails, evaluation, and staged rollout so existing users and data are protected.',
      },
    ],
  },
  {
    slug: 'qaaas',
    abbr: 'QAaaS',
    name: 'Quality Assurance as a Service',
    tagline: 'Quality as a standard',
    short: 'Manual + automated testing at scale.',
    description:
      'Manual and automated testing across API, web and mobile, performance and load testing, plus CI integrated quality gates and automation frameworks.',
    icon: CheckCircle2,
    accent: 'text-green-400',
    capabilities: [
      'Manual & exploratory QA',
      'Test automation frameworks',
      'API / web / mobile testing',
      'Performance & load testing',
      'CI integrated quality gates',
      'Release readiness',
    ],
    outcomes: ['Fewer regressions', 'Confident releases', 'Faster feedback'],
    buildToOrder:
      'We shape the test strategy and automation frameworks around your product, stack and release process.',
    inbuilt: {
      title: 'Ready to use QA platform',
      body: 'Onevia Labs offers an inbuilt QAaaS platform for test management and automation, so quality assurance can start quickly instead of after tooling is built.',
      points: [
        'Manual and automated testing in one place',
        'CI integrated quality gates',
        'Release readiness visibility',
      ],
    },
  },
  {
    slug: 'devopsaas',
    abbr: 'DevOpsaaS',
    name: 'DevOps as a Service',
    tagline: 'Continuous delivery, managed',
    short: 'CI/CD, IaC, containers and observability.',
    description:
      'CI/CD pipelines, Infrastructure as Code, containerization and Kubernetes, deployment automation, cloud management, and end to end observability.',
    icon: Terminal,
    accent: 'text-yellow-400',
    capabilities: [
      'CI/CD pipelines',
      'Infrastructure as Code',
      'Containers & Kubernetes',
      'Deployment automation',
      'Cloud management',
      'Observability',
    ],
    outcomes: ['Ship more often', 'Repeatable deploys', 'Clear visibility'],
    buildToOrder:
      'We build DevOps pipelines, infrastructure and tooling to your requirements: your cloud, your stack, your release process. Ready to build anything your delivery needs.',
  },
  {
    slug: 'sreaas',
    abbr: 'SREaaS',
    name: 'Site Reliability Engineering as a Service',
    tagline: 'Reliability by design',
    short: 'SLOs, incident response and resilience.',
    description:
      'SLOs/SLIs and error budgets, observability and alerting, incident management, capacity and resilience planning, and continuous performance optimization.',
    icon: Activity,
    accent: 'text-accent',
    capabilities: [
      'SLOs / SLIs & error budgets',
      'Observability & alerting',
      'Incident management',
      'Capacity planning',
      'Resilience engineering',
      'Performance optimization',
    ],
    outcomes: ['Higher uptime', 'Calmer on call', 'Resilient systems'],
    buildToOrder:
      'We build reliability practices and tooling to your requirements: SLOs, alerting, incident processes and resilience work tailored to your systems. Ready to build anything your reliability goals call for.',
  },
  {
    slug: 'custom-engineering',
    abbr: 'Custom',
    name: 'Custom Software Engineering',
    tagline: 'Bespoke, built right',
    short: 'Bespoke apps, integration & modernization.',
    description:
      'Bespoke applications, systems integration, legacy modernization, and pragmatic technical architecture, engineered for maintainability and measurable value.',
    icon: Code2,
    accent: 'text-blue-400',
    capabilities: [
      'Bespoke applications',
      'Systems integration',
      'Legacy modernization',
      'Technical architecture',
      'API & platform design',
      'Code quality & reviews',
    ],
    outcomes: ['Fit for purpose software', 'Reduced tech debt', 'Clear architecture'],
    buildToOrder:
      'Software built to your exact requirements, with architecture and code you can maintain.',
  },
  {
    slug: 'cloud-infrastructure',
    abbr: 'Cloud',
    name: 'Cloud & Infrastructure',
    tagline: 'Scalable foundations',
    short: 'Architecture, migration & cost control.',
    description:
      'Cloud architecture and migration, scalable infrastructure design, cost and performance optimization, and security and compliance foundations.',
    icon: Cloud,
    accent: 'text-purple-400',
    capabilities: [
      'Cloud architecture',
      'Migration & modernization',
      'Scalable infra design',
      'Cost optimization',
      'Security foundations',
      'Compliance readiness',
    ],
    outcomes: ['Lower cloud spend', 'Elastic scale', 'Secure baseline'],
    buildToOrder:
      'Cloud foundations designed around your workloads, budget and compliance needs.',
  },
];

export const consultingOffers = [
  {
    title: 'Consultation services',
    body: 'Architecture reviews, technology and platform selection, AI adoption strategy, DevOps and reliability assessments. Practical advice from engineers who build and run this software.',
  },
  {
    title: 'Expert resource persons',
    body: 'Need specialists on your own team? We can provide experienced engineers and domain experts in SaaS, AI, QA, DevOps, SRE and cloud, embedded with your team for as long as you need.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export type EngagementStep = { n: string; title: string; body: string };

export const engagement: EngagementStep[] = [
  {
    n: '01',
    title: 'Discover',
    body: 'A short conversation to understand your goals, constraints, and the outcomes that matter.',
  },
  {
    n: '02',
    title: 'Scope',
    body: 'A proposed scope, architecture, and delivery plan, transparent and agreed before work starts.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'We design, engineer, and integrate with one accountable team across every layer of the stack.',
  },
  {
    n: '04',
    title: 'Operate',
    body: 'Reliability, observability, and ongoing enhancement as a service, scaling up or down with you.',
  },
];

export const stats = [
  { value: '8', label: 'Services, one partner' },
  { value: '1', label: 'Accountable team' },
  { value: 'Build→Operate', label: 'Full lifecycle' },
  { value: '2026', label: 'Founded' },
];

export const integrations = [
  'AWS',
  'Azure',
  'Google Cloud',
  'Kubernetes',
  'OpenAI',
  'Vercel',
  'Stripe',
  'PostgreSQL',
];

export type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    name: 'Project',
    price: 'Scoped',
    cadence: '/ per project',
    blurb: 'A fixed, agreed scope for a single outcome.',
    features: [
      'Fixed, agreed scope',
      'One or more services combined',
      'Scope, architecture & delivery plan',
      'Handover & documentation',
    ],
    cta: 'Book discovery call',
  },
  {
    name: 'Partnership',
    price: 'Retainer',
    cadence: '/ ongoing',
    blurb: 'An ongoing, modular engagement with shared context.',
    features: [
      'Full stack of aaS offerings',
      'Dedicated, accountable team',
      'Shared context across services',
      'Flexible: scale up or down',
      'Proactive reliability & support',
    ],
    cta: 'Start a partnership',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    blurb: 'Tailored scope, SLAs and governance for scale.',
    features: [
      'Dedicated multi service team',
      'Custom SLAs & compliance',
      'Security & governance reviews',
      'Executive reporting',
    ],
    cta: 'Contact sales',
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'How do engagements work?',
    a: 'Every engagement starts with a short discovery conversation. We then propose a clear scope, architecture, and delivery plan before any build work begins. You can engage a single service or combine several into one integrated solution.',
  },
  {
    q: 'Can I start with just one service?',
    a: 'Yes. Onevia Labs is modular by design. Start with a single offering, say AIaaS or DevOpsaaS, and add more over time, all with shared context across one accountable team.',
  },
  {
    q: 'How is pricing determined?',
    a: 'Pricing is scoped per project or offered as an ongoing service (retainer). After discovery, you receive a transparent proposal before committing.',
  },
  {
    q: 'Can you build a SaaS platform to our requirements?',
    a: 'Yes. We build Software as a Service platforms around your customer requirements, from multi tenant architecture and billing to onboarding and ongoing enhancement.',
  },
  {
    q: 'Do you offer consulting or expert resource persons?',
    a: 'Yes. Beyond delivery, we offer consultation services and can provide experienced specialists in a specific field, such as AI, QA, DevOps or SRE, to work with your team.',
  },
  {
    q: 'Can you add AI to our existing product safely?',
    a: 'Yes. Our AIaaS team has experience integrating AI into existing products with scoped data access, guardrails, evaluation and staged rollout. We also build agentic AI platforms.',
  },
  {
    q: 'Where can I see projects you have delivered?',
    a: 'See our Work page for delivered projects and case studies.',
  },
];

export const values = [
  {
    title: 'Partnership',
    body: 'One accountable partner across the whole stack; your outcomes are our mandate.',
  },
  {
    title: 'Practical',
    body: 'Outcome focused engineering over hype. We ship things that work and keep working.',
  },
  {
    title: 'Responsible',
    body: 'Careful, measured implementation: security, reliability, and maintainability first.',
  },
  {
    title: 'Transparent',
    body: 'Clear scope, clear plan, clear communication, before and throughout every engagement.',
  },
];
