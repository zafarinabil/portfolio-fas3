import React from "react";
import "../styles/Cv.css";

const Cv = () => {
  return (
    <div className="cv-section" id="cv">
      <h1>Experience</h1>
      <a
          href="https://drive.google.com/file/d/103Y4F_IAjTxcSenplXtTxfIyfBy6FLJx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-button">View Resume</button>
        </a>      
      <div className="cv-row">
        <div className="cv-col">
          {/* <h2 className="cv-category">Education</h2> */}
          <div className="cv-wrap">
            <span className="cv-date">2023 - Present</span>
            <h2>MERN - Stack Development</h2>
            <span className="cv-position">Techover Academy</span>
            <p className="cv-description">
              Professionally trained by industry consultants to become a React developer.
            </p>
          </div>
          <div className="cv-wrap">
            <span className="cv-date">2021 - 2022</span>
            <h2>Web Programming</h2>
            <span className="cv-position">Blekinge Institute of Technology</span>
            <p className="cv-description">
              Acquire a comprehensive understanding and cultivate enduring opportunities within the field of web development, equipped with the expertise to seamlessly adapt tools according to specific requirements.
            </p>
          </div>
          <div className="cv-wrap">
            <span className="cv-date">2017 - 2020</span>
            <h2>Media Communication - Film & Photography</h2>
            <span className="cv-position">Törnströmska Gymnasiet</span>
            <p className="cv-description">
              Completed a three-year program in Media Communication, specializing in Film and Photography at the high school level.
            </p>
          </div>
        </div>
        {/* 
        <div className="cv-col">
          <h2 className="cv-category">Experience</h2>
          <div className="cv-wrap">
            <span className="cv-date">2019 - 2024</span>
            <h2>Healthcare Assistant</h2>
            <span className="cv-position">Prima Hemtjänst</span>
            <p className="cv-description">
              Undertook temporary and permanent roles as a healthcare assistant, providing dedicated care and assistance within clients' home environments.
            </p>
          </div>
          <div className="cv-wrap">
            <span className="cv-date">2018 - 2023</span>
            <h2>Department of Functional Support</h2>
            <span className="cv-position">Karlskrona Kommun</span>
            <p className="cv-description">
              Served in summer substitute and permanent roles, delivering high-quality support in personal assistance.
            </p>
          </div>
          <div className="cv-wrap">
            <span className="cv-date">2017 - 2018</span>
            <h2>Swimming Trainer</h2>
            <span className="cv-position">Karlskrona Swimming Club</span>
            <p className="cv-description">
              Dedicated myself to roles as a swimming instructor, coach, and certified lifeguard, advancing swimming and fostering water safety.
            </p>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Cv;
