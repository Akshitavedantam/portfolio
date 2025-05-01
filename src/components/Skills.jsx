// src/components/Skills.jsx
import './Skills.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
  'MongoDB', 'Python', 'java', 'Git', 'Figma',
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
