import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => (
  <section className="py-16 lg:py-24 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            See Innovation in Action
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Meshion reaches far beyond the bin — redefining how we live, work, and experience public spaces.
          </p>
          <p className="text-foreground font-semibold">
            Discover how we're reshaping urban environments, one smart bin at a time.
          </p>
          <Button className="rounded-full gradient-accent border-0 text-accent-foreground font-semibold px-8">
            Explore More from Meshion
          </Button>
        </div>

        <div className="relative aspect-video bg-foreground/5 rounded-xl overflow-hidden border border-border group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 group-hover:bg-foreground/20 transition-colors">
            <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-primary-foreground ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
