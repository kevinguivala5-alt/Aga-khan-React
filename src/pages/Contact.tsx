import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionsHeader from '../components/SectionsHeader'
import '../pages.css'

type FormState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const emptyForm: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setForm(emptyForm)
      setSubmitted(false)
    }, 3000)
  }

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
        title="Contact" 
        description="Get in touch with our admissions and administrative teams. We are here to answer your questions and help you find your place in our community." 
      />

      {/* CONTACT GRID */}
      <section className="contact-grid pg-reveal">
        <div className="contact-main">
          {/* CONTACT FORM */}
          <div className="contact-form-section">
            <div className="pg-tag">Send us a Message</div>
            <h2 className="contact-form-title">Get in touch with our team</h2>
            
            {submitted && (
              <div className="contact-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Thank you! We'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={set('name')}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={set('email')}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="+258 __ ___ ___"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" value={form.subject} onChange={set('subject')} required>
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Enquiry</option>
                  <option value="campus-tour">Request Campus Tour</option>
                  <option value="academics">Academic Questions</option>
                  <option value="boarding">Boarding Information</option>
                  <option value="fees">School Fees</option>
                  <option value="other">Other Enquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={set('message')}
                  required
                  placeholder="Please share your enquiry..."
                  rows={5}
                ></textarea>
              </div>

              <button type="submit" className="contact-btn">Send Message</button>
            </form>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="contact-info">
          <div className="pg-tag">Contact Information</div>
          <h2 className="contact-info-title">Reach Us</h2>

          <div className="contact-info-items">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3>Address</h3>
                <p>Aga Khan Academy<br/>Maputo, Mozambique</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p><a href="tel:+258000000">+258 00 000 000</a></p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:info@akamaputo.org">info@akamaputo.org</a></p>
                <p className="text-small"><a href="mailto:admissions@akamaputo.org">admissions@akamaputo.org</a></p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1"/>
                  <path d="M12 1v6m0 6v6"/>
                  <path d="M4.22 4.22h12.56m-12.56 15.56h12.56"/>
                </svg>
              </div>
              <div>
                <h3>Office Hours</h3>
                <p>Monday – Friday: 08:00 – 16:30 WAT<br/>Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="contact-departments">
            <h3>Departments</h3>
            <div className="contact-dept-list">
              <a href="mailto:admissions@akamaputo.org" className="contact-dept-item">
                <span className="dept-label">Admissions</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="mailto:info@akamaputo.org" className="contact-dept-item">
                <span className="dept-label">General Enquiries</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="mailto:finance@akamaputo.org" className="contact-dept-item">
                <span className="dept-label">Finance & Fees</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="contact-map-full pg-reveal">
        <div className="contact-map-wrapper">
          <div className="contact-map-header">
            <h2 className="pg-h2">Visit Our<br/><em>Campus</em></h2>
            <p>Located in the heart of Maputo</p>
          </div>
          <div className="contact-map">
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
        </div>
      </section>

      <Footer />
    </>
  )
}
