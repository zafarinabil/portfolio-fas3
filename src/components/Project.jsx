import React from "react";
import "../styles/Project.css";

const projects = [
  {
    title: "Spotify Clone",
    description:
      "I developed a Spotify replica using the Spotify API, enabling users to log in to their actual Spotify accounts, access their personal playlists, and play, pause, and skip tracks within those playlists. This application utilizes JavaScript, React, Basic Auth for authentication, Material UI for styling, CSS for additional customization, and Git for version control.",
    tools: "React, Material UI, SpotifyApi",
    imageUrl: "/images/project1-remove.png",
    appUrl: "https://nabil-spotify.vercel.app/",
    codeUrl: "https://github.com/zafarinabil/spotify-clone.git",
  },
  {
    title: "Klarna Checkout",
    description:
      "Integrated Klarna Checkout into a fictional store using Express and Node.js for smooth transactions and a user-friendly checkout. This solution facilitates browsing and secure purchases with Klarna-supported methods, while the backend communicates with Klarna's APIs, enhancing store efficiency and customer satisfaction in the online retail experience.",
    tools: "React, Material UI, SpotifyApi",
    imageUrl: "/images/project3.png",
    appUrl: "https://nabil-klarna-checkout.vercel.app/",
    codeUrl: "https://github.com/zafarinabil/klarna-checkout.git",
  },
  {
    title: "The Earth",
    description:
      "Discover comprehensive country data effortlessly with our React.js app for a streamlined and engaging exploration of global information.",
    tools: "React, Material UI, SpotifyApi",
    imageUrl: "/images/project2-remove.png",
    appUrl: "https://flag-api-nabil.netlify.app/",
    codeUrl: "https://github.com/zafarinabil/flag-api.git",
  },
  {
    title: "Password Generator",
    description:
      "Boost online security effortlessly with our password generator—a sleek HTML, CSS, and JS-powered app for creating strong, unique passwords.",
    tools: "React, Material UI, SpotifyApi",
    imageUrl: "/images/project4.png",
    appUrl: "https://nabil-password-generator.netlify.app/",
    codeUrl: "https://github.com/zafarinabil/password-generator.git",
  },
];

const Project = () => {
  return (
    <div className="projects-container" id="project">
      <div className="my-projects">
        <h1>Projects</h1>
      </div>
      <div className="project-card">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="img-container">
              <img
                className="project-img"
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
            <div className="project-text-container">
              <h3 className="project-text-title">{project.title}</h3>
              <p className="project-text-subtitle">{project.description}</p>
              <p className="project-text-subtitle">{project.tools}</p>
              <div className="button-container">
                <a
                  href={project.appUrl}
                  className="app-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/app-button.svg" alt="app" />
                </a>
                <a
                  href={project.codeUrl}
                  className="app-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/github.svg" alt="github" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
