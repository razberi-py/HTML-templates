import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" />
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate full-stack developer with over 5 years of experience building web
          applications. I love working with modern technologies and creating beautiful,
          functional user experiences. When I'm not coding, you can find me contributing to
          open-source projects or writing technical blog posts.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-400" />
          Work Experience
        </h2>
        <div className="space-y-6">
          {[
            {
              role: 'Senior Frontend Developer',
              company: 'Tech Corp',
              period: '2020 - Present',
              description:
                'Leading the frontend development team, implementing new features, and improving performance.',
            },
            {
              role: 'Full Stack Developer',
              company: 'StartUp Inc',
              period: '2018 - 2020',
              description:
                'Developed and maintained multiple web applications using React and Node.js.',
            },
          ].map((job) => (
            <div
              key={job.role}
              className="border-l-2 border-gray-700 pl-4 space-y-2"
            >
              <h3 className="text-xl font-semibold text-cyan-400">{job.role}</h3>
              <p className="text-gray-400">{job.company} • {job.period}</p>
              <p className="text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-purple-400" />
          Education
        </h2>
        <div className="space-y-4">
          <div className="border-l-2 border-gray-700 pl-4">
            <h3 className="text-xl font-semibold text-purple-400">
              BSc in Computer Science
            </h3>
            <p className="text-gray-400">University of Technology • 2014 - 2018</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-yellow-400" />
          Certifications & Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'AWS Certified Developer',
            'Google Cloud Professional',
            'Best Developer Award 2022',
            'Hackathon Winner 2021',
          ].map((cert) => (
            <div
              key={cert}
              className="bg-gray-700 p-4 rounded-lg flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-yellow-400" />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}