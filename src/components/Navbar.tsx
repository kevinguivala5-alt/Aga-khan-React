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
        <li className="nav-dropdown">
          <a href="#" className="nav-link">Admissions</a>
          <div className="nav-dropdown-menu">
            <Link to="/apply">Enroll now</Link>
            <a href="#">Fees for 2026</a>
          </div>
        </li>
        <li className="nav-dropdown">
          <a href="#" className="nav-link">Student Life</a>
          <div className="nav-dropdown-menu">
            <Link to="/student-life">Activities</Link>
            <Link to="/campus">Campus</Link>
            <Link to="/achievements">Achievements</Link>
          </div>
        </li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/news" className="nav-link">News</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  )
}
