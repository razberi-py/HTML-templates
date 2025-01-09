import { motion } from 'framer-motion';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Youtube,
  Twitch,
  Instagram,
  Globe,
  ExternalLink,
  BookOpen,
  Coffee,
  Newspaper
} from 'lucide-react';

const links = [
  {
    title: 'GitHub',
    url: 'https://github.com',
    icon: Github,
    color: 'from-gray-600 to-gray-400',
    description: 'Check out my open source projects and contributions'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com',
    icon: Twitter,
    color: 'from-blue-600 to-blue-400',
    description: 'Follow me for tech insights and updates'
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin,
    color: 'from-blue-800 to-blue-600',
    description: 'Connect with me professionally'
  },
  {
    title: 'Portfolio',
    url: 'https://example.com',
    icon: Globe,
    color: 'from-purple-600 to-purple-400',
    description: 'Explore my featured work and case studies'
  },
  {
    title: 'YouTube',
    url: 'https://youtube.com',
    icon: Youtube,
    color: 'from-red-600 to-red-400',
    description: 'Watch my tech tutorials and coding sessions'
  },
  {
    title: 'Blog',
    url: 'https://blog.example.com',
    icon: BookOpen,
    color: 'from-emerald-600 to-emerald-400',
    description: 'Read my articles about web development'
  },
  {
    title: 'Newsletter',
    url: 'https://newsletter.example.com',
    icon: Newspaper,
    color: 'from-yellow-600 to-yellow-400',
    description: 'Subscribe to my weekly tech newsletter'
  },
  {
    title: 'Buy Me a Coffee',
    url: 'https://buymeacoffee.com',
    icon: Coffee,
    color: 'from-orange-600 to-orange-400',
    description: 'Support my work and content creation'
  }
];

export default function Links() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Connect With Me</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Find me across the web and social media. Feel free to reach out for collaborations,
          questions, or just to say hi!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <motion.a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color}`}>
                <link.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  {link.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 text-sm mt-1">{link.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}