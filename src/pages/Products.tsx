import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Wifi, BarChart3, Sun, Shield, Gauge } from "lucide-react";
import heroBin from "@/assets/hero-bin.jpg";
import dashboardImg from "@/assets/software-dashboard.jpg";

const products = [
  {
    icon: Trash2,
    title: "SmartBin Pro",
    description: "Solar-powered compacting waste bin with IoT sensors. Holds 5x more waste, operates off-grid, and reports fill levels in real time.",
    image: heroBin,
    features: ["Solar compaction", "150-gallon capacity", "IP65 weather rating", "4G / Wi-Fi / LoRaWAN"],
  },
  {
    icon: Wifi,
    title: "Smart Sensors Module",
    description: "Retrofit ultrasonic fill-level sensors for existing bins. Easy installation, long battery life, and seamless cloud integration.",
    image: null,
    features: ["Ultrasonic sensing", "5-year battery", "Plug & play install", "Multi-protocol support"],
  },
  {
    icon: BarChart3,
    title: "Meshion Cloud Dashboard",
    description: "AI-powered fleet management platform. Optimize routes, monitor performance, and generate sustainability reports from one interface.",
    image: dashboardImg,
    features: ["Real-time monitoring", "Route optimization", "Automated alerts", "Compliance reports"],
  },
];

const highlights = [
  { icon: Sun, label: "Solar Powered", desc: "Zero energy costs" },
  { icon: Shield, label: "Enterprise Grade", desc: "Built for harsh environments" },
  { icon: Gauge, label: "5× Capacity", desc: "Fewer pickups needed" },
  { icon: Wifi, label: "Always Connected", desc: "Multi-protocol IoT" },
];

const Products = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 gradient-hero">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
          Our <span className="text-primary">Products</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          From smart bins to cloud analytics — everything you need to modernize waste management.
        </p>
      </div>
    </section>

    {/* Highlights strip */}
    <section className="py-10 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3 text-primary-foreground">
              <Icon className="h-8 w-8 flex-shrink-0" />
              <div>
                <div className="font-bold text-sm">{label}</div>
                <div className="text-xs text-primary-foreground/70">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Product Cards */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 space-y-16">
        {products.map(({ icon: Icon, title, description, image, features }, i) => (
          <div
            key={title}
            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
          >
            <div className={`space-y-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
              <ul className="grid grid-cols-2 gap-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="gradient-cta border-0 text-primary-foreground font-semibold px-6 mt-2">
                  Get a Quote
                </Button>
              </Link>
            </div>
            <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
              {image ? (
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                  <img src={image} alt={title} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              ) : (
                <div className="rounded-2xl bg-secondary border border-border h-80 flex items-center justify-center">
                  <Icon className="h-24 w-24 text-primary/20" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default Products;
