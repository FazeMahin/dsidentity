import { notFound } from "next/navigation";
import { pathways, type ResourceQualification } from "@/data/resources";
import { ResourceLibrary } from "@/components/books/resource-library";
export async function SubjectPage({params,qualification}:{params:Promise<{subject:string}>;qualification:ResourceQualification}) {
  const {subject}=await params;
  const pathway=pathways.find(p=>p.qualification===qualification&&p.subject===subject);
  if(!pathway) notFound();
  return <ResourceLibrary pathway={pathway}/>;
}
