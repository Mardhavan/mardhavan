import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  title: string;
  intro?: string;
  kicker?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  title,
  intro,
  kicker,
  align = "left",
  className = "",
}: SectionHeadingProps) => (
  <Reveal
    className={`mb-14 md:mb-20 ${align === "center" ? "mx-auto max-w-3xl text-center" : ""} ${className}`}
  >
    <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <span aria-hidden className="h-px w-10 bg-primary/70" />
      {kicker && <span className="eyebrow">{kicker}</span>}
    </div>
    <h2 className="display-lg mt-5">{title}</h2>
    {intro && (
      <p className={`prose-body mt-5 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>{intro}</p>
    )}
  </Reveal>
);

export default SectionHeading;
