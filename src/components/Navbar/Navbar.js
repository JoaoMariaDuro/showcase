import React from 'react';
import './Navbar.css';

const Navbar = ({ goToSlide }) => {
  const slides = [
    'Calculator', 'Tip Calculator', 'Rock Paper Scissor',
    // Add more options as needed
  ];

  return (
    <div className="navbar-container">
      <div className="navbar">
        {slides.map((slide, index) => (
          <button key={index} onClick={() => goToSlide(index)}>
            {slide}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;