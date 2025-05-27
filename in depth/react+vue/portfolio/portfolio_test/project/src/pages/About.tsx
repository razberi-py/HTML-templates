import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About Me
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-1 bg-primary-500 mx-auto mb-6"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              Get to know more about me, my background, and what I do.
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Profile Image */}
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg p-6">
                <div className="relative w-full h-80 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">John Doe</h2>
                <p className="text-primary-500 font-medium mb-4">Web Developer & Designer</p>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-2 text-primary-500" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2 text-primary-500" />
                    <span>Available for freelance</span>
                  </div>
                </div>
                <div className="mt-6 flex space-x-2">
                  <a 
                    href="#" 
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded text-center transition-colors"
                  >
                    Download CV
                  </a>
                  <Link 
                    to="/contact" 
                    className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-medium py-2 px-4 rounded text-center transition-colors"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Bio and Experience */}
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-full flex items-center justify-center mr-3">
                    <Briefcase size={18} />
                  </span>
                  About Me
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    I'm a passionate web developer and designer with over 5 years of experience in creating
                    beautiful, functional, and user-centered digital experiences. I believe in combining
                    aesthetics with functionality to build websites that not only look great but also solve
                    real problems.
                  </p>
                  <p>
                    My journey in web development started during college, where I discovered my passion for
                    coding and design. Since then, I've worked with various technologies and frameworks,
                    always staying up-to-date with the latest industry trends and best practices.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring nature, reading books on design and
                    technology, or experimenting with photography.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-full flex items-center justify-center mr-3">
                    <GraduationCap size={18} />
                  </span>
                  Experience & Education
                </h2>
                <div className="space-y-8">
                  {/* Work Experience */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
                    <div className="space-y-6">
                      <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary-500 before:rounded-full before:z-10 before:shadow-md">
                        <div className="absolute left-[5.5px] top-2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                        <h4 className="text-lg font-medium">Senior Frontend Developer</h4>
                        <p className="text-primary-500 text-sm mb-2">TechCorp Inc. (2021 - Present)</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Led the frontend development team in building responsive and accessible web applications.
                          Implemented modern frontend architectures using React and TypeScript.
                        </p>
                      </div>
                      <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary-500 before:rounded-full before:z-10 before:shadow-md">
                        <div className="absolute left-[5.5px] top-2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                        <h4 className="text-lg font-medium">UI/UX Designer</h4>
                        <p className="text-primary-500 text-sm mb-2">DesignStudio (2018 - 2021)</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Designed user interfaces for web and mobile applications.
                          Conducted user research and usability testing to improve product experiences.
                        </p>
                      </div>
                      <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary-500 before:rounded-full before:z-10 before:shadow-md">
                        <h4 className="text-lg font-medium">Web Developer</h4>
                        <p className="text-primary-500 text-sm mb-2">Freelance (2016 - 2018)</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Worked with clients to design and develop custom websites and web applications.
                          Managed projects from concept to deployment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Education</h3>
                    <div className="space-y-6">
                      <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary-500 before:rounded-full before:z-10 before:shadow-md">
                        <div className="absolute left-[5.5px] top-2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                        <h4 className="text-lg font-medium">Master's in Human-Computer Interaction</h4>
                        <p className="text-primary-500 text-sm mb-2">Stanford University (2014 - 2016)</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Focused on user experience design and research methodologies.
                          Graduated with honors.
                        </p>
                      </div>
                      <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary-500 before:rounded-full before:z-10 before:shadow-md">
                        <h4 className="text-lg font-medium">Bachelor's in Computer Science</h4>
                        <p className="text-primary-500 text-sm mb-2">MIT (2010 - 2014)</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Studied computer science with a focus on web technologies and programming.
                          Participated in multiple hackathons and coding competitions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <motion.h2 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              My Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-full flex items-center justify-center mr-3">
                    <Briefcase size={18} />
                  </span>
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'HTML/CSS', level: 95 },
                    { name: 'JavaScript/TypeScript', level: 90 },
                    { name: 'React/Next.js', level: 85 },
                    { name: 'Node.js', level: 80 },
                    { name: 'UI/UX Design', level: 85 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div 
                          className="bg-primary-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-full flex items-center justify-center mr-3">
                    <Award size={18} />
                  </span>
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Problem Solving',
                    'Communication',
                    'Teamwork',
                    'Project Management',
                    'Creativity',
                    'Adaptability',
                    'Attention to Detail',
                    'Time Management',
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;