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

      {/* CONTACT SECTION */}
      <section className="contact-section pg-reveal">
        <div className="contact-wrapper">
          {/* CONTACT FORM (LEFT) */}
          <div className="contact-form-side">
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
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
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
                  placeholder="Write your message here..."
                  rows={6}
                ></textarea>
              </div>

              <button type="submit" className="contact-btn">Send Message</button>
            </form>
          </div>

          {/* CONTACT INFO (RIGHT) */}
          <div className="contact-info-side">
            <div className="contact-info-block">
              <div className="contact-info-label">Email</div>
              <div className="contact-info-value">admissions@akamaputo.org</div>
              <a href="mailto:admissions@akamaputo.org" className="contact-info-action">Send an email →</a>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-label">WhatsApp</div>
              <div className="contact-info-value">+258 21 483 300</div>
              <a href="https://wa.me/258021483300" className="contact-info-action">Chat with us →</a>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-label">Response Time</div>
              <div className="contact-info-value">Within 24 hours</div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-label">Follow Us</div>
              <div className="contact-social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-label">Address</div>
              <div className="contact-info-value address-text">No. 341, Rua das Rosas, Bairro Sommerschield, Maputo, Mozambique</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
