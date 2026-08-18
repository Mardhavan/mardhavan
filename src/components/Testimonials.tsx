import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

/**
 * Placeholder structure — real recommendations can be dropped in here.
 * No invented quotes.
 */
const slots = [
  { context: "Leadership", hint: "Recommendation from a reporting manager at Apply Wizz" },
  { context: "Partnership", hint: "Note from an education consultancy partner" },
  { context: "Client", hint: "Feedback from a client onboarded through consultative counseling" },
];

const Testimonials = () => (
  <section id="testimonials" className="section-shell">
    <div className="shell">
      <SectionHeading
        index="08"
        title="Social proof"
        intro="Recommendations from managers, partners and clients — being collected and added here."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {slots.map((slot, i) => (
          <Reveal key={slot.context} delay={i * 80} className="h-full">
            <figure className="surface flex h-full flex-col justify-between border-dashed p-6 md:p-8">
              <Quote className="h-5 w-5 text-primary/60" />
              <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {slot.hint}
              </blockquote>
              <figcaption className="mt-8 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                {slot.context} · Coming soon
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-8">
        <p className="text-sm text-muted-foreground">
          Worked with me?{" "}
          <a href="#contact" className="link-underline text-primary">
            Share a recommendation
          </a>
          .
        </p>
      </Reveal>
    </div>
  </section>
);

export default Testimonials;
