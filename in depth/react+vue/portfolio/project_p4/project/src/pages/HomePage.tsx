import { ArrowRight, Code2, Rocket, Users } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Digital Presence with
            <span className="text-[#64FFDA]"> Expert Web Development</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Delivering high-performance, scalable web solutions that drive business growth and user engagement.
          </p>
          <button className="bg-[#64FFDA] text-[#1A1A1A] px-8 py-4 rounded-lg font-medium hover:bg-[#64FFDA]/90 transition-colors flex items-center gap-2 mx-auto">
            Schedule a Free Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-[#2A3B4C]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 size={32} className="text-[#64FFDA]" />,
                title: "Custom Solutions",
                description: "Tailored web applications built to match your specific business requirements and goals."
              },
              {
                icon: <Rocket size={32} className="text-[#64FFDA]" />,
                title: "Performance First",
                description: "Lightning-fast websites optimized for speed, SEO, and conversion rates."
              },
              {
                icon: <Users size={32} className="text-[#64FFDA]" />,
                title: "Expert Support",
                description: "Dedicated team of developers providing ongoing maintenance and support."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#2A3B4C] p-6 rounded-lg text-center">
                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-[#64FFDA]/10 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                title: "E-Commerce Platform",
                description: "Modern online store with seamless checkout and inventory management."
              },
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                title: "SaaS Dashboard",
                description: "Data visualization and analytics platform for enterprise clients."
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/80 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#64FFDA]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#2A3B4C] border border-[#64FFDA]/30 focus:border-[#64FFDA] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#64FFDA] text-[#1A1A1A] px-8 py-3 rounded-lg font-medium hover:bg-[#64FFDA]/90 transition-colors"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}