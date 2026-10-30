// Replace each src with a photo under public/ and update alt/title when photos arrive.
// These intentionally illustrated placeholders are not event photographs.
export const dsVenturesImages = Array.from({ length: 8 }, (_, index) => ({
  src: `/events/ds-ventures/placeholder-${String(index + 1).padStart(2, "0")}.svg`,
  alt: `DS Ventures photo placeholder ${index + 1}. Event photograph coming soon.`,
  title: `Moment ${String(index + 1).padStart(2, "0")}`,
  subtitle: "Event photograph coming soon",
}));
