import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mardhavan5320@gmail.com",
      link: "mailto:mardhavan5320@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 95505 35320",
      link: "tel:+919550535320",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mardhavan Abbathini",
      link: "https://www.linkedin.com/in/mardhavan-abbathini-b34b59259",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-shell">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="eyebrow-muted">07</span>
        <h2 className="text-3xl font-bold uppercase md:text-5xl">Contact</h2>
      </div>

      <div className="grid gap-px border border-border bg-border lg:grid-cols-2">
        <div className="bg-card p-6 md:p-10">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Open to conversations around business development, partnerships and GTM roles across AI,
            SaaS and EdTech.
          </p>

          <dl className="mt-8 divide-y divide-border border-y border-border">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-4 py-4">
                <info.icon className="h-4 w-4 flex-shrink-0 text-primary" />
                <dt className="w-24 flex-shrink-0 font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {info.label}
                </dt>
                <dd className="min-w-0 truncate text-sm">
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      {info.value}
                    </a>
                  ) : (
                    info.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-card p-6 md:p-10">
          <h3 className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-primary">
            Send a message
          </h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Input type="text" name="name" placeholder="Name" required className="h-12 rounded-none bg-background" />
            <Input type="email" name="email" placeholder="Email" required className="h-12 rounded-none bg-background" />
            <Input type="text" name="subject" placeholder="Subject" required className="h-12 rounded-none bg-background" />
            <Textarea
              name="message"
              placeholder="Message"
              required
              rows={5}
              className="resize-none rounded-none bg-background"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 w-full items-center justify-center bg-primary font-mono-ui text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary-light disabled:opacity-50"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
