export interface WeatherData {
  location: string;
  country: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  timezone: string;
  localTime: string;
  feelsLike: number;
  uvIndex: number;
  uvRiskLevel: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';
  pressure: number;
  visibility: number;
  temperature: number;
  temperatureF: number;
  tempHighLow: {
    high: number;
    low: number;
  };
  condition: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  windDegree: number;
  precipitation: {
    probability: number;
    amount: number;
  };
  sunTimes: {
    sunrise: string;
    sunset: string;
  };
  moonPhase: {
    phase: 'New Moon' | 'Waxing Crescent' | 'First Quarter' | 'Waxing Gibbous' | 'Full Moon' | 'Waning Gibbous' | 'Last Quarter' | 'Waning Crescent';
    illumination: number;
  };
  airQuality: {
    index: number;
    level: 'Good' | 'Moderate' | 'Unhealthy for Sensitive Groups' | 'Unhealthy' | 'Very Unhealthy' | 'Hazardous';
    mainPollutant: string;
  };
  forecast: ForecastDay[];
  hourlyForecast: HourlyForecast[];
  alerts?: WeatherAlert[];
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  condition: string;
  precipitation: number;
  windSpeed: number;
}

export interface ForecastDay {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: string;
  precipitation: number;
  humidity: number;
  windSpeed: number;
  sunrise: string;
  sunset: string;
}

export interface RecentLocation {
  id: string;
  name: string;
  country: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  lastAccessed: string;
  isFavorite: boolean;
}
export interface WeatherAlert {
  type: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
  startTime: string;
  endTime: string;
}