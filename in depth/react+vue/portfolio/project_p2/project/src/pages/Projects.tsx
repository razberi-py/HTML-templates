import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Search } from 'lucide-react';
import Card from '../components/Card';

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  challenges: string;
  technologies: string[];
  category: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects
    .filter(project => 
      filter === 'all' || project.category === filter)
    .filter(project =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-dark-secondary rounded-lg focus:ring-2 focus:ring-accent-teal outline-none"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === category.value
                  ? 'bg-accent-teal text-dark-primary'
                  : 'bg-dark-secondary hover:bg-dark-secondary/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Role</h4>
                <p className="text-gray-400">{project.role}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technical Challenges</h4>
                <p className="text-gray-400">{project.challenges}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-teal hover:text-accent-teal/80"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300"
                  >
                    <Github size={20} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const categories = [
  { value: 'all', label: 'All' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'mobile', label: 'Mobile' },
];

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management',
    role: 'Lead Frontend Developer',
    challenges: 'Implemented complex state management and real-time updates using Redux and WebSockets',
    technologies: ['React', 'Redux', 'Node.js', 'WebSocket'],
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '2',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Data visualization dashboard with AI-driven insights',
    role: 'Frontend Developer',
    challenges: 'Optimized performance for rendering large datasets and complex visualizations',
    technologies: ['React', 'D3.js', 'TensorFlow.js'],
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '3',
    title: 'Cross-Platform Mobile App',
    description: 'Fitness tracking app with social features',
    role: 'Full Stack Developer',
    challenges: 'Implemented seamless offline functionality and data synchronization',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1526502900236-e988d89d881b?auto=format&fit=crop&q=80&w=1000',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
];

export default Projects;