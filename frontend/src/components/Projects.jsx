import "./Projects.css"

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Expense Tracker",
      description:
        "A web application for managing personal expenses with search, category filtering and date-range filtering.",

      technologies: [
        "React.js",
        "JavaScript",
        "CSS"
      ],

      github: "#",
      demo: "#"
    },

    {
      number: "02",
      title: "Personal Portfolio",
      description:
        "A modern full-stack personal portfolio website for showcasing my skills, projects, research and academic experience.",

      technologies: [
        "React.js",
        "Spring Boot",
        "MongoDB"
      ],

      github: "#",
      demo: "#"
    }
  ]


  return (
    <section className="projects" id="projects">

      {/* TITLE */}

      <div className="projects-heading">

        <div className="small-title">
          <span></span>
          MY WORK
          <span></span>
        </div>

        <h2>
          Featured <strong>Projects.</strong>
        </h2>

        <p>
          A selection of projects I have worked on while learning
          software development and computer science.
        </p>

      </div>


      {/* PROJECT CARDS */}

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <FaGithub />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                >
                  <FaExternalLinkAlt />
                </a>

              </div>

            </div>


            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>


            <div className="project-technologies">

              {project.technologies.map((technology, techIndex) => (

                <span key={techIndex}>
                  {technology}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects