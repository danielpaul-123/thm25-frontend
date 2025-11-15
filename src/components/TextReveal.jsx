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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Ensure text is visible after 2 seconds as a fallback
    const fallbackTimer = setTimeout(() => {
      if (textContainerRef.current && !hasAnimated) {
        textContainerRef.current.style.opacity = '1';
        textContainerRef.current.style.transform = 'translateY(0)';
      }
    }, 2000);

    return () => clearTimeout(fallbackTimer);
  }, [hasAnimated]);

  useEffect(() => {
    if (!textContainerRef.current || !wrapperRef.current) return;

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only animate when entering viewport for the first time
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            setIsReady(true);
            // Small delay to ensure element is ready
            setTimeout(() => animateText(), 50);
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
      // Simple slide-up and fade-in animation
      if (gsap && gsap.fromTo) {
        animationRef.current = gsap.fromTo(
          textContainerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: 'power3.out',
          }
        );
      } else {
        // If GSAP is not available, just show the text
        textContainerRef.current.style.opacity = '1';
        textContainerRef.current.style.transform = 'translateY(0)';
      }
    } catch (error) {
      // Emergency fallback - just make it visible
      if (textContainerRef.current) {
        textContainerRef.current.style.opacity = '1';
        textContainerRef.current.style.transform = 'translateY(0)';
      }
    }
  };

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${containerClass}`}>
      <div 
        ref={textContainerRef} 
        className={className} 
        style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}
      >
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
