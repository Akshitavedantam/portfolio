import ScrollFadeIn from './ScrollFadeIn';
import './Journey.css';


export default function Journey() {
  return (
    <div id="journey" className="journey-container">
      <ScrollFadeIn>
        <h2 className="section-title">My Journey</h2>
      </ScrollFadeIn>

      <div className="journey-cards">
        <ScrollFadeIn delay={0.2}>
          <div className="journey-card">
            <h3 className="card-title">VIVID</h3>
            <p>Designing and building my own webpage named VIVID(community building app).</p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.4}>
          <div className="journey-card">
            <h3 className="card-title">Figma & Canva Designing</h3>
            <p>I have made figma and Canva designs for various webpages.</p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.6}>
          <div className="journey-card">
            <h3 className="card-title">Portify</h3>
            <p>Designing a Webpage and building frontend of Portify(personal project).</p>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
