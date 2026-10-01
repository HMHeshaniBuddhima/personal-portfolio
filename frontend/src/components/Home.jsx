import "./Home.css"

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

        <p className="hello">Hello, I'm</p>

        <h1>Heshani Buddhima</h1>

        <h2>
          Computer Science <span>Undergraduate</span>
        </h2>

        <p className="description">
          I am passionate about web development, artificial intelligence,
          and creating useful software solutions.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

      </div>

    </section>
  )
}

export default Home