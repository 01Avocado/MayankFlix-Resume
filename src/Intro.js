import React from 'react';
import './Intro.css';

const Intro = ({ onImageClick }) => {
  const handleImageClick = () => {
    const audio = new Audio('/nouveau-jingle-netflix.mp3');
    audio.play();
    onImageClick(); // Call the parent component's onImageClick function if needed
  };

  return (
    <div className="intro-container">
      <h1 className="intro-title">Who's Watching?</h1>
      <div className="intro-profile" onClick={handleImageClick}>
        <img
          className="intro-image"
          src={process.env.PUBLIC_URL + '/1632773493395.jpg'}
          alt=""
        />
        <h2 className="intro-name">Mayank Gangrediwar</h2>
      </div>
    </div>
  );
};

export default Intro;
