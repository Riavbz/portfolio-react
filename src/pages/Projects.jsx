import React, { useState } from "react";
import snakeGame from "../assets/snakeGame.png"
import EcommerceWeb from '../assets/EcommerceWeb.png';
import hangman from '../assets/hangman.png';
import collegeTipsApp from '../assets/collegeTipsApp.png';
import WA2 from "../assets/WA2.png";

const projectsData = [
    {
    title: "Snake Game",
    description: "The classic snake game made using Java.",
    image: snakeGame,
    link: "https://github.com/Riavbz/SnakeGame",
    category: "Java"
  },
  {
    title: "E-Commerce Website",
    description: "A full-stack platform for a boutique crochet plushie business.",
    image: EcommerceWeb,
    link: "https://github.com/Riavbz/ecommerce_capstone",
    category: "Web"
  },
  {
    title: "React Weather App",
    description: "Web application that gives a weather forecast made using react",
    image: WA2,
    link: "https://github.com/Riavbz/react-weatherApp",
    category: "Web"
  },
  {
    title: "Hangman Game",
    description: "The classic hangman game built using Java.",
    image: hangman,
    link: "https://github.com/Riavbz/Hangman-Game",
    category: "Java"
  },
  {
    title: "College Tips App",
    description: "An app that outlines tips for surviving college.",
    image: collegeTipsApp,
    link: "https://github.com/Riavbz/Surviving-College-Android-App",
    category: "Mobile"
  }
]
function Projects() {
    const [filter, setFilter] = useState('All');
    
    const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);
  return (
    <section id="projects" className="projects">
            <div className="container">
                <h1 className="headings shift-middle">My Projects</h1>

                {/* Filter Buttons */}
        <div className="flex gap-6 justify-center  mt-16 mb-16">
          {['All', 'Java', 'Web', 'Mobile'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn ${filter === cat ? 'bg-sky-900' : 'bg-gray-700'}`}
            >
              {cat}
            </button>
          ))}
          </div>

          {/* Project Grid */}
          <div className="project-grid m-8" style={{ marginTop: '2rem' }}>
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3 className="text-black playfair-display">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn btn-card">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}

export default Projects;