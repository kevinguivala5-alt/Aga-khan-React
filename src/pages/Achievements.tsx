import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionsHeader from '../components/SectionsHeader'
import '../pages.css'

/* ─── DATA ─── */
const ibYears = [
  { year: '2026', avg: 38.4, pass: 100, candidates: 32, top40: 5, perfect: 2, worldAvg: 29.9 },
  { year: '2025', avg: 37.8, pass: 100, candidates: 29, top40: 4, perfect: 1, worldAvg: 29.7 },
  { year: '2024', avg: 36.9, pass: 100, candidates: 31, top40: 3, perfect: 0, worldAvg: 29.5 },
  { year: '2023', avg: 36.2, pass: 98,  candidates: 28, top40: 2, perfect: 0, worldAvg: 29.3 },
]

const scoreDistribution = [
  { range: '40–45', count: 5 },
  { range: '35–39', count: 11 },
  { range: '30–34', count: 10 },
  { range: '24–29', count: 6 },
]

const sportAchievements = [
  { sport: 'Football',   title: 'East Africa Schools Championship',          detail: 'Under-18 squad defeated teams from Kenya, Tanzania and Uganda.',           year: '2026', rank: 'gold'   },
  { sport: 'Swimming',   title: 'Mozambican National Schools Championships', detail: '4 gold medals across individual events — top school overall.',              year: '2025', rank: 'gold'   },
  { sport: 'Athletics',  title: 'Inter-Academy Games — Nairobi',             detail: '3 field event gold medals; relay team set a new inter-academy record.',    year: '2025', rank: 'gold'   },
  { sport: 'Basketball', title: 'AKA Inter-Academy Tournament',              detail: 'Runners-up, defeating six regional academies in group and knockout stages.', year: '2025', rank: 'silver' },
  { sport: 'Tennis',     title: 'Maputo Schools Cup',                        detail: 'Singles and doubles titles taken in the Under-17 category.',                year: '2024', rank: 'gold'   },
  { sport: 'Volleyball', title: 'Mozambique Schools League',                 detail: 'Girls team — unbeaten regular season, advancing to semi-finals.',           year: '2024', rank: 'silver' },
]

const artsAchievements = [
  { category: 'Theatre',        title: "Sold-Out Run — Athol Fugard's 'Sizwe Banzi is Dead'",    detail: 'Grade 11 production drew audiences from across Maputo and received critical recognition from the city press.', year: '2026' },
  { category: 'Arts Festival',  title: 'Annual Arts Festival — Record Attendance',                detail: 'Largest audience in Academy history across three days of performances, exhibitions and workshops.',            year: '2025' },
  { category: 'Music',          title: 'East Africa Schools Music Festival — First Place',        detail: 'Choir and solo performances recognised as best in category across 14 competing schools.',                      year: '2025' },
  { category: 'Visual Arts',    title: 'Mozambique Youth Arts Prize — Two Recipients',            detail: 'Two Grade 12 students received national recognition in photography and painting.',                             year: '2024' },
  { category: 'Creative Writing', title: 'IB Extended Essay — Literary Excellence Award',        detail: 'Student English A EE selected for IB global showcase by the International Baccalaureate Organisation.',        year: '2024' },
]

const universityData = [
  { country: 'United Kingdom',   count: 8, unis: 'UCL · King\'s College London · University of Edinburgh' },
  { country: 'Canada',           count: 6, unis: 'University of Toronto · McGill University · UBC' },
  { country: 'South Africa',     count: 5, unis: 'University of Cape Town · University of the Witwatersrand' },
  { country: 'Netherlands',      count: 4, unis: 'Delft University of Technology · University of Amsterdam' },
  { country: 'Aga Khan Network', count: 4, unis: 'Aga Khan University (Kenya, Pakistan, Tanzania)' },
  { country: 'France',           count: 3, unis: 'Sciences Po Paris · Sorbonne Université' },
  { country: 'United States',    count: 3, unis: 'Various accredited US universities' },
  { country: 'Other Countries',  count: 9, unis: '45+ partner universities across 12 countries' },
]

const serviceStats = [
  { num: '200+',   label: 'CAS hours per student per year' },
  { num: '2,000+', label: 'Trees planted in Maputo, 2023–26' },
  { num: '14',     label: 'Schools in MUN Conference 2026' },
  { num: '500+',   label: 'Community members supported' },
  { num: '30+',    label: 'Service partnerships in Mozambique' },
  { num: '3',      label: 'Community construction projects' },
]

const timeline = [
  { year: '2013', event: 'AKA Maputo founded — first IB school of its kind in sub-Saharan Africa.', type: 'milestone' },
  { year: '2016', event: 'First IB Diploma cohort graduates with a 94% pass rate.', type: 'academic' },
  { year: '2018', event: 'IB MYP authorisation achieved — full PYP, MYP and DP continuum school.', type: 'milestone' },
  { year: '2019', event: 'Football team wins inaugural East Africa Schools Championship.', type: 'sport' },
  { year: '2021', event: 'First 100% IB Diploma pass rate — maintained every year since.', type: 'academic' },
  { year: '2022', event: 'Ranked the leading IB school in Sub-Saharan Africa.', type: 'milestone' },
  { year: '2023', event: 'Model UN Conference hosts 200 delegates from 14 schools across the region.', type: 'community' },
  { year: '2024', event: 'Two students receive the Mozambique Youth Arts Prize.', type: 'arts' },
  { year: '2025', event: 'East Africa Schools Music Festival — first place overall.', type: 'arts' },
  { year: '2026', event: 'Class of 2026: mean score 38.4, seven National IB Scholars, two perfect scores.', type: 'academic' },
]

type YearKey = '2026' | '2025' | '2024' | '2023'

export default function Achievements() {
  const [activeYear, setActiveYear] = useState<YearKey>('2026')
  const activeData = ibYears.find(y => y.year === activeYear) ?? ibYears[0]
  const maxCount = 11

  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(
      e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible') }),
      { threshold: 0.06 }
    )
    document.querySelectorAll('.pg-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <SectionsHeader 
        title="Achievements" 
        description="Celebrating our students' success across academic excellence, regional athletics, and cultural recognition since 2013. Our record reflects the dedication of our students, faculty and community."
        subtitle="A Record of Excellence"
        subtext="From IB Diploma results that consistently exceed the global average, to regional championships and cultural recognition — our record reflects our students, our faculty, and our community."
      />

      {/* ── COVER ── */}
      <section className="ach-cover" style={{ display: 'none' }}>
        <div className="ach-cover-inner">
          <p className="ach-cover-eyebrow">Academic Record &nbsp;·&nbsp; Aga Khan Academy Maputo &nbsp;·&nbsp; 2013–2026</p>
          <h1 className="ach-cover-title">A Record of<br/><em>Excellence</em></h1>
          <div className="ach-cover-rule" />
          <p className="ach-cover-desc">
            From IB Diploma results that consistently exceed the global average, to regional championships
            and cultural recognition — our record reflects our students, our faculty, and our community.
          </p>
          <div className="ach-cover-stats">
            <div className="ach-cover-stat">
              <span className="ach-cover-num">38.4</span>
              <span className="ach-cover-label">Mean IB Score 2026</span>
              <span className="ach-cover-note">World average 29.9</span>
            </div>
            <div className="ach-cover-bar" />
            <div className="ach-cover-stat">
              <span className="ach-cover-num">100%</span>
              <span className="ach-cover-label">IB Pass Rate</span>
              <span className="ach-cover-note">Three consecutive years</span>
            </div>
            <div className="ach-cover-bar" />
            <div className="ach-cover-stat">
              <span className="ach-cover-num">98%</span>
              <span className="ach-cover-label">University Placement</span>
              <span className="ach-cover-note">45+ partner universities</span>
            </div>
            <div className="ach-cover-bar" />
            <div className="ach-cover-stat">
              <span className="ach-cover-num">No.&thinsp;1</span>
              <span className="ach-cover-label">Sub-Saharan Africa</span>
              <span className="ach-cover-note">IB Schools Ranking</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── I. IB RESULTS ── */}
      <section className="ach-sec ach-academic pg-reveal">
        <div className="ach-sec-inner">
          <header className="ach-sec-head">
            <span className="ach-sec-roman">I.</span>
            <div>
              <div className="ach-sec-kicker">IB Diploma Programme</div>
              <h2 className="ach-sec-title">Academic Results</h2>
            </div>
          </header>

          <div className="ach-year-row">
            {ibYears.map(y => (
              <button
                key={y.year}
                className={`ach-yr-btn${activeYear === y.year ? ' active' : ''}`}
                onClick={() => setActiveYear(y.year as YearKey)}
              >
                Class of {y.year}
              </button>
            ))}
          </div>

          <div className="ach-academic-body">
            <div className="ach-score-panel">
              <div className="ach-score-caption">AKA Maputo Average</div>
              <div className="ach-score-main">
                {activeData.avg}<span>/45</span>
              </div>
              <div className="ach-score-diff">
                +{(activeData.avg - activeData.worldAvg).toFixed(1)} pts above the global average
              </div>
              <div className="ach-score-world">
                <span>Global IB Average</span>
                <strong>{activeData.worldAvg}</strong>
              </div>
            </div>

            <div className="ach-data-rows">
              {[
                { label: 'Candidates', val: String(activeData.candidates) },
                { label: 'Pass Rate',  val: `${activeData.pass}%` },
                { label: 'Scored 40 or above', val: String(activeData.top40) },
                { label: 'Perfect score (45)',  val: String(activeData.perfect) },
              ].map((s, i) => (
                <div className="ach-data-row" key={i}>
                  <span className="ach-data-label">{s.label}</span>
                  <span className="ach-data-val">{s.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Distribution */}
          <div className="ach-dist">
            <div className="ach-dist-caption">Score Distribution — Class of 2026</div>
            <div className="ach-dist-rows">
              {scoreDistribution.map((d, i) => (
                <div className="ach-dist-row" key={i}>
                  <span className="ach-dist-range">{d.range}</span>
                  <div className="ach-dist-track">
                    <div className="ach-dist-fill" style={{ width: `${(d.count / maxCount) * 100}%` }} />
                  </div>
                  <span className="ach-dist-count">{d.count} students</span>
                </div>
              ))}
            </div>
            <p className="ach-dist-note">32 candidates &nbsp;·&nbsp; 100% pass rate &nbsp;·&nbsp; Mean 38.4 &nbsp;·&nbsp; World average 29.9</p>
          </div>
        </div>
      </section>

      {/* ── II. FOUR-YEAR RECORD ── */}
      <section className="ach-sec ach-record pg-reveal">
        <div className="ach-sec-inner">
          <header className="ach-sec-head">
            <span className="ach-sec-roman">II.</span>
            <div>
              <div className="ach-sec-kicker">Four-Year Trend</div>
              <h2 className="ach-sec-title">Consistent Improvement</h2>
            </div>
          </header>

          <table className="ach-table">
            <thead>
              <tr>
                {['Year', 'Candidates', 'Pass Rate', 'Mean Score', 'Scored 40+', 'vs World Avg'].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ibYears.map((y, i) => (
                <tr key={y.year} className={i === 0 ? 'ach-tr-latest' : ''}>
                  <td className="ach-td-year">{y.year}{i === 0 && <em>Latest</em>}</td>
                  <td>{y.candidates}</td>
                  <td>{y.pass}%</td>
                  <td className="ach-td-score">{y.avg}</td>
                  <td>{y.top40}</td>
                  <td className="ach-td-delta">+{(y.avg - y.worldAvg).toFixed(1)} pts</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── III. HONOURS ── */}
      <section className="ach-sec ach-honours pg-reveal">
        <div className="ach-sec-inner">
          <header className="ach-sec-head ach-sec-head--light">
            <span className="ach-sec-roman">III.</span>
            <div>
              <div className="ach-sec-kicker">Athletics &amp; Sport</div>
              <h2 className="ach-sec-title">Honours &amp; Championships</h2>
            </div>
          </header>

          <div className="ach-honour-list">
            {sportAchievements.map((s, i) => (
              <div className="ach-honour-row" key={i}>
                <div className="ach-honour-meta">
                  <span className="ach-honour-sport">{s.sport}</span>
                  <span className={`ach-honour-badge ach-honour-badge--${s.rank}`}>
                    {s.rank === 'gold' ? 'Gold' : 'Silver'}
                  </span>
                  <span className="ach-honour-year">{s.year}</span>
                </div>
                <div className="ach-honour-body">
                  <div className="ach-honour-title">{s.title}</div>
                  <div className="ach-honour-detail">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IV. ARTS PROGRAMME ── */}
      <section className="ach-sec ach-arts pg-reveal">
        <div className="ach-sec-inner">
          <header className="ach-sec-head">
            <span className="ach-sec-roman">IV.</span>
            <div>
              <div className="ach-sec-kicker">Arts &amp; Culture</div>
              <h2 className="ach-sec-title">Creative Excellence</h2>
            </div>
          </header>

          <div className="ach-prog-list">
            {artsAchievements.map((a, i) => (
              <div className="ach-prog-row" key={i}>
                <div className="ach-prog-meta">
                  <span className="ach-prog-cat">{a.category}</span>
                  <span className="ach-prog-year">{a.year}</span>
                </div>
                <div className="ach-prog-body">
                  <div className="ach-prog-title">{a.title}</div>
                  <div className="ach-prog-detail">{a.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── V. UNIVERSITY DESTINATIONS ── */}
      <section className="ach-sec ach-dest pg-reveal">
        <div className="ach-sec-inner">
          <header className="ach-sec-head">
            <span className="ach-sec-roman">V.</span>
            <div>
              <div className="ach-sec-kicker">Class of 2024–26</div>
              <h2 className="ach-sec-title">University Destinations</h2>
            </div>
          </header>

          <div className="ach-dest-kpi">
            <span className="ach-dest-kpi-num">98%</span>
            <span className="ach-dest-kpi-label">of graduates from the Class of 2024–2026 secured university places.</span>
          </div>

          <div className="ach-dest-list">
            {universityData.map((u, i) => (
              <div className="ach-dest-item" key={i}>
                <div className="ach-dest-top">
                  <span className="ach-dest-country">{u.country}</span>
                  <div className="ach-dest-track">
                    <div className="ach-dest-fill" style={{ width: `${(u.count / 9) * 100}%` }} />
                  </div>
                  <span className="ach-dest-count">{u.count} students</span>
                </div>
                <div className="ach-dest-unis">{u.unis}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VI. COMMUNITY IMPACT ── */}
      <section className="ach-sec ach-impact pg-reveal">
        <div className="ach-sec-inner">
          <header className="ach-sec-head ach-sec-head--light">
            <span className="ach-sec-roman">VI.</span>
            <div>
              <div className="ach-sec-kicker">Creativity, Activity, Service</div>
              <h2 className="ach-sec-title">Community Impact</h2>
            </div>
          </header>
          <p className="ach-impact-intro">
            Through the IB CAS programme, AKA Maputo students contribute more than 200 hours annually to
            their communities — across Maputo and throughout Mozambique.
          </p>
          <div className="ach-impact-grid">
            {serviceStats.map((s, i) => (
              <div className="ach-impact-item" key={i}>
                <div className="ach-impact-num">{s.num}</div>
                <div className="ach-impact-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VII. CHRONICLE ── */}
      <section className="ach-sec ach-chronicle pg-reveal">
        <div className="ach-sec-inner">
          <header className="ach-sec-head">
            <span className="ach-sec-roman">VII.</span>
            <div>
              <div className="ach-sec-kicker">School History</div>
              <h2 className="ach-sec-title">A Chronicle of Achievement</h2>
            </div>
          </header>

          <div className="ach-chron-track">
            {timeline.map((t, i) => (
              <div className={`ach-chron-item`} key={i}>
                <div className="ach-chron-year">{t.year}</div>
                <div className="ach-chron-line-col">
                  <div className={`ach-chron-dot ach-chron-dot--${t.type}`} />
                  {i < timeline.length - 1 && <div className="ach-chron-stem" />}
                </div>
                <div className="ach-chron-body">
                  <span className={`ach-chron-type ach-chron-type--${t.type}`}>{t.type}</span>
                  <p className="ach-chron-event">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ach-enrol pg-reveal">
        <div className="ach-enrol-inner">
          <div className="ach-enrol-rule" />
          <h2 className="ach-enrol-title">Begin your story here.</h2>
          <p className="ach-enrol-sub">Applications for the 2026–27 academic year are now open.</p>
          <div className="ach-enrol-btns">
            <a href="/apply" className="ach-enrol-btn ach-enrol-btn--primary">Apply Now</a>
            <a href="/academics" className="ach-enrol-btn ach-enrol-btn--ghost">Explore Academics</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
