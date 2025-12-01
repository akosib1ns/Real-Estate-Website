import { useState, useEffect } from "react";
import { Property } from "../App";
import { Search, ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Bed,
  Bath,
  Maximize,
  Phone,
  User,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Footer } from "./Footer";
import { PropertyCard } from "./PropertyCard";

interface RentPropertiesProps {
  properties: Property[];
  onNavigateToAgent: (view: "agent-profile" | "contact-agent", property: Property) => void;
  onBack?: () => void;
}

export function RentProperties({
  properties,
  onNavigateToAgent,
  onBack,
}: RentPropertiesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [CityFilter, setCityFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] =
    useState<string>("all");
  const [filteredProperties, setFilteredProperties] =
    useState(properties);
  const [selectedProperty, setSelectedProperty] =
    useState<Property | null>(null);

  useEffect(() => {
    let filtered = [...properties];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.location
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      );
    }

    // City filter
    if (CityFilter !== "all") {
      filtered = filtered.filter((p) => p.City === CityFilter);
    }

    // Category filter
    if (categoryFilter !== "all") {
      const bedrooms = parseInt(categoryFilter);
      filtered = filtered.filter((p) => p.bedrooms >= bedrooms);
    }

    setFilteredProperties(filtered);
  }, [searchQuery, CityFilter, categoryFilter, properties]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#7F858D] hover:text-[#222B52] mb-6 transition-colors"
          >
            <ArrowLeft className="size-5" />
            <span>Back</span>
          </button>
        )}

        {/* Tab */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-[#6B9AA4] text-white px-4 py-2 rounded">
            RENT
          </div>
          <div className="text-[#7F858D]">
            Properties for Rent
          </div>
        </div>

        {/* Description */}
        <p className="text-[#7F858D] mb-8">
          Browse our selection of available rental properties.
          Discover rental homes that fit your needs.
        </p>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-[#7F858D]" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#7F858D] rounded focus:outline-none focus:ring-2 focus:ring-[#6B9AA4]"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* City Filter */}
          <div>
            <label className="block mb-2 text-[#222B52]">
              City
            </label>
            <Select
              value={CityFilter}
              onValueChange={setCityFilter}
            >
              <SelectTrigger className="border-[#7F858D]">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All City</SelectItem>
                <SelectItem value="Mandaluyong">
                  Mandaluyong
                </SelectItem>
                <SelectItem value="Quezon">Quezon</SelectItem>
                <SelectItem value="Pasig">Pasig</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block mb-2 text-[#222B52]">
              Category
            </label>
            <Select
              value={categoryFilter}
              onValueChange={setCategoryFilter}
            >
              <SelectTrigger className="border-[#7F858D]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Categories
                </SelectItem>
                <SelectItem value="1">1+ Bedrooms</SelectItem>
                <SelectItem value="2">2+ Bedrooms</SelectItem>
                <SelectItem value="3">3+ Bedrooms</SelectItem>
                <SelectItem value="4">4+ Bedrooms</SelectItem>
                <SelectItem value="5">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#222B52]">
            Featured Properties for Rent
          </h2>
          <p className="text-[#7F858D]">
            {filteredProperties.length} listings available
          </p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 text-[#7F858D]">
            No properties found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={() => setSelectedProperty(property)}
                type="rent"
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />

      {/* Property Details Dialog */}
      <Dialog
        open={!!selectedProperty}
        onOpenChange={() => setSelectedProperty(null)}
      >
        <DialogContent className="max-w-3xl bg-white">
          {selectedProperty && (
            <>
              <DialogHeader>
                <DialogTitle className="text-[#222B52]">
                  {selectedProperty.title}
                </DialogTitle>
                <DialogDescription className="text-[#7F858D]">
                  Property details and contact information
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image */}
                <div className="aspect-video bg-gray-100 rounded overflow-hidden">
                  <ImageWithFallback
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center gap-2 text-[#7F858D] mb-3">
                    <MapPin className="size-4" />
                    <span>{selectedProperty.location}</span>
                  </div>

                  <div className="text-[#222B52] mb-4">
                    ₱{selectedProperty.price.toLocaleString()}
                    /month
                  </div>

                  <p className="text-[#7F858D] mb-6">
                    {selectedProperty.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-[#7F858D] mb-6">
                    <div className="flex items-center gap-2">
                      <Bed className="size-5" />
                      <span>
                        {selectedProperty.bedrooms} Bedrooms
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Bath className="size-5" />
                      <span>
                        {selectedProperty.bathrooms} Bathrooms
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Maximize className="size-5" />
                      <span>{selectedProperty.area}m²</span>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="border-t border-[#7F858D] pt-6">
                    <h4 className="mb-4 text-[#222B52]">
                      Contact Information
                    </h4>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-[#222B52]">
                        <User className="size-4" />
                        <span>
                          {selectedProperty.ownerName}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-[#222B52]">
                        <Phone className="size-4" />
                        <span>
                          {selectedProperty.ownerContact}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        className="w-full bg-[#7F858D] hover:bg-[#6a7180] text-white"
                        onClick={() => {
                          onNavigateToAgent("agent-profile", selectedProperty);
                          setSelectedProperty(null);
                        }}
                      >
                        <User className="size-4 mr-2" />
                        Agent Profile
                      </Button>
                      <Button
                        className="w-full bg-[#222B52] hover:bg-[#1a2040] text-white"
                        onClick={() => {
                          onNavigateToAgent("contact-agent", selectedProperty);
                          setSelectedProperty(null);
                        }}
                      >
                        <Phone className="size-4 mr-2" />
                        Contact Agent
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}