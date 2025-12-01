import { Property } from '../App';
import { PropertyCard } from './PropertyCard';

interface FeaturedPropertiesProps {
  properties: Property[];
}

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  if (properties.length === 0) return null;

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-2">Featured Properties</h2>
          <p className="text-gray-600">Handpicked properties just for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
