import React from 'react';
import TextReveal from '../components/TextReveal';
import ExpandableGallery from '../components/ui/expandable-gallery';

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
    <section className="relative w-full py-20 px-4 md:px-8 bg-gradient-to-b from-black via-[#021921]/20 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </TextReveal>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Relive past editions through photos and videos.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d693] to-[#048163] mx-auto mt-4"></div>
        </div>

        {/* Expandable Gallery */}
        <ExpandableGallery images={galleryImages1} className="mb-4" />
        <ExpandableGallery images={galleryImages2} className="mb-12" />
      </div>
    </section>
  );
};

export default MediaGallery;
