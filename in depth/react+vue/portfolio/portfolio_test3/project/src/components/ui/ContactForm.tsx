import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import Button from './Button';

interface ContactFormProps {
  setCursorVariant: (variant: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ setCursorVariant }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const inputVariants = {
    focus: { 
      scale: 1.01,
      borderColor: 'rgba(236, 72, 153, 0.6)',
      boxShadow: '0 0 0 3px rgba(236, 72, 153, 0.15)',
      transition: { duration: 0.3 },
    },
    blur: { 
      scale: 1,
      borderColor: 'rgba(255, 255, 255, 0.1)',
      boxShadow: '0 0 0 0px rgba(236, 72, 153, 0)',
      transition: { duration: 0.3 },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4 }
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {isSubmitted ? (
        <motion.div 
          className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 text-center"
          variants={successVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-300">Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none"
                whileFocus="focus"
                whileTap="focus"
                initial="blur"
                animate="blur"
                variants={inputVariants}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-300">Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none"
                whileFocus="focus"
                whileTap="focus"
                initial="blur"
                animate="blur"
                variants={inputVariants}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-gray-300">Message</label>
            <motion.textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formState.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none"
              whileFocus="focus"
              whileTap="focus"
              initial="blur"
              animate="blur"
              variants={inputVariants}
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            />
          </div>
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            icon={<Send size={18} />}
            disabled={isSubmitting}
            fullWidth
            setCursorVariant={setCursorVariant}
            className="mt-6"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </>
      )}
    </motion.form>
  );
};

export default ContactForm;