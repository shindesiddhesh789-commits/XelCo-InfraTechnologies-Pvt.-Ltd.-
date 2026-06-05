import dashboardImg from "@/assets/software-dashboard.jpg";

const steps = [
  {
    num: "01",
    title: "Collection",
    description: "Smart bins compact waste using solar energy, dramatically reducing overflow and the need for frequent pickups.",
  },
  {
    num: "02",
    title: "Communication",
    description: "Embedded IoT sensors continuously report fill levels, battery status, and location to the cloud platform.",
  },
  {
    num: "03",
    title: "Optimization",
    description: "Our software generates optimized pickup routes, cutting fuel costs and emissions while improving service levels.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          How It Works
        </h2>
        <p className="text-muted-foreground text-lg">
          From collection to optimization — a seamless, connected workflow.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={dashboardImg}
            alt="EcoBin IoT software dashboard showing fleet management"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={960}
            height={640}
          />
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map(({ num, title, description }) => (
            <div key={num} className="flex gap-5">
              <div className="flex-shrink-0 h-12 w-12 rounded-full gradient-cta flex items-center justify-center text-primary-foreground font-bold text-sm">
                {num}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
