import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Car, Shield, Timer, Star, ChevronRight } from 'lucide-react';
import Layout from './components/Layout';
import Home from './pages/Home';
import NewVehicles from './pages/NewVehicles';
import UsedVehicles from './pages/UsedVehicles';
import Compare from './pages/Compare';
import Financing from './pages/Financing';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';

const brands = [
  {
    name: 'BMW',
    logo: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=64',
    cars: []
  },
  {
    name: 'Mercedes',
    logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=64',
    cars: []
  },
  {
    name: 'Audi',
    logo: 'https://images.unsplash.com/photo-1610527003928-47afd5f470c6?auto=format&fit=crop&q=80&w=64',
    cars: []
  },
  {
    name: 'Porsche',
    logo: 'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?auto=format&fit=crop&q=80&w=64',
    cars: []
  }
];

function App() {
  const [selectedBrand, setSelectedBrand] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-vehicles" element={<NewVehicles />} />
        <Route path="/used-vehicles" element={<UsedVehicles />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;