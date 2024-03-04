import React from "react";
import "../styles/Hero.css";
import LottieAnimation from "./LottieAnimation";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <div className="intro">
        <h3>HELLO ! I'M</h3>
        <h1>NABIL Zafari</h1>
        <h2 className="intro-subtitle">WEB DEVELOPER</h2>

        <p className="greeting-text">
          I build dynamic MERN solutions for businesses, crafting immersive
          digital experiences that blend aesthetics and functionality to make a
          lasting impact.
        </p>
        <div className="hero-buttons">
          <ScrollLink to="project" smooth={true} duration={500} offset={-100}>
            <button className="projects-button">My Projects</button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
            <button className="projects-button">Contact Me</button>
          </ScrollLink>
        </div>
      </div>
      <div className="hero-animation">
        <LottieAnimation />
      </div>

      <div className="socials">
        <a className="github-img" href="https://github.com/zafarinabil">
          <img src="images/github.svg" alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/nabil-zafari-8a323515a/">
          <img src="images/linkedin.svg" alt="Linkedin logo" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
