import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import contactGlobe from "@/assets/contact-globe.png";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: "Contact Form",
      message: formData.get("message") as string,
    };

    await supabase.functions.invoke("send-contact-email", { body: data });

    toast.success("Message sent successfully! I'll get back to you soon.");
    e.currentTarget.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Form side */}
          <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 md:p-10">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Get in touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Contact.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="What's your good name?"
                  required
                  className="bg-background/50 border-muted-foreground/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="What's your web address?"
                  required
                  className="bg-background/50 border-muted-foreground/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <Textarea
                  name="message"
                  placeholder="What you want to say?"
                  required
                  rows={6}
                  className="bg-background/50 border-muted-foreground/20 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>

          {/* Globe illustration */}
          <div className="hidden md:flex items-center justify-center">
            <img 
              src={contactGlobe} 
              alt="Contact globe" 
              className="w-72 lg:w-96 float-animation"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
