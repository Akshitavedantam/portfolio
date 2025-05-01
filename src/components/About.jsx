// src/components/About.jsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        I'm Akshita, a passionate developer and designer based in Hyderabad. I love crafting
        beautiful and functional web experiences. My journey has been filled with learning,
        creativity, and continuous growth.
      </p>
    </motion.section>
  );
}
