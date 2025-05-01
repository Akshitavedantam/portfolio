import './Hero.css';
import { useEffect } from 'react';
import image from '../assets/image.jpg'; // Adjust path if needed

export default function Hero() {
  const handleStart = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      console.log('Hero Section Position:', heroSection.getBoundingClientRect());
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const scrollToJourney = () => {
    const journeySection = document.getElementById('journey');
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Start Section */}
      <section className="start-section" id="start">
        <h1 className="start-title">Welcome to Akshita's Portfolio</h1>
        <button className="start-button" onClick={handleStart}>
          Start Journey
        </button>
      </section>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-split">
          <div className="hero-left">
          <div className="hero-left">
  <div className="image-wrapper">
    <img src={image} alt="Akshita" className="hero-image" />
    <div className="fade-right"></div>
  </div>
</div>
          </div>
          <div className="hero-right">
            
            <h1 className="hero-name">Akshita</h1>
            <p className="hero-role">Web Designer | Frontend Engineer</p>
            <div className="scroll-arrow" onClick={scrollToJourney}>↓</div>
          </div>
        </div>
      </section>
    </>
  );
}
