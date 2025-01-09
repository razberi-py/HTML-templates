import React from 'react';
import { X } from 'lucide-react';
import type { WeatherData } from '../types/weather';

interface WeatherDetailProps {
  data: WeatherData;
  onClose: () => void;
}

export function WeatherDetail({ data, onClose }: WeatherDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Detailed Forecast</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Forecast */}
          <div>
            <h3 className="text-lg font-semibold mb-3">7-Day Forecast</h3>
            <div className="grid gap-4">
              {data.forecast.map((day) => (
                <div
                  key={day.date}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="font-medium">{new Date(day.date).toLocaleDateString()}</span>
                  <div className="flex items-center gap-4">
                    <span>{day.condition}</span>
                    <span className="text-gray-600">
                      {day.temperature.min}° - {day.temperature.max}°
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          {data.alerts && data.alerts.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Weather Alerts</h3>
              <div className="space-y-3">
                {data.alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      alert.severity === 'high'
                        ? 'bg-red-100 text-red-800'
                        : alert.severity === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    <div className="font-semibold mb-1">{alert.type}</div>
                    <p className="text-sm">{alert.message}</p>
                    <div className="text-xs mt-2">
                      {new Date(alert.startTime).toLocaleString()} -{' '}
                      {new Date(alert.endTime).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}