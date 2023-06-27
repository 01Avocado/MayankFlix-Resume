import React from 'react';
import './Intro.css';

const Intro = ({ onImageClick }) => {
  return (
    <div className="intro-container">
      <h1 className="intro-title">Who's Watching?</h1>
      <img
        className="intro-image"
        src={process.env.PUBLIC_URL + '/1632773493395.jpg'}
        alt="Your Picture"
        onClick={onImageClick}
      />
      <h2 className="intro-name">Nicholas Fears</h2>
    </div>
  );
};

export default Intro;
