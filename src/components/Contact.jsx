// src/components/Contact.jsx
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Ready to Work Together?</h2>
      <button
        className="glow"
        onClick={() => window.open('https://www.linkedin.com/in/yourlinkedin', '_blank')}
      >
        Connect
      </button>
      <p>Email: yourname@email.com</p>
      <p>Phone: +91-1234567890</p>
    </motion.section>
  );
}
