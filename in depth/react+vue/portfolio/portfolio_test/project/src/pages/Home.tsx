import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Staggered text animation for the hero heading
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const words = "Creative Developer & Designer".split(' ');

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 dark:from-primary-900/30 dark:to-secondary-900/30" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>
        
        {/* Animated background shapes */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-500/20 dark:bg-primary-500/10"
          animate={{ 
            scale: [1, 1.2, 1], 
            x: [0, 20, 0], 
            y: [0, -20, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-secondary-500/20 dark:bg-secondary-500/10"
          animate={{ 
            scale: [1, 1.1, 1], 
            x: [0, -20, 0], 
            y: [0, 20, 0] 
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              {words.map((word, index) => (
                <motion.span 
                  key={index} 
                  variants={item}
                  className="inline-block mr-2 md:mr-4 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto"
            >
              Crafting visually stunning and functional digital experiences that leave a lasting impression.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/projects" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center group">
                View Projects
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-800 dark:text-gray-200 font-medium py-3 px-6 rounded-lg transition-colors">
                Get in Touch
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center"
          >
            <button 
              onClick={scrollToContent} 
              className="flex flex-col items-center text-gray-500 hover:text-primary-500 transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown size={20} className="animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section ref={scrollRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent projects showcasing my skills and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/70 to-secondary-500/70 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img 
                    src={`https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                    alt="Project thumbnail" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to="/projects" className="bg-white text-primary-500 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                      View Project
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A brief description of the project, technologies used, and the problem it solves.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-3 py-1 rounded-full">React</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-3 py-1 rounded-full">TailwindCSS</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-3 py-1 rounded-full">TypeScript</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium group">
              View All Projects
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The technologies and tools I use to bring ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['React', 'TypeScript', 'Node.js', 'TailwindCSS', 'Next.js', 'GraphQL', 'Figma', 'UI/UX Design'].map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-primary-500 mb-3 flex justify-center">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{skill.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="font-medium">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing. Get in touch today!
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary-500 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;