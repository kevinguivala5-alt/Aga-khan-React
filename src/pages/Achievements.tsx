import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages.css'

/* ─── DATA ─── */
const ibYears = [
  { year: '2026', avg: 38.4, pass: 100, candidates: 32, top40: 5, perfect: 2, worldAvg: 29.9 },
  { year: '2025', avg: 37.8, pass: 100, candidates: 29, top40: 4, perfect: 1, worldAvg: 29.7 },
  { year: '2024', avg: 36.9, pass: 100, candidates: 31, top40: 3, perfect: 0, worldAvg: 29.5 },
  { year: '2023', avg: 36.2, pass: 98,  candidates: 28, top40: 2, perfect: 0, worldAvg: 29.3 },
]

const scoreDistribution = [
  { range: '40–45', count: 5, colour: '#2B5F3E' },
  { range: '35–39', count: 11, colour: '#3D7A54' },
  { range: '30–34', count: 10, colour: '#4A9B6A' },
  { range: '24–29', count: 6, colour: '#74C69D' },
]

const sportAchievements = [
  { sport: 'Football', icon: '⚽', title: 'East Africa Schools Championship', detail: 'Under-18 squad defeated teams from Kenya, Tanzania and Uganda', year: '2026', medal: '🥇' },
  { sport: 'Swimming', icon: '🏊', title: 'Mozambican National Schools Championships', detail: '4 gold medals across individual events, top school overall', year: '2025', medal: '🥇' },
  { sport: 'Athletics', icon: '🏃', title: 'Inter-Academy Games — Nairobi', detail: '3 field event gold medals, relay team record', year: '2025', medal: '🥇' },
  { sport: 'Basketball', icon: '🏀', title: 'AKA Inter-Academy Tournament', detail: 'Runners-up, defeating six regional academies', year: '2025', medal: '🥈' },
  { sport: 'Tennis', icon: '🎾', title: 'Maputo Schools Cup', detail: 'Singles and doubles titles in the U-17 category', year: '2024', medal: '🥇' },
  { sport: 'Volleyball', icon: '🏐', title: 'Mozambique Schools League', detail: 'Girls team — unbeaten regular season, semi-finals', year: '2024', medal: '🥈' },
]

const artsAchievements = [
  { category: 'Theatre', icon: '🎭', title: "Sold-Out Run — Athol Fugard's 'Sizwe Banzi is Dead'", detail: 'Grade 11 production drew audiences from across Maputo. Critically acclaimed by city press.', year: '2026' },
  { category: 'Arts Festival', icon: '🌟', title: 'Annual Arts Festival — Record Attendance', detail: 'Largest audience in Academy history across three days of performances, exhibitions and workshops.', year: '2025' },
  { category: 'Music', icon: '🎵', title: 'East Africa Schools Music Festival — First Place', detail: 'Choir and solo performances recognised as best in category across 14 competing schools.', year: '2025' },
  { category: 'Visual Arts', icon: '🎨', title: 'Mozambique Youth Arts Prize — Two Recipients', detail: 'Two Grade 12 students received national recognition in photography and painting.', year: '2024' },
  { category: 'Creative Writing', icon: '✍️', title: 'IB Extended Essay — Literary Excellence Award', detail: 'Student English A EE selected for IB global showcase by the International Baccalaureate Organisation.', year: '2024' },
]

const universityData = [
  { country: 'United Kingdom', flag: '🇬🇧', count: 8, unis: ['UCL', "King's College London", 'University of Edinburgh'] },
  { country: 'Canada', flag: '🇨🇦', count: 6, unis: ['University of Toronto', 'McGill University', 'UBC'] },
  { country: 'Netherlands', flag: '🇳🇱', count: 4, unis: ['Delft University of Technology', 'University of Amsterdam'] },
  { country: 'France', flag: '🇫🇷', count: 3, unis: ['Sciences Po Paris', 'Sorbonne Université'] },
  { country: 'South Africa', flag: '🇿🇦', count: 5, unis: ['University of Cape Town', 'University of Witwatersrand'] },
  { country: 'Kenya / Pakistan', flag: '🌍', count: 4, unis: ['Aga Khan University'] },
  { country: 'United States', flag: '🇺🇸', count: 3, unis: ['Various US Universities'] },
  { country: 'Other Countries', flag: '🌐', count: 9, unis: ['45+ partner universities worldwide'] },
]

const serviceStats = [
  { num: '200+', label: 'CAS Hours per Student / Year' },
  { num: '2,000+', label: 'Trees Planted in Maputo (2023–26)' },
  { num: '14', label: 'Schools in MUN Conference (2026)' },
  { num: '500+', label: 'Community Members Supported' },
  { num: '30+', label: 'Service Partnerships in Mozambique' },
  { num: '3', label: 'Community Construction Projects' },
]

const timeline = [
  { year: '2013', event: 'AKA Maputo founded — first IB school of its kind in sub-Saharan Africa', type: 'milestone' },
  { year: '2016', event: 'First IB Diploma cohort graduates with 94% pass rate', type: 'academic' },
  { year: '2018', event: 'IB MYP authorisation achieved — full PYP, MYP & DP school', type: 'milestone' },
  { year: '2019', event: 'Football team wins inaugural East Africa Schools Championship', type: 'sport' },
  { year: '2021', event: 'First 100% IB Diploma pass rate — maintained every year since', type: 'academic' },
  { year: '2022', event: 'Ranked 1st IB school in Sub-Saharan Africa', type: 'milestone' },
  { year: '2023', event: 'Model UN Conference hosts 200 delegates from 14 schools', type: 'community' },
  { year: '2024', event: 'Two students receive Mozambique Youth Arts Prize', type: 'arts' },
  { year: '2025', event: 'East Africa Schools Music Festival — first place', type: 'arts' },
  { year: '2026', event: 'Class of 2026: mean 38.4, 7 National IB Scholars, 2 perfect scores', type: 'academic' },
]

type YearKey = '2026' | '2025' | '2024' | '2023'

export default function Achievements() {
  const [activeYear, setActiveYear] = useState<YearKey>('2026')
  const activeData = ibYears.find(y => y.year === activeYear) ?? ibYears[0]

  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(
      e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.pg-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const maxScore = 45

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="pg-hero ach-hero">
        <div className="pg-hero-bg-grid" />
        <div className="ach-hero-accent" />
        <div className="pg-hero-content">
          <div className="pg-eyebrow">Academic Excellence · 2013 – 2026</div>
          <h1 className="pg-h1">A record of<br/><em>excellence</em></h1>
          <p className="pg-hero-sub">From IB Diploma scores that consistently outperform the global average, to sports championships and cultural awards — AKA Maputo's achievements reflect our students, our teachers and our community.</p>
        </div>
        <div className="ach-hero-stats">
          <div className="ach-hero-stat">
            <div className="ach-hero-num">38.4</div>
            <div className="ach-hero-label">Mean IB Score 2026</div>
            <div className="ach-hero-sub-label">World avg: 29.9</div>
          </div>
          <div className="ach-hero-divider" />
          <div className="ach-hero-stat">
            <div className="ach-hero-num">100<span>%</span></div>
            <div className="ach-hero-label">IB Pass Rate</div>
            <div className="ach-hero-sub-label">3 consecutive years</div>
          </div>
          <div className="ach-hero-divider" />
          <div className="ach-hero-stat">
            <div className="ach-hero-num">98<span>%</span></div>
            <div className="ach-hero-label">University Placement</div>
            <div className="ach-hero-sub-label">45+ partner universities</div>
          </div>
          <div className="ach-hero-divider" />
          <div className="ach-hero-stat">
            <div className="ach-hero-num">#1</div>
            <div className="ach-hero-label">Sub-Saharan Africa</div>
            <div className="ach-hero-sub-label">IB Schools Ranking</div>
          </div>
        </div>
      </section>

      {/* IB RESULTS SECTION */}
      <div className="ach-results pg-reveal">
        <div className="ach-results-header">
          <div>
            <div className="pg-tag">IB Diploma Results</div>
            <h2 className="pg-h2">Academic <em>Performance</em></h2>
          </div>
          <div className="ach-year-tabs">
            {ibYears.map(y => (
              <button
                key={y.year}
                className={`ach-year-tab${activeYear === y.year ? ' active' : ''}`}
                onClick={() => setActiveYear(y.year as YearKey)}
              >{y.year}</button>
            ))}
          </div>
        </div>

        <div className="ach-results-body">
          {/* Big score comparison */}
          <div className="ach-score-compare">
            <div className="ach-score-block ach-score-aka">
              <div className="ach-score-label">AKA Maputo Average</div>
              <div className="ach-score-big">{activeData.avg}</div>
              <div className="ach-score-sub">out of 45 points</div>
              <div className="ach-score-bar-wrap">
                <div className="ach-score-bar aka" style={{ width: `${(activeData.avg / maxScore) * 100}%` }} />
              </div>
            </div>
            <div className="ach-score-vs">VS</div>
            <div className="ach-score-block ach-score-world">
              <div className="ach-score-label">Global IB Average</div>
              <div className="ach-score-big world">{activeData.worldAvg}</div>
              <div className="ach-score-sub">out of 45 points</div>
              <div className="ach-score-bar-wrap">
                <div className="ach-score-bar world" style={{ width: `${(activeData.worldAvg / maxScore) * 100}%` }} />
              </div>
            </div>
          </div>

          {/* Key stats row */}
          <div className="ach-stats-row">
            {[
              { label: 'Candidates', val: activeData.candidates, suffix: '' },
              { label: 'Pass Rate', val: activeData.pass, suffix: '%' },
              { label: 'Scored 40+', val: activeData.top40, suffix: '' },
              { label: 'Perfect 45', val: activeData.perfect, suffix: '' },
            ].map((s, i) => (
              <div className="ach-stat-box" key={i}>
                <div className="ach-stat-val">{s.val}<span>{s.suffix}</span></div>
                <div className="ach-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Score distribution */}
        <div className="ach-dist">
          <div className="ach-dist-label">
            <div className="pg-tag" style={{ marginBottom: 16 }}>Score Distribution — Class of 2026</div>
          </div>
          <div className="ach-dist-bars">
            {scoreDistribution.map((d, i) => (
              <div className="ach-dist-bar-group" key={i}>
                <div className="ach-dist-count">{d.count} students</div>
                <div className="ach-dist-bar-wrap">
                  <div
                    className="ach-dist-bar"
                    style={{ height: `${(d.count / 32) * 100}%`, background: d.colour }}
                  />
                </div>
                <div className="ach-dist-range">{d.range}</div>
              </div>
            ))}
          </div>
          <div className="ach-dist-note">32 candidates · 100% pass rate · Mean 38.4 · World average 29.9</div>
        </div>
      </div>

      {/* HISTORICAL TREND */}
      <div className="ach-trend pg-reveal">
        <div className="pg-tag">4-Year Trend</div>
        <h2 className="pg-h2" style={{ marginBottom: 40 }}>Consistent <em>improvement</em></h2>
        <div className="ach-trend-table">
          <div className="ach-trend-head">
            {['Year', 'Candidates', 'Pass Rate', 'Mean Score', 'Scored 40+', 'vs World Avg'].map(h => (
              <div key={h} className="ach-trend-th">{h}</div>
            ))}
          </div>
          {ibYears.map((y, i) => (
            <div className={`ach-trend-row${i === 0 ? ' highlight' : ''}`} key={y.year}>
              <div className="ach-trend-td year">{y.year}</div>
              <div className="ach-trend-td">{y.candidates}</div>
              <div className="ach-trend-td">{y.pass}%</div>
              <div className="ach-trend-td score">{y.avg}</div>
              <div className="ach-trend-td">{y.top40}</div>
              <div className="ach-trend-td delta">+{(y.avg - y.worldAvg).toFixed(1)} pts</div>
            </div>
          ))}
        </div>
      </div>

      {/* SPORTS */}
      <div className="ach-sports pg-reveal">
        <div className="ach-sports-header">
          <div>
            <div className="pg-tag" style={{ color: 'var(--accent)' }}>Athletics</div>
            <h2 className="pg-h2">Sports <em>Championships</em></h2>
          </div>
        </div>
        <div className="ach-sport-grid">
          {sportAchievements.map((s, i) => (
            <div className="ach-sport-card" key={i}>
              <div className="ach-sport-top">
                <div className="ach-sport-icon">{s.icon}</div>
                <div className="ach-sport-medal">{s.medal}</div>
                <div className="ach-sport-year">{s.year}</div>
              </div>
              <div className="ach-sport-sport">{s.sport}</div>
              <div className="ach-sport-title">{s.title}</div>
              <div className="ach-sport-detail">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ARTS */}
      <div className="ach-arts pg-reveal">
        <div className="pg-tag">Arts & Culture</div>
        <h2 className="pg-h2" style={{ marginBottom: 48 }}>Creative <em>Excellence</em></h2>
        <div className="ach-arts-list">
          {artsAchievements.map((a, i) => (
            <div className="ach-arts-item" key={i}>
              <div className="ach-arts-left">
                <div className="ach-arts-icon">{a.icon}</div>
                <div className="ach-arts-year-pill">{a.year}</div>
              </div>
              <div className="ach-arts-content">
                <div className="ach-arts-cat">{a.category}</div>
                <div className="ach-arts-title">{a.title}</div>
                <div className="ach-arts-detail">{a.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UNIVERSITY */}
      <div className="ach-uni pg-reveal">
        <div className="ach-uni-header">
          <div>
            <div className="pg-tag">Class of 2024–26</div>
            <h2 className="pg-h2">University <em>Destinations</em></h2>
          </div>
          <div className="ach-uni-kpi">
            <div className="ach-uni-kpi-num">98<span>%</span></div>
            <div className="ach-uni-kpi-label">University Placement Rate</div>
          </div>
        </div>
        <div className="ach-uni-grid">
          {universityData.map((u, i) => (
            <div className="ach-uni-card" key={i}>
              <div className="ach-uni-flag">{u.flag}</div>
              <div className="ach-uni-country">{u.country}</div>
              <div className="ach-uni-count">{u.count} <span>students</span></div>
              <div className="ach-uni-names">
                {u.unis.map((name, j) => <div key={j} className="ach-uni-name">{name}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICE */}
      <div className="ach-service pg-reveal">
        <div className="ach-service-inner">
          <div>
            <div className="pg-tag" style={{ color: 'var(--accent-light)' }}>Community Impact</div>
            <h2 className="pg-h2 light" style={{ marginBottom: 20 }}>Service that <em>transforms</em></h2>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.6)', maxWidth: 420 }}>
              Through the IB's Creativity, Activity, Service programme, AKA Maputo students contribute over 200 hours annually to their communities — in Maputo and across Mozambique.
            </p>
          </div>
          <div className="ach-service-grid">
            {serviceStats.map((s, i) => (
              <div className="ach-service-stat" key={i}>
                <div className="ach-service-num">{s.num}</div>
                <div className="ach-service-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="ach-timeline pg-reveal">
        <div className="pg-tag">School History</div>
        <h2 className="pg-h2" style={{ marginBottom: 56 }}>A decade of <em>achievement</em></h2>
        <div className="ach-tl-track">
          {timeline.map((t, i) => (
            <div className={`ach-tl-item ach-tl-${t.type}`} key={i}>
              <div className="ach-tl-year">{t.year}</div>
              <div className="ach-tl-dot" />
              <div className="ach-tl-event">{t.event}</div>
            </div>
          ))}
        </div>
        <div className="ach-tl-legend">
          {[
            { type: 'milestone', label: 'Milestone' },
            { type: 'academic', label: 'Academic' },
            { type: 'sport', label: 'Sport' },
            { type: 'arts', label: 'Arts' },
            { type: 'community', label: 'Community' },
          ].map(l => (
            <div className="ach-tl-leg-item" key={l.type}>
              <div className={`ach-tl-leg-dot ach-tl-${l.type}`} />
              <span>{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="ach-cta pg-reveal">
        <div>
          <h2>Be part of the next<br/><em>chapter</em></h2>
          <p>Applications for the 2026–27 academic year are open now.</p>
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="/apply" className="pg-btn pg-btn-outline-white">Apply Now</a>
          <a href="/academics" className="pg-btn" style={{ background: 'white', color: 'var(--green-deep)', fontWeight: 600 }}>Explore Academics</a>
        </div>
      </div>

      <Footer />
    </>
  )
}
