import React from 'react';
import Starfield from 'react-starfield';
import ShinyText from '../components/ShinyText';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="relative w-screen h-dvh overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Starfield
          starCount={800}
          starColor={[255, 255, 255]}
          speedFactor={0.08}
          backgroundColor="black"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <ShinyText text="404" speed={3} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide text-white" />
            <div className="mt-6">
              <h2 className="text-xl md:text-2xl text-gray-300">Page Not Found</h2>
              <p className="mt-3 text-sm md:text-base text-gray-400 max-w-xl mx-auto">
                Looks like you broke something. Or maybe it was us. Tough call. Don't worry though, we can point you in the right direction.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/" className="inline-block px-6 py-3 rounded-full bg-linear-to-r from-[#00d693] to-[#048163] text-black font-semibold">
                Go Home
              </Link>
            </div>
          </div>
        </div>

        <div className="pb-8 md:pb-12">
          <img src="/logo.webp" alt="logo" className="h-12 md:h-16 lg:h-20 w-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
