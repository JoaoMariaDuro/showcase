import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import { ReactComponent as SvgGitHub } from '../assets/social-github-svgrepo-com.svg';
import { ReactComponent as SvgGoogle } from '../assets/social-google-svgrepo-com.svg';
import { ReactComponent as SvgLinkedIn } from '../assets/social-linkedin-svgrepo-com.svg';
import SvgLink from '../SVGlink/SVGlink';
import './Home.css';
import TipCalculator from '../TipCalculator/TipCalculator.js';
import RockPaperScissors from '../RockPaperScissors/RockPaperScissors.js';
import Screen from '../Screen.js';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <div className="home-container">
      <Navbar goToSlide={goToSlide} />
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Calculator"
            alt="Calculator"
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <TipCalculator />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <Screen>
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
              <RockPaperScissors />
            </div>
          </Screen>
        </Carousel.Item>
      </Carousel>

      <div className="contact-section">
        <p>João Maria Duro</p>
        <a href= "mailto: joaoaviladuro@gmail.com">
          <SvgGoogle width="25" height="25" />
        </a>
        <SvgLink SvgComponent={SvgLinkedIn} url={'https://www.linkedin.com/in/jm-duro/'} />
        <SvgLink SvgComponent={SvgGitHub} url={'https://github.com/JoaoMariaDuro'} />
      </div>
    </div>
  );
};

export default Home;