import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface ContactCTAProps {
  setCursorVariant: (variant: string) => void;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ setCursorVariant }) => {
  return (
    <Section className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-600/10 rounded-full filter blur-[100px]" />
      </div>
      
      {/* Border decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
          </p>
          
          <div className="pt-4">
            <Button 
              variant="primary" 
              size="lg" 
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              setCursorVariant={setCursorVariant}
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactCTA;