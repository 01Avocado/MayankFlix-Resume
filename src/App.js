import React, { useState } from 'react';
import './App.css';
import Intro from './Intro';
import Hero from './components/Hero';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Certifications from './Certifications';
import NavBar from './NavBar';

function App() {
  const [showApp, setShowApp] = useState(false);

  const handleImageClick = () => {
    setShowApp(true);
  };

  return (
    <div className="App">
      {!showApp ? (
        <Intro onImageClick={handleImageClick} />
      ) : (
        <>
          <NavBar />
          <Hero />
          <Header />
          <Skills id="skills" />
          <Certifications id="certifications" />
          <Projects id="projects" />
          <Experience id="experience" />
          <Education id="education" />
        </>
      )}
    </div>
  );
}

export default App;
