import { Calendar, Award, Briefcase, Target, Heart, Users } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: 'calendar' | 'award' | 'briefcase';
}

interface CoreValue {
  icon: typeof Target | typeof Heart | typeof Users;
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    icon: Target,
    title: "Technical Excellence",
    description: "Delivering robust, scalable solutions that exceed industry standards"
  },
  {
    icon: Heart,
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge technologies and methodologies"
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Ensuring measurable business impact through technology solutions"
  }
];

const timeline: TimelineEvent[] = [
  {
    date: "2024",
    title: "Lead Software Architect",
    description: "Architected microservices platform that reduced deployment time by 65% and scaled to support 2M+ daily users.",
    icon: "briefcase"
  },
  {
    date: "2023",
    title: "AWS Solutions Architect Professional",
    description: "Advanced certification in distributed systems design and cloud architecture.",
    icon: "award"
  },
  {
    date: "2022",
    title: "Engineering Manager",
    description: "Led 15-person team delivering enterprise SaaS platform with 99.99% uptime, driving $5M in annual revenue.",
    icon: "briefcase"
  },
  {
    date: "2021",
    title: "Senior Full Stack Developer",
    description: "Spearheaded adoption of React microservices, reducing load times by 40% across 12 client applications.",
    icon: "briefcase"
  }
];

const iconComponents = {
  calendar: Calendar,
  award: Award,
  briefcase: Briefcase
};

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-4xl font-bold mb-8">Transforming Complex Challenges into Elegant Solutions</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8 leading-relaxed">
              As a Software Architect and Engineering Leader with over a decade of experience, I specialize in building enterprise-scale distributed systems that handle millions of transactions while maintaining exceptional performance. My expertise in cloud-native architectures and microservices has helped organizations achieve unprecedented scalability and efficiency.
            </p>

            <div className="bg-[#2A3B4C] p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#64FFDA]">Mission Statement</h3>
              <p className="text-gray-300">
                To empower organizations with scalable, innovative technology solutions that drive business growth and operational excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-12 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-[#2A3B4C] p-6 rounded-lg text-center">
                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-[#64FFDA]/10 mb-4">
                  <value.icon size={32} className="text-[#64FFDA]" />
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Journey */}
        <div className="relative">
          <h3 className="text-2xl font-bold mb-12 text-center">Professional Journey</h3>
          
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#64FFDA]/30" />
          
          <div className="space-y-12">
            {timeline.map((event, index) => {
              const Icon = iconComponents[event.icon];
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#64FFDA] rounded-full transform -translate-x-1/2" />
                  
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className={`bg-[#2A3B4C] p-6 rounded-lg hover:scale-105 transition-transform duration-300 ${
                      index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={20} className="text-[#64FFDA]" />
                        <span className="text-[#64FFDA] font-medium">{event.date}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-[#2A3B4C] p-8 rounded-lg inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Technology?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how my expertise in scalable architecture and engineering leadership can help your organization achieve its technical objectives.
            </p>
            <button className="bg-[#64FFDA] text-[#1A1A1A] px-8 py-3 rounded-lg font-medium hover:bg-[#64FFDA]/90 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}