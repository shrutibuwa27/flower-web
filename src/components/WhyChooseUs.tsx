import { Leaf, Heart, Package, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh, Handpicked Daily",
    description: "Every flower is selected at peak freshness from trusted local and international growers",
  },
  {
    icon: Heart,
    title: "Custom Designs",
    description: "Our expert florists create bespoke arrangements tailored to your unique vision",
  },
  {
    icon: Package,
    title: "Premium Packaging",
    description: "Elegant gift packaging with sustainable materials and handwritten notes",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "On-time delivery with care, ensuring your flowers arrive in perfect condition",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-widest text-sm uppercase">
            The Bloom & Grace Promise
          </span>
          <h2 className="section-title mt-3">Why Choose Us</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards"
              }}
            >
              <div className="w-16 h-16 rounded-full bg-sage-light mx-auto mb-6 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;