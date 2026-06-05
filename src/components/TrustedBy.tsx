import { Building2, GraduationCap, TreePine, Landmark, Hospital } from "lucide-react";

const logos = [
  { icon: Building2, label: "Metro City Council" },
  { icon: GraduationCap, label: "State University" },
  { icon: TreePine, label: "National Parks" },
  { icon: Landmark, label: "Federal District" },
  { icon: Hospital, label: "Regional Hospital" },
];

const TrustedBy = () => (
  <section id="trusted" className="py-12 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
        Relied upon by smart cities, campuses & parks across the nation
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {logos.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-muted-foreground/60">
            <Icon className="h-6 w-6" />
            <span className="text-sm font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
