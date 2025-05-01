// src/components/Illustrations.jsx
import { motion } from 'framer-motion';

export default function Illustrations() {
  return (
    <motion.section
      id="illustrations"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Illustrations</h2>
      <p>Here are some beautiful illustrations that inspire my work:</p>
      <div className="illustration-gallery">
        <img src="https://undraw.co/illustration1.svg" alt="Illustration 1" />
        <img src="https://undraw.co/illustration2.svg" alt="Illustration 2" />
        <img src="https://undraw.co/illustration3.svg" alt="Illustration 3" />
      </div>
    </motion.section>
  );
}
