export type VehicleCategory =
  | 'sedan'
  | 'suv'
  | 'truck'
  | 'sports'
  | 'electric'
  | 'luxury'
  | 'hybrid';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: VehicleCategory[];
  price: number;
  condition: 'new' | 'used';
  year: number;
  mileage: number;
  images: string[];
  colors: string[];
  features: string[];
  specs: {
    engine: string;
    transmission: string;
    drivetrain: string;
    horsepower: number;
    torque: number;
    fuelEconomy: {
      city: number;
      highway: number;
      combined: number;
    };
  };
  safetyRating: number;
  stockCount: number;
  featured?: boolean;
}