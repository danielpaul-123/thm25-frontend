import React from 'react';
// import Timeline from '../components/Timeline';
import TextReveal from '../components/TextReveal';

// const scheduleItems = [
//   {
//     id: 'day-1',
//     label: 'Day 1'
//   },
//   {
//     id: 'day-2',
//     label: 'Day 2'
//   }
// ];

const Schedule = () => {
  // const renderScheduleContent = (id, index) => {
  //   const scheduleData = {
  //     'day-1': [
  //       { time: '09:30 – 10:30', event: 'Inauguration Ceremony' },
  //       { time: '10:30 – 13:00', event: 'Ice-Breaking & Team-Building' },
  //       { time: '13:00 – 14:00', event: 'Lunch' },
  //       { time: '14:00 – 14:30', event: 'Assembly & IV Briefing' },
  //       { time: '14:30 – 19:00', event: 'Industry Visits (+ Juice & Snacks)' },
  //       { time: '19:00 – 20:30', event: 'Culturals & Dinner' },
  //       { time: '20:30 onwards', event: 'Networking / Informal Hangouts' }
  //     ],
  //     'day-2': [
  //       { time: '09:30 – 12:30', event: 'Workshops (3 Parallel Tracks)' },
  //       { time: '12:30 – 13:30', event: 'Lunch' },
  //       { time: '13:30 – 15:30', event: 'Micro-Mentoring (with IEEE YP AG) + Chairs\' Meet (Parallel)' },
  //       { time: '15:30 – 16:30', event: 'Feedback & Closing Ceremony' },
  //       { time: '16:30 onwards', event: 'Departure' }
  //     ]
  //   };

  //   const events = scheduleData[id] || [];

  //   return (
  //     <div className="relative w-full pl-20 pr-4 md:pl-4">
  //       <div className="max-w-4xl">
  //         <div className="space-y-4 mb-8">
  //           {events.map((item, idx) => (
  //             <div 
  //               key={`${id}-${idx}`}
  //               className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00d693]/30 transition-all duration-300"
  //             >
  //               <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
  //                 <span className="text-[#00d693] font-semibold text-sm md:text-base whitespace-nowrap">
  //                   {item.time}
  //                 </span>
  //                 <span className="text-white text-base md:text-lg">
  //                   {item.event}
  //                 </span>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <section className="relative w-full py-20 bg-black">
      {/* Custom Section Header matching design theme */}
      <div className="text-center px-4">
        <TextReveal className="text-4xl md:text-5xl font-bold text-white mb-4">
          Event Schedule
        </TextReveal>
        <div className="w-24 h-1 bg-gradient-to-r from-[#00d693] to-[#048163] mx-auto mt-4 mb-12"></div>
        
        <p className="text-2xl md:text-3xl text-gray-300 font-light">
          Coming Soon
        </p>
      </div>

      {/* Timeline */}
      {/* <Timeline
        items={scheduleItems}
        renderSlot={renderScheduleContent}
        containerClass="!bg-black dark:!bg-black"
        className="!py-0"
      /> */}
    </section>
  );
};

export default Schedule;
