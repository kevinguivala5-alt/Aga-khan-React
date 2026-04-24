import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import schoolImage1 from '../assets/WhatsApp Image 2026-04-18 at 07.44.44.jpeg'
import schoolImage2 from '../assets/WhatsApp Image 2026-04-18 at 07.44.44 (1).jpeg'

const PhotoPlaceholder = ({ caption, bg }: { caption: string; bg?: string }) => (
  <div className="img-placeholder" style={bg ? { background: bg } : undefined}>
    <div className="img-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-5-5L5 21"/>
      </svg>
    </div>
    <span className="img-caption">{caption}</span>
  </div>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Home() {
  const [heroReplaced, setHeroReplaced] = useState(false)
  const fadeRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    fadeRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addFadeRef = (el: HTMLDivElement | null) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el)
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-media">
          {heroReplaced ? (
            <div style={{ width: '100%', height: '100%', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Video Player — Replace with &lt;video&gt; or YouTube iframe
            </div>
          ) : (
            <div className="hero-video-placeholder" onClick={() => setHeroReplaced(true)}>
              <div className="play-btn">
                <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
              <div className="video-label">Watch Our Story</div>
            </div>
          )}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">IB World School · Est. 2013</div>
          <h1 className="hero-title">Where Leaders<br/>are <em>Shaped</em> for<br/>Tomorrow</h1>
          <p className="hero-subtitle">A place of purpose in the heart of Maputo — nurturing curious, principled minds through the International Baccalaureate and a commitment to excellence.</p>
          <div className="hero-actions">
            <a href="#admissions" className="btn-primary">Apply for 2026</a>
            <a href="#about" className="btn-ghost">Discover the Academy</a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* IB STRIPE */}
      <div className="ib-stripe">
        <span className="ib-stripe-label">IB Authorised</span>
        <div className="ib-badges">
          <span className="ib-badge">Primary Years Programme</span>
          <span className="ib-badge">Middle Years Programme</span>
          <span className="ib-badge">Diploma Programme</span>
          <span className="ib-badge">AKDN Member School</span>
        </div>
      </div>

      {/* ANNOUNCEMENT */}
      <div className="announce">
        <span className="announce-text"><strong>Admissions Open 2026–27</strong> — Applications are now being accepted for all year groups. Early applications encouraged.</span>
        <a href="#admissions" className="announce-link">Apply Now →</a>
      </div>

      {/* WELCOME / ABOUT */}
      <section className="welcome" id="about">
        <div className="welcome-text">
          <div className="section-label">About the Academy</div>
          <h2 className="section-title">A Global Education<br/>Rooted in <em>Maputo</em></h2>
          <p className="welcome-body">
            The Aga Khan Academy Maputo is the <strong>third Academy</strong> in the global Aga Khan Academies network, established by His Highness the Aga Khan as part of his commitment to excellence in education across the developing world.
            <br/><br/>
            Our campus nurtures <strong>inquiring, principled students</strong> who are prepared to lead — locally and globally. Through the internationally recognised IB curriculum and the distinctive Aga Khan Curricular Strands, we develop the whole child: intellectually, ethically and culturally.
          </p>
          <Link to="/about" className="btn-primary" style={{ alignSelf: 'center' }}>Our Full Story</Link>
        </div>
        <div className="welcome-media">
          <img src={schoolImage1} alt="Campus Life Photo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          <div className="welcome-accent">
            <div className="welcome-quote">"The purpose of education is to develop in students the skills, knowledge and values that will enable them to lead good lives and to contribute to a better world."</div>
            <div className="welcome-quote-attr">His Highness the Aga Khan</div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="programmes" id="programmes">
        <div className="programmes-header">
          <div>
            <div className="section-label">IB World School</div>
            <h2 className="section-title">Our Academic<br/><em>Programmes</em></h2>
          </div>
          <a href="#" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>View Full Curriculum</a>
        </div>
        <div className="prog-cards">
          {[
            { badge: 'IB PYP', title: ['Primary Years', 'Programme'], age: 'Ages 3–12 · Early Years to Grade 5', desc: 'A transdisciplinary framework that nurtures the whole child — intellectual, physical, emotional and social development through inquiry-based learning and rich community connection.' },
            { badge: 'IB MYP', title: ['Middle Years', 'Programme'], age: 'Ages 11–16 · Grades 6–10', desc: 'Developing principled, critical thinkers who understand how knowledge connects across disciplines — and how to apply that understanding to real-world challenges in Mozambique and beyond.' },
            { badge: 'IB DP', title: ['Diploma', 'Programme'], age: 'Ages 16–19 · Grades 11–12', desc: "Rigorous two-year pre-university course recognised by the world's leading universities. Our graduates enter institutions across four continents with the confidence and capability to excel." },
          ].map((p, i) => (
            <div className="prog-card fade-up" key={i} ref={addFadeRef}>
              <div className="prog-badge">{p.badge}</div>
              <h3 className="prog-title">{p.title[0]}<br/>{p.title[1]}</h3>
              <div className="prog-age">{p.age}</div>
              <p className="prog-desc">{p.desc}</p>
              <a href="#" className="prog-arrow">Learn more <ArrowIcon /></a>
            </div>
          ))}
        </div>
      </section>

      {/* CAMPUS */}
      <section className="campus" id="campus">
        <div className="campus-inner">
          <div className="campus-gallery">
            <div className="campus-img">
              <PhotoPlaceholder caption="Aerial Campus View" />
              <div className="campus-tag">Maputo Campus</div>
            </div>
            <div className="campus-img" style={{ height: 180 }}>
              <PhotoPlaceholder caption="Library" />
              <div className="campus-tag">Learning Hub</div>
            </div>
            <div className="campus-img" style={{ height: 180 }}>
              <PhotoPlaceholder caption="Sports Facilities" />
              <div className="campus-tag">Athletics</div>
            </div>
          </div>
          <div>
            <div className="section-label">Our Facilities</div>
            <h2 className="section-title">A Campus Built<br/>for <em>Discovery</em></h2>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.9, color: 'var(--muted)', marginTop: 20 }}>Our purpose-built campus in Maputo spans extensive grounds designed to inspire and support every dimension of student development.</p>
            <div className="campus-features">
              {[
                { title: 'Academic Facilities', desc: 'Fully equipped classrooms, science labs, a comprehensive library and dedicated technology spaces for STEM learning.' },
                { title: 'Residential Life', desc: 'Modern boarding facilities allowing students from across Mozambique and East Africa to live and grow as a community.' },
                { title: 'Arts & Culture Centre', desc: 'Performance spaces, art studios and cultural programming that celebrate Mozambican heritage alongside global arts education.' },
                { title: 'Solar-Powered Campus', desc: 'Committed to sustainability, our campus features solar installations powering classrooms and common areas across the grounds.' },
              ].map((f, i) => (
                <div className="campus-feature" key={i}>
                  <div className="cf-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <div>
                    <div className="cf-title">{f.title}</div>
                    <div className="cf-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className="student-life" id="student-life">
        <div className="sl-header">
          <div className="section-label">Beyond the Classroom</div>
          <h2 className="section-title">Student <em>Life</em> at AKA Maputo</h2>
        </div>
        <div className="sl-grid">
          {[
            { caption: 'Sports & Athletics', title: 'Sports & Athletics', sub: 'Football · Swimming · Basketball', bg: undefined },
            { caption: 'Arts & Culture', title: 'Arts & Culture', sub: 'Drama · Visual Arts · Music', bg: 'linear-gradient(135deg,#1A2A10 0%,#2A3A15 100%)' },
            { caption: 'Community Service', title: 'Community Service', sub: 'CAS · Local Outreach', bg: 'linear-gradient(135deg,#1A2A10 0%,#2A4A20 100%)' },
            { caption: 'Student Leadership', title: 'Student Leadership', sub: 'Model UN · Student Council', bg: 'linear-gradient(135deg,#10203A 0%,#204060 100%)' },
          ].map((item, i) => (
            <div className="sl-item" key={i}>
              <PhotoPlaceholder caption={item.caption} bg={item.bg} />
              <div className="sl-overlay">
                <div className="sl-item-title">{item.title}</div>
                <div className="sl-item-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="news" id="news">
        <div className="news-header">
          <div>
            <div className="section-label">Latest from AKA Maputo</div>
            <h2 className="section-title">News & <em>Stories</em></h2>
          </div>
          <a href="#" className="btn-primary">All News</a>
        </div>
        <div className="news-grid">
          <div className="news-card">
            <div className="news-thumb"><PhotoPlaceholder caption="News Image" bg="linear-gradient(135deg,#1A3D27 0%,#0F2819 100%)" /></div>
            <div className="news-meta"><span className="news-cat">Academic Achievement</span><span className="news-date">April 2026</span></div>
            <h3 className="news-title">Class of 2026 Achieves Record IB Diploma Results</h3>
            <p className="news-excerpt">Our graduating class secured outstanding scores with multiple students earning 40+ points, gaining admission to top universities across three continents.</p>
          </div>
          <div className="news-card">
            <div className="news-thumb"><PhotoPlaceholder caption="Photo" bg="linear-gradient(135deg,#1A2A10 0%,#2A3A15 100%)" /></div>
            <div className="news-meta"><span className="news-cat">Community</span><span className="news-date">March 2026</span></div>
            <h3 className="news-title">Students Lead Environmental Campaign Across Maputo</h3>
            <p className="news-excerpt">Grade 10 students partnered with local organisations to raise awareness on coastal sustainability.</p>
          </div>
          <div className="news-card">
            <div className="news-thumb"><PhotoPlaceholder caption="Photo" bg="linear-gradient(135deg,#102A1A 0%,#204030 100%)" /></div>
            <div className="news-meta"><span className="news-cat">Exchange</span><span className="news-date">February 2026</span></div>
            <h3 className="news-title">AKA Maputo Welcomes Exchange Students from Hyderabad & Nairobi</h3>
            <p className="news-excerpt">The annual inter-academy exchange deepens cross-cultural learning and global friendships.</p>
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section className="admissions-cta" id="admissions">
        <div className="cta-text">
          <div className="section-label">Join Our Community</div>
          <h2 className="section-title">Begin Your<br/><em>Journey</em> Here</h2>
          <p>We welcome applications from families who share our commitment to academic excellence, global citizenship and ethical leadership. Financial assistance is available for qualifying students.</p>
          <a href="#" className="btn-primary" style={{ background: 'white', color: 'var(--green-deep)' }}>Start Your Application</a>
        </div>
        <div className="cta-cards">
          {[
            { label: 'Admission Requirements', sub: 'Entry criteria for all year groups' },
            { label: 'Application Forms', sub: 'Download and submit your application' },
            { label: 'Financial Assistance', sub: 'Scholarships and bursary information' },
            { label: 'Book a Campus Tour', sub: 'Visit us in Maputo' },
          ].map((c, i) => (
            <a href="#" className="cta-card" key={i}>
              <div>
                <div className="cta-card-label">{c.label}</div>
                <div className="cta-card-sub">{c.sub}</div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="test-header">
          <div className="section-label">Voices from Our Community</div>
          <h2 className="section-title">What Our Families <em>Say</em></h2>
        </div>
        <div className="test-track">
          {[
            { initial: 'A', quote: "AKA Maputo didn't just prepare my daughter for university — it shaped her into a confident, compassionate leader with a genuine love of learning.", name: 'Amina Osman', role: 'Parent · Class of 2025' },
            { initial: 'C', quote: "The quality of teaching here is exceptional. My son's critical thinking and writing improved enormously, and he was accepted to UCL for Engineering.", name: 'Carlos Nhantumbo', role: 'Parent · Class of 2024' },
            { initial: 'F', quote: "Being part of an international community while staying grounded in Mozambique — that balance is truly unique to this school.", name: 'Fatima Al-Rashid', role: 'IB Diploma Graduate · 2023' },
          ].map((t, i) => (
            <div className="test-card fade-up" key={i} ref={addFadeRef}>
              <div className="test-quote-mark">"</div>
              <p className="test-body">{t.quote}</p>
              <div className="test-person">
                <div className="test-avatar">{t.initial}</div>
                <div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
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
              {['Facebook', 'Instagram', 'X', 'YouTube'].map(s => (
                <div className="social-btn" key={s} title={s}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              {['About the Academy','Academic Programme','Admissions','School Uniform','Fee Schedule','Financial Assistance'].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Student Life</h5>
            <ul className="footer-links">
              {['Living on Campus','Co-Curricular','Community Service','Sporting Activities','Student Leadership','Calendar'].map(l => <li key={l}><a href="#">{l}</a></li>)}
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
    </>
  )
}
