import React from 'react';
import { cn } from '../../lib/utils';

const ScrollingCarousel = ({ images, direction = 'left', className }) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <div
        className={cn(
          'flex gap-4 w-fit',
          direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        )}
        style={{
          '--scroll-width': `${images.length * (288 + 16)}px`, // 288px (w-72) + 16px (gap-4)
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative h-64 w-72 shrink-0 overflow-hidden rounded-xl"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--scroll-width)));
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(calc(-1 * var(--scroll-width)));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingCarousel;
