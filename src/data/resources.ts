export type ResourceQualification = "igcse" | "ial";
export type ResourceSubject = "business" | "accounting" | "economics";
export interface SubjectPathway {
  subject: ResourceSubject; title: string; qualification: ResourceQualification; label: string;
  specification: string; source: string; papers: { code: string; title: string; level?: string }[]; topics: string[];
}
const pearson = "https://qualifications.pearson.com";
// Linear International GCSE specifications; IAS/IAL unit codes are kept separate.
export const pathways: SubjectPathway[] = [
  { qualification: "igcse", label: "International GCSE", subject: "business", title: "Business", specification: "4BS1", source: `${pearson}/en/qualifications/edexcel-international-gcses/business-2017.html`,
    papers: [{ code: "4BS1/01", title: "Investigating small businesses" }, { code: "4BS1/02", title: "Investigating large businesses" }],
    topics: ["Business activity and influences", "People in business", "Business finance", "Marketing", "Business operations"] },
  { qualification: "igcse", label: "International GCSE", subject: "accounting", title: "Accounting", specification: "4AC1", source: `${pearson}/content/dam/pdf/International%20GCSE/Accounting/2017/Specification-and-sample-assessments/ig-accountancy-spec.pdf`,
    papers: [{ code: "4AC1/01", title: "Introduction to Bookkeeping and Accounting" }, { code: "4AC1/02", title: "Financial Statements" }],
    topics: ["Accounting concepts", "Double-entry bookkeeping", "Control procedures", "Financial statements", "Accounting adjustments", "Interpretation of accounts"] },
  { qualification: "igcse", label: "International GCSE", subject: "economics", title: "Economics", specification: "4EC1", source: `${pearson}/content/dam/pdf/International%20GCSE/Economics/2017/Specification%20and%20SAMS/international-gcse-spec-9781446942789.pdf`,
    papers: [{ code: "4EC1/01", title: "Microeconomics and Business Economics" }, { code: "4EC1/02", title: "Macroeconomics and the Global Economy" }],
    topics: ["The economic problem", "Demand, supply and market equilibrium", "Elasticity", "Business economics", "Government and the economy", "The global economy"] },
  { qualification: "ial", label: "International AS / A Level", subject: "business", title: "Business", specification: "XBS11 / YBS11", source: `${pearson}/en/qualifications/edexcel-international-advanced-levels/business-2018.html`,
    papers: [{ code: "WBS11/01", title: "Marketing and people", level: "IAS" }, { code: "WBS12/01", title: "Managing business activities", level: "IAS" }, { code: "WBS13/01", title: "Business decisions and strategy", level: "IA2" }, { code: "WBS14/01", title: "Global business", level: "IA2" }],
    topics: ["Marketing and people", "Managing business activities", "Business decisions and strategy", "Global business"] },
  { qualification: "ial", label: "International AS / A Level", subject: "accounting", title: "Accounting", specification: "XAC11 / YAC11", source: `${pearson}/en/qualifications/edexcel-international-advanced-levels/accounting-2015.html`,
    papers: [{ code: "WAC11/01", title: "The Accounting System and Costing", level: "IAS" }, { code: "WAC12/01", title: "Corporate and Management Accounting", level: "IA2" }],
    topics: ["Accounting principles and bookkeeping", "Control procedures", "Financial statements", "Costing", "Analysis of accounts", "Corporate accounting", "Management accounting"] },
  { qualification: "ial", label: "International AS / A Level", subject: "economics", title: "Economics", specification: "XEC11 / YEC11", source: `${pearson}/en/qualifications/edexcel-international-advanced-levels/economics-2018.html`,
    papers: [{ code: "WEC11/01", title: "Markets in action", level: "IAS" }, { code: "WEC12/01", title: "Macroeconomic performance and policy", level: "IAS" }, { code: "WEC13/01", title: "Business behaviour", level: "IA2" }, { code: "WEC14/01", title: "Developments in the global economy", level: "IA2" }],
    topics: ["Markets in action", "Macroeconomic performance and policy", "Business behaviour", "Developments in the global economy"] },
];
export const resourceCategories = [
  { id: "past-papers", label: "Topic-by-Topic Past Paper Questions" },
  { id: "mark-schemes", label: "Mark Schemes" },
  { id: "notes", label: "Revision Notes" },
  { id: "materials", label: "Study Materials" },
  { id: "technique", label: "Exam Technique" },
  { id: "checklists", label: "Examination Checklists" },
  { id: "formats", label: "Financial Statement Formats & Templates", subjects: ["accounting"] },
  { id: "structures", label: "Extended-Response Answer Structures", subjects: ["business", "economics"] },
];
export interface ResourceFile {
  id: string; title: string; qualification: ResourceQualification; subject: ResourceSubject;
  category: string; topic: string; fileUrl: string; paperCode?: string;
}
// No resources are published yet. Add approved PDFs here to activate preview/download.
export const resourceFiles: ResourceFile[] = [];
