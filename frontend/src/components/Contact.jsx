import { useState } from "react"
import "./Contact.css"

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane
} from "react-icons/fa"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus("Message sent successfully!")

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      } else {
        setStatus("Failed to send message.")
      }

    } catch (error) {
      console.error("Error:", error)
      setStatus("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="contact" id="contact">

      <div className="contact-heading">

        <div className="small-title">
          <span></span>
          GET IN TOUCH
          <span></span>
        </div>

        <h2>
          Let's <strong>Connect.</strong>
        </h2>

        <p>
          Have a question, opportunity, or project idea?
          Feel free to send me a message.
        </p>

      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <p className="contact-label">
            CONTACT ME
          </p>

          <h3>
            Let's build something
            <span> meaningful.</span>
          </h3>

          <p className="contact-description">
            I am open to learning opportunities, collaborations,
            internships, and projects related to software development
            and computer science.
          </p>

          <div className="contact-item">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <p>Email</p>

              <a href="mailto:heshanibuddhima100@gmail.com">
                heshanibuddhima100@gmail.com
              </a>
            </div>

          </div>

          <div className="social-links">

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

          </div>

        </div>

        {/* RIGHT SIDE - FORM */}

        <div className="contact-form-container">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter message subject"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="send-button"
            >
              Send Message
              <FaPaperPlane />
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact