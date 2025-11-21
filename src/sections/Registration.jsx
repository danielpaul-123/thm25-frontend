import React from 'react';
import TextReveal from '../components/TextReveal';

const Registration = () => {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center">
          <TextReveal className="text-4xl md:text-5xl font-bold text-white mb-4">
            Registration & Tickets
          </TextReveal>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d693] to-[#048163] mx-auto mt-4 mb-12"></div>
          
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
