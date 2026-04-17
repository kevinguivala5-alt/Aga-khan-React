import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
        <div className="nav-logo-emblem">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="nav-logo-text">
          Aga Khan Academy
          <span>Maputo · Mozambique</span>
        </div>
      </Link>
      <ul className="nav-links">
        <li><Link to="/academics" className="nav-link">Academics</Link></li>
        <li><Link to="/campus" className="nav-link">Campus</Link></li>
        <li><Link to="/student-life" className="nav-link">Student Life</Link></li>
        <li><Link to="/news" className="nav-link">News</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/apply" className="nav-cta">Apply Now</Link></li>
      </ul>
    </nav>
  )
}
