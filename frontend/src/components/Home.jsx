import "./Home.css"

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa"

import myPhoto from "../assets/my-photo.jpeg"

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-container">

        {/* LEFT SIDE */}
        <div className="home-content">

          <div className="home-intro">
            <span className="intro-line"></span>
            HELLO, I'M
          </div>

          <h1>
            Heshani
            <span> Buddhima.</span>
          </h1>

          <h2>
            Computer Science Undergraduate
          </h2>

          <p className="home-description">
            I am passionate about software development, web technologies,
            artificial intelligence, and building practical solutions
            through technology.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="home-primary-btn">
              View My Work
              <FaArrowRight />
            </a>

            <a href="#contact" className="home-secondary-btn">
              Contact Me
            </a>

          </div>

          <div className="home-socials">

            <span>Find me on</span>

            <div className="social-line"></div>

            <a
              href="https://github.com/HMHeshaniBuddhima"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/heshani-buddhima-316254428"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:heshanibuddhima100@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="home-visual">

          <div className="image-decoration"></div>

          <div className="home-image-wrapper">
            <img
              src={myPhoto}
              alt="Heshani Buddhima"
              className="home-profile-image"
            />
          </div>

          <div className="profile-status">
              <span className="status-dot"></span>

             <p> Exploring <strong>Software Development & AI</strong>
             </p>
          </div>


        </div>

      </div>


      <a href="#about" className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </a>

    </section>
  )
}

export default Home