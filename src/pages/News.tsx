import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionsHeader from '../components/SectionsHeader'
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

const categories = ['All', 'Academic Achievement', 'Community', 'Exchange', 'Arts & Culture', 'Sports', 'Admissions']

const articles = [
  { cat: 'Academic Achievement', date: 'March 2026', title: 'Seven AKA Maputo Students Named Mozambican National IB Scholars', excerpt: 'A record cohort of students recognised for achieving scores in the top global percentile, with two earning perfect 45-point scores.', bg: 'linear-gradient(135deg,#1A1A1A 0%,#2E2E2E 100%)' },
  { cat: 'Community', date: 'March 2026', title: 'Grade 9 Students Partner with Maputo City Council on Urban Greening Project', excerpt: 'A six-month service learning initiative that saw 200 trees planted across three Maputo neighbourhoods.', bg: 'linear-gradient(135deg,#1C2A1C 0%,#1A3D27 100%)' },
  { cat: 'Exchange', date: 'February 2026', title: 'Hyderabad & Nairobi Students Join AKA Maputo for Annual Inter-Academy Week', excerpt: 'Sixty students from three continents shared classrooms, dormitories and a week of collaborative projects.', bg: 'linear-gradient(135deg,#1A1A2E 0%,#1A1A4A 100%)' },
  { cat: 'Arts & Culture', date: 'February 2026', title: "Sold-Out Run for Student Production of Athol Fugard's 'Sizwe Banzi is Dead'", excerpt: 'The Grade 11 theatre class delivered a critically acclaimed production drawing audiences from across Maputo.', bg: 'linear-gradient(135deg,#2A1A1A 0%,#3D1A1A 100%)' },
  { cat: 'Sports', date: 'January 2026', title: 'AKA Maputo Football Team Wins East Africa Schools Championship', excerpt: 'The under-18 squad claimed the title in Nairobi, defeating teams from Kenya, Tanzania and Uganda.', bg: 'linear-gradient(135deg,#1A2A1A 0%,#2A3D20 100%)' },
  { cat: 'Admissions', date: 'January 2026', title: 'Applications Open for 2026–27 Academic Year Across All Year Groups', excerpt: 'Early applications are strongly encouraged. Financial assistance is available for qualifying families.', bg: 'linear-gradient(135deg,#2A2A1A 0%,#3D3520 100%)' },
]

const moreStories = [
  { date: 'Dec 2025', cat: 'Arts', title: 'Annual Arts Festival Draws Largest Audience in Academy History' },
  { date: 'Nov 2025', cat: 'Academic', title: 'Extended Essay Symposium Celebrates Student Research Excellence' },
  { date: 'Oct 2025', cat: 'Community', title: 'Model UN Conference Hosts 200 Delegates from 14 Schools' },
  { date: 'Sep 2025', cat: 'Exchange', title: 'AKA Maputo Students Attend Global IB Conference in The Hague' },
  { date: 'Aug 2025', cat: 'Admissions', title: '2025–26 IB Diploma Results: Record Average Score for Second Year Running' },
]

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')

  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.cat === activeCategory)

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
      <SectionsHeader 
        title="News" 
        description="Stay updated with the latest stories from our school community. From academic achievements and community service to cultural events and student recognition."
        subtitle="AKA Maputo News"
      />

      <div className="nw-masthead" style={{ display: 'none' }}>
        <div className="nw-mast-top">
          <div>
            <div className="pg-eyebrow" style={{ marginBottom: 16 }}>Latest · News · Stories</div>
            <h1 className="nw-mast-title">AKA <em>Maputo</em><br/>News</h1>
          </div>
          <div className="nw-mast-meta">
            <div className="nw-mast-date">April 2026</div>
            <div className="nw-mast-issue">Aga Khan Academy Maputo</div>
          </div>
        </div>
        <div className="nw-categories">
          {categories.map(c => (
            <button
              key={c}
              className={`nw-cat-pill${activeCategory === c ? ' active' : ''}`}
              onClick={() => setActiveCategory(c)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED */}
      <div className="nw-featured pg-reveal">
        <div className="nw-feat-inner">
          <div className="nw-feat-img">
            <Photo caption="Featured Story" bg="linear-gradient(135deg,#1A1A1A 0%,#2E2E2E 100%)" />
            <div className="nw-feat-badge">Featured</div>
          </div>
          <div className="nw-feat-content">
            <div className="nw-feat-cat">Academic Achievement</div>
            <h2 className="nw-feat-title">Class of 2026 Achieves Record IB Diploma Results — Five Students Score 40 or Above</h2>
            <p className="nw-feat-excerpt">Our graduating class of 2026 has achieved the highest collective IB Diploma results in the Academy's history. Five students earned scores of 40 or above out of a maximum of 45, with two reaching the 43-point mark. The cohort's mean score of 38.4 sits well above the global IB average of 29.9, and all 32 candidates passed — a 100% pass rate for the third consecutive year.</p>
            <div className="nw-feat-byline">
              <span className="nw-feat-date">April 2026</span>
              <span className="nw-feat-read">Read Story →</span>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE GRID */}
      <div className="nw-grid pg-reveal">
        <div className="nw-grid-label">
          {activeCategory === 'All' ? `All Stories — ${articles.length} articles` : `${activeCategory} — ${filtered.length} article${filtered.length !== 1 ? 's' : ''}`}
        </div>
        <div className="nw-articles">
          {filtered.map((a, i) => (
            <div className="nw-article" key={i}>
              <div className="nw-article-thumb"><Photo caption={a.cat} bg={a.bg} /></div>
              <div className="nw-article-cat">{a.cat}</div>
              <h3 className="nw-article-title">{a.title}</h3>
              <p className="nw-article-excerpt">{a.excerpt}</p>
              <div className="nw-article-meta">
                <span>{a.date}</span>
                <span>AKA Maputo</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MORE STORIES */}
      <div className="nw-more pg-reveal">
        <div className="nw-more-header">
          <div className="pg-tag" style={{ margin: 0 }}>Archive</div>
          <a href="#" className="pg-btn pg-btn-outline-dark" style={{ fontSize: 10 }}>View All Stories</a>
        </div>
        <div className="nw-more-list">
          {moreStories.map((s, i) => (
            <div className="nw-more-item" key={i}>
              <span className="nw-more-date">{s.date}</span>
              <span className="nw-more-cat">{s.cat}</span>
              <span className="nw-more-title">{s.title}</span>
              <span className="nw-more-arrow">→</span>
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="nw-newsletter pg-reveal">
        <div>
          <div className="pg-tag" style={{ color: 'var(--accent-light)' }}>Stay Connected</div>
          <h2 className="nw-news-title">Get <em>AKA Maputo</em><br/>news in your inbox</h2>
          <p className="nw-news-sub">Termly newsletters, event invitations and admissions updates for prospective and current families.</p>
        </div>
        <div>
          <form onSubmit={e => { e.preventDefault(); setEmail('') }} className="nw-form">
            <input
              className="nw-input" type="email" placeholder="Your email address"
              value={email} onChange={e => setEmail(e.target.value)}
            />
            <button className="nw-submit" type="submit">Subscribe</button>
          </form>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 12 }}>No spam. Unsubscribe at any time.</p>
        </div>
      </div>

      <Footer />
    </>
  )
}
