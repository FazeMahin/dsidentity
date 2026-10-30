export type Qualification = "igcse" | "ias" | "ial";
export type Subject = "business" | "accounting" | "economics";
export type ResourceCategory =
  | "past-paper"
  | "exam-technique"
  | "accounting-format"
  | "study-material";

export interface NavItem {
  label: string;
  href: string;
  isLast?: boolean;
}

export interface InitiativeCard {
  title: string;
  tagline: string;
  description: string;
  href: string;
  cta: string;
  accent: string;
}

export interface LegacyItem {
  title: string;
  description: string;
  detail?: string;
}

export interface StudyResource {
  id: string;
  title: string;
  qualification: Qualification;
  subject: Subject;
  specification?: string;
  unit?: string;
  topic?: string;
  category: ResourceCategory;
  description: string;
  fileUrl?: string;
  markSchemeUrl?: string;
  status: "available" | "coming-soon";
  lastUpdated?: string;
}

export interface DSEvent {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  date?: string;
  academicYear?: string;
  coverImage?: string;
  gallery?: string[];
  videoUrl?: string;
  highlights?: string[];
  status: "published" | "placeholder";
}

export interface TeamMember {
  id: string;
  name: string | null;
  role: string;
  image: string | null;
  bio?: string;
  academicYear?: string;
  linkedin?: string | null;
  displayOrder: number;
}

export interface InterviewFeature {
  id: string;
  name: string | null;
  category: string;
  description: string;
  href: string;
  image: string | null;
}

export interface MagazineEdition {
  id: string;
  title: string;
  volume: number;
  status: "published" | "coming-soon";
  coverImage: string | null;
  pdfUrl?: string;
  description?: string;
  theme?: string;
}
