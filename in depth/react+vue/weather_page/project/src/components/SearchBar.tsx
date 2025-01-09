import React, { useState } from 'react';
import { Search, MapPin, History, Star, StarOff } from 'lucide-react';
import type { RecentLocation } from '../types/weather';

interface SearchBarProps {
  onSearch: (query: string) => void;
  recentLocations: RecentLocation[];
  onSelectLocation: (location: RecentLocation) => void;
  onToggleFavorite: (locationId: string) => void;
}

export function SearchBar({
  onSearch,
  recentLocations,
  onSelectLocation,
  onToggleFavorite,
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showRecent, setShowRecent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
      setShowRecent(false);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowRecent(true)}
          placeholder="Search city, zip code, or coordinates..."
          className="w-full px-4 py-2 pl-10 pr-12 rounded-lg bg-white/90 backdrop-blur-md
                   border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400
                   focus:outline-none transition-all"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <button
          type="button"
          onClick={() => setShowRecent(true)}
          className="absolute right-3 top-2.5"
        >
          <History className="w-5 h-5 text-gray-400 hover:text-gray-600" />
        </button>
      </form>

      {showRecent && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200
                      max-h-80 overflow-y-auto z-50">
          <div className="p-2">
            <div className="flex items-center justify-between px-2 py-1 text-sm text-gray-500">
              <span>Recent Locations</span>
              <button
                onClick={() => setShowRecent(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                Close
              </button>
            </div>
            {recentLocations.map((location) => (
              <div
                key={location.id}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md
                         cursor-pointer transition-colors"
                onClick={() => {
                  onSelectLocation(location);
                  setShowRecent(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="font-medium">{location.name}</div>
                    <div className="text-sm text-gray-500">{location.country}</div>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(location.id);
                  }}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  {location.isFavorite ? (
                    <Star className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <StarOff className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}