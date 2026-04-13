import { Button } from "@/components/ui/button";
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

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: "Contact Form",
      message: formData.get("message") as string,
    };

    await supabase.functions.invoke("send-contact-email", {
      body: data,
    });

    toast.success("Message sent successfully! I'll get back to you soon.");
    e.currentTarget.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
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
                className="w-full bg-gradient-hero hover:opacity-90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>

          {/* Decorative side */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Decorative orbiting rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border border-accent/15 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <div className="absolute inset-8 rounded-full border border-secondary/10 animate-spin" style={{ animationDuration: '25s' }} />
              
              {/* Central glow */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-2xl animate-pulse" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-primary/30 to-accent/20 blur-xl" />
              
              {/* Floating dots around the sphere */}
              <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-0 right-1/4 w-3 h-3 rounded-full bg-accent/60 animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
