import React from 'react';
import TextReveal from '../components/TextReveal';

const MediaGallery = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-black via-[#021921]/20 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal className="text-4xl md:text-5xl font-bold text-white mb-4">
            Media & Gallery
          </TextReveal>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Relive past editions through photos and videos. Stay tuned for promo content, speaker highlights, and social-media contests leading up to the event.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d693] to-[#048163] mx-auto mt-4"></div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder Card 1 - Past Events */}
          <div className="group relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#021921] to-black border border-white/10 hover:border-[#00d693]/50 transition-all duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-white mb-2">Past Events</h3>
              <p className="text-gray-400 text-sm">Photos from previous THM editions</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#00d693]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Placeholder Card 2 - Video Highlights */}
          <div className="group relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#021921] to-black border border-white/10 hover:border-[#00d693]/50 transition-all duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-6xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-white mb-2">Video Highlights</h3>
              <p className="text-gray-400 text-sm">Recap videos and testimonials</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#00d693]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Placeholder Card 3 - Promo Content */}
          <div className="group relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#021921] to-black border border-white/10 hover:border-[#00d693]/50 transition-all duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-white mb-2">Promo Content</h3>
              <p className="text-gray-400 text-sm">THM 2025 launch videos</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#00d693]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Placeholder Card 4 - Speaker Highlights */}
          <div className="group relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#021921] to-black border border-white/10 hover:border-[#00d693]/50 transition-all duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-6xl mb-4">🎤</div>
              <h3 className="text-xl font-bold text-white mb-2">Speaker Highlights</h3>
              <p className="text-gray-400 text-sm">Meet our distinguished speakers</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#00d693]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Placeholder Card 5 - Campus Pop-ups */}
          <div className="group relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#021921] to-black border border-white/10 hover:border-[#00d693]/50 transition-all duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-white mb-2">Campus Pop-ups</h3>
              <p className="text-gray-400 text-sm">On-ground event promotions</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#00d693]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Placeholder Card 6 - Social Contests */}
          <div className="group relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#021921] to-black border border-white/10 hover:border-[#00d693]/50 transition-all duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-6xl mb-4">🏅</div>
              <h3 className="text-xl font-bold text-white mb-2">Social Contests</h3>
              <p className="text-gray-400 text-sm">Participate in fun challenges</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#00d693]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-12 text-center">
          <div className="inline-block px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#00d693]/30 rounded-full">
            <p className="text-[#00d693] font-semibold">
              📢 Gallery content coming soon! Follow us on social media for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
