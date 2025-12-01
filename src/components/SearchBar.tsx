import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from './ui/input';
import { Property } from '../App';

interface SearchBarProps {
  properties: Property[];
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ properties, onSearch, placeholder = 'Search by location...' }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Extract unique locations from properties
  const availableLocations = useMemo(() => {
    const locations = properties.map(p => p.location);
    return [...new Set(locations)].sort();
  }, [properties]);

  // Filter locations based on search query
  const filteredLocations = useMemo(() => {
    if (!searchQuery) return availableLocations;
    return availableLocations.filter(location =>
      location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, availableLocations]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleSelectLocation = (location: string) => {
    setSearchQuery(location);
    onSearch(location);
    setShowSuggestions(false);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
        <Input
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          placeholder={placeholder}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && filteredLocations.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-64 overflow-y-auto">
          <div className="p-2">
            <p className="px-3 py-2 text-sm text-gray-500">Available Locations</p>
            {filteredLocations.map((location) => (
              <button
                key={location}
                onClick={() => handleSelectLocation(location)}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded transition-colors"
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close suggestions */}
      {showSuggestions && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowSuggestions(false)}
        />
      )}
    </div>
  );
}
