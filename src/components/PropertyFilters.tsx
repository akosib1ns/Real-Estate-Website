import { useEffect, useState } from 'react';
import { Property } from '../App';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';

interface PropertyFiltersProps {
  properties: Property[];
  onFilterChange: (filtered: Property[]) => void;
}

export function PropertyFilters({ properties, onFilterChange }: PropertyFiltersProps) {
  const [propertyType, setPropertyType] = useState<string>('all');
  const [bedrooms, setBedrooms] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 3000000]);

  useEffect(() => {
    let filtered = [...properties];

    if (propertyType !== 'all') {
      filtered = filtered.filter(p => p.type === propertyType);
    }

    if (bedrooms !== 'all') {
      const bedroomCount = parseInt(bedrooms);
      filtered = filtered.filter(p => p.bedrooms >= bedroomCount);
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    onFilterChange(filtered);
  }, [propertyType, bedrooms, priceRange, properties, onFilterChange]);

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      <h3 className="mb-4">Filter Properties</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block mb-2">Property Type</label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block mb-2">Minimum Bedrooms</label>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger>
              <SelectValue />
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

        <div>
          <label className="block mb-2">
            Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
          </label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={3000000}
            step={50000}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
}
