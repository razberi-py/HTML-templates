import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Award, Star } from 'lucide-react';
import Card from '../components/Card';

interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  logo: string;
}

interface Testimonial {
  text: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Timeline experiences={experiences} />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Star className="text-accent-teal" />
            Testimonials
          </h2>
          
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-dark-secondary"></div>
      
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <TimelineItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ experience, index }: { experience: Experience; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-16"
    >
      <div className="absolute left-0 w-16 h-16 rounded-full bg-dark-secondary p-2">
        <img
          src={experience.logo}
          alt={experience.company}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      
      <Card>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{experience.position}</h3>
            <p className="text-accent-teal">{experience.company}</p>
          </div>
          <span className="text-gray-400">{experience.period}</span>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Responsibilities</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            {experience.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Achievements</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            {experience.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 bg-dark-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{testimonial.author}</h4>
            <p className="text-sm text-gray-400">
              {testimonial.position} at {testimonial.company}
            </p>
          </div>
        </div>
        <p className="text-gray-400 italic">"{testimonial.text}"</p>
      </Card>
    </motion.div>
  );
};

const experiences: Experience[] = [
  {
    company: 'Tech Corp',
    position: 'Senior Frontend Developer',
    period: '2020 - Present',
    responsibilities: [
      'Lead development of core product features',
      'Mentor junior developers',
      'Architect scalable frontend solutions'
    ],
    achievements: [
      'Reduced load time by 40% through optimization',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Led team of 5 developers in major platform redesign'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'AWS'],
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=100'
  },
  {
    company: 'Digital Agency',
    position: 'Full Stack Developer',
    period: '2018 - 2020',
    responsibilities: [
      'Developed full-stack web applications',
      'Collaborated with design team',
      'Managed client relationships'
    ],
    achievements: [
      'Delivered 12 successful client projects',
      'Introduced automated testing increasing coverage by 80%',
      'Reduced bug reports by 50% through quality processes'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=100'
  }
];

const testimonials: Testimonial[] = [
  {
    text: "One of the most talented developers I've worked with. Their technical expertise and leadership skills are exceptional.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "Tech Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    text: "Consistently delivers high-quality work and brings innovative solutions to complex problems.",
    author: "Michael Chen",
    position: "Engineering Manager",
    company: "Digital Agency",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  }
];

export default Experience;