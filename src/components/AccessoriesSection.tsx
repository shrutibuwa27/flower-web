import glassVasesImg from "@/assets/vases-glass.jpg";
import ceramicVasesImg from "@/assets/vases-ceramic.jpg";
import plantersImg from "@/assets/planters.jpg";

const accessories = [
  {
    name: "Glass Vases",
    priceRange: "₹599 - ₹1,499",
    image: glassVasesImg,
  },
  {
    name: "Ceramic Vases",
    priceRange: "₹1,299 - ₹2,999",
    image: ceramicVasesImg,
  },
  {
    name: "Decorative Planters",
    priceRange: "₹799 - ₹1,999",
    image: plantersImg,
  },
];

const AccessoriesSection = () => {
  return (
    <section id="accessories" className="section-padding">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-widest text-sm uppercase">
            Home & Living
          </span>
          <h2 className="section-title mt-3">Vases & Accessories</h2>
          <p className="section-subtitle">
            Elevate your floral displays with our curated collection of 
            artisanal vases and elegant planters.
          </p>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accessories.map((item, index) => (
            <div
              key={item.name}
              className="group card-elegant opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: "forwards"
              }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif text-foreground mb-2">{item.name}</h3>
                <p className="text-secondary font-medium">{item.priceRange}</p>
                <button className="mt-4 btn-secondary text-sm py-2 px-6">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;