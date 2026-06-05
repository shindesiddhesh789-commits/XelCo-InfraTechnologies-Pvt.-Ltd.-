import cleanerImg from "@/assets/section-cleaner.jpg";
import smarterImg from "@/assets/section-smarter.jpg";
import greenerImg from "@/assets/section-greener.jpg";

/* ── All Together Cleaner ─────────────────────────────── */
export const AllTogetherCleaner = () => (
  <section className="overflow-hidden">
    <div className="grid lg:grid-cols-2">
      {/* Image */}
      <div className="aspect-square lg:aspect-auto">
        <img
          src={cleanerImg}
          alt="Mother and child walking past a Meshion smart bin"
          className="w-full h-full object-cover"
          loading="lazy"
          width={960}
          height={1080}
        />
      </div>

      {/* Content */}
      <div className="bg-secondary px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Altogether Spotless
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          We transform your surroundings into tidy, inviting, and hygienic spaces.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">
              A Radically Superior Bin
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Once refuse enters, it stays sealed inside. Completely enclosed smart bins eliminate visible waste and airborne litter, cutting off pest food sources and keeping your environment safer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">
              Greater Capacity, Identical Footprint
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our compactors accommodate 5× the volume of conventional bins, resulting in fewer pickups and more peaceful, pristine surroundings.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">
              Command Your Environment
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Stop letting waste dictate your schedule. You'll receive alerts before overflow occurs, ensuring you always stay ahead.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── All Together Smarter ─────────────────────────────── */
export const AllTogetherSmarter = () => (
  <section className="overflow-hidden">
    <div className="grid lg:grid-cols-2">
      {/* Content on blue bg */}
      <div className="gradient-cta px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          Altogether Intelligent
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Our platform empowers you to take data-driven actions.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-1">
              Collect at the Right Moment
            </h3>
            <p className="text-primary-foreground/75 leading-relaxed">
              Your environment is constantly shifting — foot traffic, weather, and seasonal events all play a part. Our fill-level indicators and connected bins prevent overflows and show you exactly when and where to dispatch crews.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-1">
              Actionable Data on Your Space & Waste
            </h3>
            <p className="text-primary-foreground/75 leading-relaxed">
              Gain full command of your operations with live data and historical analytics on recycling rates, waste volumes, and collection performance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-1">
              An Optimised Collection Strategy
            </h3>
            <p className="text-primary-foreground/75 leading-relaxed">
              Precise analytics can slash pickups by up to 80%. Spend less effort hauling waste and more time enhancing your community or facility.
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="aspect-square lg:aspect-auto">
        <img
          src={smarterImg}
          alt="Professional using IoT dashboard in a smart city"
          className="w-full h-full object-cover"
          loading="lazy"
          width={960}
          height={1080}
        />
      </div>
    </div>
  </section>
);

/* ── All Together Greener ─────────────────────────────── */
export const AllTogetherGreener = () => (
  <section className="overflow-hidden">
    <div className="grid lg:grid-cols-2">
      {/* Image */}
      <div className="aspect-square lg:aspect-auto">
        <img
          src={greenerImg}
          alt="Father and child playing in a clean park with Meshion bins"
          className="w-full h-full object-cover"
          loading="lazy"
          width={960}
          height={1080}
        />
      </div>

      {/* Content on green bg */}
      <div className="gradient-green px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          Altogether Sustainable
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Deliver a measurable positive impact on nature, your neighbourhood, and the wider world.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-1">
              Recycling, Done Properly
            </h3>
            <p className="text-primary-foreground/75 leading-relaxed">
              Uniform and reliable recycling is essential for communities striving toward zero-waste and sustainability targets, paving the way for a healthier planet.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-1">
              Cleaner Air for Everyone
            </h3>
            <p className="text-primary-foreground/75 leading-relaxed">
              With significantly fewer collection trips, communities can cut fuel usage and greenhouse gas emissions by as much as 70%.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-1">
              Stop Plastic at the Source
            </h3>
            <p className="text-primary-foreground/75 leading-relaxed">
              Complete containment prevents wind-scattered and pest-spread litter, safeguarding our rivers, lakes, and oceans from pollution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
