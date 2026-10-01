import "./About.css"
import myPhoto from "../assets/my-photo.jpeg"

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
  <img
    src={myPhoto}
    alt="Heshani Buddhima"
    className="profile-image"
  />
</div>

      <div className="about-content">

        <p className="section-label">ABOUT ME</p>

        <h2>
          Get to know <span>me.</span>
        </h2>

        <p>
          I am a Computer Science undergraduate with an interest in
          software development, web technologies, artificial intelligence,
          and data analysis.
        </p>

        <p>
          I enjoy learning new technologies and building practical
          applications that help me improve my programming and
          problem-solving skills.
        </p>

        <div className="about-info">

          <div>
            <h3>Education</h3>
            <p>BSc Honours in Computer Science</p>
          </div>

          <div>
            <h3>University</h3>
            <p>University of Vavuniya</p>
          </div>

        </div>

        <a href="#contact" className="about-button">
          Contact Me
        </a>

      </div>

    </section>
  )
}

export default About