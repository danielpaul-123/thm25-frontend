import React from 'react';
import TextReveal from '../components/TextReveal';

const reasons = [
  {
    icon: '🚀',
    title: 'Emerging Tech Trends',
    description: 'Hands-on access to emerging tech trends and industry insights.'
  },
  {
    icon: '💪',
    title: 'Build Leadership Skills',
    description: 'Build your Student Branch operational capability and leadership mindset.'
  },
  {
    icon: '🤝',
    title: 'Statewide IEEE Network',
    description: 'Be part of a statewide IEEE network with alumni, professionals, and speakers.'
  },
  {
    icon: '🌟',
    title: 'Showcase & Compete',
    description: 'Showcase your SB\'s achievements and compete for recognition.'
  },
  {
    icon: '🎊',
    title: 'Vibrant Community',
    description: 'Immerse yourself in a vibrant community & cultural atmosphere.'
  }
];

const WhyAttend = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-black via-[#021921]/30 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Attend?
          </TextReveal>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d693] to-[#048163] mx-auto mt-4"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#00d693]/50 transition-all duration-300"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d693]/0 to-[#048163]/0 group-hover:from-[#00d693]/10 group-hover:to-[#048163]/10 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d693] transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00d693] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
