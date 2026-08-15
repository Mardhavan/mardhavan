import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  index: string;
  title: string;
  intro?: string;
}

const SectionHeading = ({ index, title, intro }: SectionHeadingProps) => (
  <Reveal className="mb-12 md:mb-16">
    <div className="flex items-center gap-4">
      <span className="eyebrow-muted">{index}</span>
      <span className="h-px w-10 bg-border" />
    </div>
    <h2 className="display-lg mt-4">{title}</h2>
    {intro && <p className="prose-body mt-5 max-w-2xl">{intro}</p>}
  </Reveal>
);

export default SectionHeading;
