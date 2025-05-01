import './App.css';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Works from './components/Works';
import Skills from './components/Skills';
import EducationCertifications from './components/EducationCertifications';
import Connect from './components/Connect';
import Background from './components/Background';
import FooterNote from './components/FooterNote'; // ✅ Import it once

function App() {
  return (
    <div className="App">
      <Background />
      <Hero />
      <Journey />
      <Works />
      <Skills />
      <EducationCertifications />
      <Connect />
      <FooterNote /> {/* ✅ Always visible on all pages */}
    </div>
  );
}

export default App;
