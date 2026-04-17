import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../about.css'

export default function About() {
  const revealRefs = useRef<Element[]>([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => {
      revealRefs.current.push(el)
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-left">
          <div className="ab-eyebrow">Est. Maputo, Mozambique</div>
          <h1 className="ab-hero-title">
            Educating leaders<br/>for a <em>better world</em>
          </h1>
          <div className="ab-hero-meta">
            <div className="ab-meta-item">
              <span className="ab-meta-label">Established</span>
              <span className="ab-meta-value">2013</span>
            </div>
            <div className="ab-meta-item">
              <span className="ab-meta-label">Programme</span>
              <span className="ab-meta-value">IB K–12</span>
            </div>
            <div className="ab-meta-item">
              <span className="ab-meta-label">Network</span>
              <span className="ab-meta-value">AKDN Global</span>
            </div>
          </div>
        </div>
        <div className="ab-hero-right">
          <div className="ab-hero-grid-bg"></div>
          <div className="ab-circle-wrap">
            <div className="ab-circle"></div>
            <div className="ab-circle"></div>
            <div className="ab-circle"></div>
            <div className="ab-circle-text">
              <span className="ab-circle-year">2013</span>
              <span className="ab-circle-sub">Founded</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ab-ticker">
        <div className="ab-ticker-inner">
          {['IB Primary Years Programme', 'IB Middle Years Programme', 'IB Diploma Programme', 'AKDN Member School', 'Maputo · Mozambique', '40+ Nationalities', 'Boarding & Day', 'Est. 2013', 'IB Primary Years Programme', 'IB Middle Years Programme', 'IB Diploma Programme', 'AKDN Member School', 'Maputo · Mozambique', '40+ Nationalities', 'Boarding & Day', 'Est. 2013'].map((item, i) => (
            <span key={i} className="ab-ticker-item">{item}<span className="ab-ticker-dot"> · </span></span>
          ))}
        </div>
      </div>

      {/* ── STORY ── */}
      <section id="story" className="ab-story">
        <div className="ab-story-aside">
          <span className="ab-story-number">01</span>
          <div className="ab-story-aside-title">Our History</div>
        </div>
        <div className="ab-story-content reveal">
          <div className="ab-section-tag">The Origin</div>
          <h2 className="ab-story-heading">
            Born from a belief that education<br/>can change <em>lives and nations</em>
          </h2>
          <div className="ab-story-body">
            <p>The Aga Khan Academy Maputo was founded in <strong>2013</strong> as the third Academy in the global Aga Khan Academies network — and the first in sub-Saharan Africa on the east coast of the continent. Established by His Highness the Aga Khan as part of the Aga Khan Development Network's commitment to improving the quality of life, the Academy represents a long-term investment in Mozambique's human capital.</p>
            <p>Our founders observed a pressing reality: Mozambique, one of Africa's most rapidly developing nations, needed world-class educational infrastructure that could produce the next generation of principled, capable leaders. Not adapted curricula, not compromised standards — but genuine, internationally recognised excellence delivered with deep local commitment.</p>
            <p>The Academy was built on the conviction that <strong>every student, regardless of background</strong>, deserves access to an education of the highest quality. Through a robust financial assistance programme, we ensure that the Academy's doors are open to exceptional students from across Mozambique and the region, not only those who can afford tuition.</p>
            <p>From these foundations, the Aga Khan Academy Maputo has grown into a <strong>vibrant K–12 community</strong> of more than 40 nationalities, united by shared values, rigorous scholarship, and a profound commitment to contributing positively to the world.</p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="ab-timeline-section">
        <div className="ab-section-tag" style={{ color: 'var(--accent-light)' }}>Milestones</div>
        <div className="ab-timeline">
          <div className="ab-tl-item reveal">
            <div className="ab-tl-year">2009</div>
            <div className="ab-tl-label">The Vision</div>
            <div className="ab-tl-desc">His Highness the Aga Khan announces plans for the third Aga Khan Academy, to be established in Maputo, Mozambique — a landmark commitment to East African education.</div>
          </div>
          <div className="ab-tl-item reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="ab-tl-year">2013</div>
            <div className="ab-tl-label">Doors Open</div>
            <div className="ab-tl-desc">The Academy opens its campus in Maputo, welcoming its founding cohort of students. IB PYP and MYP programmes launch, with the Diploma Programme to follow.</div>
          </div>
          <div className="ab-tl-item reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="ab-tl-year">2018</div>
            <div className="ab-tl-label">First Graduates</div>
            <div className="ab-tl-desc">The inaugural IB Diploma class graduates, with students earning places at leading universities across three continents — validating the Academy's academic model.</div>
          </div>
          <div className="ab-tl-item reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="ab-tl-year">2026→</div>
            <div className="ab-tl-label">Growing Impact</div>
            <div className="ab-tl-desc">Applications open for 2026–27. The Academy continues to expand its reach, deepen community partnerships, and advance its mission of principled, globally-minded leadership.</div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section id="mission" className="ab-mission">
        <div className="ab-section-tag ab-tag-center">Our Mission</div>
        <blockquote className="ab-mission-quote reveal">
          "To develop <em>principled, compassionate</em> leaders with the intellect, character and commitment to help build a more equitable and peaceful world."
        </blockquote>
        <p className="ab-mission-sub reveal" style={{ transitionDelay: '0.15s' }}>
          We don't merely educate students — we cultivate global citizens who are rooted in Mozambican identity and prepared to lead with purpose in an interconnected world.
        </p>
        <div className="ab-pillars reveal" style={{ transitionDelay: '0.3s' }}>
          {[
            { icon: '◈', name: 'Intellectual Rigour', desc: 'The IB curriculum challenges students to think deeply, question boldly and connect learning across disciplines.' },
            { icon: '⬡', name: 'Ethical Leadership', desc: 'We cultivate character alongside academic achievement — developing leaders of principle and compassion.' },
            { icon: '◎', name: 'Cultural Pluralism', desc: 'With 40+ nationalities on campus, students learn to understand and celebrate the diversity of human experience.' },
            { icon: '⊕', name: 'Service & Action', desc: 'Every student is called to contribute — to their community, their nation, and the wider world.' },
          ].map((p, i) => (
            <div className="ab-pillar" key={i}>
              <div className="ab-pillar-icon">{p.icon}</div>
              <div className="ab-pillar-name">{p.name}</div>
              <div className="ab-pillar-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMMES ── */}
      <section id="programmes" className="ab-programmes">
        <div className="ab-programmes-header">
          <h2 className="ab-programmes-heading reveal">Three programmes.<br/>One vision.</h2>
          <p className="reveal" style={{ transitionDelay: '0.1s' }}>Each IB programme builds on the last — creating a coherent, values-driven educational journey from Early Years through to university entry and beyond.</p>
        </div>
        <div className="ab-prog-grid">
          {[
            { num: '01 —', name: 'Primary Years Programme', tag: 'IB PYP · Ages 3–12', desc: 'A transdisciplinary inquiry framework that nurtures the whole child — intellectually, physically, emotionally and socially. Students develop as curious, caring agents of change through structured exploration of the world around them.', status: 'IB Authorised' },
            { num: '02 —', name: 'Middle Years Programme', tag: 'IB MYP · Ages 11–16', desc: 'A challenging framework connecting learning to real-world contexts. MYP students in Maputo engage with local and global issues, developing the analytical skills and ethical compass they will carry into adult life.', status: 'IB Authorised' },
            { num: '03 —', name: 'Diploma Programme', tag: 'IB DP · Ages 16–19', desc: 'Two years of rigorous pre-university study, globally recognised by the world\'s leading universities. Our Diploma graduates enter institutions across four continents, equipped with the intellectual confidence and resilience to excel.', status: 'IB Authorised' },
          ].map((p, i) => (
            <div className="ab-prog-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="ab-prog-num">{p.num}</div>
              <div className="ab-prog-name">{p.name}</div>
              <div className="ab-prog-tag">{p.tag}</div>
              <div className="ab-prog-desc">{p.desc}</div>
              <div className="ab-prog-status">{p.status}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="ab-values">
        <div className="ab-values-left">
          <div>
            <div className="ab-section-tag" style={{ color: 'var(--accent-light)' }}>What Drives Us</div>
            <h2 className="ab-values-heading">Our<br/><em>Values</em></h2>
          </div>
          <div className="ab-values-stat">
            <span className="ab-values-stat-number">40<span>+</span></span>
            <span className="ab-values-stat-label">Nationalities represented on campus</span>
          </div>
        </div>
        <div className="ab-values-right">
          {[
            { num: 'V.01', name: 'Inquiry & Excellence', desc: 'We hold ourselves to the highest academic standards — not for the sake of rankings, but because rigorous thinking is the foundation of genuine contribution to the world.' },
            { num: 'V.02', name: 'Inclusion & Access', desc: 'A generous financial assistance programme ensures the Academy is open to exceptional students from all backgrounds. Talent, not wealth, is the measure we care about.' },
            { num: 'V.03', name: 'Rootedness & Global Reach', desc: 'Our students are proud Mozambicans and proud global citizens. We cultivate both identities — because the world needs leaders who understand where they come from.' },
          ].map((v, i) => (
            <div className="ab-value-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="ab-value-num">{v.num}</div>
              <div className="ab-value-name">{v.name}</div>
              <div className="ab-value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="ab-cta">
        <div className="ab-section-tag" style={{ color: 'var(--green-deep)', justifyContent: 'center' }}>Join Our Community</div>
        <h2 className="ab-cta-heading reveal">Ready to begin your journey at AKA Maputo?</h2>
        <p className="reveal" style={{ transitionDelay: '0.1s' }}>Whether you are a prospective family, a potential partner, or simply curious about the Academy — we welcome the conversation.</p>
        <div className="ab-cta-buttons reveal" style={{ transitionDelay: '0.2s' }}>
          <a href="/#admissions" className="ab-btn ab-btn-dark">Apply Now</a>
          <Link to="/" className="ab-btn ab-btn-outline">Back to Home</Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ab-footer">
        <div className="ab-footer-logo">
          <div className="nav-logo-emblem" style={{ width: 36, height: 36 }}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span>Aga Khan Academy Maputo</span>
        </div>
        <span className="ab-footer-copy">© 2026 Aga Khan Academy Maputo. A programme of the AKDN.</span>
        <span className="ab-footer-location">Maputo, Mozambique</span>
      </footer>
    </>
  )
}
