type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-sky-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-semibold tracking-[-0.07em] text-slate-50 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
