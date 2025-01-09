import React from 'react';
import {
  Droplets, Wind, Sun, Sunrise, Sunset, Moon,
  Thermometer, Gauge, Eye, CloudRain, Compass
} from 'lucide-react';

interface WeatherCardProps {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  onExpand: () => void;
}

export function WeatherCard({
  temperature,
  condition,
  humidity,
  windSpeed,
  windDirection,
  onExpand
}: WeatherCardProps) {
  return (
    <div 
      onClick={onExpand}
      className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      <div className="mb-6">
        <div className="text-3xl font-bold text-gray-800">
          {temperature}°C
          <span className="text-lg text-gray-600 ml-2">
            ({Math.round(temperature * 9/5 + 32)}°F)
          </span>
        </div>
        <div className="text-lg text-gray-600 mt-1">
          {condition}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Droplets className="w-5 h-5 text-blue-500" />
          <div>
            <div className="text-sm text-gray-600">Humidity</div>
            <div className="font-semibold">{humidity}%</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Wind className="w-5 h-5 text-teal-500" />
          <div>
            <div className="text-sm text-gray-600">Wind</div>
            <div className="font-semibold flex items-center gap-1">
              <span>{windSpeed} km/h</span>
              <Compass 
                className="w-4 h-4 transform" 
                style={{ 
                  transform: `rotate(${
                    windDirection === 'N' ? 0 :
                    windDirection === 'NE' ? 45 :
                    windDirection === 'E' ? 90 :
                    windDirection === 'SE' ? 135 :
                    windDirection === 'S' ? 180 :
                    windDirection === 'SW' ? 225 :
                    windDirection === 'W' ? 270 :
                    windDirection === 'NW' ? 315 : 0
                  }deg)`
                }}
              />
              <span className="text-sm">{windDirection}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <div className="text-sm text-gray-600 mb-3">Travel Conditions</div>
        <div className="space-y-2">
          {/* Road Safety */}
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${
              windSpeed > 30 ? 'bg-red-500' : 
              windSpeed > 20 ? 'bg-yellow-500' : 
              'bg-green-500'
            }`} />
            <span className="text-sm">Road Safety: {
              windSpeed > 30 ? 'Exercise Caution' :
              windSpeed > 20 ? 'Fair' :
              'Good'
            }</span>
          </div>
          
          {/* Visibility */}
          <div className={`w-2 h-2 rounded-full ${
            condition.toLowerCase().includes('fog') ? 'bg-red-500' :
            condition.toLowerCase().includes('rain') ? 'bg-yellow-500' :
            'bg-green-500'
          }`} />
          <span className="text-sm">Visibility: {
            condition.toLowerCase().includes('fog') ? 'Poor' :
            condition.toLowerCase().includes('rain') ? 'Moderate' :
            'Good'
          }</span>
        </div>
      </div>
      
      <div className="text-sm text-blue-500 hover:text-blue-600 text-center">
        Click for detailed forecast
      </div>
    </div>
  );
}