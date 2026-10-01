import "./Education.css"
import { FaGraduationCap, FaUniversity } from "react-icons/fa"

function Education() {
  return (
    <section className="education" id="education">

      <div className="education-heading">
        <div className="small-title">
          <span></span>
          MY JOURNEY
          <span></span>
        </div>

        <h2>
          Education <strong>& Qualifications.</strong>
        </h2>

        <p>
          My academic journey and educational background in
          Computer Science.
        </p>
      </div>

      <div className="education-container">

        <div className="education-card">

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">

            <span className="education-status">
              CURRENT
            </span>

            <h3>
              BSc Honours in Computer Science
            </h3>

            <div className="university">
              <FaUniversity />
              <span>University of Vavuniya, Sri Lanka</span>
            </div>

            <p>
              Undergraduate specializing in Computer Science with
              academic experience in software development,
              data analysis, machine learning and related
              computing areas.
            </p>

            <div className="education-tags">
              <span>Computer Science</span>
              <span>Software Development</span>
              <span>Machine Learning</span>
              <span>Data Analysis</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Education