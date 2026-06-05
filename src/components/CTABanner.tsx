import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="py-20 lg:py-28 gradient-cta">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4 text-balance">
        Prepared to Elevate Your Space Altogether?
      </h2>
      <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
        Complete the enquiry form and begin your Meshion journey today.
      </p>
      <Link to="/contact">
        <Button
          size="lg"
          className="rounded-full gradient-accent border-0 text-accent-foreground font-semibold px-10 text-base hover:opacity-90"
        >
          Book a Demo
        </Button>
      </Link>
    </div>
  </section>
);

export default CTABanner;
