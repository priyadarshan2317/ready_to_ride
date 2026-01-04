import { MapPin, Zap, Gauge } from "lucide-react";

interface CarCardProps {
  id: number;
  name: string;
  year: number;
  price: string;
  mileage: string;
  fuel: string;
  image: string;
  badge?: string;
}

export default function CarCard({
  id,
  name,
  year,
  price,
  mileage,
  fuel,
  image,
  badge,
}: CarCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-gold text-navy px-3 py-1 rounded-full text-xs font-bold">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-foreground mb-1">
          {name} ({year})
        </h3>

        <div className="flex items-center gap-1 text-gold mb-3">
          <Zap size={14} />
          <span className="text-sm font-semibold">{price}</span>
        </div>

        {/* Specs */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Gauge size={14} />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} />
            <span>{fuel}</span>
          </div>
        </div>

        {/* Action Button */}
        <a
          href={`https://wa.me/918754953653?text=Hi%20Ready%20to%20Ride,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
            name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-navy hover:bg-primary text-white font-semibold py-2 rounded-lg transition-colors text-center"
        >
          Inquire Now
        </a>
      </div>
    </div>
  );
}
