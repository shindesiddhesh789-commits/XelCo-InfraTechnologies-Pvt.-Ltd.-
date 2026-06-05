import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Target, Eye, Users, Award, Globe, Zap } from "lucide-react";

const values = [
  { icon: Globe, title: "Sustainability First", description: "Every product we build is designed to reduce environmental impact and promote circular economies." },
  { icon: Zap, title: "Innovation Driven", description: "We combine IoT, AI, and solar technology to create solutions that didn't exist before." },
  { icon: Users, title: "Customer Centric", description: "Our success is measured by the outcomes our partners achieve — cleaner cities, lower costs, happier residents." },
  { icon: Award, title: "Quality & Reliability", description: "Enterprise-grade hardware built for the harshest conditions, backed by industry-leading warranties." },
];

const stats = [
  { value: "500+", label: "Cities Served" },
  { value: "50K+", label: "Smart Bins Deployed" },
  { value: "80%", label: "Cost Reduction" },
  { value: "30+", label: "Countries" },
];

const Company = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 gradient-hero">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
          About <span className="text-primary">Meshion</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          We're on a mission to make waste management smarter, cleaner, and more efficient for cities around the world.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-extrabold text-primary-foreground">{value}</div>
              <div className="text-sm text-primary-foreground/70 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To transform public waste management through smart technology — making cities cleaner,
              operations more efficient, and communities more sustainable. We believe every city
              deserves infrastructure that works intelligently.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Eye className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A world where smart city infrastructure operates seamlessly — where waste never overflows,
              collection routes are always optimal, and every community benefits from
              data-driven public services.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Choose Meshion</h2>
          <p className="text-muted-foreground text-lg">
            Built on values that drive real impact for our partners and their communities.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
    <Footer />
  </div>
);

export default Company;
