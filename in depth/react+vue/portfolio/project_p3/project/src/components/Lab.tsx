import { motion } from 'framer-motion';
import { Sparkles, Rocket, Brain, Zap } from 'lucide-react';

export default function Lab() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text mb-4">
          Experimental Lab
        </h1>
        <p className="text-gray-400">Where ideas come to life</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg group hover:bg-gray-750 transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
              <Brain className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">AI Experiments</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Exploring the possibilities of artificial intelligence and machine learning
          </p>
          <div className="space-y-2">
            {['Neural Networks', 'Computer Vision', 'NLP'].map((tech) => (
              <div
                key={tech}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm inline-block mr-2"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg group hover:bg-gray-750 transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600">
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Web3 Projects</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Building decentralized applications and exploring blockchain technology
          </p>
          <div className="space-y-2">
            {['Smart Contracts', 'DeFi', 'NFTs'].map((tech) => (
              <div
                key={tech}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm inline-block mr-2"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg group hover:bg-gray-750 transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">3D Graphics</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Experimenting with WebGL and Three.js for immersive web experiences
          </p>
          <div className="space-y-2">
            {['WebGL', 'Three.js', 'Shaders'].map((tech) => (
              <div
                key={tech}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm inline-block mr-2"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg group hover:bg-gray-750 transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Game Dev</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Creating browser-based games and interactive experiences
          </p>
          <div className="space-y-2">
            {['Phaser.js', 'Canvas', 'WebGL'].map((tech) => (
              <div
                key={tech}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm inline-block mr-2"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Latest Experiments</h2>
        <div className="space-y-4">
          {[
            {
              title: 'AI Image Generator',
              date: '2024-03-15',
              status: 'In Progress',
              color: 'text-yellow-400',
            },
            {
              title: 'Blockchain Explorer',
              date: '2024-03-10',
              status: 'Completed',
              color: 'text-green-400',
            },
            {
              title: '3D Portfolio Template',
              date: '2024-03-05',
              status: 'Testing',
              color: 'text-blue-400',
            },
          ].map((experiment) => (
            <div
              key={experiment.title}
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
            >
              <div>
                <h3 className="font-semibold">{experiment.title}</h3>
                <p className="text-sm text-gray-400">{experiment.date}</p>
              </div>
              <span className={experiment.color}>{experiment.status}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}