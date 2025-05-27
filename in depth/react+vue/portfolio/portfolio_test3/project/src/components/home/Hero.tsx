import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import AnimatedText from '../ui/AnimatedText';

interface HeroProps {
  setCursorVariant: (variant: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCursorVariant }) => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com' },
  ];

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-teal-600/20 rounded-full filter blur-[100px]" />
        <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-pink-600/20 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p 
                className="text-teal-500 font-medium inline-flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="w-10 h-[2px] bg-teal-500 mr-3"></span>
                Hi, my name is
              </motion.p>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
                <AnimatedText text="John Developer" delay={0.2} className="leading-tight" />
              </h1>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-400">
                <AnimatedText text="I build digital experiences" delay={0.5} className="leading-tight" />
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I'm a passionate full-stack developer specializing in creating exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products that solve real-world problems.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                setCursorVariant={setCursorVariant}
              >
                <Link to="/projects">View My Work</Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                setCursorVariant={setCursorVariant}
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <span className="text-gray-500">Follow me</span>
              <span className="w-12 h-[1px] bg-gray-700"></span>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      transition: { delay: 1.2 + index * 0.1 } 
                    }}
                    onMouseEnter={() => setCursorVariant('button')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-0" />
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Profile" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 z-10" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-teal-500/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-purple-500/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <motion.div 
          className="w-1 h-10 rounded-full bg-gradient-to-b from-purple-500 to-pink-500"
          animate={{ 
            scaleY: [1, 0.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;