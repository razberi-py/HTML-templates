import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Define project categories
const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile Apps'];

// Define projects data
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with responsive design, cart functionality, and payment integration.',
    image: 'https://images.pexels.com/photos/6169/woman-hand-desk-office.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    description: 'Interactive dashboard for financial data visualization and analytics with real-time updates.',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UI/UX Design',
    technologies: ['Figma', 'Adobe XD', 'Illustrator'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts, nutrition, and progress with personalized recommendations.',
    image: 'https://images.pexels.com/photos/3912364/pexels-photo-3912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile Apps',
    technologies: ['React Native', 'Firebase', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Recipe Sharing Platform',
    description: 'Web application for sharing and discovering recipes with social features and personalized recommendations.',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Task Management UI',
    description: 'Clean and intuitive interface design for a productivity application with a focus on user experience.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UI/UX Design',
    technologies: ['Figma', 'Sketch', 'Principle'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Travel Companion App',
    description: 'Mobile application for planning trips, discovering attractions, and sharing experiences with others.',
    image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile Apps',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my recent work across different domains and technologies.
            </p>
          </motion.div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs px-3 py-1 m-2 rounded-full">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Empty state when no projects match the filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in this category. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;