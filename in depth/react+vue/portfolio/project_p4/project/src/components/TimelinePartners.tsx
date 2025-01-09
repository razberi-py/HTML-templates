import { useState, useEffect } from 'react';
import { Award, Briefcase, Code, Rocket } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: 'award' | 'briefcase' | 'code' | 'rocket';
}

const timeline: TimelineEvent[] = [
  {
    date: "2024",
    title: "Global Platform Launch",
    description: "Successfully deployed enterprise solution serving 2M+ daily active users across 30 countries.",
    icon: "rocket"
  },
  {
    date: "2023",
    title: "Technical Innovation Award",
    description: "Recognized for pioneering microservices architecture that reduced system latency by 60%.",
    icon: "award"
  },
  {
    date: "2022",
    title: "Enterprise Partnership",
    description: "Led development of mission-critical financial platform processing $50B+ annually.",
    icon: "briefcase"
  },
  {
    date: "2021",
    title: "Core Platform Redesign",
    description: "Architected cloud-native solution improving scalability and reducing costs by 40%.",
    icon: "code"
  }
];

const partners = [
  {
    name: "TechCorp Global",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&q=80"
  },
  {
    name: "FinanceHub",
    logo: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=120&q=80"
  },
  {
    name: "InnovateTech",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&q=80"
  },
  {
    name: "FutureScale",
    logo: "https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?w=120&q=80"
  }
];

const iconComponents = {
  award: Award,
  briefcase: Briefcase,
  code: Code,
  rocket: Rocket
};

export function TimelinePartners() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-index]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-dots">
      <div className="max-w-[1200px] mx-auto">
        {/* Timeline Section */}
        <div className="mb-32">
          <h2 className="font-montserrat text-4xl font-bold text-center mb-16">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#2D5BFF]/20" />
            
            {/* Timeline Events */}
            <div className="space-y-8">
              {timeline.map((event, index) => {
                const Icon = iconComponents[event.icon];
                const isVisible = visibleItems.includes(index);
                
                return (
                  <div
                    key={index}
                    data-index={index}
                    className={`relative flex items-center transition-all duration-500 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                    } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                      isVisible ? 'border-[#2D5BFF] bg-white' : 'border-gray-300 bg-gray-100'
                    } transform -translate-x-1/2`}>
                      <Icon size={16} className={isVisible ? 'text-[#2D5BFF]' : 'text-gray-400'} />
                    </div>
                    
                    {/* Content */}
                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                      <div 
                        className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                          index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                        }`}
                      >
                        <span className="text-[#2D5BFF] font-medium mb-2 block">
                          {event.date}
                        </span>
                        <h3 className="text-xl font-bold mb-2 font-montserrat">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 font-open-sans">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <h2 className="font-montserrat text-[36px] font-bold text-center mb-16">
            Trusted By Our Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  width="120"
                  height="120"
                  className="filter grayscale hover:grayscale-0 transform hover:-translate-y-1 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}