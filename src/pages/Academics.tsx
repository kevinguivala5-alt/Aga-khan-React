import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionsHeader from '../components/SectionsHeader'
import { InquiryIcon, MindednessIcon, LearningIcon, ServiceIcon, ActionIcon, LanguageIcon } from '../components/Icons'
import '../pages.css'

const Photo = ({ caption, bg }: { caption: string; bg?: string }) => (
  <div className="img-placeholder" style={bg ? { background: bg } : undefined}>
    <div className="img-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>
      </svg>
    </div>
    <span className="img-caption">{caption}</span>
  </div>
)

const programmes = [
  {
    badge: 'IB PYP', title: 'Primary Years', italic: 'Programme',
    age: 'Early Years – Grade 5 · Ages 3–12',
    desc: 'A transdisciplinary inquiry framework that nurtures the whole child — intellectually, physically, emotionally and socially. Students learn through structured exploration, guided by a deep commitment to international-mindedness.',
    details: [
      { label: 'Framework', val: 'Transdisciplinary inquiry across 6 themes' },
      { label: 'Languages', val: 'English & Portuguese from Early Years' },
      { label: 'Assessment', val: 'Portfolio-based, no formal IB exams' },
      { label: 'Exhibition', val: 'PYP Exhibition at end of Grade 5' },
    ],
    img: 'PYP Classroom',
  },
  {
    badge: 'IB MYP', title: 'Middle Years', italic: 'Programme',
    age: 'Grades 6–10 · Ages 11–16',
    desc: 'Connecting academic disciplines to real-world contexts in Mozambique and globally. MYP students develop the analytical depth and ethical compass they will carry into adult life — through eight subject groups and a capstone Personal Project.',
    details: [
      { label: 'Subject Groups', val: '8 groups including Arts, Design, PE' },
      { label: 'Community', val: 'Service learning woven throughout' },
      { label: 'Capstone', val: 'Personal Project in Grade 10' },
      { label: 'Assessment', val: 'Criterion-based, teacher-assessed' },
    ],
    img: 'MYP Student Workshop',
  },
  {
    badge: 'IB DP', title: 'Diploma', italic: 'Programme',
    age: 'Grades 11–12 · Ages 16–19',
    desc: 'Two years of rigorous pre-university study, globally recognised by leading universities. Students take six subjects across groups plus Theory of Knowledge, an Extended Essay, and Creativity, Activity, Service (CAS) — emerging confident, independent thinkers.',
    details: [
      { label: 'Subjects', val: '6 subjects across 5 groups + TOK' },
      { label: 'Extended Essay', val: '4,000-word independent research essay' },
      { label: 'CAS', val: 'Creativity, Activity, Service requirement' },
      { label: 'Max Score', val: '45 points · World average ~30 pts' },
    ],
    img: 'DP Study Session',
  },
]

const subjects = [
  { area: 'Languages', name: 'English A: Literature' },
  { area: 'Languages', name: 'English B' },
  { area: 'Languages', name: 'Portuguese A' },
  { area: 'Languages', name: 'French B' },
  { area: 'Humanities', name: 'History' },
  { area: 'Humanities', name: 'Geography' },
  { area: 'Humanities', name: 'Economics' },
  { area: 'Humanities', name: 'Global Politics' },
  { area: 'Sciences', name: 'Biology' },
  { area: 'Sciences', name: 'Chemistry' },
  { area: 'Sciences', name: 'Physics' },
  { area: 'Sciences', name: 'Env. Systems' },
  { area: 'Maths', name: 'Maths: Analysis' },
  { area: 'Maths', name: 'Maths: Apps' },
  { area: 'Arts', name: 'Visual Arts' },
  { area: 'Arts', name: 'Music' },
  { area: 'Arts', name: 'Theatre' },
  { area: 'Other', name: 'Computer Sci.' },
]

const destinations = [
  { name: 'University College London', country: 'United Kingdom', year: '2025' },
  { name: 'University of Toronto', country: 'Canada', year: '2025' },
  { name: 'Sciences Po Paris', country: 'France', year: '2025' },
  { name: 'University of Cape Town', country: 'South Africa', year: '2025' },
  { name: 'Delft University of Technology', country: 'Netherlands', year: '2024' },
  { name: "King's College London", country: 'United Kingdom', year: '2024' },
  { name: 'University of Amsterdam', country: 'Netherlands', year: '2024' },
  { name: 'Aga Khan University', country: 'Pakistan / Kenya', year: '2024' },
  { name: 'McGill University', country: 'Canada', year: '2023' },
]

export default function Academics() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.pg-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <SectionsHeader 
        title="Academics" 
        description="Explore our comprehensive IB World School curriculum designed to nurture inquiry, critical thinking and ethical leadership across our three programmes: PYP, MYP and Diploma."
        subtitle="An education that builds the whole person"
        subtext="Three internationally recognised IB programmes, delivered with the distinctive Aga Khan commitment to ethical leadership and cultural understanding."
      />

      {/* HERO */}
      <section className="pg-hero" style={{ display: 'none' }}>
        <div className="pg-hero-bg-grid" />
        <div className="pg-hero-accent" />
        <div className="pg-hero-content">
          <div className="pg-eyebrow">IB World School · Authorised PYP, MYP & DP</div>
          <h1 className="pg-h1">An education that<br/>builds the <em>whole</em><br/>person</h1>
          <p className="pg-hero-sub">Three internationally recognised IB programmes, delivered with the distinctive Aga Khan commitment to ethical leadership and cultural understanding.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#programmes" className="pg-btn pg-btn-green">Explore Programmes</a>
            <a href="/apply" className="pg-btn pg-btn-outline-white">Apply Now</a>
          </div>
        </div>
        <div className="pg-hero-stats">
          <div><div className="pg-stat-num">98<em>%</em></div><div className="pg-stat-label">University Placement</div></div>
          <div><div className="pg-stat-num">38<em>+</em></div><div className="pg-stat-label">Avg IB Points</div></div>
          <div><div className="pg-stat-num">45<em>+</em></div><div className="pg-stat-label">Partner Universities</div></div>
        </div>
      </section>

      {/* TICKER */}
      <div className="pg-ticker">
        <div className="pg-ticker-inner">
          {['IB PYP', 'IB MYP', 'IB Diploma', 'Theory of Knowledge', 'Extended Essay', 'CAS', 'Service Learning', 'Transdisciplinary Inquiry', 'AKCS Curricular Strands', 'IB PYP', 'IB MYP', 'IB Diploma', 'Theory of Knowledge', 'Extended Essay', 'CAS', 'Service Learning', 'Transdisciplinary Inquiry', 'AKCS Curricular Strands'].map((t, i) => (
            <span key={i} className="pg-ticker-item">{t}<span className="pg-ticker-dot"> · </span></span>
          ))}
        </div>
      </div>

      {/* IB PHILOSOPHY */}
      <div className="ac-philosophy pg-reveal">
        {[
          { Icon: InquiryIcon, text: 'Inquiry-Based Learning' },
          { Icon: MindednessIcon, text: 'International Mindedness' },
          { Icon: LearningIcon, text: 'Holistic Development' },
          { Icon: ServiceIcon, text: 'Ethical Leadership' },
          { Icon: ActionIcon, text: 'Action & Reflection' },
          { Icon: LanguageIcon, text: 'Multilingualism' },
        ].map((p, i, arr) => {
          const IconComponent = p.Icon;
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
              <div className="ac-phil-item">
                <div className="ac-phil-icon"><IconComponent style={{ width: '20px', height: '20px' }} /></div>
                <span className="ac-phil-text">{p.text}</span>
              </div>
              {i < arr.length - 1 && <div className="ac-phil-sep" style={{ marginLeft: 40 }} />}
            </div>
          );
        })}
      </div>

      {/* PROGRAMMES */}
      <div id="programmes">
        {programmes.map((p, i) => (
          <div className="ac-prog-section pg-reveal" key={i}>
            <div className={`ac-prog-inner ${i % 2 !== 0 ? 'reverse' : ''}`}>
              <div>
                <div className="ac-prog-badge">{p.badge}</div>
                <h2 className="ac-prog-title">{p.title}<br/><em>{p.italic}</em></h2>
                <div className="ac-prog-age">{p.age}</div>
                <p className="ac-prog-desc">{p.desc}</p>
                <div className="ac-prog-details">
                  {p.details.map((d, j) => (
                    <div className="ac-detail-row" key={j}>
                      <span className="ac-detail-label">{d.label}</span>
                      <span className="ac-detail-val">{d.val}</span>
                    </div>
                  ))}
                </div>
                <a href="/apply" className="pg-btn pg-btn-outline-dark">Apply for {p.badge}</a>
              </div>
              <div className="ac-prog-visual">
                <Photo caption={p.img} />
                <div className="ac-prog-visual-label">{p.badge} · AKA Maputo</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* STATS */}
      <div className="ac-stats-band pg-reveal">
        {[
          { num: '98', sup: '%', desc: 'IB Diploma Pass Rate' },
          { num: '38', sup: '+', desc: 'Average Diploma Points' },
          { num: '3', sup: 'rd', desc: 'AKA Globally · 1st Sub-Saharan Africa' },
          { num: '40', sup: '+', desc: 'Nationalities on Campus' },
        ].map((s, i) => (
          <div className="ac-stat-cell" key={i}>
            <div className="ac-stat-big">{s.num}<span>{s.sup}</span></div>
            <div className="ac-stat-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* SUBJECTS */}
      <div className="ac-subjects pg-reveal">
        <div className="ac-subjects-header">
          <div>
            <div className="pg-tag">Diploma Subjects</div>
            <h2 className="pg-h2">What our students<br/><em>study</em></h2>
          </div>
          <p className="pg-body" style={{ alignSelf: 'end' }}>Students choose six subjects at Higher or Standard Level from across the IB groups, tailoring their programme to university aspirations and personal interests.</p>
        </div>
        <div className="ac-subjects-grid">
          {subjects.map((s, i) => (
            <div className="ac-subject-card" key={i}>
              <div className="ac-subj-area">{s.area}</div>
              <div className="ac-subj-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="ac-cta">
        <h2>Ready to begin your <em>IB journey</em> in Maputo?</h2>
        <div className="ac-cta-actions">
          <a href="/apply" className="pg-btn pg-btn-outline-white">Apply Now</a>
          <a href="/about" className="pg-btn pg-btn-outline-white">Our Story</a>
        </div>
      </div>

      <Footer />
    </>
  )
}
