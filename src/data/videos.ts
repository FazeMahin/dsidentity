export const videos = {
  dsVenturists: { discussion: "f5t_8w97pOU", recap2025: "s-6o52sj0ho" },
  beyondVenturesVolume1: { soheilVar: "oOsf-bE0-mE", zubairJunjunia: "Wy7elqSieBk" },
  beyondVenturesVolume2: { saifAlhajahmad: "jnfXxDA6g6A", lakshmananMeyappan: "rBYPm4GhODY", mrJung: "G-61T_RaSws" },
};
export interface VideoEntry { id: string; title: string; category: string; description?: string; }
export const eventVideos: VideoEntry[] = [
  { id: videos.dsVenturists.discussion, title: "DS Venturists — A Conversation with Ms. Sapna", category: "Discussion" },
  { id: videos.dsVenturists.recap2025, title: "DS Venturists 2025 — Event Recap", category: "Eighth edition" },
];
