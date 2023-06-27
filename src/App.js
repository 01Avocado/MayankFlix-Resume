import React, { useState } from 'react';
import './App.css';
import Intro from './Intro';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
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
          <Header />
          <Skills />
          <Projects />
          <Experience />
          <Education />
        </>
      )}
    </div>
  );
}

export default App;
