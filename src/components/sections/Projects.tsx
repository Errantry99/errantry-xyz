import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of your first project",
    image: "/images/project1.jpg",
    link: "#",
    technologies: ["React", "TypeScript", "Firebase"]
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of your second project",
    image: "/images/project2.jpg",
    link: "#",
    technologies: ["Node.js", "Express", "MongoDB"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="projects-content">
        <h2 id="projects-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="project-link"
                  aria-label={`View details for ${project.title}`}
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 