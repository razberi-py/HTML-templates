import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';

interface ProjectsProps {
  setCursorVariant: (variant: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setCursorVariant }) => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with cart functionality, payment processing, and order management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web App',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Vue.js', 'Firebase', 'Tailwind', 'TypeScript'],
      category: 'Web App',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Health & Wellness Platform',
      description: 'A wellness platform featuring workout tracking, nutrition planning, and progress visualization.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Redux', 'GraphQL', 'AWS'],
      category: 'Mobile App',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing and analyzing social media accounts and campaigns.',
      image: 'https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Angular', 'NgRx', 'D3.js', 'Firebase'],
      category: 'Web App',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Real Estate Listing Platform',
      description: 'A platform for listing, searching, and managing real estate properties with advanced filtering.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'PostgreSQL', 'MapBox'],
      category: 'Web App',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Weather Forecast App',
      description: 'A weather application providing accurate forecasts, radar maps, and severe weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Redux', 'Weather API', 'Geolocation'],
      category: 'Mobile App',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Portfolio Website Template',
      description: 'A customizable portfolio website template for developers and designers.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      category: 'Website',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Blog Platform',
      description: 'A feature-rich blog platform with content management, user authentication, and SEO optimization.',
      image: 'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
      category: 'Web App',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
  ];

  const categories = ['All', 'Web App', 'Mobile App', 'Website'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24">
      <Section className="min-h-[40vh] flex items-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]" />
          <div className="absolute top-1/3 -left-20 w-72 h-72 bg-teal-600/20 rounded-full filter blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <motion.p 
              className="text-teal-500 font-medium inline-flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-10 h-[2px] bg-teal-500 mr-3"></span>
              My Work
            </motion.p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Projects & Case Studies
            </h1>
            
            <motion.p 
              className="text-gray-400 text-lg mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A showcase of my recent work, personal projects, and collaborations across various domains and technologies.
            </motion.p>
          </div>
        </div>
      </Section>
      
      <Section className="bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            
            <motion.div 
              className="w-full md:w-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              />
            </motion.div>
          </div>
          
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                key={activeCategory + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    setCursorVariant={setCursorVariant}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-16"
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </div>
  );
};

export default Projects;