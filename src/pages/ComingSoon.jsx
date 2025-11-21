import React from 'react';
import Starfield from 'react-starfield';
import ShinyText from '../components/ShinyText';

const ComingSoon = () => {
  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.1}
          backgroundColor="black"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Coming Soon Text */}
        <div className="flex-1 flex items-center justify-center">
          <ShinyText 
            text="COMING SOON" 
            speed={3}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider"
          />
        </div>

        {/* Logo at Bottom Center */}
        <div className="pb-8 md:pb-12">
          <img 
            src="/logo.webp" 
            alt="Logo" 
            className="h-9 md:h-12 lg:h-15 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
