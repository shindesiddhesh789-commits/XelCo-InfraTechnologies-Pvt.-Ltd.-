import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { solutionPages } from "@/data/solutionPages";

const Solutions = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6">
            Smart Waste Solutions for Every Public Environment
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meshion combines enclosed smart bins, IoT monitoring, and
            operations intelligence to help Indian cities and institutions
            maintain cleaner spaces with fewer resources.
          </p>
        </div>
      </section>

      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary">
            Choose a Solution Category
          </h2>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionPages.map((solution) => (
              <div
                key={solution.slug}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={solution.heroImage}
                    alt={`${solution.label} smart waste solution`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={960}
                    height={640}
                  />
                </div>

                <div className="px-6 py-6 text-center flex-1 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                    {solution.tagline}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {solution.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {solution.cardDescription}
                  </p>
                  <div>
                    <Link to={solution.path}>
                      <Button
                        variant="outline"
                        className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 transition-colors"
                      >
                        Find out more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Share your location type and waste goals. Our team will suggest a
            practical deployment plan.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name*"
                value={form.firstName}
                onChange={(event) =>
                  setForm({ ...form, firstName: event.target.value })
                }
                className="w-full px-5 py-4 rounded-full bg-secondary text-foreground placeholder:text-muted-foreground text-sm outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                value={form.lastName}
                onChange={(event) =>
                  setForm({ ...form, lastName: event.target.value })
                }
                className="w-full px-5 py-4 rounded-full bg-secondary text-foreground placeholder:text-muted-foreground text-sm outline-none"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email*"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              className="w-full px-5 py-4 rounded-full bg-secondary text-foreground placeholder:text-muted-foreground text-sm outline-none"
              required
            />
            <input
              type="text"
              placeholder="Organisation"
              value={form.organisation}
              onChange={(event) =>
                setForm({ ...form, organisation: event.target.value })
              }
              className="w-full px-5 py-4 rounded-full bg-secondary text-foreground placeholder:text-muted-foreground text-sm outline-none"
            />
            <textarea
              placeholder="Tell us about your requirements"
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              rows={4}
              className="w-full px-5 py-4 rounded-2xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm outline-none resize-none"
            />
            <div className="text-center pt-2">
              <Button
                type="submit"
                size="lg"
                className="rounded-full gradient-cta border-0 text-primary-foreground font-semibold px-12 text-base"
              >
                Submit Enquiry
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
