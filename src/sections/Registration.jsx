import React from 'react';
import TextReveal from '../components/TextReveal';

const Registration = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 md:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal className="text-4xl md:text-5xl font-bold text-white mb-4">
            Registration & Tickets
          </TextReveal>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d693] to-[#048163] mx-auto mt-4"></div>
        </div>

        {/* Main Content Card */}
        <div className="relative group">
          {/* Animated Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00d693] via-[#048163] to-[#00d693] rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          
          {/* Content */}
          <div className="relative bg-gradient-to-br from-[#021921] to-black p-8 md:p-12 rounded-2xl border border-white/10">
            <div className="text-center space-y-6">
              {/* Main Message */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Be Part of THM 2025!
              </h3>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Join now to secure your seat, access all sessions, meals, and networking events. 
                Registration portal will open soon.
              </p>

              {/* Info Badges */}
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#00d693]/30 rounded-full">
                  <span className="text-[#00d693] font-semibold">🎟️ Early Bird Deals</span>
                </div>
                <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#00d693]/30 rounded-full">
                  <span className="text-[#00d693] font-semibold">👥 Team Packages</span>
                </div>
                <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#00d693]/30 rounded-full">
                  <span className="text-[#00d693] font-semibold">🍽️ Meals Included</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#00d693] to-[#048163] text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00d693]/50"
                  disabled
                >
                  <span className="relative z-10">Coming Soon</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#048163] to-[#00d693] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <p className="text-sm text-gray-400 mt-4">
                  Stay tuned for registration announcements!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Early bird announcements and team-package deals will be shared soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
