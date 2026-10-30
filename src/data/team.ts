export interface TeamPerson {
  id: string;
  name: string;
  initials: string;
  // Add a path under public/team/ here. Every appearance uses the same portrait.
  image: string | null;
}

export const people = {
  mahin: { id: "mahin", name: "Mahin Kashyap", initials: "MK", image: null },
  caroline: { id: "caroline", name: "Caroline Jickson", initials: "CJ", image: null },
  adhrit: { id: "adhrit", name: "Adhrit Srivastava", initials: "AS", image: null },
  diya: { id: "diya", name: "Diya Manoj", initials: "DM", image: null },
  tanya: { id: "tanya", name: "Tanya Loveen", initials: "TL", image: null },
  raghav: { id: "raghav", name: "Raghav Bhatia", initials: "RB", image: null },
  gwen: { id: "gwen", name: "Gwen D'Souza", initials: "GD", image: null },
  cruz: { id: "cruz", name: "Cruz Dszouza", initials: "CD", image: null },
  aryaveer: { id: "aryaveer", name: "Aryaveer Sethi", initials: "AS", image: null },
  aayush: { id: "aayush", name: "Aayush Kothari", initials: "AK", image: null },
} satisfies Record<string, TeamPerson>;

export type PersonId = keyof typeof people;
export const leadership: { person: PersonId; role: string }[] = [
  { person: "mahin", role: "President" },
  { person: "caroline", role: "Vice President & Creative Director" },
  { person: "adhrit", role: "Managing Director" },
];

export const initiativeTeams: {
  id: string;
  name: string;
  focus: string;
  members: { person: PersonId; role: string }[];
}[] = [
  { id: "beyond-ventures", name: "Beyond Ventures", focus: "Editorial & storytelling", members: [
    { person: "diya", role: "Editorial Lead" },
    { person: "tanya", role: "Content Lead" },
    { person: "raghav", role: "Operations Lead" },
    { person: "gwen", role: "Marketing Lead" },
  ] },
  { id: "beyond-books", name: "Beyond Books", focus: "Learning & academic resources", members: [
    { person: "mahin", role: "Lead" },
    { person: "adhrit", role: "PR Lead" },
    { person: "cruz", role: "Notes Manager" },
    { person: "aryaveer", role: "Logistics Lead" },
    { person: "aayush", role: "Coordinator" },
  ] },
  { id: "beyond-borders", name: "Beyond Borders", focus: "Community & new possibilities", members: [
    { person: "caroline", role: "Founder & Lead" },
    { person: "mahin", role: "Co-Lead" },
    { person: "aryaveer", role: "Team Member" },
    { person: "aayush", role: "Team Member" },
  ] },
];
