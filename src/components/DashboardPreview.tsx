import dashboardImg from "@/assets/software-dashboard.jpg";

const DashboardPreview = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            IoT Dashboard
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Complete Visibility, <span className="text-primary">One Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Monitor fill levels, optimize collection routes, and track fleet performance in real time.
            Our cloud platform turns raw sensor data into actionable insights.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Live fill-level heatmaps across all locations",
              "AI-powered route optimization reduces fuel by 60%",
              "Automated alerts for overflow and maintenance",
              "Exportable reports for sustainability compliance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
          <img
            src={dashboardImg}
            alt="Meshion IoT dashboard showing fleet management and analytics"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={960}
            height={640}
          />
        </div>
      </div>
    </div>
  </section>
);

export default DashboardPreview;
