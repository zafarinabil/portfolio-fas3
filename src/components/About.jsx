import React from "react";
import "../styles/About.css";

const About = ({ className }) => {
  return (
    <section className={`about ${className}`}>
      <div className="about-me">
        <h2 className="section-title">About me</h2>
        <div className="about-content">
          <div className="hero-img">
            <img src="images/hero-1.webp" alt="Nabil Zafari" />
          </div>
          <p className="about-text">
            I am a Web Developer skilled in the MERN stack, with expertise
            in React for front-end, MongoDB for databases, and Express/Node.js for
            server-side development. I bring a creative and technically proficient
            approach to projects, specializing in crafting visually appealing and
            responsive designs using HTML and CSS. My passion for contributing to
            innovative web solutions is coupled with a commitment to continuous
            learning and staying abreast of industry trends. Let's collaborate to
            bring your digital vision to life!
          </p>
        </div>
      </div>

      <div className={`skills ${className}`}>
        <h2 className="section-title">Skills</h2>
        <div className="skills-wrapper">
          <Skill icon="html.svg" name="HTML" />
          <Skill icon="css.svg" name="CSS" />
          <Skill icon="express-js.png" name="Express Js" />
          <Skill icon="react.png" name="React Js" />
          <Skill icon="mongodb.svg" name="MongoDB" />
          <Skill icon="node-js.svg" name="Node Js" />
          <Skill icon="js.svg" name="JavaScript" />
          <Skill icon="git.svg" name="Git" />
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, name }) => {
  return (
    <div className="skill">
      <img src={`images/${icon}`} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default About;
