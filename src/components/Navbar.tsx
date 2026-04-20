import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images (1).png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo">
        <img src={logo} alt="Aga Khan Academy Logo" className="nav-logo-img" />
        <div className="nav-logo-text">
          Aga Khan Academy
          <span>Maputo · Mozambique</span>
        </div>
      </Link>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/academics" className="nav-link">Academics</Link></li>
        <li><a href="#" className="nav-link">Achievements</a></li>
        <li><Link to="/campus" className="nav-link">Campus</Link></li>
        <li className="nav-dropdown">
          <a href="#" className="nav-link">Admissions</a>
          <div className="nav-dropdown-menu">
            <Link to="/apply">Enroll now</Link>
            <a href="#">Fees for 2026</a>
          </div>
        </li>
        <li><Link to="/student-life" className="nav-link">Activities</Link></li>
        <li className="nav-dropdown">
          <a href="#" className="nav-link">About</a>
          <div className="nav-dropdown-menu">
            <Link to="/about">Our Story</Link>
            <Link to="/student-life">Student Life</Link>
          </div>
        </li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/news" className="nav-link">News</Link></li>
      </ul>
    </nav>
  )
}
