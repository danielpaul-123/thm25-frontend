import React from 'react';
import TextReveal from '../components/TextReveal';

const featuresData = [
  {
    title: 'Tri-Track Workshops',
    description: 'Parallel sessions covering AI, Embedded Systems, Cybersecurity.',
    icon: '🔬'
  },
  {
    title: 'Dual-Venue Industry Visits',
    description: 'First-hand exposure to tech-industry settings.',
    icon: '🏢'
  },
  {
    title: 'Leadership & Operations Modules',
    description: 'SB growth, vTools training, and peer-mentoring.',
    icon: '📊'
  },
  {
    title: 'Micro-Mentoring Pods',
    description: 'Quick-impact 15-min mentoring linking students with industry/academia.',
    icon: '💡'
  },
  {
    title: 'SB Pitch & Awards Salon',
    description: 'Presentations, Best Hub Volunteer Award.',
    icon: '🏆'
  },
  {
    title: 'Cultural Fest & Networking Gala',
    description: 'A lively evening of performance, connections, and celebration.',
    icon: '🎉'
  },
  {
    title: 'Interactive Event Website',
    description: 'Sleek UI, live updates, and easy ticket access.',
    icon: '🌐'
  },
  {
    title: 'Media-Rich Experience',
    description: 'Promo video launches, campus pop-ups, social engagement to elevate event visibility.',
    icon: '📸'
  }
];

const Features = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal className="text-4xl md:text-5xl font-bold text-white mb-4">
            Features & Highlights
          </TextReveal>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d693] to-[#048163] mx-auto mt-4"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00d693]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00d693] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00d693]/10 to-[#048163]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
