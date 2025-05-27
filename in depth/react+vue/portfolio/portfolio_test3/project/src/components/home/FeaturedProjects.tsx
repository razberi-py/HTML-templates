import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

interface FeaturedProjectsProps {
  setCursorVariant: (variant: string) => void;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ setCursorVariant }) => {
  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with cart functionality, payment processing, and order management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Vue.js', 'Firebase', 'Tailwind', 'TypeScript'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      title: 'Health & Wellness Platform',
      description: 'A wellness platform featuring workout tracking, nutrition planning, and progress visualization.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Redux', 'GraphQL', 'AWS'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
  ];

  return (
    <Section 
      id="featured-projects" 
      className="bg-gradient-to-b from-[#050505] to-[#0a0a0a]"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work across various domains and technologies."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              setCursorVariant={setCursorVariant}
            />
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            setCursorVariant={setCursorVariant}
          >
            <Link to="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;