import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-white mb-4">Find Your Dream Home</h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          Discover the perfect property from our extensive collection of homes, apartments, and luxury estates
        </p>
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              placeholder="Enter location or property type..."
              className="flex-1"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Search className="size-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
