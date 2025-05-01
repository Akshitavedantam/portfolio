import ScrollFadeIn from './ScrollFadeIn';
import './Works.css'; // Make sure this file includes the CSS styles below

export default function Works() {
  const handleScrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="works-wrapper">
      <div className="works-content">
        <ScrollFadeIn>
          <h2 className="section-title">Works</h2>
        </ScrollFadeIn>

        <div className="works-cards">
          <ScrollFadeIn delay={0.2}>
            <div className="glow-card">Optimization System (ML)</div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.4}>
            <div className="glow-card">This portfolio (coded with react)</div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.6}>
            <div className="glow-card">vivid</div>
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn delay={0.8}>
          <button className="explore-button bounce" onClick={handleScrollToSkills}>
            Explore My Skills
          </button>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
