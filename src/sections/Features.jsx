import React from 'react';
import TextReveal from '../components/TextReveal';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';

const featuresData = [
  {
    quote: 'Hands-on access to emerging tech trends and industry insights through parallel sessions covering AI, Embedded Systems, and Cybersecurity.',
    name: 'Tri-Track Workshops',
    designation: 'Hands-on Technical Training',
    src: '3.webp',
  },
  {
    quote: 'First-hand exposure to tech-industry settings and real-world professional environments.',
    name: 'Dual-Venue Industry Visits',
    designation: 'Real-World Experience',
    src: '1736009628068.webp',
  },
  {
    quote: 'Build your Student Branch operational capability and leadership mindset through SB growth workshops, vTools training, and peer-mentoring.',
    name: 'Leadership & Operations Modules',
    designation: 'Professional Development',
    src: 'IMG_7039.webp',
  },
  {
    quote: 'Be part of a statewide IEEE network with quick-impact 15-min mentoring sessions linking students with industry professionals and academia.',
    name: 'Micro-Mentoring Pods',
    designation: 'Career Guidance',
    src: 'DSC_0241.webp',
  },
  {
    quote: 'Showcase your SB\'s achievements, compete for recognition, and immerse yourself in a vibrant community through a lively evening of performance, connections, and celebration.',
    name: 'Cultural Fest & Networking Gala',
    designation: 'Community Building',
    src: 'IMG_2288.webp',
  },
];

const Features = () => {
  return (
    <section className="relative w-full py-5 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal className="text-4xl md:text-5xl font-bold text-white mb-4">
            Features & Highlights
          </TextReveal>
          <div className="w-24 h-1 bg-linear-to-r from-[#00d693] to-[#048163] mx-auto mt-4"></div>
        </div>

        {/* Animated Testimonials */}
        <AnimatedTestimonials testimonials={featuresData} autoplay={true} />
      </div>
    </section>
  );
};

export default Features;
