import React, { useState, useEffect } from 'react'
import Landing from '../sections/Landing'
import AboutUs from '../sections/AboutUs'
import Features from '../sections/Features'
import Schedule from '../sections/Schedule'
import Registration from '../sections/Registration'
import MediaGallery from '../sections/MediaGallery'
import Starfield from 'react-starfield';
import StaggeredMenu from '../components/StaggeredMenu';
import LoadingScreen from '../components/LoadingScreen';
import Footer from '../components/Footer';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '#landing' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Features', ariaLabel: 'View features', link: '#features' },
  { label: 'Schedule', ariaLabel: 'View schedule', link: '#schedule' },
  { label: 'Tickets', ariaLabel: 'Register now', link: '#registration' },
  { label: 'Gallery', ariaLabel: 'View gallery', link: '#gallery' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'Instagram', link: 'https://www.instagram.com/ieeetravancorehub' },
  { label: 'Facebook', link: 'https://www.facebook.com/ieeelink' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/company/ieee-travancore-hub/' }
];

function Home() {
  const [contentVisible, setContentVisible] = useState(false);
  const [ticketsAvailable, setTicketsAvailable] = useState(true);

  useEffect(() => {
    // Fetch ticket availability
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/tickets/availability`, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        if (result.success) {
          setTicketsAvailable(result.data.status === 'open');
        }
      })
      .catch(error => {
        console.warn('Unable to fetch ticket availability. CORS error or network issue:', error.message);
        console.warn('Backend needs CORS configuration. Defaulting to tickets available.');
        // Default to available on error
        setTicketsAvailable(true);
      });
  }, []);

  useEffect(() => {
    // Smooth scroll handler for navigation links
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    // Add event listener to document for navigation links
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <>
      <LoadingScreen onLoadComplete={() => setContentVisible(true)} />
      
      <div className={`home-page relative transition-opacity duration-1000 ${
        contentVisible ? 'opacity-100' : 'opacity-0'
      }`}>
      {/* Starfield Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.1}
          backgroundColor="black"
        />
      </div>

      {/* Navigation Menu */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={false}
        colors={['#76f9a4', '#5abe7d', '#021921']}
        logoUrl="/logo.webp"
        accentColor="#5abe7d"
        isFixed={true}
        // onMenuOpen={() => console.log('Menu opened')}
        // onMenuClose={() => console.log('Menu closed')}
      />

      {/* Content on top of starfield */}
      <div className="relative z-10">
        {/* Sections displayed in specific order */}
        <div id="landing"><Landing ticketsAvailable={ticketsAvailable} /></div>
        <div id="about"><AboutUs /></div>
        <div id="features"><Features /></div>
        <div id="schedule"><Schedule /></div>
        <div id="registration"><Registration ticketsAvailable={ticketsAvailable} /></div>
        <div id="gallery"><MediaGallery /></div>
        <div id="contact"><Footer /></div>
      </div>
      </div>
    </>
  )
}

export default Home