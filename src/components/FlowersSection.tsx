import FlowerCard from "./FlowerCard";
import roseImg from "@/assets/flower-rose.jpg";
import lilyImg from "@/assets/flower-lily.jpg";
import tulipImg from "@/assets/flower-tulip.jpg";
import orchidImg from "@/assets/flower-orchid.jpg";
import sunflowerImg from "@/assets/flower-sunflower.jpg";

const flowers = [
  {
    name: "Roses",
    price: "₹80/stem",
    description: "Classic symbol of love and elegance, available in multiple colors",
    image: roseImg,
  },
  {
    name: "Lilies",
    price: "₹120/stem",
    description: "Pure and graceful, perfect for refined arrangements",
    image: lilyImg,
  },
  {
    name: "Tulips",
    price: "₹150/stem",
    description: "Delicate spring blooms with vibrant hues",
    image: tulipImg,
  },
  {
    name: "Orchids",
    price: "₹200/stem",
    description: "Exotic and sophisticated, long-lasting beauty",
    image: orchidImg,
  },
  {
    name: "Sunflowers",
    price: "₹90/stem",
    description: "Bright and cheerful, bringing warmth to any space",
    image: sunflowerImg,
  },
];

const FlowersSection = () => {
  return (
    <section id="flowers" className="section-padding bg-muted/30">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-widest text-sm uppercase">
            Our Collection
          </span>
          <h2 className="section-title mt-3">Fresh Blooms</h2>
          <p className="section-subtitle">
            Hand-selected flowers sourced from the finest growers, 
            delivered fresh to create unforgettable moments.
          </p>
        </div>

        {/* Flowers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {flowers.map((flower, index) => (
            <div
              key={flower.name}
              className="opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards"
              }}
            >
              <FlowerCard {...flower} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowersSection;