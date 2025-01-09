import { Vehicle } from '../types';

export const featuredVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'BMW M4 Competition',
    brand: 'BMW',
    category: ['sports', 'luxury', 'sedan'],
    price: 74900,
    condition: 'new',
    year: 2024,
    mileage: 0,
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1627454819213-0e8d8c7817e5?auto=format&fit=crop&q=80&w=2000'
    ],
    colors: ['Alpine White', 'Black Sapphire', 'Brooklyn Grey'],
    features: [
      'M Sport Package',
      'Premium Package',
      'Executive Package',
      'Carbon Fiber Interior Trim',
      'Harman Kardon Surround Sound',
      'Head-Up Display',
      'Adaptive M Suspension',
      'M Drive Professional'
    ],
    specs: {
      engine: '3.0L Twin-Turbo I6',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD',
      horsepower: 503,
      torque: 479,
      fuelEconomy: {
        city: 16,
        highway: 23,
        combined: 19
      }
    },
    safetyRating: 5,
    stockCount: 3,
    featured: true
  },
  {
    id: '2',
    name: 'Mercedes-AMG GT 63',
    brand: 'Mercedes',
    category: ['sports', 'luxury'],
    price: 142000,
    condition: 'new',
    year: 2024,
    mileage: 0,
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=2000',
    ],
    colors: ['Obsidian Black', 'MANUFAKTUR Diamond White', 'Selenite Grey'],
    features: ['AMG Night Package', 'Executive Package', 'Warmth & Comfort Package'],
    specs: {
      engine: '4.0L Biturbo V8',
      transmission: '9-Speed AMG SPEEDSHIFT',
      drivetrain: 'AWD',
      horsepower: 577,
      torque: 590,
      fuelEconomy: {
        city: 15,
        highway: 21,
        combined: 17
      }
    },
    safetyRating: 5,
    stockCount: 2,
    featured: true
  },
  {
    id: '3',
    name: 'Porsche 911 GT3',
    brand: 'Porsche',
    category: ['sports', 'luxury'],
    price: 169700,
    condition: 'new',
    year: 2024,
    mileage: 0,
    images: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1614162692904-9d4b4af37100?auto=format&fit=crop&q=80&w=2000'
    ],
    colors: ['GT Silver Metallic', 'Guards Red', 'Shark Blue'],
    features: [
      'Sport Chrono Package',
      'Carbon Ceramic Brakes',
      'Front Axle Lift System',
      'LED Matrix Headlights',
      'Bose Surround Sound',
      'Extended Range Fuel Tank',
      'Club Sport Package'
    ],
    specs: {
      engine: '4.0L Naturally Aspirated Flat-6',
      transmission: '7-Speed PDK',
      drivetrain: 'RWD',
      horsepower: 502,
      torque: 346,
      fuelEconomy: {
        city: 14,
        highway: 18,
        combined: 16
      }
    },
    safetyRating: 5,
    stockCount: 1,
    featured: true
  },
  {
    id: '4',
    name: 'BMW iX M60',
    brand: 'BMW',
    category: ['electric', 'suv', 'luxury'],
    price: 108900,
    condition: 'new',
    year: 2024,
    mileage: 0,
    images: [
      'https://images.unsplash.com/photo-1656468014942-fc3f9084b2b4?auto=format&fit=crop&q=80&w=2000'
    ],
    colors: ['Oxide Grey', 'Phytonic Blue', 'Storm Bay'],
    features: [
      'Driving Assistant Professional',
      'Panoramic Sky Lounge LED Roof',
      'Bowers & Wilkins Diamond Surround Sound',
      'Heat Comfort Package',
      'Luxury Seating Package',
      'Parking Assistant Professional'
    ],
    specs: {
      engine: 'Dual Electric Motors',
      transmission: 'Single-Speed',
      drivetrain: 'AWD',
      horsepower: 610,
      torque: 811,
      fuelEconomy: {
        city: 77,
        highway: 80,
        combined: 78
      }
    },
    safetyRating: 5,
    stockCount: 2,
    featured: true
  },
  {
    id: '5',
    name: 'Audi RS e-tron GT',
    brand: 'Audi',
    category: ['electric', 'luxury', 'sports'],
    price: 147500,
    condition: 'new',
    year: 2024,
    mileage: 0,
    images: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000',
    ],
    colors: ['Daytona Gray', 'Tactical Green', 'Kemora Gray'],
    features: ['RS Design Package', 'Year One Package', 'Executive Package'],
    specs: {
      engine: 'Dual Electric Motors',
      transmission: '2-Speed Automatic',
      drivetrain: 'AWD',
      horsepower: 637,
      torque: 612,
      fuelEconomy: {
        city: 79,
        highway: 82,
        combined: 81
      }
    },
    safetyRating: 5,
    stockCount: 1,
    featured: true
  },
  {
    id: '6',
    name: 'Mercedes-AMG G 63',
    brand: 'Mercedes',
    category: ['suv', 'luxury'],
    price: 179000,
    condition: 'new',
    year: 2024,
    mileage: 0,
    images: [
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=2000'
    ],
    colors: ['G manufaktur Diamond White', 'Obsidian Black', 'Arabian Grey'],
    features: [
      'AMG Night Package',
      'Exclusive Interior Plus Package',
      'Winter Package',
      'Rear Seat Entertainment',
      'Burmester High-End 3D Surround Sound',
      'Active Multicontour Seats'
    ],
    specs: {
      engine: '4.0L Biturbo V8',
      transmission: '9-Speed AMG SPEEDSHIFT',
      drivetrain: 'AWD',
      horsepower: 577,
      torque: 627,
      fuelEconomy: {
        city: 13,
        highway: 16,
        combined: 14
      }
    },
    safetyRating: 5,
    stockCount: 1,
    featured: true
  }
];