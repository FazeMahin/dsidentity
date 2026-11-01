import Image from "next/image";
import type { TeamPerson } from "@/data/team";
export function Portrait({person,priority=false}:{person:TeamPerson;priority?:boolean}) {
  return <div className="team-portrait"><Image src={person.image ?? "/team/portrait-placeholder.svg"} alt={person.image ? person.name : `Portrait placeholder for ${person.name}`} fill sizes="(max-width:600px) 45vw, (max-width:900px) 30vw, 360px" priority={priority} style={{objectFit:"cover",objectPosition:person.imagePosition ?? "center"}}/>{!person.image && <><span className="team-portrait__initials" aria-hidden="true">{person.initials}</span><span className="team-portrait__note">Portrait coming soon</span></>}</div>;
}
