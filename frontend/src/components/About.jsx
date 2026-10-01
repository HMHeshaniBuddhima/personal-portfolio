import "./About.css"

import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaArrowRight
} from "react-icons/fa"

import { MdAutoGraph } from "react-icons/md"

function About() {

  const interests = [
    {
      number: "01",
      icon: <FaGraduationCap />,
      title: "Computer Science",
      text: "BSc Honours undergraduate"
    },

    {
      number: "02",
      icon: <FaLaptopCode />,
      title: "Software Development",
      text: "Building practical applications"
    },

    {
      number: "03",
      icon: <FaBrain />,
      title: "AI & Data Analysis",
      text: "Exploring intelligent technologies"
    },

    {
      number: "04",
      icon: <MdAutoGraph />,
      title: "Continuous Learning",
      text: "Always developing new skills"
    }
  ]

  return (
    <section className="about" id="about">

      {/* SECTION HEADING */}

      <div className="about-heading">

        <div className="small-title">
          <span></span>
          ABOUT ME
          <span></span>
        </div>

        <h2>
          Get to know <strong>me.</strong>
        </h2>

        <p>
          A little about who I am, what I am interested in,
          and what I am currently working towards.
        </p>

      </div>


      {/* MAIN CONTENT */}

      <div className="about-container">

        {/* LEFT */}

        <div className="about-story">

          <p className="about-label">
            WHO I AM
          </p>

          <h3>
            Turning ideas into
            <span> meaningful solutions.</span>
          </h3>

          <p>
            I am a Computer Science undergraduate at the
            University of Vavuniya with an interest in software
            development, web technologies, Artificial Intelligence,
            and data analysis.
          </p>

          <p>
            I enjoy learning new technologies and applying what I
            learn through academic and personal projects. My goal is
            to continuously improve my technical and problem-solving
            skills while gaining practical experience.
          </p>

          <a href="#contact" className="about-contact-btn">
            Let's Connect
            <FaArrowRight />
          </a>

        </div>


        {/* RIGHT */}

        <div className="about-interests">

          {interests.map((item, index) => (

            <div className="interest-item" key={index}>

              <span className="interest-number">
                {item.number}
              </span>

              <div className="interest-icon">
                {item.icon}
              </div>

              <div className="interest-text">

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default About