import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
// Note: SplitText is a premium GSAP plugin. You need a GSAP membership to use it.
// Install: npm install gsap-trial (for trial) or get a license from https://greensock.com/club/
// import { SplitText } from 'gsap/SplitText';

const TextReveal = ({
  children,
  className = '',
  containerClass = '',
  duration = 0.6,
  delay = 0.2,
  stagger = 0.1,
}) => {
  const textContainerRef = useRef(null);
  const wrapperRef = useRef(null);
  const animationRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!textContainerRef.current || !wrapperRef.current) return;

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only animate when entering viewport for the first time
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateText();
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px',
      }
    );

    observer.observe(wrapperRef.current);

    // Cleanup
    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [hasAnimated]);

  const animateText = () => {
    if (!textContainerRef.current) return;

    try {
      // Check if SplitText is available
      if (typeof window !== 'undefined' && window.SplitText) {
        const SplitText = window.SplitText;

        gsap.set(textContainerRef.current, { opacity: 1 });

        const split = new SplitText(textContainerRef.current, {
          type: 'words,lines',
          linesClass: 'line',
        });

        animationRef.current = gsap.from(split.lines, {
          duration: duration,
          delay: delay,
          yPercent: 100,
          opacity: 0,
          stagger: stagger,
          ease: 'expo.out',
        });
      } else {
        // Fallback: Simple slide-up and fade-in animation if SplitText is not available
        animationRef.current = gsap.fromTo(
          textContainerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: 'expo.out',
          }
        );
      }
    } catch (error) {
      // Emergency fallback - just make it visible
      if (textContainerRef.current) {
        textContainerRef.current.style.opacity = '1';
      }
    }
  };

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${containerClass}`}>
      <div ref={textContainerRef} className={className} style={{ opacity: 0 }}>
        {children}
      </div>
    </div>
  );
};

export default TextReveal;

/*
Usage example:

<TextReveal
  className="text-4xl font-bold"
  containerClass="max-w-4xl"
  duration={0.6}
  delay={0.2}
  stagger={0.1}
>
  Your text content here that will be revealed line by line
</TextReveal>

IMPORTANT NOTES:
1. SplitText is a premium GSAP plugin requiring a GreenSock membership
2. To use this component with SplitText:
   - Get a GSAP Club membership: https://greensock.com/club/
   - Install: npm install gsap@npm:@gsap/shockingly
   - Uncomment the import line at the top
3. If SplitText is not available, it falls back to a simple fade-in animation

Props:
- children: ReactNode - Text content to animate
- className: string - Classes for the text container
- containerClass: string - Classes for the overflow wrapper
- duration: number - Animation duration (default: 0.6)
- delay: number - Initial delay (default: 0.2)
- stagger: number - Stagger between lines (default: 0.1)
*/
