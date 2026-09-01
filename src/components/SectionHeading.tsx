import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  title: string;
  intro?: string;
}

const SectionHeading = ({ title, intro }: SectionHeadingProps) => (
  <Reveal className="mb-12 md:mb-16">
    <span aria-hidden className="mb-5 block h-px w-12 bg-primary/70" />
    <h2 className="display-lg">{title}</h2>
    {intro && <p className="prose-body mt-5 max-w-2xl">{intro}</p>}
  </Reveal>
);

export default SectionHeading;
