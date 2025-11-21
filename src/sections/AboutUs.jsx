import React from 'react'
import MagicBento from '../components/MagicBento'
import MagicBentoMobile from '../components/MagicBentoMobile'
import CircularText from '../components/CircularText'
import TextReveal from '../components/TextReveal';

const cardData = [
  {
    color: '#021921',
    title: 'Immersive Workshop Tracks',
    description: 'AI, Embedded Systems, and cybersecurity through hands-on workshop sessions.',
    label: 'Learn & Build'
  },
  {
    color: '#021921',
    title: 'Industry Exposure',
    description: 'Bridge the gap between academia and industry through real-world visits and interactions with leading technology professionals.',
    label: 'Real-World Experience'
  },
  {
    color: '#021921',
    title: 'Leadership Empowerment',
    description: 'Strengthen your leadership capabilities through dedicated sessions focused on Student Branch empowerment and professional development.',
    label: 'Lead & Inspire'
  },
  {
    color: '#021921',
    title: 'Cultural & Fun Interactions',
    description: 'Experience a perfect blend of technical learning and cultural activities, fostering connections and creating memorable moments.',
    label: 'Connect & Celebrate'
  },
  {
    color: '#021921',
    title: 'A Flagship Event',
    description: 'Two vibrant days of empowering engineering students across Kerala.',
    label: 'An Everlasting Legacy'
  },
  {
    color: '#021921',
    title: 'Responsible Innovation',
    description: 'Fuel responsible innovation, shape future technologists, and embed ethics into engineering practice.',
    label: 'Our Mission'
  }
];

// Combined data for mobile view (3-4 cards with merged content)
const mobileCardData = [
  {
    color: '#021921',
    title: 'Immersive Learning Experience',
    description: 'Dive into cutting-edge technologies through hands-on workshops in AI, Embedded Systems, and Cybersecurity. Bridge the gap between academia and industry with real-world visits and interactions with leading technology professionals.',
    label: 'Learn & Grow'
  },
  {
    color: '#021921',
    title: 'Leadership & Empowerment',
    description: 'Strengthen your leadership capabilities through dedicated sessions focused on Student Branch empowerment and professional development. Fuel responsible innovation and embed ethics into engineering practice.',
    label: 'Lead & Inspire'
  },
  {
    color: '#021921',
    title: 'Cultural & Community',
    description: 'Experience a perfect blend of technical learning and cultural activities. Two vibrant days of empowering engineering students across Kerala, fostering connections and creating memorable moments.',
    label: 'Connect & Celebrate'
  }
];

function AboutUs() {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 md:px-8 overflow-x-hidden">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Travancore Hub Meet 2025
          </TextReveal>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mt-6 mb-4">
            Welcome to THM 2025 — the signature meet of the IEEE Travancore Hub, organized under the IEEE Umbrella. A dynamic 2-day event designed for engineering students, innovators, and future leaders to converge, collaborate, and create.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d693] to-[#048163] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="relative text-white w-full flex justify-center">
          {/* CircularText positioned behind top right corner */}
          <div className="absolute top-0 right-0 translate-x-[35%] -translate-y-[25%] md:translate-x-[40%] md:-translate-y-[40%] lg:translate-x-[50%] lg:-translate-y-[30%] z-0 pointer-events-none">
            <CircularText
              text="TRAVANCORE*HUB*MEET*2025*TRAVANCORE*HUB*MEET*2025*"
              onHover="speedUp"
              spinDuration={20}
              className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] text-4xl md:text-5xl lg:text-6xl"
            />
          </div>
          
          {/* Desktop MagicBento (hidden on mobile) */}
          <div className="relative z-10 w-full hidden lg:block">
            <MagicBento 
              cardData={cardData}
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={15}
              glowColor="0, 214, 147"
            />
          </div>

          {/* Mobile MagicBento (visible only on mobile) */}
          <div className="relative z-10 w-full lg:hidden">
            <MagicBentoMobile 
              cardData={mobileCardData}
              enableSpotlight={true}
              enableBorderGlow={true}
              spotlightRadius={300}
              glowColor="0, 214, 147"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
