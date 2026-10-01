import "./Footer.css"

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa"

function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>
            Heshani<span>.</span>
          </h2>

          <p>
            Computer Science undergraduate passionate about
            software development, web technologies and artificial
            intelligence.
          </p>

        </div>


        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>

        </div>


        <div className="footer-social">

          <h3>Connect</h3>

          <div className="footer-social-icons">

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

      </div>


      <div className="footer-bottom">

        <p>
          © {currentYear} Heshani Buddhima. All rights reserved.
        </p>

        <a
          href="#home"
          className="back-to-top"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </a>

      </div>

    </footer>
  )
}

export default Footer