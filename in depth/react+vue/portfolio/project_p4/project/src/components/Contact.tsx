import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Calendar, Clock, Award, Users, ArrowRight } from 'lucide-react';

interface AvailabilitySlot {
  day: string;
  slots: string[];
}

const availabilitySlots: AvailabilitySlot[] = [
  { day: 'Monday', slots: ['09:00', '11:00', '14:00'] },
  { day: 'Tuesday', slots: ['10:00', '13:00', '15:00'] },
  { day: 'Wednesday', slots: ['09:00', '14:00', '16:00'] },
  { day: 'Thursday', slots: ['11:00', '13:00', '15:00'] },
  { day: 'Friday', slots: ['10:00', '12:00', '14:00'] }
];

const stats = [
  { icon: Users, label: 'Clients Served', value: '100+' },
  { icon: Award, label: 'Projects Completed', value: '150+' },
  { icon: Clock, label: 'Years Experience', value: '8+' }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    preferredDay: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      preferredDay: '',
      preferredTime: ''
    });
  };

  return (
    <div className="min-h-screen py-20">
      {/* Stats Section */}
      <div className="bg-[#2A3B4C]/50 py-12 px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 justify-center">
                <div className="bg-[#64FFDA]/10 p-3 rounded-full">
                  <stat.icon size={24} className="text-[#64FFDA]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#64FFDA]">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-[#2A3B4C] p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#64FFDA]/30 focus:border-[#64FFDA] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#64FFDA]/30 focus:border-[#64FFDA] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#64FFDA]/30 focus:border-[#64FFDA] focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#64FFDA]/30 focus:border-[#64FFDA] focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                {/* Schedule Meeting Section */}
                <div className="border-t border-[#1A1A1A] pt-6">
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Calendar size={20} className="text-[#64FFDA]" />
                    Schedule a Meeting
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Preferred Day
                      </label>
                      <select
                        value={selectedDay}
                        onChange={(e) => {
                          setSelectedDay(e.target.value);
                          setFormData({ ...formData, preferredDay: e.target.value });
                        }}
                        className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#64FFDA]/30 focus:border-[#64FFDA] focus:outline-none"
                      >
                        <option value="">Select a day</option>
                        {availabilitySlots.map(slot => (
                          <option key={slot.day} value={slot.day}>{slot.day}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#64FFDA]/30 focus:border-[#64FFDA] focus:outline-none"
                        disabled={!selectedDay}
                      >
                        <option value="">Select a time</option>
                        {selectedDay && availabilitySlots
                          .find(slot => slot.day === selectedDay)
                          ?.slots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#64FFDA] text-[#1A1A1A] rounded-lg font-medium hover:bg-[#64FFDA]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Additional Content */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-[#2A3B4C] p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#64FFDA] transition-colors p-2 rounded-lg hover:bg-[#1A1A1A]/20"
                >
                  <div className="bg-[#64FFDA]/10 p-3 rounded-full">
                    <Mail size={20} className="text-[#64FFDA]" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm">contact@example.com</div>
                  </div>
                </a>
                
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#64FFDA] transition-colors p-2 rounded-lg hover:bg-[#1A1A1A]/20"
                >
                  <div className="bg-[#64FFDA]/10 p-3 rounded-full">
                    <Phone size={20} className="text-[#64FFDA]" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm">+1 (234) 567-890</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-gray-300 p-2">
                  <div className="bg-[#64FFDA]/10 p-3 rounded-full">
                    <MapPin size={20} className="text-[#64FFDA]" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm">San Francisco, CA</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-[#1A1A1A]">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, label: 'GitHub', href: '#' },
                    { icon: Linkedin, label: 'LinkedIn', href: '#' },
                    { icon: MessageSquare, label: 'Twitter', href: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-[#1A1A1A] p-3 rounded-lg hover:bg-[#64FFDA]/10 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="text-[#64FFDA]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-[#2A3B4C] p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    q: "What services do you offer?",
                    a: "I specialize in full-stack development, cloud architecture, and technical consulting."
                  },
                  {
                    q: "What is your typical response time?",
                    a: "I usually respond to inquiries within 24 hours during business days."
                  },
                  {
                    q: "Do you offer ongoing support?",
                    a: "Yes, I provide continuous support and maintenance services for all projects."
                  }
                ].map((faq, index) => (
                  <div key={index} className="p-4 bg-[#1A1A1A]/20 rounded-lg">
                    <h4 className="font-medium mb-2">{faq.q}</h4>
                    <p className="text-gray-300 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}