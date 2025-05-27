import React, { useContext } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import AboutPreview from '../components/home/AboutPreview';
import ContactCTA from '../components/home/ContactCTA';

interface HomeProps {
  setCursorVariant: (variant: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCursorVariant }) => {
  return (
    <>
      <Hero setCursorVariant={setCursorVariant} />
      <AboutPreview setCursorVariant={setCursorVariant} />
      <FeaturedProjects setCursorVariant={setCursorVariant} />
      <ContactCTA setCursorVariant={setCursorVariant} />
    </>
  );
};

export default Home;