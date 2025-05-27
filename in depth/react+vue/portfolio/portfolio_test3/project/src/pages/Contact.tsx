import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ContactForm from '../components/ui/ContactForm';

interface ContactProps {
  setCursorVariant: (variant: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setCursorVariant }) => {
  const contactInfo = [
    {
      title: 'Email',
      value: 'hello@portfolio.com',
      icon: <Mail className="text-teal-500\" size={24} />,
    },
    {
      title: 'Phone',
      value: '+1 (123) 456-7890',
      icon: <Phone className="text-purple-500" size={24} />,
    },
    {
      title: 'Location',
      value: 'San Francisco, CA',
      icon: <MapPin className="text-pink-500\" size={24} />,
    },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter size={24} />, url: 'https://twitter.com' },
  ];

  return (
    <div className="pt-24">
      <Section className="min-h-[40vh] flex items-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]" />
          <div className="absolute top-1/3 -left-20 w-72 h-72 bg-teal-600/20 rounded-full filter blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <motion.p 
              className="text-teal-500 font-medium inline-flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-10 h-[2px] bg-teal-500 mr-3"></span>
              Get In Touch
            </motion.p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Let's Work Together
            </h1>
            
            <motion.p 
              className="text-gray-400 text-lg mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have a project in mind or just want to chat? Feel free to reach out and I'll get back to you as soon as possible.
            </motion.p>
          </div>
        </div>
      </Section>
      
      <Section className="bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Contact Information"
                subtitle="Here's how you can reach me directly."
              />
              
              <div className="space-y-6 mt-8">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="p-3 rounded-full bg-white/5 border border-white/10">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{info.title}</h3>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4">Connect on Social Media</h3>
                <div className="flex space-x-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        transition: { delay: 0.5 + index * 0.1 } 
                      }}
                      onMouseEnter={() => setCursorVariant('button')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="overflow-hidden">
                  <div className="h-64">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555687322!2d-122.50764097918272!3d37.75781499215168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1625847952971!5m2!1sen!2suk" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="Map"
                    ></iframe>
                  </div>
                </Card>
              </motion.div>
            </div>
            
            <div>
              <SectionHeading
                title="Send Me a Message"
                subtitle="Fill out the form below and I'll get back to you soon."
              />
              
              <ContactForm setCursorVariant={setCursorVariant} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;