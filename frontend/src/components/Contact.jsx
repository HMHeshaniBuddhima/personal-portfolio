import "./Contact.css"

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane
} from "react-icons/fa"

function Contact() {

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
              href="YOUR_LINKEDIN_URL"
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

          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
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
                placeholder="Enter message subject"
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write your message..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="send-button"
            >
              Send Message

              <FaPaperPlane />
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact