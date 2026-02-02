import heroImage from "@/assets/hero-flowers.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful floral arrangement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Decorative element */}
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="w-12 h-[2px] bg-secondary" />
            <span className="text-secondary font-medium tracking-widest text-sm uppercase">
              Artisan Floristry
            </span>
          </div>

          {/* Main heading */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Where Every Bloom
            <br />
            <span className="text-secondary">Tells a Story</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Handcrafted floral arrangements for life's most precious moments. 
            From intimate celebrations to grand events, we bring nature's beauty to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <a href="#flowers" className="btn-primary text-center">
              Shop Flowers
            </a>
            <a href="#decor" className="btn-outline text-center">
              Explore Decor
            </a>
          </div>

          {/* Trust indicators */}
          <div 
            className="flex items-center gap-8 mt-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <div className="text-center">
              <p className="text-2xl font-serif text-secondary">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-serif text-secondary">50+</p>
              <p className="text-sm text-muted-foreground">Events Styled</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-serif text-secondary">100%</p>
              <p className="text-sm text-muted-foreground">Fresh Daily</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;