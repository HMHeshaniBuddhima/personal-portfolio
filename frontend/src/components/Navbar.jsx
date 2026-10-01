import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        Heshani<span>.</span>
      </h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#research">Research</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certificates</a>
        <a href="#contact">Contact</a>
        
      </div>

    </nav>
  )
}

export default Navbar