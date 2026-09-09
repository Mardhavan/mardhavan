import { Mail, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mardhavan5320@gmail.com",
    link: "mailto:mardhavan5320@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 95505 35320", link: "tel:+919550535320" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mardhavan Abbathini",
    link: "https://www.linkedin.com/in/mardhavan-abbathini-b34b59259",
  },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", link: null },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    await supabase.functions.invoke("send-contact-email", { body: data });

    toast.success("Message sent. I'll get back to you shortly.");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-shell relative overflow-hidden">
      <div
        aria-hidden
        className="animate-soft-pulse pointer-events-none absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.13),transparent_66%)] blur-3xl"
      />

      <div className="shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-10 bg-primary/70" />
            <span className="eyebrow">Contact</span>
            <span aria-hidden className="h-px w-10 bg-primary/70" />
          </div>
          <h2 className="mt-7 text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[4.75rem]">
            Let's build
            <br />
            <span className="text-shine">something together.</span>
          </h2>
          <p className="prose-body mx-auto mt-6 max-w-2xl">
            Partnership conversations, pipeline and GTM collaboration, and thoughtful professional
            networking across AI, SaaS and EdTech.
          </p>
          <div className="mt-9 flex justify-center">
            <Magnetic>
              <a href="mailto:mardhavan5320@gmail.com" className="btn-primary group">
                Email me directly
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <dl className="divide-y divide-border/50 border-y border-border/50">
              {contactInfo.map((info) => (
                <div key={info.label} className="group flex items-center gap-4 py-5">
                  <info.icon className="h-4 w-4 flex-shrink-0 text-primary" />
                  <dt className="w-24 flex-shrink-0 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {info.label}
                  </dt>
                  <dd className="min-w-0 flex-1 truncate text-sm">
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                      >
                        {info.value}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ) : (
                      info.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Prefer the short version? Email works best — I reply to every genuine message.
            </p>

            <a
              href="/MARDHAVAN_ABBATHINI_BDM.pdf"
              download="Mardhavan_Abbathini_Resume.pdf"
              className="btn-ghost mt-7"
            >
              Download resume
            </a>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="group panel ticks space-y-4 p-6 md:p-9">
              <h3 className="eyebrow">Send a message</h3>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                aria-label="Name"
                required
                className="h-12 bg-background/50"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required
                className="h-12 bg-background/50"
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                required
                className="h-12 bg-background/50"
              />
              <Textarea
                name="message"
                placeholder="What would you like to discuss?"
                aria-label="Message"
                required
                rows={5}
                className="resize-none bg-background/50"
              />
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
