import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages.css'

const Photo = ({ caption }: { caption: string }) => (
  <div className="img-placeholder">
    <div className="img-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>
      </svg>
    </div>
    <span className="img-caption">{caption}</span>
  </div>
)

const facilities = [
  {
    num: '01', title: 'Academic', italic: 'Wing', tag: 'Classrooms & Labs',
    body: 'Fourteen state-of-the-art classrooms, four science laboratories, two computer suites and dedicated art rooms form the academic heart of the campus. Every space is designed to support collaborative inquiry and individual focus.',
    features: ['Four fully equipped science laboratories', 'Two computer and STEM innovation suites', 'Dedicated design and art studios', 'Seminar and breakout rooms throughout'],
    img: 'Academic Wing', reverse: false,
  },
  {
    num: '02', title: 'Library &', italic: 'Learning Hub', tag: 'Knowledge & Research',
    body: 'Our 3,000-volume library doubles as a collaborative learning hub — a quiet anchor at the centre of campus life. Students access digital research databases, individual study pods and group project spaces in a single integrated environment.',
    features: ['3,000+ volumes across all disciplines', 'Digital research database access', 'Individual study pods and quiet zones', 'Collaborative project and media spaces'],
    img: 'Library & Learning Hub', reverse: true,
  },
  {
    num: '03', title: 'Performing Arts', italic: 'Centre', tag: 'Arts & Culture',
    body: 'A dedicated performing arts facility with a 200-seat theatre, music rehearsal rooms, recording studio and visual arts gallery. The Centre hosts termly productions, community events and the annual Arts Festival.',
    features: ['200-seat purpose-built theatre', 'Two music practice and rehearsal rooms', 'Recording studio and audio suite', 'Visual arts gallery and exhibition space'],
    img: 'Performing Arts Centre', reverse: false,
  },
  {
    num: '04', title: 'Boarding', italic: 'Residences', tag: 'Residential Life',
    body: 'Modern, safe and community-oriented boarding houses for students from across Mozambique and the region. Single and shared rooms, common areas and dedicated houseparent accommodation create a genuine home away from home.',
    features: ['Separate boarding for boys and girls', 'Shared common rooms and study areas', '24/7 houseparent supervision', 'Weekly activities and pastoral programme'],
    img: 'Boarding Residences', reverse: true,
  },
]

const sports = [
  { icon: '⚽', name: 'Football', detail: '2 full-size pitches' },
  { icon: '🏊', name: 'Swimming', detail: '25m heated pool' },
  { icon: '🏀', name: 'Basketball', detail: '2 indoor courts' },
  { icon: '🎾', name: 'Tennis', detail: '4 hard courts' },
  { icon: '🏃', name: 'Athletics', detail: '400m running track' },
  { icon: '🏐', name: 'Volleyball', detail: 'Indoor & outdoor' },
]

export default function Campus() {
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
          <div className="pg-eyebrow">Maputo, Mozambique · Est. 2013</div>
          <h1 className="pg-h1">Designed for<br/><em>discovery</em>,<br/>built for life</h1>
          <p className="pg-hero-sub">A purpose-built campus in the heart of Maputo — every space considered, every facility aligned to the demands of a full IB education and a vibrant residential community.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#facilities" className="pg-btn pg-btn-green">Explore Facilities</a>
            <a href="/apply" className="pg-btn pg-btn-outline-white">Book a Tour</a>
          </div>
        </div>
        <div className="pg-hero-stats">
          <div><div className="pg-stat-num">5<em>ha</em></div><div className="pg-stat-label">Campus Area</div></div>
          <div><div className="pg-stat-num">14<em>+</em></div><div className="pg-stat-label">Classrooms</div></div>
          <div><div className="pg-stat-num">200<em>+</em></div><div className="pg-stat-label">Boarding Places</div></div>
        </div>
      </section>

      <div className="pg-ticker">
        <div className="pg-ticker-inner">
          {['Academic Wing','Library','Performing Arts Centre','Boarding','Sports Complex','Science Labs','Solar Campus','Maputo','Academic Wing','Library','Performing Arts Centre','Boarding','Sports Complex','Science Labs','Solar Campus','Maputo'].map((t, i) => (
            <span key={i} className="pg-ticker-item">{t}<span className="pg-ticker-dot"> · </span></span>
          ))}
        </div>
      </div>

      <div className="ca-facts">
        {[
          { num: '5', em: 'ha', label: 'Total Campus Area' },
          { num: '14', em: '+', label: 'Teaching Classrooms' },
          { num: '4', em: '', label: 'Science Laboratories' },
          { num: '200', em: '+', label: 'Boarding Capacity' },
        ].map((f, i) => (
          <div className="ca-fact" key={i}>
            <div className="ca-fact-num">{f.num}<em>{f.em}</em></div>
            <div className="ca-fact-label">{f.label}</div>
          </div>
        ))}
      </div>

      <div id="facilities">
        {facilities.map((f, i) => (
          <div className="ca-facility pg-reveal" key={i}>
            <div className={`ca-fac-inner${f.reverse ? ' reverse' : ''}`}>
              <div>
                <div className="ca-fac-num">{f.num}</div>
                <h2 className="ca-fac-title">{f.title} <em>{f.italic}</em></h2>
                <p className="ca-fac-body">{f.body}</p>
                <div className="ca-fac-features">
                  {f.features.map((ft, j) => <div className="ca-fac-feat" key={j}>{ft}</div>)}
                </div>
              </div>
              <div className="ca-fac-img">
                <Photo caption={f.img} />
                <div className="ca-fac-tag">{f.tag}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="ca-sports pg-reveal">
        <div className="ca-sports-inner">
          <div>
            <div className="pg-tag" style={{ color: 'var(--accent-light)' }}>Athletics & Recreation</div>
            <h2 className="ca-sports-title">A campus that moves<br/>as fast as its <em>students</em></h2>
            <p className="ca-sports-body">From competitive football to recreational swimming, the sports complex supports both elite athletic development and everyday wellbeing — because physical education is central to the IB commitment to the whole person.</p>
            <a href="/student-life" className="pg-btn pg-btn-green" style={{ marginTop: 8, display: 'inline-block' }}>Student Life</a>
          </div>
          <div className="ca-sports-grid">
            {sports.map((s, i) => (
              <div className="ca-sport-card" key={i}>
                <div className="ca-sport-icon">{s.icon}</div>
                <div className="ca-sport-name">{s.name}</div>
                <div className="ca-sport-detail">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ca-sustainability pg-reveal">
        <div>
          <div className="pg-tag" style={{ color: 'var(--accent-light)' }}>Environment</div>
          <h2 className="ca-sust-title">A campus that takes its<br/><em>responsibility</em> seriously</h2>
          <p className="ca-sust-body">The AKDN commitment to environmental stewardship is embedded in how we design and operate our campus — from renewable energy to waste reduction and water conservation.</p>
        </div>
        <div className="ca-sust-items">
          {[
            { icon: '☀', title: 'Solar Energy', body: 'Rooftop solar panels supply a significant share of campus electricity, reducing dependence on the grid and cutting carbon emissions.' },
            { icon: '💧', title: 'Water Management', body: 'Rainwater harvesting and efficient fixtures reduce total water consumption by over 30% compared to conventional campuses.' },
            { icon: '♻', title: 'Waste Reduction', body: 'Composting, recycling and a zero-single-use-plastic policy across the campus canteen and boarding facilities.' },
          ].map((s, i) => (
            <div className="ca-sust-item" key={i}>
              <div className="ca-sust-icon">{s.icon}</div>
              <div>
                <div className="ca-sust-item-title">{s.title}</div>
                <div className="ca-sust-item-body">{s.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ca-location pg-reveal">
        <div className="ca-loc-inner">
          <div className="ca-loc-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5516!2d32.5735!3d-23.8733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ecefad000000001%3A0x1234567890abcdef!2sAga%20Khan%20Academy%20Maputo!5e0!3m2!1sen!2smz!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 'none', borderRadius: '8px' }}
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div>
            <div className="pg-tag" style={{ color: 'var(--g400)' }}>Find Us</div>
            <h2 className="ca-loc-title">Located in the heart<br/>of Maputo</h2>
            <div className="ca-loc-details">
              {[
                { key: 'Address', val: 'Aga Khan Academy, Maputo, Mozambique' },
                { key: 'Telephone', val: '+258 00 000 000' },
                { key: 'Email', val: 'info@akamaputo.org' },
                { key: 'Admissions', val: 'admissions@akamaputo.org' },
                { key: 'Transport', val: 'School bus routes across Maputo. Maputo International Airport 30 min.' },
              ].map((r, i) => (
                <div className="ca-loc-row" key={i}>
                  <span className="ca-loc-key">{r.key}</span>
                  <span className="ca-loc-val">{r.val}</span>
                </div>
              ))}
            </div>
            <a href="/apply" className="pg-btn pg-btn-green" style={{ marginTop: 32, display: 'inline-block' }}>Book a Campus Tour</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
