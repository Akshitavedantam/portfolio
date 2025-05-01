import './EducationCertifications.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiInfo } from 'react-icons/fi';

export default function EducationCertifications() {
  const [activeCard, setActiveCard] = useState(null);

  const educationDetails = {
    tenth: "Completed in 2020 at Prerna Waldorf School (CBSE Board). Scored 8.84 CGPA.",
    twelfth: "Completed in 2022 at Sri Chaitanya Junior College. Scored 98% (TSBIE).",
    btech: "Pursuing B.Tech from MLR Institute of Technology in Computer Science (2023–2027), current CGPA - 9.4",
  };

  return (
    <section id="education" className="education-certifications">
      <motion.div
        className="education-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Education</h2>
        <div className="cards">
          {['tenth', 'twelfth', 'btech'].map((key) => (
            <div
              key={key}
              className="card"
              onClick={() => setActiveCard(activeCard === key ? null : key)}
            >
              <h3>
                {{
                  tenth: "10th Grade",
                  twelfth: "12th Grade",
                  btech: "B.Tech",
                }[key]}{" "}
                <FiInfo className="card-icon" />
              </h3>
              <p>
                {{
                  tenth: "CBSE Board, 2015",
                  twelfth: "CBSE Board, 2017",
                  btech: "Computer Science, 2021",
                }[key]}
              </p>

              {activeCard === key && (
                <motion.div
                  className="bubble-tooltip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {educationDetails[key]}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="certifications-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Certifications</h2>
        <div className="cards">
          <div
            className="card"
            onClick={() => window.open("/certificates/certif2.png", "_blank")}
          >
            <h3>React Development</h3>
          </div>
          <div
            className="card"
            onClick={() => window.open("/certificates/certif1.png", "_blank")}
          >
            <h3>Data Structures</h3>
          </div>
          <div
            className="card"
            onClick={() => window.open("/certificates/certif3.png", "_blank")}
          >
            <h3>Figma</h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
