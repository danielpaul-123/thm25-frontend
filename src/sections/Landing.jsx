import React from 'react'
import { useNavigate } from 'react-router-dom'
import Aurora from '../components/Aurora'
import ShinyText from '../components/ShinyText'

function Landing({ ticketsAvailable }) {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center" aria-label="Hero section">
        {/* Aurora as background */}
        <div className="absolute top-0 left-0 w-full h-full z-0" aria-hidden="true">
            <Aurora
                colorStops={["#00d693", "#059171", "#0f6987"]}
                blend={0.9}
                amplitude={0.7}
                speed={0.6}
            />
        </div>
        
        {/* Content on top of Aurora */}
        <div className="relative z-10 text-center px-8 max-w-5xl text-white">
            <header className="mb-10 flex justify-center">
                <img 
                    src="/logo.webp" 
                    alt="Travancore Hub Meet 2025 - IEEE Event Logo" 
                    className="h-24 sm:h-28 md:h-36 lg:h-40 xl:h-44 w-auto max-w-[90vw] object-contain drop-shadow-2xl"
                    loading="eager"
                />
            </header>
            
            {/* Tagline */}
            <h1 className="sr-only">Travancore Hub Meet 2025 - IEEE Student Leadership and Technology Workshop</h1>
            <ShinyText 
                text="Unite. Innovate. Elevate." 
                disabled={false} 
                speed={3} 
                className='text-xl md:text-2xl mb-8 tracking-wide' 
            />
            <br/>
            
            {/* Event Details with Liquid Glass Theme */}
            <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden group" role="contentinfo">
                <div className="glare" aria-hidden="true"></div>
                
                <div className="relative z-10 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#00d693]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm md:text-base font-medium">Marian Engineering College, Kazhakuttom</span>
                    </div>
                    
                    <div className="h-8 w-px bg-white/30" aria-hidden="true"></div>
                    
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#00d693]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <time dateTime="2025-12-06" className="text-sm md:text-base font-medium">December 6-7, 2025</time>
                    </div>
                </div>
            </div>
            
            {/* Get Your Tickets Button */}
            <div className="mt-8">
                <button 
                    onClick={() => ticketsAvailable && navigate('/register')}
                    disabled={!ticketsAvailable}
                    className={`inline-block py-4 px-8 ${
                        ticketsAvailable 
                            ? 'bg-linear-to-r from-[#00d693] to-[#048163] hover:shadow-lg hover:shadow-[#00d693]/50 hover:scale-105 cursor-pointer' 
                            : 'bg-gray-600 cursor-not-allowed opacity-50'
                    } text-white font-semibold rounded-4xl transition-all duration-300`}
                    aria-label={ticketsAvailable ? "Get your tickets for THM 2025" : "Tickets are sold out"}
                >
                    {ticketsAvailable ? 'Get Your Tickets' : 'Sold Out'}
                </button>
            </div>
            
            {/* <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden group">
                <div className="glare" aria-hidden="true"></div>

                <div className="relative z-10 flex items-center gap-2">
                    <span className="text-sm md:text-base font-medium">Coming Soon</span>
                    <span className="flex gap-1 ml-1">
                        <span className="dot-chase dot-1">.</span>
                        <span className="dot-chase dot-2">.</span>
                        <span className="dot-chase dot-3">.</span>
                    </span>
                </div>
            </div> */}
        </div>
        
        {/* Scroll Down Indicator */}
        <button 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow cursor-pointer bg-transparent border-0" 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          aria-label="Scroll to next section"
        >
            <svg className="w-10 h-10 text-[#048163] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
            </svg>
        </button>
    </section>
  )
}

export default Landing
