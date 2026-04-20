import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages.css'

const steps = [
  { num: '01', title: 'Enquire', body: 'Submit an initial enquiry or contact our Admissions Office. We will send you our prospectus and invite you to a campus tour or virtual information session.' },
  { num: '02', title: 'Apply', body: 'Complete the online application form and submit all required documents — academic records, recommendations, passport copy and birth certificate.' },
  { num: '03', title: 'Assessment', body: 'Shortlisted applicants are invited to sit an entrance assessment in English, Mathematics and reasoning, followed by a family interview with our Admissions team.' },
  { num: '04', title: 'Enrol', body: 'Successful applicants receive a formal offer. A non-refundable enrolment fee secures your place. Our team guides you through boarding, uniform and orientation.' },
]

const feeData = [
  {
    level: 'Kindergarten',
    tag: 'Early Years · Pre-K – Grade 2',
    color: '#2B5F3E',
    light: '#EAF3ED',
    items: [
      { label: 'Annual Tuition', amount: 'USD 7,800' },
      { label: 'Registration Fee', amount: 'USD 500' },
      { label: 'Activity & Resources Fee', amount: 'USD 650' },
      { label: 'Books & Materials', amount: 'USD 380' },
    ],
    note: 'Includes Early Years care programme, supervised activities and daily snacks.',
  },
  {
    level: 'Primary School',
    tag: 'IB PYP · Grades 3 – 5',
    color: '#1A3D27',
    light: '#E4EFE8',
    items: [
      { label: 'Annual Tuition', amount: 'USD 10,400' },
      { label: 'Registration Fee', amount: 'USD 500' },
      { label: 'Activity & Resources Fee', amount: 'USD 820' },
      { label: 'Books & Materials', amount: 'USD 560' },
    ],
    note: 'Includes PYP Exhibition preparation, science lab access and co-curricular participation.',
  },
  {
    level: 'High School',
    tag: 'IB MYP & DP · Grades 6 – 12',
    color: '#0F2819',
    light: '#DDE8E1',
    items: [
      { label: 'Annual Tuition', amount: 'USD 14,200' },
      { label: 'Registration Fee', amount: 'USD 500' },
      { label: 'Activity & Resources Fee', amount: 'USD 1,050' },
      { label: 'Books & Materials', amount: 'USD 780' },
      { label: 'IB Exam Fee (DP only)', amount: 'USD 1,300' },
    ],
    note: 'Boarding fees are separate. Financial assistance available for qualifying families.',
  },
]

const grades = ['Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']

type FormState = {
  studentName: string; dob: string; gender: string; applyingGrade: string;
  currentSchool: string; currentGrade: string;
  motherName: string; motherPhone: string; motherAddress: string; motherWorkPhone: string;
  motherProfession: string; motherWorkplace: string; motherEmail: string;
  fatherName: string; fatherPhone: string; fatherAddress: string; fatherWorkPhone: string;
  fatherProfession: string; fatherWorkplace: string; fatherEmail: string;
}

const emptyForm: FormState = {
  studentName: '', dob: '', gender: '', applyingGrade: 'Kindergarten',
  currentSchool: '', currentGrade: 'Kindergarten',
  motherName: '', motherPhone: '', motherAddress: '', motherWorkPhone: '',
  motherProfession: '', motherWorkplace: '', motherEmail: '',
  fatherName: '', fatherPhone: '', fatherAddress: '', fatherWorkPhone: '',
  fatherProfession: '', fatherWorkplace: '', fatherEmail: '',
}

export default function Apply() {
  const [tab, setTab] = useState<'how' | 'enroll' | 'fees'>('how')
  const [form, setForm] = useState<FormState>(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(
      e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.pg-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [tab])

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
            <button className="pg-btn pg-btn-green" onClick={() => setTab('enroll')} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Enroll Now</button>
            <button className="pg-btn pg-btn-outline-white" onClick={() => setTab('fees')} style={{ border: '1.5px solid rgba(255,255,255,0.5)', background: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>View Fees</button>
          </div>
        </div>
        <div className="pg-hero-stats">
          <div><div className="pg-stat-num">3<em>+</em></div><div className="pg-stat-label">IB Programmes</div></div>
          <div><div className="pg-stat-num">40<em>+</em></div><div className="pg-stat-label">Nationalities</div></div>
          <div><div className="pg-stat-num">100<em>%</em></div><div className="pg-stat-label">IB Pass Rate</div></div>
        </div>
      </section>

      {/* TAB BAR */}
      <div className="ap-tabbar">
        {([['how', 'How to Apply'], ['enroll', 'Enroll Now'], ['fees', 'School Fees']] as const).map(([key, label]) => (
          <button
            key={key}
            className={`ap-tab${tab === key ? ' active' : ''}`}
            onClick={() => { setTab(key); setSubmitted(false) }}
          >{label}</button>
        ))}
      </div>

      {/* ── HOW TO APPLY ── */}
      {tab === 'how' && (
        <>
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

          <div className="ap-steps pg-reveal">
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
              {[
                { icon: '📋', title: 'Entry Points', body: 'We welcome applications at all year group entry points — from Early Years through to Grade 11. Mid-year applications are considered subject to availability.' },
                { icon: '💰', title: 'Fees & Financial Aid', body: 'Need-based financial assistance is awarded annually and covers up to 100% of fees for qualifying families. See the Fees tab for full details.' },
                { icon: '🌍', title: 'International Students', body: 'Students from over 40 nationalities study at AKA Maputo. We support visa applications, travel arrangements and cultural orientation.' },
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
              <button className="pg-btn pg-btn-outline-white" onClick={() => setTab('enroll')} style={{ border: '1.5px solid rgba(255,255,255,0.5)', background: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Start Application</button>
              <a href="/campus" className="pg-btn" style={{ background: 'white', color: 'var(--green-deep)', fontWeight: 600 }}>Book a Campus Tour</a>
            </div>
          </div>
        </>
      )}

      {/* ── ENROLL NOW ── */}
      {tab === 'enroll' && (
        <div className="ap-form-wrap">
          {submitted ? (
            <div className="ap-success">
              <div className="ap-success-icon">✓</div>
              <h2>Application Received</h2>
              <p>Thank you for submitting your pre-application. Our Admissions team will be in touch within 5 working days.</p>
              <button className="pg-btn pg-btn-green" onClick={() => { setForm(emptyForm); setSubmitted(false) }} style={{ marginTop: 32, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Submit Another Application</button>
            </div>
          ) : (
            <form className="ap-form" onSubmit={handleSubmit}>
              <div className="ap-form-header">
                <div className="pg-tag">Pre-Application Form</div>
                <h2 className="pg-h2" style={{ marginTop: 8 }}>Student <em>Enrolment</em></h2>
                <p style={{ fontSize: 13, color: 'var(--g500)', marginTop: 12, lineHeight: 1.7 }}>Please complete all required fields marked with <span style={{ color: 'var(--accent)' }}>*</span>. Our Admissions team will contact you to confirm the next steps.</p>
              </div>

              {/* STUDENT DETAILS */}
              <div className="ap-fsection">
                <div className="ap-fsection-title">Student's Details</div>

                <div className="ap-frow">
                  <div className="ap-field ap-field-full">
                    <label className="ap-label">Student's Full Name <span>*</span></label>
                    <input className="ap-input" type="text" required value={form.studentName} onChange={set('studentName')} placeholder="Enter student's full name" />
                  </div>
                </div>

                <div className="ap-frow">
                  <div className="ap-field">
                    <label className="ap-label">Date of Birth <span>*</span></label>
                    <input className="ap-input" type="date" required value={form.dob} onChange={set('dob')} />
                  </div>
                  <div className="ap-field">
                    <label className="ap-label">Gender <span>*</span></label>
                    <div className="ap-radio-group">
                      {['Male', 'Female'].map(g => (
                        <label className="ap-radio" key={g}>
                          <input type="radio" name="gender" value={g} checked={form.gender === g} onChange={set('gender')} required />
                          <span className="ap-radio-box" />
                          {g}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="ap-frow ap-frow-3">
                  <div className="ap-field">
                    <label className="ap-label">Applying for Grade <span>*</span></label>
                    <select className="ap-select" required value={form.applyingGrade} onChange={set('applyingGrade')}>
                      {grades.map(g => <option key={g}>{g}</option>)}
                    </select>
                  </div>
                  <div className="ap-field ap-field-grow">
                    <label className="ap-label">Current School <span>*</span></label>
                    <input className="ap-input" type="text" required value={form.currentSchool} onChange={set('currentSchool')} placeholder="Name of current school" />
                  </div>
                  <div className="ap-field">
                    <label className="ap-label">Current Grade <span>*</span></label>
                    <select className="ap-select" required value={form.currentGrade} onChange={set('currentGrade')}>
                      {grades.map(g => <option key={g}>{g}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* PARENT DETAILS - MOTHER */}
              <div className="ap-fsection">
                <div className="ap-fsection-title">Parent's Details</div>
                <div className="ap-fsection-sub">Mother / Guardian</div>

                <div className="ap-frow">
                  <div className="ap-field">
                    <label className="ap-label">Full Name</label>
                    <input className="ap-input" type="text" value={form.motherName} onChange={set('motherName')} placeholder="Mother's full name" />
                  </div>
                  <div className="ap-field">
                    <label className="ap-label">Phone Number</label>
                    <input className="ap-input" type="tel" value={form.motherPhone} onChange={set('motherPhone')} placeholder="+258 00 000 0000" />
                  </div>
                </div>
                <div className="ap-frow">
                  <div className="ap-field">
                    <label className="ap-label">Address</label>
                    <input className="ap-input" type="text" value={form.motherAddress} onChange={set('motherAddress')} placeholder="Residential address" />
                  </div>
                  <div className="ap-field">
                    <label className="ap-label">Work Phone</label>
                    <input className="ap-input" type="tel" value={form.motherWorkPhone} onChange={set('motherWorkPhone')} placeholder="+258 00 000 0000" />
                  </div>
                </div>
                <div className="ap-frow">
                  <div className="ap-field">
                    <label className="ap-label">Profession</label>
                    <input className="ap-input" type="text" value={form.motherProfession} onChange={set('motherProfession')} placeholder="Occupation / profession" />
                  </div>
                  <div className="ap-field">
                    <label className="ap-label">Working Place</label>
                    <input className="ap-input" type="text" value={form.motherWorkplace} onChange={set('motherWorkplace')} placeholder="Employer / workplace name" />
                  </div>
                </div>
                <div className="ap-frow">
                  <div className="ap-field ap-field-full">
                    <label className="ap-label">E-mail</label>
                    <input className="ap-input" type="email" value={form.motherEmail} onChange={set('motherEmail')} placeholder="mother@email.com" />
                  </div>
                </div>
              </div>

              {/* PARENT DETAILS - FATHER */}
              <div className="ap-fsection">
                <div className="ap-fsection-sub">Father / Guardian</div>

                <div className="ap-frow">
                  <div className="ap-field">
                    <label className="ap-label">Full Name</label>
                    <input className="ap-input" type="text" value={form.fatherName} onChange={set('fatherName')} placeholder="Father's full name" />
                  </div>
                  <div className="ap-field">
                    <label className="ap-label">Phone Number</label>
                    <input className="ap-input" type="tel" value={form.fatherPhone} onChange={set('fatherPhone')} placeholder="+258 00 000 0000" />
                  </div>
                </div>
                <div className="ap-frow">
                  <div className="ap-field">
                    <label className="ap-label">Address</label>
                    <input className="ap-input" type="text" value={form.fatherAddress} onChange={set('fatherAddress')} placeholder="Residential address" />
                  </div>
                  <div className="ap-field">
                    <label className="ap-label">Work Phone</label>
                    <input className="ap-input" type="tel" value={form.fatherWorkPhone} onChange={set('fatherWorkPhone')} placeholder="+258 00 000 0000" />
                  </div>
                </div>
                <div className="ap-frow">
                  <div className="ap-field">
                    <label className="ap-label">Profession</label>
                    <input className="ap-input" type="text" value={form.fatherProfession} onChange={set('fatherProfession')} placeholder="Occupation / profession" />
                  </div>
                  <div className="ap-field">
                    <label className="ap-label">Working Place</label>
                    <input className="ap-input" type="text" value={form.fatherWorkplace} onChange={set('fatherWorkplace')} placeholder="Employer / workplace name" />
                  </div>
                </div>
                <div className="ap-frow">
                  <div className="ap-field ap-field-full">
                    <label className="ap-label">E-mail</label>
                    <input className="ap-input" type="email" value={form.fatherEmail} onChange={set('fatherEmail')} placeholder="father@email.com" />
                  </div>
                </div>
              </div>

              <div className="ap-form-footer">
                <p style={{ fontSize: 12, color: 'var(--g400)', lineHeight: 1.6 }}>By submitting this form you agree to our admissions privacy policy. All information provided is used solely for admissions processing.</p>
                <button className="ap-submit" type="submit">Submit Application →</button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* ── FEES ── */}
      {tab === 'fees' && (
        <div className="ap-fees-wrap">
          <div className="ap-fees-header pg-reveal">
            <div className="pg-tag">2026–27 Academic Year</div>
            <h2 className="pg-h2" style={{ marginTop: 8 }}>School <em>Fees</em></h2>
            <p style={{ fontSize: 14, color: 'var(--g500)', marginTop: 16, maxWidth: 600, lineHeight: 1.8 }}>All fees are quoted in US Dollars and cover one academic year. Financial assistance is available for qualifying families — contact our Admissions Office for details.</p>
          </div>

          <div className="ap-fee-cards pg-reveal">
            {feeData.map((f, i) => (
              <div className="ap-fee-card" key={i} style={{ '--fee-color': f.color, '--fee-light': f.light } as React.CSSProperties}>
                <div className="ap-fee-top">
                  <div className="ap-fee-tag">{f.tag}</div>
                  <div className="ap-fee-level">{f.level}</div>
                </div>
                <div className="ap-fee-rows">
                  {f.items.map((item, j) => (
                    <div className={`ap-fee-row${j === 0 ? ' primary' : ''}`} key={j}>
                      <span className="ap-fee-row-label">{item.label}</span>
                      <span className="ap-fee-row-amt">{item.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="ap-fee-total">
                  <span>Total (excl. IB exam)</span>
                  <span>{`USD ${f.items.filter(x => !x.label.includes('IB Exam')).reduce((acc, x) => acc + parseInt(x.amount.replace(/[^0-9]/g, '')), 0).toLocaleString()}`}</span>
                </div>
                <div className="ap-fee-note">{f.note}</div>
              </div>
            ))}
          </div>

          <div className="ap-fee-info pg-reveal">
            {[
              { icon: '🎓', title: 'Financial Assistance', body: 'Need-based bursaries cover up to 100% of tuition fees. Applications are assessed annually and renewed each year subject to continued eligibility.' },
              { icon: '📅', title: 'Payment Plans', body: 'Fees may be paid termly or annually. A 2% discount applies for full annual payment made before the first day of term.' },
              { icon: '✈️', title: 'Boarding Fees', body: 'Residential boarding fees are quoted separately. All-inclusive boarding packages cover accommodation, meals and houseparent supervision.' },
              { icon: '📞', title: 'Contact Admissions', body: 'For a detailed fee schedule or to discuss financial assistance, contact admissions@akamaputo.org or call +258 00 000 000.' },
            ].map((item, i) => (
              <div className="ap-fee-info-card" key={i}>
                <div className="ap-fee-info-icon">{item.icon}</div>
                <div>
                  <div className="ap-fee-info-title">{item.title}</div>
                  <div className="ap-fee-info-body">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
