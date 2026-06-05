import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import municipalitiesImg from "@/assets/solution-municipalities.jpg";
import universitiesImg from "@/assets/solution-universities.jpg";
import airportsImg from "@/assets/solution-airports.jpg";

const solutions = [
  {
    title: "Municipalities",
    description:
      "From small towns to sprawling metro areas, Meshion is revolutionising communities with adaptable smart bin solutions tailored to their distinct requirements.",
    image: municipalitiesImg,
    link: "/municipalities",
  },
  {
    title: "Universities",
    description:
      "Meshion bins empower colleges and universities to upgrade their campuses for an enhanced student experience.",
    image: universitiesImg,
    link: "/universities",
  },
  {
    title: "Airports",
    description:
      "Maintain spotless, efficient terminals with intelligent waste solutions engineered for high-footfall environments.",
    image: airportsImg,
    link: "/airports",
  },
];

const SolutionsCarousel = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-primary">
        A Meshion Bin for Every Setting
      </h2>
      <p className="text-center text-muted-foreground text-lg mb-14">
        Purpose-built solutions for every type of space.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="rounded-xl overflow-hidden border border-border group hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.image}
                alt={`Meshion smart bins for ${s.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={960}
                height={640}
              />
            </div>
            <div className="gradient-cta px-6 py-8 text-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-primary-foreground/80 mb-5 leading-relaxed">
                {s.description}
              </p>
              <Link to={s.link}>
                <Button className="rounded-full gradient-accent border-0 text-accent-foreground font-semibold px-8">
                  Discover more
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsCarousel;
