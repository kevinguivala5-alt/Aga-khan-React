import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <div className="nav-logo-emblem">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="footer-logo-text">
              Aga Khan Academy Maputo
              <span>A Programme of the AKDN</span>
            </div>
          </div>
          <p className="footer-desc">A co-educational, non-denominational K–12 school in the heart of Maputo, offering the full International Baccalaureate curriculum and dedicated to developing leaders who will contribute to a better world.</p>
          <div className="footer-social">
            {['Facebook','Instagram','X','YouTube'].map(s => (
              <div className="social-btn" key={s} title={s}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li><Link to="/about">About the Academy</Link></li>
            <li><Link to="/academics">Academic Programme</Link></li>
            <li><Link to="/apply">Admissions</Link></li>
            <li><a href="#">School Uniform</a></li>
            <li><a href="#">Fee Schedule</a></li>
            <li><a href="#">Financial Assistance</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Student Life</h5>
          <ul className="footer-links">
            <li><Link to="/campus">Campus & Facilities</Link></li>
            <li><Link to="/student-life">Co-Curricular</Link></li>
            <li><a href="#">Community Service</a></li>
            <li><a href="#">Sporting Activities</a></li>
            <li><a href="#">Student Leadership</a></li>
            <li><a href="#">Calendar</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact Us</h5>
          <ul className="footer-links">
            <li><a href="#">Maputo, Mozambique</a></li>
            <li><a href="tel:+258000000">+258 00 000 000</a></li>
            <li><a href="mailto:info@akamaputo.org">info@akamaputo.org</a></li>
            <li><a href="#">Admissions Office</a></li>
            <li><a href="#">Employment</a></li>
            <li><a href="#">Media Enquiries</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Aga Khan Academy Maputo. A programme of the <a href="#">Aga Khan Development Network</a>.</p>
        <div className="akdn-badge">Part of the AKDN Global Network</div>
      </div>
    </footer>
  )
}
