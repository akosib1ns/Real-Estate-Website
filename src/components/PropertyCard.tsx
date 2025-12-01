import { Property } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
  type?: "buy" | "rent";
}

export function PropertyCard({ property, onClick, type = "buy" }: PropertyCardProps) {
  const getCategoryLabel = () => {
    if (type === "rent") {
      return property.bedrooms >= 3
        ? "FAMILY HOME"
        : property.bedrooms === 1
          ? "STUDIO"
          : "APARTMENT";
    }
    return property.bedrooms >= 4
      ? "MODERN HOME"
      : property.bedrooms === 1
        ? "STUDIO"
        : "APARTMENT";
  };

  return (
    <div
      onClick={onClick}
      className={`bg-[#F8F7F0] rounded overflow-hidden hover:shadow-lg transition-shadow ${onClick ? 'cursor-pointer' : ''} group`}
    >
      {/* Image Section */}
      <div className="aspect-[4/3] bg-white overflow-hidden relative">
        <ImageWithFallback
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Category Label */}
        <div className="text-[#7F858D] uppercase tracking-wider">
          {getCategoryLabel()}
        </div>

        {/* Title */}
        <h3 className="text-[#222B52]">
          {property.title.length > 40
            ? property.title.substring(0, 40) + "..."
            : property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-[#7F858D]">
          <MapPin className="size-4 flex-shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-[#7F858D] border-t border-[#7F858D]/20 pt-4">
          <div className="flex items-center gap-1">
            <Bed className="size-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="size-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="size-4" />
            <span>{property.area}m²</span>
          </div>
        </div>

        {/* Price */}
        <div className="text-[#222B52] border-t border-[#7F858D]/20 pt-4">
          ₱{property.price.toLocaleString()}
          {type === "rent" && <span className="text-[#7F858D]">/month</span>}
        </div>

        {/* Description */}
        <p className="text-[#7F858D] line-clamp-2">
          {property.description}
        </p>

        {/* Read More Button */}
        <button className="relative text-[#222B52] hover:text-[#1a2040] transition-colors">
          Read more →
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#222B52] transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
}
