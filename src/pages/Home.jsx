import React, { useState } from 'react'
import Landing from '../sections/Landing'
import AboutUs from '../sections/AboutUs'
import Features from '../sections/Features'
import WhyAttend from '../sections/WhyAttend'
import Schedule from '../sections/Schedule'
import Registration from '../sections/Registration'
import MediaGallery from '../sections/MediaGallery'
import Starfield from 'react-starfield';
import StaggeredMenu from '../components/StaggeredMenu';
import LoadingScreen from '../components/LoadingScreen';
import Footer from '../components/Footer';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Events', ariaLabel: 'View events', link: '#events' },
  { label: 'Schedule', ariaLabel: 'View schedule', link: '#schedule' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'Instagram', link: 'https://instagram.com' },
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

function Home() {
  const [contentVisible, setContentVisible] = useState(false);

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
        logoUrl="/logo.png"
        accentColor="#5abe7d"
        isFixed={true}
        // onMenuOpen={() => console.log('Menu opened')}
        // onMenuClose={() => console.log('Menu closed')}
      />

      {/* Content on top of starfield */}
      <div className="relative z-10">
        {/* Sections displayed in specific order */}
        <Landing />
        <AboutUs />
        <Features />
        <WhyAttend />
        <Schedule />
        <Registration />
        <MediaGallery />
        <Footer />
      </div>
      </div>
    </>
  )
}

export default Home