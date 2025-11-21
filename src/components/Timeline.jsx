import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Timeline = ({
  items = [],
  title = "",
  description = "",
  containerClass = "",
  className = "",
  renderSlot,
}) => {
  const timelineContainerRef = useRef(null);
  const timelineRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    // measure after mount
    update();

    // update on resize
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({ 
    target: timelineRef, 
    offset: ["start 10%", "end 50%"] 
  });

  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div 
      ref={timelineContainerRef} 
      className={`w-full bg-neutral-950 font-sans md:px-10 ${containerClass}`}
    >
      <div className={`mx-auto max-w-7xl px-4 py-20 lg:px-10 md:px-8 ${className}`}>
        <h2 className="mb-4 max-w-4xl text-lg text-white md:text-4xl">
          {title}
        </h2>
        <p className="max-w-sm text-sm text-neutral-300 md:text-base">
          {description}
        </p>
      </div>

      <div ref={timelineRef} className="relative z-0 mx-auto max-w-7xl pb-20">
        {items.map((item, index) => (
          <div key={item.id + index} className="flex justify-start pt-10 md:gap-10 md:pt-40">
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start lg:max-w-sm md:w-full md:flex-row">
              <div className="absolute left-3 flex size-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black">
                <div className="size-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>

              <h3 className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl dark:text-neutral-500">
                {item.label}
              </h3>
            </div>

            {/* render user-provided slot for this item id */}
            {renderSlot ? renderSlot(item.id, index) : null}
          </div>
        ))}

        {/* timeline background and progress */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
        >
          <motion.div
            style={{ 
              height: heightTransform, 
              opacity: opacityTransform 
            }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-linear-to-t from-[#00d693] from-0% via-[#059171] via-50% to-[#0f6987]"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;

/*
Usage example:

<Timeline
  title="Roadmap"
  description="Short description"
  items={[{ id: 'step-1', label: 'Phase 1' }, { id: 'step-2', label: 'Phase 2' }]}
  renderSlot={(id) => (
    <div className="ml-28 md:ml-0 md:pl-24">
      <div className="max-w-prose">Content for {id}</div>
    </div>
  )}
/>

Notes:
- This implementation uses framer-motion's useScroll/useTransform and expects framer-motion to be installed.
- Tailwind classes are preserved from the original Vue component. Adjust spacing or breakpoints as you like.
- If you prefer to pass React children instead of a renderSlot function, adapt the component to accept a mapping object or use composition.

Props:
- items: Array of objects with { id: string, label?: string }
- title: string - Main title for the timeline
- description: string - Description text
- containerClass: string - Additional classes for container
- className: string - Additional classes for content wrapper
- renderSlot: function(id, index) - Render function for each timeline item content
*/
