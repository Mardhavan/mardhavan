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
}: SectionHeadingProps) =>
  align === "center" ? (
    <Reveal className={`mx-auto mb-14 max-w-3xl text-center md:mb-20 ${className}`}>
      {kicker && <p className="eyebrow">{kicker}</p>}
      <h2 className="display-lg mt-5">{title}</h2>
      {intro && <p className="prose-body mx-auto mt-5 max-w-2xl">{intro}</p>}
    </Reveal>
  ) : (
    <Reveal
      className={`mb-14 grid gap-6 md:mb-20 lg:grid-cols-12 lg:items-end lg:gap-16 ${className}`}
    >
      <div className="lg:col-span-7">
        {kicker && <p className="eyebrow">{kicker}</p>}
        <h2 className="display-lg mt-5">{title}</h2>
      </div>
      {intro && <p className="prose-body max-w-md lg:col-span-5 lg:pb-3">{intro}</p>}
    </Reveal>
  );

export default SectionHeading;
