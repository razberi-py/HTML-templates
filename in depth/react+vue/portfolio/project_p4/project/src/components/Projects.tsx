import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'mobile' | 'backend';
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "#",
    liveUrl: "#",
    category: "web",
    highlights: ["50% faster checkout process", "99.9% uptime", "2x conversion rate"]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management platform with real-time updates and team collaboration features.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "#",
    liveUrl: "#",
    category: "web",
    highlights: ["10k+ active users", "4.8/5 user rating", "30% productivity increase"]
  },
  {
    title: "AI Content Generator",
    description: "AI-powered platform for generating marketing content using advanced language models.",
    technologies: ["Python", "FastAPI", "React", "OpenAI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "#",
    liveUrl: "#",
    category: "backend",
    highlights: ["1M+ words generated", "85% time saved", "93% accuracy rate"]
  }
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'web', 'mobile', 'backend'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development solutions and technical expertise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-[#64FFDA] text-[#1A1A1A]'
                  : 'bg-[#2A3B4C] text-white hover:bg-[#2A3B4C]/80'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className="bg-[#2A3B4C] rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-[#2A3B4C] rounded-full hover:bg-[#64FFDA] transition-colors"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-[#2A3B4C] rounded-full hover:bg-[#64FFDA] transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Project Highlights */}
                <div className="mb-4">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-[#64FFDA] mb-1">
                      <span className="mr-2">•</span>
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#64FFDA]/10 text-[#64FFDA] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}