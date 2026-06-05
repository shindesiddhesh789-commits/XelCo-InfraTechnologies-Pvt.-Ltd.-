import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Smart waste bins in a modern city street"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-primary-foreground text-balance">
            Shaping a Spotless India, Hand in{" "}
            <span className="text-accent">Hand</span>
          </h1>

          <p className="text-lg text-primary-foreground/85 max-w-lg leading-relaxed border-solid">
            In step with India's Swachh Bharat mission, we empower neighbourhoods through intelligent waste solutions. From pristine streets to eco-friendly campuses and responsible enterprises, our connected bin network drives sustainable, high-performance environments for all.
          </p>

          <p className="text-primary-foreground font-semibold text-lg">
            Get in touch — how can we assist you?
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
            <input
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="w-full px-5 py-3.5 rounded-full bg-primary-foreground text-foreground placeholder:text-muted-foreground text-sm outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="w-full px-5 py-3.5 rounded-full bg-primary-foreground text-foreground placeholder:text-muted-foreground text-sm outline-none"
            />
            <input
              type="email"
              placeholder="Email Address*"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3.5 rounded-full bg-primary-foreground text-foreground placeholder:text-muted-foreground text-sm outline-none"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full gradient-accent border-0 text-accent-foreground font-semibold text-base py-4"
            >
              Explore More
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
