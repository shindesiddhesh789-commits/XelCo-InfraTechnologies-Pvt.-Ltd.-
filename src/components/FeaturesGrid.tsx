import { Sun, Wifi, ArrowUpFromDot, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Solar-Powered Compaction",
    description: "Built-in solar panels power an internal compactor — no external electricity needed, reducing your carbon footprint.",
  },
  {
    icon: Wifi,
    title: "Real-Time Cloud Monitoring",
    description: "IoT sensors transmit fill-level data to the cloud, enabling operators to monitor every bin from a single dashboard.",
  },
  {
    icon: ArrowUpFromDot,
    title: "5× Increased Capacity",
    description: "Compaction technology means each bin holds up to 5 times the waste of a traditional receptacle.",
  },
  {
    icon: ShieldCheck,
    title: "Pest-Proof & Weather-Sealed",
    description: "Fully enclosed, heavy-duty construction keeps pests out and performs in all weather conditions.",
  },
];

const FeaturesGrid = () => (
  <section id="features" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Why Choose <span className="text-primary">Meshion</span>?
        </h2>
        <p className="text-muted-foreground text-lg">
          Purpose-built hardware and intelligent software working together to modernize waste collection.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
