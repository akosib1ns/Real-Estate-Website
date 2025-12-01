import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Property } from "../App";
import { PropertyCard } from "./PropertyCard";
import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./ui/select";

interface BuyPropertiesProps {
  properties: Property[];
  onBack: () => void;
}

export function BuyProperties({
  properties,
  onBack,
}: BuyPropertiesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [CityFilter, setCityFilter] = useState<string>("all");
  const [filteredProperties, setFilteredProperties] =
    useState(properties);

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

    setFilteredProperties(filtered);
  }, [searchQuery, CityFilter, properties]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-green-600 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 text-white hover:bg-white/20"
          >
            <ArrowLeft className="size-4 mr-2" />
            Back
          </Button>
          <h1 className="text-white mb-2">
            Properties for Sale
          </h1>
          <p className="text-xl text-white/90">
            Browse houses and lots available for purchase
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            properties={properties}
            onSearch={setSearchQuery}
            placeholder="Search by location (e.g., Quezon City, Mandaluyong, Pasig City)..."
          />
        </div>

        {/* City Filter */}
        <div className="mb-8 max-w-xs">
          <label className="block mb-2 text-gray-700">
            City
          </label>
          <Select
            value={CityFilter}
            onValueChange={setCityFilter}
          >
            <SelectTrigger className="border-gray-400">
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

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            {searchQuery || CityFilter !== "all"
              ? `Showing ${filteredProperties.length} matching properties`
              : `Showing all ${filteredProperties.length} properties`}
          </p>
        </div>

        {/* Results */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No properties found. Try adjusting your search or
              filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                showPrice={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}