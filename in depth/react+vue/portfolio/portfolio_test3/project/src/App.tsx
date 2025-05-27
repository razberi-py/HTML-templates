import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home setCursorVariant={setCursorVariant} />} />
          <Route path="/about" element={<About setCursorVariant={setCursorVariant} />} />
          <Route path="/projects" element={<Projects setCursorVariant={setCursorVariant} />} />
          <Route path="/contact" element={<Contact setCursorVariant={setCursorVariant} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;