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

export const company = {
  name: 'Onevia',
  founded: 2025,
  tagline: 'Everything as a Service. One Partner. Infinite Possibilities.',
  altTagline: 'Your Vision. Our Technology. Onevia.',
  shortPitch:
    'One accountable technology partner across the entire software lifecycle — build, scale, and operate.',
  // Placeholders pending owner input.
  email: 'hello@onevia.example',
  phone: '+1 (000) 000-0000',
  location: 'Remote-first · HQ pending',
  social: {
    x: '#',
    github: '#',
    linkedin: '#',
  },
};

export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
  { label: 'Careers', to: '/careers' },
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
};

export const services: Service[] = [
  {
    slug: 'saas',
    abbr: 'SaaS',
    name: 'Software as a Service',
    tagline: 'Ship product faster',
    short: 'End-to-end subscription product development.',
    description:
      'From multi-tenant architecture and billing to onboarding, modernization, and ongoing enhancement — we build and run the product so you can focus on the business.',
    icon: Box,
    accent: 'text-accent',
    capabilities: [
      'Multi-tenant architecture',
      'Billing & subscriptions',
      'Onboarding & activation',
      'Legacy modernization',
      'Ongoing enhancement',
      'Usage metering & plans',
    ],
    outcomes: ['Faster time-to-market', 'Lower maintenance overhead', 'Predictable delivery'],
    featured: true,
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
    outcomes: ['Measurable productivity', 'Responsible deployment', 'Human-in-the-loop'],
    featured: true,
  },
  {
    slug: 'qaaas',
    abbr: 'QAaaS',
    name: 'Quality Assurance as a Service',
    tagline: 'Quality as a standard',
    short: 'Manual + automated testing at scale.',
    description:
      'Manual and automated testing across API, web and mobile, performance and load testing, plus CI-integrated quality gates and automation frameworks.',
    icon: CheckCircle2,
    accent: 'text-green-400',
    capabilities: [
      'Manual & exploratory QA',
      'Test automation frameworks',
      'API / web / mobile testing',
      'Performance & load testing',
      'CI-integrated quality gates',
      'Release readiness',
    ],
    outcomes: ['Fewer regressions', 'Confident releases', 'Faster feedback'],
  },
  {
    slug: 'devopsaas',
    abbr: 'DevOpsaaS',
    name: 'DevOps as a Service',
    tagline: 'Continuous delivery, managed',
    short: 'CI/CD, IaC, containers and observability.',
    description:
      'CI/CD pipelines, Infrastructure as Code, containerization and Kubernetes, deployment automation, cloud management, and end-to-end observability.',
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
    outcomes: ['Higher uptime', 'Calmer on-call', 'Resilient systems'],
  },
  {
    slug: 'custom-engineering',
    abbr: 'Custom',
    name: 'Custom Software Engineering',
    tagline: 'Bespoke, built right',
    short: 'Bespoke apps, integration & modernization.',
    description:
      'Bespoke applications, systems integration, legacy modernization, and pragmatic technical architecture — engineered for maintainability and measurable value.',
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
    outcomes: ['Fit-for-purpose software', 'Reduced tech debt', 'Clear architecture'],
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
    body: 'A proposed scope, architecture, and delivery plan — transparent and agreed before work starts.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'We design, engineer, and integrate — one accountable team across every layer of the stack.',
  },
  {
    n: '04',
    title: 'Operate',
    body: 'Reliability, observability, and ongoing enhancement as a service — scaling up or down with you.',
  },
];

export const stats = [
  { value: '8', label: 'Services, one partner' },
  { value: '1', label: 'Accountable team' },
  { value: 'Build→Operate', label: 'Full lifecycle' },
  { value: '2025', label: 'Founded' },
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
      'Flexible — scale up or down',
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
      'Dedicated multi-service team',
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
    a: 'Yes. Onevia is modular by design. Start with a single offering — say AIaaS or DevOpsaaS — and add more over time, all with shared context across one accountable team.',
  },
  {
    q: 'How is pricing determined?',
    a: 'Pricing is scoped per project or offered as an ongoing service (retainer). After discovery, you receive a transparent proposal before committing.',
  },
  {
    q: 'Are the case studies real?',
    a: 'Onevia is an early-stage brand founded in 2025. Current examples are illustrative concepts; real customer case studies will be published as engagements complete.',
  },
];

export const values = [
  {
    title: 'Partnership',
    body: 'One accountable partner across the whole stack — your outcomes are our mandate.',
  },
  {
    title: 'Practical',
    body: 'Outcome-focused engineering over hype. We ship things that work and keep working.',
  },
  {
    title: 'Responsible',
    body: 'Careful, measured implementation — security, reliability, and maintainability first.',
  },
  {
    title: 'Transparent',
    body: 'Clear scope, clear plan, clear communication — before and throughout every engagement.',
  },
];
