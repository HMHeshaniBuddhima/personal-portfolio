import "./Certifications.css"

import {
  FaPython,
  FaLaptopCode,
  FaExternalLinkAlt
} from "react-icons/fa"

import { RiRobot2Line } from "react-icons/ri"

import pythonCertificate from "../assets/certificates/python-for-beginners.pdf"
import webCertificate from "../assets/certificates/web-design-for-beginners.pdf"
import aiCertificate from "../assets/certificates/generative-ai.pdf"

function Certifications() {

  const certificates = [
    {
      icon: <FaPython />,
      title: "Python for Beginners",
      date: "August 2026",
      code: "10632546",
      certificate: pythonCertificate
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Design for Beginners",
      organization: "University of Moratuwa",
      code: "wkdeEES7Wr",
      certificate: webCertificate
    },
    {
      icon: <RiRobot2Line />,
      title: "Introduction to Generative AI Studio",
      date: "August 2026",
      code: "10577585",
      certificate: aiCertificate
    }
  ]

  return (
    <section className="certifications" id="certifications">

      <div className="certifications-heading">

        <div className="small-title">
          <span></span>
          CERTIFICATIONS
          <span></span>
        </div>

        <h2>
          Courses & <strong>Certifications.</strong>
        </h2>

        <p>
          Certifications I have earned while developing my
          technical knowledge and practical skills.
        </p>

      </div>

      <div className="certifications-grid">

        {certificates.map((certificate, index) => (

          <div className="certificate-card" key={index}>

            <div className="certificate-icon">
              {certificate.icon}
            </div>

            <span className="certificate-number">
              0{index + 1}
            </span>

            <h3>{certificate.title}</h3>

            {certificate.organization && (
              <p className="certificate-organization">
                {certificate.organization}
              </p>
            )}

            {certificate.date && (
              <p className="certificate-date">
                {certificate.date}
              </p>
            )}

            <p className="certificate-code">
              Credential: {certificate.code}
            </p>

            <a
              href={certificate.certificate}
              target="_blank"
              rel="noreferrer"
              className="certificate-button"
            >
              View Certificate
              <FaExternalLinkAlt />
            </a>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Certifications