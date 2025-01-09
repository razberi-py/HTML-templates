import { useState } from 'react';
import { Code2, Server, Database, Wrench, Brain, Award } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'core' | 'industry' | 'tools';
  description: string;
}

const skills: Record<string, Skill[]> = {
  technical: [
    { name: 'Full Stack Development', level: 5, category: 'technical', description: 'React, Node.js, TypeScript' },
    { name: 'Cloud Architecture', level: 5, category: 'technical', description: 'AWS, Azure, GCP' },
    { name: 'Database Design', level: 4, category: 'technical', description: 'SQL, NoSQL, Data Modeling' },
    { name: 'API Development', level: 5, category: 'technical', description: 'REST, GraphQL, WebSockets' }
  ],
  core: [
    { name: 'Technical Leadership', level: 5, category: 'core', description: 'Team Management, Mentoring' },
    { name: 'Project Management', level: 4, category: 'core', description: 'Agile, Scrum, Kanban' },
    { name: 'Problem Solving', level: 5, category: 'core', description: 'Analysis, Architecture' },
    { name: 'Communication', level: 5, category: 'core', description: 'Technical Writing, Presentations' }
  ],
  industry: [
    { name: 'Enterprise Architecture', level: 4, category: 'industry', description: 'Microservices, Distributed Systems' },
    { name: 'Security Best Practices', level: 4, category: 'industry', description: 'OWASP, Encryption' },
    { name: 'CI/CD', level: 5, category: 'industry', description: 'DevOps, Automation' },
    { name: 'Performance Optimization', level: 4, category: 'industry', description: 'Profiling, Scaling' }
  ],
  tools: [
    { name: 'Development Tools', level: 5, category: 'tools', description: 'Git, Docker, Kubernetes' },
    { name: 'Cloud Platforms', level: 5, category: 'tools', description: 'AWS Suite, Azure Services' },
    { name: 'Monitoring', level: 4, category: 'tools', description: 'ELK Stack, Prometheus' },
    { name: 'IDE & Productivity', level: 5, category: 'tools', description: 'VS Code, JetBrains' }
  ]
};

const categoryIcons = {
  technical: Code2,
  core: Brain,
  industry: Database,
  tools: Wrench
};

const categoryLabels = {
  technical: 'Technical Skills',
  core: 'Core Competencies',
  industry: 'Industry Expertise',
  tools: 'Tools & Technologies'
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skills>('technical');

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Skills</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise across technical and professional domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {(Object.keys(skills) as Array<keyof typeof skills>).map(category => {
            const Icon = categoryIcons[category];
            return (
              <div key={category} className="bg-[#2A3B4C] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={24} className="text-[#64FFDA]" />
                  <h3 className="text-xl font-bold">{categoryLabels[category]}</h3>
                </div>

                <div className="space-y-4">
                  {skills[category].map((skill, index) => (
                    <div key={index} className="bg-[#1A1A1A]/20 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{skill.name}</h4>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < skill.level ? 'text-[#64FFDA]' : 'text-gray-600'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-12 bg-[#2A3B4C] p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award size={20} className="text-[#64FFDA]" />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#1A1A1A]/20 p-4 rounded-lg">
              <h4 className="font-semibold">AWS Solutions Architect Professional</h4>
              <p className="text-sm text-gray-300">Advanced cloud architecture and design</p>
            </div>
            <div className="bg-[#1A1A1A]/20 p-4 rounded-lg">
              <h4 className="font-semibold">Kubernetes Administrator (CKA)</h4>
              <p className="text-sm text-gray-300">Container orchestration and management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}