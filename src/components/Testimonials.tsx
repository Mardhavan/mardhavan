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
        kicker="Social proof"
        title="In other people's words."
        intro="Recommendations from managers, partners and clients — being collected and added here."
      />

      <Reveal>
        <div className="group panel ticks grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Quote className="h-6 w-6 text-primary/70" />
            <p className="mt-6 text-lg font-medium leading-[1.6] text-foreground md:text-2xl md:leading-[1.45]">
              I'd rather leave this space honest than fill it with words nobody said.
            </p>
            <p className="prose-body mt-5">
              References from managers, partners and clients are available on request, and
              recommendations will be published here as they come in.
            </p>
            <a href="#contact" className="btn-ghost mt-8">
              Request references
            </a>
          </div>

          <ul className="divide-y divide-border/50 border-y border-border/50 lg:my-1">
            {slots.map((slot) => (
              <li key={slot.context} className="py-5">
                <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-primary">
                  {slot.context}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{slot.hint}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Testimonials;
