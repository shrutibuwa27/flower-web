interface FlowerCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
}

const FlowerCard = ({ name, price, description, image }: FlowerCardProps) => {
  return (
    <div className="group card-elegant">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick add button */}
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card px-6 py-2 rounded-full font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-elevated">
          Add to Cart
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif text-foreground">{name}</h3>
          <span className="text-secondary font-semibold">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FlowerCard;