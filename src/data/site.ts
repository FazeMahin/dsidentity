import type {
  DSEvent,
  InitiativeCard,
  InterviewFeature,
  LegacyItem,
  MagazineEdition,
  NavItem,
  StudyResource,
  TeamMember,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Beyond Books", href: "/beyond-books" },
  { label: "Beyond Ventures", href: "/beyond-ventures" },
  { label: "Beyond Borders", href: "/beyond-borders" },
  { label: "DS Events", href: "/events" },
  { label: "Meet the Team", href: "/team", isLast: true },
];

export const stats = [
  { value: 8, label: "Cycles of DS Ventures", suffix: "" },
  { value: 0, label: "Students Engaged", suffix: "+", placeholder: true },
  { value: 0, label: "Events and Initiatives", suffix: "+", placeholder: true },
  { value: 0, label: "Years of Impact", suffix: "+", placeholder: true },
];

export const initiatives: InitiativeCard[] = [
  {
    title: "Beyond Books",
    tagline: "Knowledge Without Boundaries.",
    description:
      "Academic resources, topic-based revision support, and exam guidance designed to make study smarter and more focused.",
    href: "/beyond-books",
    cta: "Explore Resources",
    accent: "from-sky-500/20 via-blue-500/10 to-cyan-400/10",
  },
  {
    title: "Beyond Ventures",
    tagline: "Stories That Inspire Ambition.",
    description:
      "The official commerce magazine exploring ideas, interviews, and perspectives from entrepreneurs, innovators, and inspiring figures.",
    href: "/beyond-ventures",
    cta: "Explore the Magazine",
    accent: "from-blue-500/20 via-sky-400/10 to-indigo-500/10",
  },
  {
    title: "Beyond Borders",
    tagline: "Impact Beyond the Classroom.",
    description:
      "An upcoming initiative focused on broadening learning, community engagement, and opportunities beyond the school environment.",
    href: "/beyond-borders",
    cta: "Coming Soon",
    accent: "from-cyan-500/20 via-blue-500/10 to-slate-500/10",
  },
];

export const legacyItems: LegacyItem[] = [
  {
    title: "DS Ventures",
    description:
      "DS Ventures has completed eight cycles and is described by the community as the longest-running annual event at Dubai Scholars Private School.",
    detail:
      "It has contributed to the school’s entrepreneurial culture and student participation through competitions, pitching opportunities, and business-inspired learning experiences.",
  },
  {
    title: "Investment Literacy Club",
    description:
      "An initiative dedicated to promoting financial awareness, investment literacy, and a practical understanding of economic and financial concepts.",
    detail:
      "The club supports student engagement with financial decision-making, analysis, and education across enterprise and economics contexts.",
  },
];

export const resourceCollections = [
  { id: "igcse", label: "IGCSE", href: "/beyond-books/igcse" },
  { id: "ial", label: "IAS / IAL", href: "/beyond-books/ial" },
];

export const subjectCatalog = {
  igcse: [
    {
      slug: "business",
      label: "Business",
      description: "Core concepts, case study application, and analytical structure for business-focused revision.",
      href: "/beyond-books/igcse/business",
    },
    {
      slug: "accounting",
      label: "Accounting",
      description: "Financial statements, recording systems, and structured formats for clear commercial analysis.",
      href: "/beyond-books/igcse/accounting",
    },
    {
      slug: "economics",
      label: "Economics",
      description: "Market reasoning, policy evaluation, and diagram-based explanation for economic problem solving.",
      href: "/beyond-books/igcse/economics",
    },
  ],
  ial: [
    {
      slug: "business",
      label: "Business",
      description: "Strategic decision-making, contextual application, and evaluation-led responses for advanced study.",
      href: "/beyond-books/ial/business",
    },
    {
      slug: "accounting",
      label: "Accounting",
      description: "Advanced financial reporting and preparation for deeper managerial and financial understanding.",
      href: "/beyond-books/ial/accounting",
    },
    {
      slug: "economics",
      label: "Economics",
      description: "Theoretical depth, policy analysis, and evidence-based evaluation for higher-level economics.",
      href: "/beyond-books/ial/economics",
    },
  ],
};

export const studyResources: StudyResource[] = [
  {
    id: "igcse-business-demand-supply",
    title: "Demand and Supply",
    qualification: "igcse",
    subject: "business",
    specification: "Edexcel / Cambridge-style placeholders",
    unit: "Unit 1",
    topic: "Demand and Supply",
    category: "past-paper",
    description: "Topic-based questions designed to strengthen understanding of demand, supply, and market behaviour.",
    status: "available",
    lastUpdated: "2026",
  },
  {
    id: "igcse-economic-elasticity",
    title: "Price Elasticity of Demand",
    qualification: "igcse",
    subject: "economics",
    specification: "Qualification placeholder",
    unit: "Microeconomics",
    topic: "Price Elasticity of Demand",
    category: "past-paper",
    description: "Practice questions and examples focusing on elasticity calculations and interpretation.",
    status: "available",
    lastUpdated: "2026",
  },
  {
    id: "ial-business-14-mark",
    title: "14-mark Questions",
    qualification: "ial",
    subject: "business",
    specification: "Assessment objective guidance",
    unit: "Paper 3 Placeholder",
    category: "exam-technique",
    description: "Guidance for strategic evaluation, balanced judgement, and developed application in extended responses.",
    status: "available",
  },
  {
    id: "ial-accounting-sofp",
    title: "Statement of Financial Position",
    qualification: "ial",
    subject: "accounting",
    category: "accounting-format",
    description: "Template layout and worked example for preparing a statement of financial position.",
    status: "available",
  },
  {
    id: "igcse-economics-revision-notes",
    title: "Economics Revision Notes",
    qualification: "igcse",
    subject: "economics",
    category: "study-material",
    description: "Concise revision guidance covering core definitions, diagrams, and common evaluation points.",
    status: "available",
  },
];

export const magazineEditions: MagazineEdition[] = [
  {
    id: "volume-1",
    title: "Beyond Ventures",
    volume: 1,
    status: "published",
    coverImage: "/magazines/volume-1/pages/1.jpg",
    pdfUrl: "/magazines/beyond-ventures-volume-1.pdf",
    description: "First edition: Where It All Began.",
    theme: "The first edition of the magazine.",
  },
  {
    id: "volume-2",
    title: "Beyond the Blueprint",
    volume: 2,
    status: "coming-soon",
    coverImage: null,
    description: "Volume two is currently in development and will explore the decisions, challenges, and ambitions behind extraordinary work.",
    theme: "Coming Soon",
  },
];

export const interviews: InterviewFeature[] = [
  {
    id: "entrepreneurs",
    name: null,
    category: "Entrepreneurs",
    description: "Profiles exploring ambition, risk-taking, and the ideas behind building a vision.",
    href: "#placeholder",
    image: null,
  },
  {
    id: "youth-entrepreneurs",
    name: null,
    category: "Youth entrepreneurs",
    description: "Stories of innovation and leadership from young people shaping new opportunities.",
    href: "#placeholder",
    image: null,
  },
  {
    id: "world-record-holders",
    name: null,
    category: "World record holders",
    description: "Conversations with individuals who have pushed performance, discipline, and achievement further.",
    href: "#placeholder",
    image: null,
  },
  {
    id: "sporting-personalities",
    name: null,
    category: "Sporting personalities",
    description: "An editorial lens on resilience, motivation, and the mindset behind excellence.",
    href: "#placeholder",
    image: null,
  },
];

export const events: DSEvent[] = [
  {
    id: "ds-ventures",
    slug: "ds-ventures",
    title: "DS Ventures",
    category: "Entrepreneurship / Competition",
    description:
      "DS Ventures is one of Dubai Scholars Private School's longest-standing annual events, having completed eight cycles and providing students with opportunities to explore entrepreneurship, innovation, and business thinking.",
    academicYear: "Annual Event",
    status: "published",
  },
  {
    id: "investment-literacy-club",
    slug: "investment-literacy-club",
    title: "Investment Literacy Club",
    category: "Financial Education / Club",
    description:
      "An initiative focused on developing financial literacy, investment awareness, and practical understanding of financial decision-making.",
    academicYear: "Ongoing",
    status: "published",
  },
  {
    id: "event-placeholder-1",
    slug: "event-placeholder-1",
    title: "Event Placeholder",
    category: "Workshops",
    description: "A clearly marked demonstration event placeholder for future DS Identity experiences and initiatives.",
    academicYear: "To Be Announced",
    status: "placeholder",
  },
  {
    id: "event-placeholder-2",
    slug: "event-placeholder-2",
    title: "Event Placeholder",
    category: "Competitions",
    description: "A future learning experience placeholder designed for student competitions and enterprise-focused opportunities.",
    academicYear: "To Be Announced",
    status: "placeholder",
  },
  {
    id: "event-placeholder-3",
    slug: "event-placeholder-3",
    title: "Event Placeholder",
    category: "Other Initiatives",
    description: "Additional DS Identity pilot projects and learning experiences will be added here as they are developed.",
    academicYear: "To Be Announced",
    status: "placeholder",
  },
  {
    id: "event-placeholder-4",
    slug: "event-placeholder-4",
    title: "Event Placeholder",
    category: "Clubs",
    description: "A placeholder entry for future club-based commerce and entrepreneurship activities within the school community.",
    academicYear: "To Be Announced",
    status: "placeholder",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "president",
    name: null,
    role: "President",
    image: null,
    bio: "Placeholder leadership profile for the community’s student leadership team.",
    academicYear: "Academic Year Placeholder",
    linkedin: "#placeholder",
    displayOrder: 1,
  },
  {
    id: "creative-director",
    name: null,
    role: "Creative Director",
    image: null,
    bio: "Placeholder profile for the visual leadership and editorial direction of DS Identity.",
    academicYear: "Academic Year Placeholder",
    linkedin: "#placeholder",
    displayOrder: 2,
  },
  {
    id: "leadership-1",
    name: null,
    role: "Leadership Position — To Be Announced",
    image: null,
    bio: "Future leadership role placeholder for upcoming organisational development.",
    academicYear: "To Be Announced",
    linkedin: null,
    displayOrder: 3,
  },
  {
    id: "leadership-2",
    name: null,
    role: "Leadership Position — To Be Announced",
    image: null,
    bio: "Future leadership role placeholder that can be expanded when team roles are confirmed.",
    academicYear: "To Be Announced",
    linkedin: null,
    displayOrder: 4,
  },
];
