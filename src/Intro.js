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
      <img
        className="intro-image"
        src={process.env.PUBLIC_URL + '/1632773493395.jpg'}
        alt="Your Picture"
        onClick={handleImageClick}
      />
      <h2 className="intro-name">Nicholas Fears</h2>
    </div>
  );
};

export default Intro;
