import React from 'react';
import { cn } from '../../lib/utils';

const ExpandableGallery = ({ images, className }) => {
  return (
    <div className={cn('flex h-96 w-full gap-2', className)}>
      {images.map((image, index) => (
        <div
          key={image + index}
          className="relative flex h-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-3"
        >
          <img
            className="relative h-full w-full object-cover"
            src={image}
            alt={`Gallery image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ExpandableGallery;
