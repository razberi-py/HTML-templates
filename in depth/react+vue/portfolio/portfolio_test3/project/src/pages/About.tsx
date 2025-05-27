import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Server, Database, Layout, Palette, Globe, BarChart, Github, Figma } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import AnimatedText from '../components/ui/AnimatedText';

interface AboutProps {
  setCursorVariant: (variant: string) => void;
}

const About: React.FC<AboutProps> = ({ setCursorVariant }) => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'UI/UX Design', level: 78 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 72 },
    { name: 'GraphQL', level: 68 },
  ];

  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and accessible user interfaces using modern web technologies.',
      icon: <Code className="text-purple-500\" size={32} />,
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs to power web applications.',
      icon: <Server className="text-teal-500" size={32} />,
    },
    {
      title: 'Database Design',
      description: 'Designing efficient database schemas and implementing data management solutions.',
      icon: <Database className="text-pink-500\" size={32} />,
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive and engaging user experiences with a focus on usability.',
      icon: <Palette className="text-blue-500" size={32} />,
    },
    {
      title: 'Web Performance',
      description: 'Optimizing web applications for speed, responsiveness, and efficiency.',
      icon: <BarChart className="text-yellow-500\" size={32} />,
    },
    {
      title: 'Responsive Design',
      description: 'Ensuring applications work seamlessly across all devices and screen sizes.',
      icon: <Layout className="text-green-500" size={32} />,
    },
  ];

  const technologies = [
    { name: 'React', icon: <Code size={24} /> },
    { name: 'Node.js', icon: <Server size={24} /> },
    { name: 'MongoDB', icon: <Database size={24} /> },
    { name: 'PostgreSQL', icon: <Database size={24} /> },
    { name: 'TypeScript', icon: <Code size={24} /> },
    { name: 'Git', icon: <Github size={24} /> },
    { name: 'Figma', icon: <Figma size={24} /> },
    { name: 'GraphQL', icon: <Globe size={24} /> },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]" />
          <div className="absolute top-1/3 -left-20 w-72 h-72 bg-teal-600/20 rounded-full filter blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.p 
                className="text-teal-500 font-medium inline-flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="w-10 h-[2px] bg-teal-500 mr-3"></span>
                About Me
              </motion.p>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                <AnimatedText text="Passionate Developer &" className="leading-tight" />
                <AnimatedText text="Creative Problem Solver" delay={0.3} className="leading-tight" />
              </h1>
              
              <motion.p 
                className="text-gray-400 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I'm a full-stack developer with a passion for creating beautiful, functional, and user-centered digital experiences. 
                With over 5 years of experience in the field, I've worked on a diverse range of projects, from e-commerce platforms 
                to social networks and enterprise applications.
              </motion.p>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-0" />
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Profile" 
                  className="w-full h-full object-cover z-10" 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-teal-500/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-purple-500/30 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* My Journey Section */}
      <Section className="bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="My Journey"
            subtitle="The path that led me to where I am today."
            centered
          />
          
          <div className="relative mt-12 pl-8 max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-500 to-pink-500" />
            
            {/* Timeline entries */}
            {[
              { 
                year: '2022 - Present', 
                title: 'Senior Developer at TechCorp', 
                description: 'Leading development of enterprise applications and mentoring junior developers.' 
              },
              { 
                year: '2020 - 2022', 
                title: 'Full-Stack Developer at WebSolutions', 
                description: 'Developed and maintained various client projects using modern web technologies.' 
              },
              { 
                year: '2018 - 2020', 
                title: 'Frontend Developer at StartupX', 
                description: 'Created responsive interfaces and implemented design systems for web applications.' 
              },
              { 
                year: '2016 - 2018', 
                title: 'Computer Science Degree', 
                description: 'Graduated with honors, specializing in web technologies and software engineering.' 
              },
            ].map((entry, index) => (
              <motion.div 
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[25px] top-0 w-[17px] h-[17px] rounded-full bg-pink-500 border-4 border-[#0a0a0a]" />
                
                <div className="pl-8">
                  <span className="text-teal-500 font-medium">{entry.year}</span>
                  <h3 className="text-xl font-semibold mt-1">{entry.title}</h3>
                  <p className="text-gray-400 mt-2">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Skills Section */}
      <Section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]" />
          <div className="absolute top-1/3 -left-20 w-72 h-72 bg-teal-600/10 rounded-full filter blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Skills & Expertise"
            subtitle="My professional skills and areas of expertise."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-teal-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    onMouseEnter={() => setCursorVariant('button')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <div className="text-teal-500">{tech.icon}</div>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                className="text-gray-400 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I'm constantly learning and expanding my skill set to stay current with the latest technologies and best practices in web development.
              </motion.p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Services Section */}
      <Section className="bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Services I Offer"
            subtitle="Specialized services to help bring your ideas to life."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full"
                hoverable
                setCursorVariant={setCursorVariant}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;