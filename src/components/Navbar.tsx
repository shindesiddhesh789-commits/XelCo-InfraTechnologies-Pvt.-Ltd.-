import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";

import { publicWasteSolutionLinks } from "@/data/solutionPages";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Solutions", hasMega: true },
  { label: "Products", href: "/products" },
  { label: "Company", href: "/company" },
];

const residentialWaste = [
  { label: "Smart Compost Programme", href: "/products" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 180);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-foreground/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link
          to="/"
          className="flex items-center"
        >
          <BrandLogo
            markClassName={scrolled ? "text-primary" : "text-primary-foreground"}
            textClassName={scrolled ? "text-foreground" : "text-primary-foreground"}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasMega ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <button
                  type="button"
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                    megaOpen
                      ? "text-primary"
                      : scrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                  onClick={() => setMegaOpen((previous) => !previous)}
                >
                  {link.label}
                  {megaOpen ? (
                    <ChevronUp className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronDown className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href!}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-primary"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="gradient-cta border-0 text-primary-foreground font-semibold px-6 rounded-full">
              Get in Touch
            </Button>
          </Link>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen((previous) => !previous)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {megaOpen && (
        <div
          className="hidden md:block absolute left-0 right-0 top-16 bg-background border-b border-border shadow-xl z-40"
          onMouseEnter={handleMegaEnter}
          onMouseLeave={handleMegaLeave}
        >
          <div className="container mx-auto px-4 lg:px-8 py-10">
            <div className="grid grid-cols-[1fr_1fr_1.2fr] gap-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Public Waste
                </h3>
                <div className="border-l-2 border-border pl-0">
                  <ul className="space-y-2.5">
                    {publicWasteSolutionLinks.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.href}
                          className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                          onClick={() => setMegaOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-l border-border pl-8">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Residential Waste
                </h3>
                <ul className="space-y-2.5 mb-8">
                  {residentialWaste.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                        onClick={() => setMegaOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/solutions" onClick={() => setMegaOpen(false)}>
                  <Button className="rounded-full gradient-accent border-0 text-accent-foreground font-semibold px-8">
                    View All Solutions
                  </Button>
                </Link>
              </div>

              <div className="gradient-green rounded-xl p-8 text-primary-foreground flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/75 mb-1">
                  Featured Solution
                </p>
                <h3 className="text-2xl font-extrabold mb-3">Tidier Spaces</h3>
                <p className="text-sm text-primary-foreground/90 leading-relaxed mb-6">
                  Create cleaner and more welcoming public areas with enclosed
                  smart bins, live alerts, and optimized service routes.
                </p>
                <Link to="/tidier-spaces" onClick={() => setMegaOpen(false)}>
                  <Button className="rounded-full gradient-accent border-0 text-accent-foreground font-semibold px-8 w-fit">
                    View Solution
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-1">
          <button
            className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground py-2"
            onClick={() => setMobileSolutionsOpen((previous) => !previous)}
          >
            Solutions
            {mobileSolutionsOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {mobileSolutionsOpen && (
            <div className="pl-4 pb-2 space-y-1">
              <p className="text-xs font-bold text-foreground uppercase tracking-wider pt-1 pb-1">
                Public Waste
              </p>
              {publicWasteSolutionLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-sm text-primary py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <p className="text-xs font-bold text-foreground uppercase tracking-wider pt-3 pb-1">
                Residential Waste
              </p>
              {residentialWaste.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-sm text-primary py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks
            .filter((item) => !item.hasMega)
            .map((item) => (
              <Link
                key={item.label}
                to={item.href!}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button className="gradient-cta border-0 text-primary-foreground font-semibold w-full rounded-full mt-2">
              Get in Touch
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
