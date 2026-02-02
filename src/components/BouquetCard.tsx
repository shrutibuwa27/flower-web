import { ArrowRight } from "lucide-react";

interface BouquetCardProps {
  name: string;
  priceRange: string;
  image: string;
}

const BouquetCard = ({ name, priceRange, image }: BouquetCardProps) => {
  return (
    <div className="group card-elegant">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
          <h3 className="text-2xl font-serif mb-1">{name}</h3>
          <p className="text-card/80 mb-4">{priceRange}</p>
          
          <button className="flex items-center gap-2 text-card/90 group-hover:text-card transition-colors">
            <span className="font-medium">View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BouquetCard;