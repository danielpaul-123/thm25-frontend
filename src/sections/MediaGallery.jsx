import React from 'react';
import TextReveal from '../components/TextReveal';
import ExpandableGallery from '../components/ui/expandable-gallery';
import ScrollingCarousel from '../components/ui/scrolling-carousel';
import CircularText from '../components/CircularText';

const galleryImages1 = [
  '1.webp',
  'DSC_0389.webp',
  'IMG_7916.webp',
  'IMG_2313.webp',
  'IMG_7132.webp',
];
const galleryImages2 = [
  'IMG_7565.webp',
  '3.webp',
  '4.webp',
  'IMG_7299.webp',
];

const MediaGallery = () => {
  return (
    <section id="gallery" className="relative w-full py-20 px-4 md:px-8 bg-linear-to-b from-black via-[#021921]/20 to-black overflow-hidden" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <header className="text-center mb-16">
          <TextReveal id="gallery-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </TextReveal>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Relive past editions through photos and videos.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-[#00d693] to-[#048163] mx-auto mt-4" aria-hidden="true"></div>
        </header>

        {/* Desktop: Expandable Gallery */}
        <div className="hidden md:block relative z-10">
          <ExpandableGallery images={galleryImages1} className="mb-4" />
          <ExpandableGallery images={galleryImages2} className="mb-12" />
        </div>

        {/* Mobile: Scrolling Carousel */}
        <div className="md:hidden space-y-4 relative z-10">
          <ScrollingCarousel images={galleryImages1} direction="left" />
          <ScrollingCarousel images={galleryImages2} direction="right" />
        </div>

        {/* CircularText positioned at bottom left, behind galleries */}
        <div className="absolute bottom-0 left-0 -translate-x-[35%] -translate-y-[80%] md:-translate-x-[40%] md:-translate-y-[80%] lg:-translate-x-[50%] lg:-translate-y-[69%] z-0 pointer-events-none">
          <CircularText
            text="THM*2025*MEMORIES*THM*2025*MEMORIES*"
            onHover="speedUp"
            spinDuration={20}
            className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] text-4xl md:text-5xl lg:text-6xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
