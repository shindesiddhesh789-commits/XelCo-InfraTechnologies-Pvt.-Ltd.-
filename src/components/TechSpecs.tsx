const specs = [
  { label: "Dimensions (H × W × D)", value: '48″ × 25″ × 30″ (122 × 64 × 76 cm)' },
  { label: "Waste Capacity", value: "Up to 150 gallons (570 liters) compacted" },
  { label: "Compaction Ratio", value: "5:1" },
  { label: "Solar Panel", value: "12W mono-crystalline, self-sustaining" },
  { label: "Connectivity", value: "4G LTE / Wi-Fi / LoRaWAN" },
  { label: "Material", value: "14-gauge galvanized steel, powder-coated" },
  { label: "Weather Rating", value: "IP65, -30°C to 60°C operating range" },
  { label: "Sensors", value: "Ultrasonic fill-level, temperature, tilt detection" },
];

const TechSpecs = () => (
  <section id="specs" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Technical Specifications
        </h2>
        <p className="text-muted-foreground text-lg">
          Built for the harshest environments, designed for effortless integration.
        </p>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {specs.map(({ label, value }, i) => (
          <div
            key={label}
            className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 ${
              i % 2 === 0 ? "bg-secondary/50" : ""
            } ${i < specs.length - 1 ? "border-b border-border" : ""}`}
          >
            <span className="text-sm font-semibold text-foreground">{label}</span>
            <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechSpecs;
