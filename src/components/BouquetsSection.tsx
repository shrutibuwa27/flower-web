import BouquetCard from "./BouquetCard";
import romanticImg from "@/assets/bouquet-romantic.jpg";
import birthdayImg from "@/assets/bouquet-birthday.jpg";
import weddingImg from "@/assets/bouquet-wedding.jpg";
import minimalImg from "@/assets/bouquet-minimal.jpg";

const bouquets = [
  {
    name: "Romantic Bouquets",
    priceRange: "₹1,499 - ₹2,999",
    image: romanticImg,
  },
  {
    name: "Birthday Bouquets",
    priceRange: "₹999 - ₹2,499",
    image: birthdayImg,
  },
  {
    name: "Wedding Bouquets",
    priceRange: "₹3,999 - ₹7,999",
    image: weddingImg,
  },
  {
    name: "Minimal Hand Bouquets",
    priceRange: "₹799 - ₹1,299",
    image: minimalImg,
  },
];

const BouquetsSection = () => {
  return (
    <section id="bouquets" className="section-padding">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-widest text-sm uppercase">
            Curated Collections
          </span>
          <h2 className="section-title mt-3">Signature Bouquets</h2>
          <p className="section-subtitle">
            Thoughtfully designed arrangements for every occasion, 
            from intimate gestures to grand celebrations.
          </p>
        </div>

        {/* Bouquets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bouquets.map((bouquet, index) => (
            <div
              key={bouquet.name}
              className="opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: "forwards"
              }}
            >
              <BouquetCard {...bouquet} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BouquetsSection;