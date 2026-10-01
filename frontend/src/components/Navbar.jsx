import { useState } from "react"
import "./Navbar.css"

import {
  FaBars,
  FaTimes
} from "react-icons/fa"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Heshani<span>.</span>
        </a>


        {/* DESKTOP / MOBILE LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#research" onClick={closeMenu}>
            Research
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#certifications" onClick={closeMenu}>
            Certificates
          </a>

          <a
            href="#contact"
            className="nav-contact"
            onClick={closeMenu}
          >
            Contact
          </a>

        </div>


        {/* HAMBURGER BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>
  )
}

export default Navbar