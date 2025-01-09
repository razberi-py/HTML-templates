import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Calendar, MapPin, Briefcase, Award, Book, Scroll } from 'lucide-react';

export default function Profile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
      {/* Left Column - Main Profile */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-4 space-y-8"
      >
        <div className="relative w-48 h-48 mx-auto lg:mx-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
            alt="Marcus Aurelius"
            className="rounded-full w-full h-full object-cover border-4 border-amber-500 shadow-lg shadow-amber-500/50"
          />
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-600 to-amber-400 text-white px-4 py-1 rounded-full text-sm font-medium">
            Philosophus
          </div>
        </div>

        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-4xl font-bold font-serif">Marcus Aurelius</h1>
          <p className="text-xl text-gray-400 font-serif italic">Imperator et Philosophus</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-400 justify-center lg:justify-start">
              <MapPin className="w-4 h-4" />
              <span>Roma Aeterna</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 justify-center lg:justify-start">
              <Scroll className="w-4 h-4" />
              <span>Meditationes Auctor</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 justify-center lg:justify-start">
              <Calendar className="w-4 h-4" />
              <span>CLXI - CLXXX</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start gap-4">
          {[
            { icon: Book, href: "#", label: "Scripta" },
            { icon: Scroll, href: "#", label: "Philosophia" },
            { icon: Award, href: "#", label: "Honores" },
            { icon: Mail, href: "#", label: "Epistulae" }
          ].map((social) => (
            <motion.a
              key={social.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Column - Details */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-8 space-y-8"
      >
        {/* Virtutes */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold font-serif mb-6">Virtutes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'Sapientia', level: 95 },
              { name: 'Iustitia', level: 90 },
              { name: 'Fortitudo', level: 85 },
              { name: 'Temperantia', level: 88 },
              { name: 'Prudentia', level: 92 },
              { name: 'Humanitas', level: 87 }
            ].map((virtue) => (
              <div key={virtue.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-serif">{virtue.name}</span>
                  <span className="text-amber-400">{virtue.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${virtue.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opera */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold font-serif mb-6">Opera Praeclara</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <Book className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">Meditationes</h3>
                <p className="text-gray-400 mt-1">
                  Philosophiae personalis et gubernationis imperii praecepta
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <Scroll className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">De Officiis</h3>
                <p className="text-gray-400 mt-1">
                  De virtutibus et moribus tractatus
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <blockquote className="text-xl font-serif italic text-center text-gray-300">
            "Perfice ea quae in manibus sunt, et tranquillus esto."
          </blockquote>
        </div>
      </motion.div>
    </div>
  );
}