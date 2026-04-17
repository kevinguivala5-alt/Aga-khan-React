import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages.css'

const steps = [
  { num: '01', title: 'Enquire', body: 'Submit an initial enquiry form or contact our Admissions Office. We will send you our prospectus and invite you to a campus tour or virtual information session.' },
  { num: '02', title: 'Apply', body: 'Complete the online application form and submit all required documents — academic records, recommendations, passport copy and birth certificate.' },
  { num: '03', title: 'Assessment', body: 'Shortlisted applicants are invited to sit an entrance assessment in English, Mathematics and reasoning, followed by a family interview with our Admissions team.' },
  { num: '04', title: 'Enrol', body: 'Successful applicants receive a formal offer. A non-refundable enrolment fee secures your place. Our team guides you through boarding, uniform and orientation.' },
]

const cards = [
  {
    icon: '📋',
    title: 'Entry Points',
    body: 'We welcome applications at all year group entry points — from Early Years through to Grade 11. Mid-year applications are considered subject to availability.',
    link: 'Year Group Guide →',
  },
  {
    icon: '💰',
    title: 'Fees & Financial Aid',
    body: 'Tuition and boarding fees are available on request. Need-based financial assistance is awarded annually and covers up to 100% of fees for qualifying families.',
    link: 'Financial Aid Details →',
  },
  {
    icon: '🌍',
    title: 'International Students',
    body: 'Students from over 40 nationalities study at AKA Maputo. We support visa applications, travel arrangements and cultural orientation for all new international families.',
    link: 'International Admissions →',
  },
]

export default function Apply() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(
      e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.pg-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <section className="pg-hero ap-hero">
        <div className="pg-hero-bg-grid" />
        <div className="pg-hero-accent" />
        <div className="pg-hero-content">
          <div className="pg-eyebrow">Admissions · 2026–27 Academic Year</div>
          <h1 className="pg-h1">Begin your<br/>journey at<br/><em>AKA Maputo</em></h1>
          <p className="pg-hero-sub">We welcome applications from families who share our commitment to academic excellence, ethical leadership and the values of the International Baccalaureate.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#steps" className="pg-btn pg-btn-green">How to Apply</a>
            <a href="/campus" className="pg-btn pg-btn-outline-white">Book a Tour</a>
          </div>
        </div>
        <div className="pg-hero-stats">
          <div><div className="pg-stat-num">3<em>+</em></div><div className="pg-stat-label">IB Programmes</div></div>
          <div><div className="pg-stat-num">40<em>+</em></div><div className="pg-stat-label">Nationalities</div></div>
          <div><div className="pg-stat-num">100<em>%</em></div><div className="pg-stat-label">IB Pass Rate</div></div>
        </div>
      </section>

      <div className="ap-intro pg-reveal">
        <div>
          <div className="pg-tag">Admissions</div>
          <h2 className="pg-h2">We look for<br/><em>curious minds</em></h2>
        </div>
        <p className="pg-body" style={{ alignSelf: 'center', color: 'var(--g500)', lineHeight: 1.8 }}>
          AKA Maputo seeks students who are intellectually curious, socially engaged and ready to grow. Our admissions process is designed to understand the whole child — academic potential, character, and the drive to contribute to a community larger than themselves.
          <br /><br />
          We are committed to building a diverse student body that reflects the breadth of Mozambique and the world. Financial need is never a barrier to admission for qualified students.
        </p>
      </div>

      <div className="ap-steps pg-reveal" id="steps">
        <div className="pg-tag">Application Process</div>
        <h2 className="pg-h2" style={{ marginTop: 8 }}>Four steps to<br/><em>joining us</em></h2>
        <div className="ap-steps-grid">
          {steps.map((s, i) => (
            <div className="ap-step" key={i}>
              <div className="ap-step-num">{s.num}</div>
              <div className="ap-step-title">{s.title}</div>
              <div className="ap-step-body">{s.body}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="ap-cards pg-reveal">
        <div className="pg-tag">Key Information</div>
        <h2 className="pg-h2" style={{ marginTop: 8 }}>Everything you<br/>need to <em>know</em></h2>
        <div className="ap-cards-grid">
          {cards.map((c, i) => (
            <div className="ap-card" key={i}>
              <div className="ap-card-icon">{c.icon}</div>
              <div className="ap-card-title">{c.title}</div>
              <div className="ap-card-body">{c.body}</div>
              <div className="ap-card-link">{c.link}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="ap-cards pg-reveal" style={{ background: 'var(--g50)', borderTop: '1px solid var(--border)' }}>
        <div className="pg-tag">Required Documents</div>
        <h2 className="pg-h2" style={{ marginTop: 8 }}>What to<br/><em>prepare</em></h2>
        <div className="ap-cards-grid">
          {[
            { icon: '📄', title: 'Academic Records', body: 'Last two years of school reports or transcripts. For Diploma applicants, predicted IB grades or equivalent qualification results are required.' },
            { icon: '🪪', title: 'Identity Documents', body: 'Certified copy of birth certificate and valid passport for international students. Mozambican nationals should provide a national ID.' },
            { icon: '✉️', title: 'References', body: 'Two teacher references — one academic subject teacher and one pastoral or form tutor. References are submitted directly by the teacher via our portal.' },
          ].map((c, i) => (
            <div className="ap-card" key={i}>
              <div className="ap-card-icon">{c.icon}</div>
              <div className="ap-card-title">{c.title}</div>
              <div className="ap-card-body">{c.body}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="ap-cta-band pg-reveal">
        <div>
          <h2>Ready to apply for<br/><em>2026–27</em>?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginTop: 12, fontWeight: 300 }}>Applications are open now. Early applications are strongly encouraged — places are limited.</p>
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="mailto:admissions@akamaputo.org" className="pg-btn pg-btn-outline-white">Contact Admissions</a>
          <a href="/campus" className="pg-btn" style={{ background: 'white', color: 'var(--green-deep)', fontWeight: 600 }}>Book a Campus Tour</a>
        </div>
      </div>

      <Footer />
    </>
  )
}
