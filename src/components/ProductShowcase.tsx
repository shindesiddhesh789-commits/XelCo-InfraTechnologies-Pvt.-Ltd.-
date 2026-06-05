import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Sun, Battery, Cpu, BarChart3, Leaf } from "lucide-react";

const products = [
  {
    name: "ELEMENT",
    color: "bg-[hsl(215,20%,50%)]",
    tagline: "Conceal waste elegantly and keep it contained",
    features: ["47 Gal / 178 L capacity", "Fully enclosed"],
    icons: [Battery],
  },
  {
    name: "SENSE",
    color: "bg-[hsl(215,85%,45%)]",
    tagline: "Conceal waste and instantly see when it's at capacity",
    features: ["47 Gal / 178 L capacity", "Fully enclosed", "Fill-Level Indicator", "Battery-operated"],
    icons: [Battery, Wifi],
  },
  {
    name: "SENSE MAX",
    color: "bg-[hsl(215,85%,35%)]",
    tagline: "Instant fill visibility with extended storage volume",
    features: ["150 Gal / 570 L capacity", "Fully enclosed", "Fill-Level Indicator", "Compactor", "Solar-driven"],
    icons: [Sun, Wifi, Cpu],
  },
  {
    name: "SMART",
    color: "bg-[hsl(25,95%,53%)]",
    tagline: "Core essentials plus cloud-connected intelligence",
    features: ["47 Gal / 178 L capacity", "Fully enclosed", "Cloud linked", "Fill-Level Indicator", "Battery-operated"],
    icons: [Wifi, BarChart3],
  },
  {
    name: "SMART MAX",
    color: "bg-[hsl(0,70%,45%)]",
    tagline: "Maximum volume with full smart connectivity",
    features: ["150 Gal / 570 L capacity", "Fully enclosed", "Cloud linked", "Fill-Level Indicator", "Compactor", "Solar-driven"],
    icons: [Sun, Wifi, BarChart3, Cpu],
  },
  {
    name: "SMART COMPOST",
    color: "bg-[hsl(160,70%,30%)]",
    tagline: "Core essentials plus connected composting capability",
    features: ["47 Gal / 178 L capacity", "Fully enclosed", "Cloud linked", "Fill-Level Indicator", "Solar-driven"],
    icons: [Sun, Leaf, Wifi],
  },
];

const ProductShowcase = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-primary">
        Explore the Complete Meshion Product Range
      </h2>
      <p className="text-center text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
        From simple containment to fully connected smart systems — the right fit for every environment.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        {products.map((product) => (
          <div
            key={product.name}
            className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Color header */}
            <div className={`${product.color} px-4 py-4`}>
              <h3 className="text-sm font-bold text-primary-foreground uppercase tracking-wider">
                {product.name}
              </h3>
              <div className="flex gap-2 mt-2">
                {product.icons.map((Icon, i) => (
                  <Icon key={i} className="h-4 w-4 text-primary-foreground/80" />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                {product.tagline}
              </p>
              <ul className="space-y-1 mb-4 flex-1">
                {product.features.map((f) => (
                  <li key={f} className="text-xs text-foreground flex items-start gap-1.5">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/products">
                <Button variant="outline" size="sm" className="w-full text-xs rounded-full">
                  See Product
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductShowcase;
