import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bug,
  FerrisWheel,
  GraduationCap,
  Plane,
  Recycle,
  Sparkles,
  TrainFront,
  TrendingDown,
  Trees,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { solutionPagesBySlug } from "@/data/solutionPages";
import NotFound from "./NotFound";

type SolutionCategoryPageProps = {
  slug: string;
};

const categoryIcons: Record<string, LucideIcon> = {
  municipalities: Sparkles,
  parks: Trees,
  transit: TrainFront,
  universities: GraduationCap,
  airports: Plane,
  "amusement-parks-zoos": FerrisWheel,
  "food-service": UtensilsCrossed,
  "pest-rodent-control": Bug,
  "tidier-spaces": Sparkles,
  "public-space-recycling": Recycle,
  "fewer-collections": TrendingDown,
};

const upsertMetaByName = (name: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const SolutionCategoryPage = ({ slug }: SolutionCategoryPageProps) => {
  const page = solutionPagesBySlug[slug];

  useEffect(() => {
    if (!page) {
      return;
    }
    document.title = page.seoTitle;
    upsertMetaByName("description", page.seoDescription);
    upsertMetaByName("twitter:title", page.seoTitle);
    upsertMetaByName("twitter:description", page.seoDescription);
    upsertMetaByProperty("og:title", page.seoTitle);
    upsertMetaByProperty("og:description", page.seoDescription);
  }, [page]);

  if (!page) {
    return <NotFound />;
  }

  const CategoryIcon = categoryIcons[page.slug] ?? Sparkles;

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={page.heroImage}
            alt={page.heroAlt}
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
          <div className="max-w-2xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              <CategoryIcon className="h-4 w-4" />
              {page.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground text-balance">
              {page.heroTitle}
            </h1>
            <p className="text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
              {page.heroSubtitle}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-full gradient-cta border-0 text-primary-foreground font-semibold px-10 text-base"
                >
                  {page.ctaButtonLabel}
                </Button>
              </Link>
              <a href="#benefits">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold px-10 text-base"
                >
                  Explore Benefits
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                The Challenge
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                {page.problemTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {page.problemDescription}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                {page.problemPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={page.problemImage}
                alt={page.problemAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={960}
                height={640}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={page.solutionImage}
                alt={page.solutionAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={960}
                height={640}
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                The Meshion Solution
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                {page.solutionTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {page.solutionDescription}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {page.solutionFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            Why This Solution Works
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            {page.benefitsHeading}
          </h2>
        </div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mx-auto mb-5">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            {page.useCasesHeading}
          </h2>
        </div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-3xl gradient-green px-6 py-12 md:p-14 text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              {page.ctaTitle}
            </h2>
            <p className="text-primary-foreground/85 text-lg max-w-3xl mx-auto mb-8">
              {page.ctaDescription}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-full gradient-accent border-0 text-accent-foreground font-semibold px-10"
                >
                  {page.ctaButtonLabel}
                </Button>
              </Link>
              <Link to="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/50 bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary px-10"
                >
                  View All Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionCategoryPage;
