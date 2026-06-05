import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";

const Footer = () => (
  <footer className="bg-foreground py-12 text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-10 grid gap-8 md:grid-cols-4">
        <div>
          <BrandLogo
            className="mb-4"
            markClassName="h-6 w-6 text-primary-foreground"
            textClassName="text-lg text-primary-foreground"
          />
          <p className="text-sm leading-relaxed text-primary-foreground/60">
            Intelligent, solar-driven waste management solutions for cities,
            campuses, and public areas.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
            Solutions
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>
              <a
                href="/#features"
                className="transition-colors hover:text-primary-foreground"
              >
                Smart Bins
              </a>
            </li>
            <li>
              <a
                href="/#how-it-works"
                className="transition-colors hover:text-primary-foreground"
              >
                IoT Platform
              </a>
            </li>
            <li>
              <a
                href="/#specs"
                className="transition-colors hover:text-primary-foreground"
              >
                Tech Specs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>
              <Link
                to="/company"
                className="transition-colors hover:text-primary-foreground"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="transition-colors hover:text-primary-foreground"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition-colors hover:text-primary-foreground"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
            Connect
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>
              <a href="#" className="transition-colors hover:text-primary-foreground">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary-foreground">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary-foreground">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 md:flex-row">
        <p className="text-sm text-primary-foreground/50">
          Copyright {new Date().getFullYear()} Meshion. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-primary-foreground/50">
          <a href="#" className="transition-colors hover:text-primary-foreground">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-primary-foreground">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
