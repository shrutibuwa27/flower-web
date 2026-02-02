import { Sparkles, Palette, Calendar } from "lucide-react";
import floralWallImg from "@/assets/decor-floral-wall.jpg";

const DecorSection = () => {
  return (
    <section id="decor" className="section-padding bg-primary/30">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={floralWallImg}
                alt="Floral wall backdrop"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elevated hidden md:block">
              <p className="text-sm text-muted-foreground mb-1">Starting from</p>
              <p className="text-3xl font-serif text-secondary">₹12,000</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-secondary font-medium tracking-widest text-sm uppercase">
              Event Styling
            </span>
            <h2 className="section-title mt-3 mb-6">
              Flower Wall & Event Decor
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Transform any space into a breathtaking floral paradise. Our premium 
              floral wall backdrops are perfect for weddings, corporate events, 
              photoshoots, and special celebrations.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Palette className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Custom Colors</h4>
                  <p className="text-muted-foreground">Choose from our palette or match your event theme perfectly</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Premium Flowers</h4>
                  <p className="text-muted-foreground">Roses, peonies, hydrangeas, and seasonal blooms</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Full Service</h4>
                  <p className="text-muted-foreground">Setup, maintenance, and dismantling included</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary inline-flex">
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecorSection;