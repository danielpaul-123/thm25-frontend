import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextReveal from '../components/TextReveal';

const Registration = ({ ticketsAvailable }) => {
  const navigate = useNavigate();

  return (
    <section id="registration" className="relative w-full py-20 px-4 md:px-8 bg-black" aria-labelledby="registration-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <TextReveal id="registration-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Registration & Tickets
          </TextReveal>
          <div className="w-24 h-1 bg-linear-to-r from-[#00d693] to-[#048163] mx-auto mt-4 mb-6" aria-hidden="true"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your ticket and be part of THM 2025
          </p>
        </header>

        {/* Ticket Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* IEEE Member Ticket */}
          <article className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#00d693]/20 to-[#048163]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-linear-to-br from-[#021921] to-[#060010] p-8 rounded-2xl border border-[#00d693]/30 hover:border-[#00d693]/60 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">IEEE Member</h3>
                {/* <span className="px-4 py-1 bg-[#00d693]/20 text-[#00d693] rounded-full text-sm font-semibold">
                  RECOMMENDED
                </span> */}
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">₹899</span>
                  <span className="text-gray-400 text-lg">per person</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Includes:</h4>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Access to all workshop tracks</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Industry visits</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Leadership development sessions</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Networking opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Cultural fest & gala</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Meals & refreshments</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Event kit & certificate</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[#00d693] font-semibold">IEEE Membership perks</p>
                </div>
              </div>

              <button 
                onClick={() => ticketsAvailable && navigate('/register')}
                disabled={!ticketsAvailable}
                className={`w-full py-4 px-6 ${
                  ticketsAvailable 
                    ? 'bg-linear-to-r from-[#00d693] to-[#048163] hover:shadow-lg hover:shadow-[#00d693]/50 hover:scale-105 cursor-pointer' 
                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                } text-white font-semibold rounded-xl transition-all duration-300`}
                aria-label={ticketsAvailable ? "Register as IEEE Member for ₹899" : "Tickets are sold out"}
              >
                {ticketsAvailable ? 'Get Your Tickets' : 'Sold Out'}
              </button>
            </div>
          </article>

          {/* Non-IEEE Member Ticket */}
          <article className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-linear-to-br from-[#021921] to-[#060010] p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Non-IEEE Member</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">₹1399</span>
                  <span className="text-gray-400 text-lg">per person</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Includes:</h4>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Access to all workshop tracks</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Industry visits</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Leadership development sessions</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Networking opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Cultural fest & gala</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Meals & refreshments</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300">Event kit & certificate</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-500 line-through">IEEE Membership perks</p>
                </div>
              </div>

              <button 
                onClick={() => ticketsAvailable && navigate('/register')}
                disabled={!ticketsAvailable}
                className={`w-full py-4 px-6 ${
                  ticketsAvailable 
                    ? 'bg-linear-to-r from-[#00d693] to-[#048163] hover:shadow-lg hover:shadow-[#00d693]/50 hover:scale-105 cursor-pointer' 
                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                } text-white font-semibold rounded-xl transition-all duration-300`}
                aria-label={ticketsAvailable ? "Register as Non-IEEE Member for ₹1399" : "Tickets are sold out"}
              >
                {ticketsAvailable ? 'Get Your Tickets' : 'Sold Out'}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Registration;
