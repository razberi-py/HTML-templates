import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, User } from 'lucide-react';

export const About = () => {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gray-800">
                <Code size={24} className="text-[#29B6F7]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <p className="text-gray-300">
                  Proficient in modern web technologies including React, TypeScript, and Node.js.
                  Experienced in building scalable applications and implementing responsive designs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gray-800">
                <Briefcase size={24} className="text-[#B829F7]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-300">
                  5+ years of professional experience in software development.
                  Worked with startups and enterprise clients to deliver high-quality solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gray-800">
                <User size={24} className="text-[#FF6B6B]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal</h3>
                <p className="text-gray-300">
                  Passionate about creating intuitive user experiences and solving complex problems.
                  Always learning and exploring new technologies.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "React", "TypeScript", "Node.js", "Next.js",
                "TailwindCSS", "GraphQL", "PostgreSQL", "AWS"
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="bg-gray-700/50 px-4 py-2 rounded-lg text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};