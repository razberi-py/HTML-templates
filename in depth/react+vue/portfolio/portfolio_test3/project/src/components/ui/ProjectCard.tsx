import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  setCursorVariant: (variant: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
  setCursorVariant,
}) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setCursorVariant('button')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex flex-col flex-grow p-6 relative z-10">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button 
              variant="primary" 
              size="sm" 
              icon={<ExternalLink size={16} />}
              setCursorVariant={setCursorVariant}
              onClick={() => window.open(liveUrl, '_blank')}
            >
              Live Demo
            </Button>
          )}
          
          {repoUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              icon={<Github size={16} />}
              setCursorVariant={setCursorVariant}
              onClick={() => window.open(repoUrl, '_blank')}
            >
              Code
            </Button>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 border-4 border-transparent group-hover:border-purple-500/30 transition-all duration-300 rounded-2xl pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;