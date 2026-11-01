import { homepageStatistics } from "./community";
import { venturists, investmentClub } from "./event-content";
import { volumeOne, volumeTwo, volumeOneInterviews } from "./magazines";
import { leadership, people } from "./team";
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

export const stats = homepageStatistics;

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
    tagline: "Something Bigger Is Coming.",
    description:
      "Something Bigger Is Coming. Details will be revealed in time.",
    href: "/beyond-borders",
    cta: "Coming Soon",
    accent: "from-cyan-500/20 via-blue-500/10 to-slate-500/10",
  },
];

export const legacyItems: LegacyItem[] = [
  {
    title: "DS Venturists",
    description:
      "Eight cycles of DS Venturists have welcomed an estimated 1,000+ student participations at Dubai Scholars Private School.",
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

// No study resources have been published. The future-ready library lives in resources.ts.
export const studyResources: StudyResource[] = [];

export const magazineEditions: MagazineEdition[] = [
  { id: "volume-1", title: volumeOne.title, volume: 1, status: "published", coverImage: volumeOne.cover, pdfUrl: "/magazines/beyond-ventures-volume-1.pdf", description: volumeOne.description[0], theme: volumeOne.title },
  { id: "volume-2", title: volumeTwo.title, volume: 2, status: "coming-soon", coverImage: null, description: volumeTwo.description[0], theme: volumeTwo.title },
];
export const interviews: InterviewFeature[] = volumeOneInterviews.map(video => ({ id: video.id, name: video.title, category: video.category, description: video.description ?? "", href: `https://www.youtube.com/watch?v=${video.id}`, image: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg` }));

export const events: DSEvent[] = [
  {
    id: "ds-venturists",
    slug: "ds-venturists",
    title: "DS Venturists",
    category: "Entrepreneurship / Competition",
    description:
      venturists.description[0],
    academicYear: "Annual Event",
    status: "published",
  },
  {
    id: "investment-literacy-club",
    slug: "investment-literacy-club",
    title: "Investment Literacy Club",
    category: "Financial Education / Club",
    description:
      investmentClub.description[0],
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

// Compatibility export for existing homepage previews; the approved roster is in team.ts.
export const teamMembers: TeamMember[] = leadership.map((entry,index) => ({
  id: entry.person, name: people[entry.person].name, role: entry.role,
  image: people[entry.person].image, displayOrder: index + 1,
}));
