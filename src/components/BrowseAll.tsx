import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Property } from "../App";
import { PropertyCard } from "./PropertyCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SearchBar } from "./SearchBar";

interface BrowseAllProps {
  properties: Property[];
  onBack: () => void;
}

export function BrowseAll({
  properties,
  onBack,
}: BrowseAllProps) {
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);
  const [searchQuery, setSearchQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [bedroomFilter, setBedroomFilter] =
    useState<string>("all");

  useEffect(() => {
    let filtered = [...properties];

    // Search filter
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.location
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      );
    }

    // City filter
    if (cityFilter !== "all") {
      filtered = filtered.filter((p) => p.City === cityFilter);
    }

    // Property type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter((p) => p.type === typeFilter);
    }

    // Minimum bedrooms filter
    if (bedroomFilter !== "all") {
      const minBedrooms = parseInt(bedroomFilter, 10);
      filtered = filtered.filter(
        (p) => p.bedrooms >= minBedrooms,
      );
    }

    setFilteredProperties(filtered);
  }, [
    searchQuery,
    cityFilter,
    typeFilter,
    bedroomFilter,
    properties,
  ]);

  const showFilteredCount =
    searchQuery.trim() !== "" ||
    cityFilter !== "all" ||
    typeFilter !== "all" ||
    bedroomFilter !== "all";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-purple-600 text-white py-8 px-4">
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
            Browse All Properties
          </h1>
          <p className="text-xl text-white/90">
            Explore all available properties with advanced
            filters
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
            placeholder="Search by location (e.g., Quezon City, Mandaluyong, Pasig)..."
          />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="mb-4">Filter Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* City Filter */}
            <div>
              <label className="block mb-2">City</label>
              <Select
                value={cityFilter}
                onValueChange={setCityFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    All Cities
                  </SelectItem>
                  <SelectItem value="Mandaluyong">
                    Mandaluyong
                  </SelectItem>
                  <SelectItem value="Quezon">Quezon</SelectItem>
                  <SelectItem value="Pasig">Pasig</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Property Type Filter */}
            <div>
              <label className="block mb-2">
                Property Type
              </label>
              <Select
                value={typeFilter}
                onValueChange={setTypeFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="buy">For Sale</SelectItem>
                  <SelectItem value="rent">For Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Minimum Bedrooms Filter */}
            <div>
              <label className="block mb-2">
                Minimum Bedrooms
              </label>
              <Select
                value={bedroomFilter}
                onValueChange={setBedroomFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            {showFilteredCount
              ? `Showing ${filteredProperties.length} matching properties`
              : `Showing all ${filteredProperties.length} properties`}
          </p>
        </div>

        {/* Results Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12 text-gray-600">
            No properties found matching your criteria.
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