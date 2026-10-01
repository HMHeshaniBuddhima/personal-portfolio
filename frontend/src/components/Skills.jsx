import "./Skills.css"

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub
} from "react-icons/fa"

import {
  SiJavascript,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostman
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"
import { FaDatabase, FaServer, FaTools } from "react-icons/fa"


function Skills() {

  const categories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      icon: <FaReact />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> }
      ]
    },

    {
      title: "Backend Development",
      description: "Developing server-side applications and REST APIs.",
      icon: <FaServer />,
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "REST API", icon: <FaServer /> }
      ]
    },

    {
      title: "Database",
      description: "Storing and managing application data.",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB Atlas", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql />}
      ]
    },

    {
      title: "Tools",
      description: "Tools I use for development and testing.",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Postman", icon: <SiPostman /> }
      ]
    }
  ]

  const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Quick Learning"
]


  return (
    <section className="skills" id="skills">

      <div className="skills-title">

        <div className="small-title">
          <span></span>
          MY SKILLS
          <span></span>
        </div>

        <h2>
          Technical <strong>Skills.</strong>
        </h2>

        <p>
          Technologies and tools I use for software development
          and academic projects.
        </p>

      </div>


      <div className="categories">

        {categories.map((category, index) => (

          <div className="category-card" key={index}>

            <div className="category-header">

              <div className="category-icon">
                {category.icon}
              </div>

              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

            </div>


            <div className="technology-list">

              {category.skills.map((skill, skillIndex) => (

                <div className="technology" key={skillIndex}>

                  <div className="technology-icon">
                    {skill.icon}
                  </div>

                  <span>{skill.name}</span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>


      <div className="learning">

        <div className="learning-title">
          <span></span>
          CONTINUOUSLY LEARNING
          <span></span>
        </div>

        <p>
          I am always open to learning new technologies and improving my skills.
        </p>

      </div>

      <div className="soft-skills-section">

  <div className="soft-skills-heading">
    <p className="section-label">PERSONAL STRENGTHS</p>

    <h2>
      Soft <span>Skills.</span>
    </h2>

    <p>
      Personal qualities that help me work effectively,
      learn continuously, and collaborate with others.
    </p>
  </div>

  <div className="soft-skills-grid">

    {softSkills.map((skill, index) => (
      <div className="soft-skill-card" key={index}>
        <span className="soft-skill-number">
          0{index + 1}
        </span>

        <h3>{skill}</h3>
      </div>
    ))}

  </div>

</div>

    </section>
  )
}

export default Skills