import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface AboutPreviewProps {
  setCursorVariant: (variant: string) => void;
}

const AboutPreview: React.FC<AboutPreviewProps> = ({ setCursorVariant }) => {
  const skills = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and performant user interfaces using modern web technologies.',
      icon: <Code className="text-purple-500\" size={32} />,
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences with a focus on usability and aesthetics.',
      icon: <Palette className="text-teal-500" size={32} />,
    },
    {
      title: 'Backend Development',
      description: 'Developing robust and scalable server-side applications and APIs to power web applications.',
      icon: <Globe className="text-pink-500\" size={32} />,
    },
    {
      title: 'Team Collaboration',
      description: 'Working effectively in agile teams to deliver high-quality software products on schedule.',
      icon: <Users className="text-blue-500" size={32} />,
    },
  ];

  return (
    <Section id="about-preview" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 -right-60 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 -left-20 w-72 h-72 bg-teal-600/10 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="About Me"
              subtitle="A passionate developer creating exceptional digital experiences."
            />
            
            <motion.div 
              className="space-y-4 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                I'm a full-stack developer with over 5 years of experience building web and mobile applications. 
                My expertise spans across the entire development lifecycle, from conceptualization and design to implementation and deployment.
              </p>
              <p>
                I specialize in creating intuitive interfaces and robust backend systems that provide seamless experiences for users. 
                My approach combines technical knowledge with creative problem-solving to deliver solutions that exceed expectations.
              </p>
              
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  size="md" 
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                  setCursorVariant={setCursorVariant}
                >
                  <Link to="/about">More About Me</Link>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full"
                setCursorVariant={setCursorVariant}
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutPreview;