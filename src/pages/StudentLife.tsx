import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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

const activities = [
  { icon: '🌍', name: 'Model United Nations', tag: 'Leadership', desc: 'Annual MUN conferences hosted at AKA Maputo draw delegates from across Mozambique and the region.' },
  { icon: '🎭', name: 'Drama & Theatre', tag: 'Arts', desc: 'Two major productions per year plus workshops with visiting Mozambican artists and directors.' },
  { icon: '🎵', name: 'Music Ensemble', tag: 'Arts', desc: 'Western classical and traditional Mozambican music programmes, choir, band and individual tuition.' },
  { icon: '🧪', name: 'Science Club', tag: 'STEM', desc: 'Weekly lab sessions, national science competitions and participation in East African science fairs.' },
  { icon: '📰', name: 'Student Magazine', tag: 'Media', desc: 'Student-run termly publication covering campus news, opinion, arts reviews and interviews.' },
  { icon: '🌱', name: 'Eco Council', tag: 'Service', desc: 'Student-led environmental initiatives including campus composting, beach clean-ups and tree planting.' },
  { icon: '💻', name: 'Coding & Robotics', tag: 'STEM', desc: 'Programming workshops, hackathons and an annual robotics challenge open to all year groups.' },
  { icon: '🏛', name: 'Student Council', tag: 'Leadership', desc: 'Elected student representatives who collaborate with school leadership on campus policy and events.' },
]

export default function StudentLife() {
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

      <section className="pg-hero">
        <div className="pg-hero-bg-grid" />
        <div className="pg-hero-accent" />
        <div className="pg-hero-content">
          <div className="pg-eyebrow">Beyond the Classroom · K–12</div>
          <h1 className="pg-h1">Life at AKA<br/><em>Maputo</em></h1>
          <p className="pg-hero-sub">A community that thrives beyond the timetable — in sports halls, rehearsal rooms, community gardens and the streets of Maputo. Learning never stops here.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#activities" className="pg-btn pg-btn-green">Co-Curricular</a>
            <a href="/campus" className="pg-btn pg-btn-outline-white">Our Campus</a>
          </div>
        </div>
        <div className="pg-hero-stats">
          <div><div className="pg-stat-num">30<em>+</em></div><div className="pg-stat-label">Clubs & Activities</div></div>
          <div><div className="pg-stat-num">6<em></em></div><div className="pg-stat-label">Sports Teams</div></div>
          <div><div className="pg-stat-num">200<em>+</em></div><div className="pg-stat-label">CAS Hours per Year</div></div>
        </div>
      </section>

      <div className="sl-statsbar">
        {[
          { big: '30', em: '+', lbl: 'Clubs & Societies' },
          { big: '6', em: '', lbl: 'Competitive Sports' },
          { big: '40', em: '+', lbl: 'Nationalities' },
          { big: '200', em: '+', lbl: 'CAS Hours / Year' },
        ].map((s, i) => (
          <div className="sl-stat-cell" key={i}>
            <div className="sl-stat-big">{s.big}<em>{s.em}</em></div>
            <div className="sl-stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="sl-intro pg-reveal">
        <div>
          <div className="pg-tag">Co-Curricular Life</div>
          <h2 className="pg-h2">Where character is<br/><em>built</em></h2>
        </div>
        <p className="sl-intro-body">
          The IB believes education shapes the whole person — and so do we. Beyond the classroom, our students compete, create, lead and serve. Every activity is an opportunity to discover a strength, forge a friendship or contribute to the community that surrounds us in Maputo.
          <br/><br/>
          <strong>Every student is expected to engage.</strong> Not every student will be a champion swimmer or a lead actor — but every student will leave the Academy having found something that matters to them beyond academia.
        </p>
      </div>

      <div className="sl-activities" id="activities">
        <div className="pg-tag">Clubs & Societies</div>
        <div className="sl-act-grid">
          {activities.map((a, i) => (
            <div className="sl-act-card pg-reveal" key={i}>
              <div className="sl-act-icon">{a.icon}</div>
              <div className="sl-act-name">{a.name}</div>
              <div className="sl-act-tag">{a.tag}</div>
              <div className="sl-act-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sl-sports pg-reveal">
        <div className="sl-sports-header">
          <div>
            <div className="pg-tag" style={{ color: 'var(--accent-light)' }}>Athletics</div>
            <h2 className="sl-sports-title">Compete, train,<br/><em>grow</em></h2>
          </div>
          <a href="/campus" className="pg-btn pg-btn-outline-white">Sports Facilities</a>
        </div>
        <div className="sl-sport-cards">
          {[
            { caption: 'Football', name: 'Football', detail: 'Inter-school competition · East Africa' },
            { caption: 'Swimming', name: 'Swimming', detail: 'National championships · Club programme' },
            { caption: 'Basketball', name: 'Basketball', detail: 'Weekly training · Inter-academy tournaments' },
          ].map((s, i) => (
            <div className="sl-sport-card" key={i}>
              <Photo caption={s.caption} bg={`linear-gradient(135deg, var(--g${6 + i}00) 0%, var(--g900) 100%)`} />
              <div className="sl-sport-overlay">
                <div className="sl-sport-name">{s.name}</div>
                <div className="sl-sport-detail">{s.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sl-arts pg-reveal">
        <div className="sl-arts-inner">
          <div className="sl-arts-gallery">
            <div><Photo caption="Annual Theatre Production" /></div>
            <div><Photo caption="Visual Arts Exhibition" /></div>
            <div><Photo caption="Music Ensemble" /></div>
          </div>
          <div>
            <div className="pg-tag">Arts & Culture</div>
            <h2 className="sl-arts-title">Expression that<br/><em>connects</em></h2>
            <p className="sl-arts-body">From the annual theatre production to traditional Mozambican music workshops, the arts at AKA Maputo are a bridge between cultures — and a cornerstone of the IB Diploma CAS requirement.</p>
            <div className="sl-arts-list">
              {['Drama & Theatre — two major productions per year', 'Music — classical, jazz and traditional Mozambican', 'Visual Arts — painting, sculpture, photography, design', 'Dance — contemporary and traditional forms', 'Creative Writing & Literary Magazine'].map((item, i) => (
                <div className="sl-arts-item" key={i}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sl-service pg-reveal">
        <div className="sl-service-inner">
          <div className="sl-service-aside">
            <div className="sl-service-big">CAS</div>
            <p style={{ fontSize: 13, color: 'var(--g400)', marginTop: 12, lineHeight: 1.7 }}>Creativity, Activity,<br/>Service — a core IB<br/>requirement woven into<br/>every student's journey.</p>
          </div>
          <div>
            <div className="pg-tag">Service & Action</div>
            <h2 className="pg-h2" style={{ marginBottom: 32 }}>Contributing to<br/><em>Maputo</em> and beyond</h2>
            <div className="sl-cas-cards">
              {[
                { letter: 'C', name: 'Creativity', desc: 'Students explore and extend their personal creativity through arts, design, music, writing and cultural projects that stretch their imagination.' },
                { letter: 'A', name: 'Activity', desc: 'Physical activity that builds health, resilience and teamwork — from competitive sport to yoga, hiking and community fitness initiatives.' },
                { letter: 'S', name: 'Service', desc: 'Meaningful community engagement in Maputo and beyond — tutoring, environmental campaigns, hospital visits and construction projects.' },
                { letter: '+', name: 'Reflection', desc: 'Students document their CAS journey through regular reflection, developing the self-awareness that defines ethical leadership.' },
              ].map((c, i) => (
                <div className="sl-cas-card" key={i}>
                  <div className="sl-cas-letter">{c.letter}</div>
                  <div className="sl-cas-name">{c.name}</div>
                  <div className="sl-cas-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sl-leadership pg-reveal">
        <div className="sl-lead-panel">
          <div className="sl-lead-badge">Student Council</div>
          <div className="sl-lead-title">A genuine voice in how the school runs</div>
          <p className="sl-lead-body">Elected annually, the Student Council works directly with school leadership on campus policy, events, pastoral care and community projects. Students learn to advocate, negotiate and lead — not in theory, but in practice.</p>
          <ul className="sl-lead-list">
            <li>Annual student elections with campaigning</li>
            <li>Monthly meetings with the Principal</li>
            <li>Budget allocation for student-run events</li>
            <li>Representation on school committees</li>
          </ul>
        </div>
        <div className="sl-lead-panel">
          <div className="sl-lead-badge">Model United Nations</div>
          <div className="sl-lead-title">Diplomacy, debate and global thinking</div>
          <p className="sl-lead-body">AKA Maputo hosts one of Mozambique's most established school MUN conferences, drawing delegates from across the region. Students develop research, public speaking and negotiation skills — and leave with a deeper understanding of how the world actually works.</p>
          <ul className="sl-lead-list">
            <li>Annual hosted MUN conference</li>
            <li>Participation in Nairobi & Hyderabad AKA MUNs</li>
            <li>Weekly debate and public speaking training</li>
            <li>Year-round current affairs programme</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  )
}
