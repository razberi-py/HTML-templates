import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full backdrop-blur-lg bg-[#1A1A1A]/80 p-8 rounded-lg shadow-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="text-[#64FFDA]">Hello,</span> I'm John Doe
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full-stack developer specializing in building exceptional digital experiences
        </p>
        
        <div className="flex gap-6 mb-12">
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-[#64FFDA] transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-[#64FFDA] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-400 hover:text-[#64FFDA] transition-colors"
            aria-label="Email Contact"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <button
          className="bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] px-8 py-3 rounded-lg
                     hover:bg-[#64FFDA]/10 transition-colors duration-300"
        >
          View My Work
        </button>
      </div>
    </section>
  );
}