import { Mail, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

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
    <section id="contact" className="section-shell">
      <div className="shell">
        <SectionHeading
          index="09"
          title="Let's talk"
          intro="Open to business development and GTM roles, partnership conversations, and thoughtful professional networking across AI, SaaS and EdTech."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <dl className="divide-y divide-border/70 border-y border-border/70">
              {contactInfo.map((info) => (
                <div key={info.label} className="group flex items-center gap-4 py-5">
                  <info.icon className="h-4 w-4 flex-shrink-0 text-primary" />
                  <dt className="w-24 flex-shrink-0 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
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
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="surface space-y-4 p-6 md:p-8">
              <h3 className="eyebrow">Send a message</h3>
              <Input type="text" name="name" placeholder="Name" required className="h-12 bg-background/60" />
              <Input type="email" name="email" placeholder="Email" required className="h-12 bg-background/60" />
              <Input type="text" name="subject" placeholder="Subject" required className="h-12 bg-background/60" />
              <Textarea
                name="message"
                placeholder="What would you like to discuss?"
                required
                rows={5}
                className="resize-none bg-background/60"
              />
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50">
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
