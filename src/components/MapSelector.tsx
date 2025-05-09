
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface MapSelectorProps {
  onSelectLocation: () => void;
}

const MapSelector = ({ onSelectLocation }: MapSelectorProps) => {
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  
  return (
    <div className="relative h-full bg-slate-100">
      {/* Placeholder Map UI - would be replaced with actual map integration */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-emerald-200 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center opacity-30"></div>
      
      {/* Map Controls */}
      <div className="absolute top-4 left-4 right-4 flex flex-col gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search for your village or area..." 
            className="h-12 pl-10 w-full rounded-md border-green-300 bg-white shadow-md focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
        </div>
        
        <div className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-md">
          <Checkbox 
            id="use-current" 
            checked={useCurrentLocation}
            onCheckedChange={(checked) => setUseCurrentLocation(checked as boolean)}
          />
          <Label htmlFor="use-current" className="text-base cursor-pointer">
            Use my current location
          </Label>
        </div>
      </div>
      
      {/* Selection Button */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-center">
        <Button 
          onClick={onSelectLocation} 
          size="lg" 
          className="h-14 px-8 text-lg bg-green-600 hover:bg-green-700 shadow-lg"
        >
          <svg className="mr-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Select This Location
        </Button>
      </div>
    </div>
  );
};

export default MapSelector;
