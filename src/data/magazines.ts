import { videos, type VideoEntry } from "./videos";
export const volumeOne = {
  title: "Shadows to Spotlight", volume: "01", status: "Published", cover: "/magazines/volume-1/pages/1.jpg",
  description: [
    "The inaugural edition of Beyond Ventures, Shadows to Spotlight, explores the journeys of individuals who transformed uncertainty into opportunity and ambition into lasting impact.",
    "From entrepreneurial innovators and education pioneers to emerging sporting talent, the magazine celebrates resilience, leadership, and the courage to challenge expectations.",
    "Through interviews, editorial features, and inspiring personal stories, Volume 1 offers students a glimpse into the mindsets and decisions that shape extraordinary journeys.",
  ],
};
export const volumeOneInterviews: VideoEntry[] = [
  { id: videos.beyondVenturesVolume1.soheilVar, title: "Soheil Var", category: "Football / Sports", description: "An interview exploring perseverance, ambition, leadership, and the journey of building a meaningful future through football." },
  { id: videos.beyondVenturesVolume1.zubairJunjunia, title: "Zubair Junjunia", category: "Education Technology / Entrepreneurship", description: "A conversation with the founder of ZNotes about student-led innovation, educational accessibility, and building a platform that empowers learners." },
];
export const volumeOneEditorials = [
  { name: "Aparna Verma", focus: "Leadership, resilience, and the growth of Scholars International Group." },
  { name: "Sapna Chandrani", focus: "Entrepreneurial mindset, adaptability, and advice for young changemakers." },
];
export const volumeTwo = {
  title: "Beyond the Blueprint", volume: "02", status: "Coming Soon", interviewStatus: "Published",
  tagline: "The Conversations Have Begun. The Next Chapter Is Coming.",
  description: ["Every extraordinary journey begins with an idea. Beyond the Blueprint explores the experiences, challenges, and decisions that transform ambition into reality.", "While the second edition of Beyond Ventures is still in development, its conversations have already begun."],
};
export const volumeTwoInterviews: VideoEntry[] = [
  { id: videos.beyondVenturesVolume2.saifAlhajahmad, title: "Saif Alhajahmad", category: "Published interview / Volume 02" },
  { id: videos.beyondVenturesVolume2.lakshmananMeyappan, title: "Lakshmanan Meyappan", category: "Published interview / Volume 02" },
  { id: videos.beyondVenturesVolume2.mrJung, title: "Mr. Jung", category: "Published interview / Volume 02" },
];
