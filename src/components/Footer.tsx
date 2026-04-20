import { Link } from 'react-router-dom'
import logo from '../assets/images (1).png'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <img src={logo} alt="Aga Khan Academy Logo" className="footer-logo-img" />
            <div className="footer-logo-text">
              Aga Khan Academy Maputo
              <span>A Programme of the AKDN</span>
            </div>
          </div>
          <p className="footer-desc">A co-educational, non-denominational K–12 school in the heart of Maputo, offering the full International Baccalaureate curriculum and dedicated to developing leaders who will contribute to a better world.</p>
          <div className="footer-social">
            <a href="https://facebook.com" className="social-btn" title="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="social-btn" title="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 7.313c0 .255 0 2.541 0 2.541h-2.6s0-1.27 0-2.541c0-.572-.16-.853-.73-.853-.632 0-1.123.41-1.123 1.232v1.162H9.271V6.903h1.679v.811c.35-.54 1.013-1.333 2.446-1.333 1.82 0 3.045 1.215 3.045 3.932zm-9.568-.058c.406 0 .713-.308.713-.722 0-.418-.308-.721-.713-.721-.41 0-.716.303-.716.721 0 .414.306.722.716.722zm.592 2.032h-1.183v3.946h1.183v-3.946zm8.215-3.073c0 .255 0 2.541 0 2.541h-2.6s0-1.27 0-2.541c0-.572-.16-.853-.731-.853-.632 0-1.123.41-1.123 1.232v1.162H9.27V6.903h1.679v.811c.35-.54 1.013-1.333 2.446-1.333 1.82 0 3.045 1.215 3.045 3.932z"/>
              </svg>
            </a>
            <a href="https://tiktok.com" className="social-btn" title="TikTok" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.321 5.562a5.12 5.12 0 0 1-.868-.074c.339-1.396.338-2.209.338-2.209 0-.287-.233-.52-.52-.52h-2.104a.524.524 0 0 0-.52.52v12.62c0 2.305-1.807 4.174-4.074 4.174-2.267 0-4.074-1.869-4.074-4.174 0-2.305 1.807-4.174 4.074-4.174.305 0 .604.031.897.088v2.189a6.858 6.858 0 0 0-.897-.063c-3.792 0-6.871 3.038-6.871 6.763s3.079 6.762 6.871 6.762 6.871-3.037 6.871-6.762v-9.01c1.396.953 3.073 1.521 4.876 1.521v-2.16c-.305 0-.604-.032-.897-.088z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li><Link to="/about">About the Academy</Link></li>
            <li><Link to="/academics">Academic Programme</Link></li>
            <li><Link to="/apply">Admissions</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
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
