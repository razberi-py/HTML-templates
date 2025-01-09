import React, { useState, useEffect } from 'react';
import { Cloud, AlertTriangle } from 'lucide-react';
import { WeatherCard } from './components/WeatherCard';
import { WeatherDetail } from './components/WeatherDetail';
import type { WeatherData, WeatherAlert } from './types/weather';

// Simulated weather data
const mockWeatherData: WeatherData = {
  location: 'San Francisco, CA',
  country: 'United States',
  coordinates: {
    lat: 37.7749,
    lon: -122.4194
  },
  timezone: 'America/Los_Angeles',
  localTime: '2024-03-19 14:30:00',
  feelsLike: 21,
  uvIndex: 6,
  uvRiskLevel: 'Moderate',
  pressure: 1015,
  visibility: 10,
  temperature: 23,
  temperatureF: 73.4,
  tempHighLow: {
    high: 25,
    low: 18
  },
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  windDirection: 'NW',
  windDegree: 315,
  precipitation: {
    probability: 20,
    amount: 0.5
  },
  sunTimes: {
    sunrise: '06:45',
    sunset: '19:15'
  },
  moonPhase: {
    phase: 'Waxing Crescent',
    illumination: 35
  },
  airQuality: {
    index: 42,
    level: 'Good',
    mainPollutant: 'PM2.5'
  },
  forecast: [
    {
      date: '2024-03-20',
      temperature: { min: 18, max: 25 },
      condition: 'Sunny',
      precipitation: 0,
    },
    {
      date: '2024-03-21',
      temperature: { min: 17, max: 24 },
      condition: 'Partly Cloudy',
      precipitation: 10,
    },
    {
      date: '2024-03-22',
      temperature: { min: 16, max: 22 },
      condition: 'Rain',
      precipitation: 80,
    },
  ],
  alerts: [
    {
      type: 'Heavy Rain Warning',
      severity: 'medium',
      message: 'Heavy rainfall expected in the evening. Possible flooding in low-lying areas.',
      startTime: '2024-03-20T18:00:00',
      endTime: '2024-03-21T00:00:00',
    },
  ],
};

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>(mockWeatherData);
  const [showDetail, setShowDetail] = useState(false);
  const [notification, setNotification] = useState<WeatherAlert | null>(null);

  useEffect(() => {
    // Check for weather alerts and show notifications
    if (weatherData.alerts && weatherData.alerts.length > 0) {
      const highPriorityAlert = weatherData.alerts.find(
        (alert) => alert.severity === 'high'
      );
      if (highPriorityAlert) {
        setNotification(highPriorityAlert);
      }
    }

    // Request notification permission
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }, [weatherData]);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-6"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1611928482473-7b27d24eab80?auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Cloud className="w-8 h-8 text-white" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Weather Forecast</h1>
            <div className="flex items-center gap-2 justify-center mt-1">
              <p className="text-white/90 text-lg">{weatherData.location}</p>
              <span className="text-white/60 text-sm">({weatherData.timezone})</span>
            </div>
          </div>
        </div>

        {/* Weather Card */}
        <WeatherCard
         temperature={weatherData.temperature}
         condition={weatherData.condition}
         humidity={weatherData.humidity}
         windSpeed={weatherData.windSpeed}
         windDirection={weatherData.windDirection}
         onExpand={() => setShowDetail(true)}
       />

        {/* Notification */}
        {notification && (
          <div className="mt-4 bg-red-500 text-white p-4 rounded-lg shadow-lg animate-bounce">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">{notification.type}</span>
            </div>
            <p className="text-sm">{notification.message}</p>
            <button
              onClick={() => setNotification(null)}
              className="mt-2 text-xs underline"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>

      {/* Weather Detail Modal */}
      {showDetail && (
        <WeatherDetail
          data={weatherData}
          onClose={() => setShowDetail(false)}
        />
      )}
    </div>
  );
}

export default App;