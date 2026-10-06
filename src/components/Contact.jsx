import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiCopy,
  FiClock,
  FiArrowUpRight,
  FiMessageSquare,
} from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-Time Opportunity',
    subject: '',
    message: '',
  })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  // Calculate live IST time
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailSubject = `[${formState.inquiryType}] ${formState.subject || 'Portfolio Inquiry'} - from ${formState.name}`
    const mailBody = `Hi Muneeswaran,\n\nName: ${formState.name}\nEmail: ${formState.email}\nInquiry Type: ${formState.inquiryType}\n\nMessage:\n${formState.message}\n`

    setTimeout(() => {
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        mailSubject
      )}&body=${encodeURIComponent(mailBody)}`
      setIsSubmitting(false)
      setSubmitted(true)
      setFormState({
        name: '',
        email: '',
        inquiryType: 'Full-Time Opportunity',
        subject: '',
        message: '',
      })
    }, 600)
  }

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-wrap text-center">
          <span className="section-pill">Let's Connect</span>
          <h2 className="section-heading">
            Start a Conversation or <span className="gradient-text">Build Something Great</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a full-time opening, an AI project, or simply want to connect — my inbox is always open.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Contact Cards & Info */}
          <motion.div
            className="contact-info-column"
            initial={{ opacity: 0, x: -35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card-modern">
              <div className="contact-card-head">
                <span className="live-status-dot" />
                <h3>Direct Communication</h3>
                <p>Feel free to reach out via email, phone, or LinkedIn.</p>
              </div>

              {/* Quick Copy Email Action */}
              <div className="copy-email-box">
                <div className="email-meta">
                  <FiMail className="email-icon" />
                  <div className="email-texts">
                    <span className="meta-label">Primary Email</span>
                    <strong className="email-string">{personalInfo.email}</strong>
                  </div>
                </div>
                <button
                  className="copy-btn-action"
                  onClick={copyEmailToClipboard}
                  title="Copy email to clipboard"
                  type="button"
                >
                  {copiedEmail ? (
                    <>
                      <FiCheck className="check-icon" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Links List */}
              <div className="direct-links-group">
                <a
                  href={personalInfo.social.phone}
                  className="direct-link-item"
                  title="Direct Phone Call"
                >
                  <div className="link-icon-circle">
                    <FiPhone />
                  </div>
                  <div className="link-text-details">
                    <span className="link-sub">Phone / WhatsApp</span>
                    <span className="link-val">{personalInfo.phoneDisplay}</span>
                  </div>
                  <FiArrowUpRight className="link-arrow" />
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-link-item"
                  title="LinkedIn Profile"
                >
                  <div className="link-icon-circle linkedin">
                    <FaLinkedinIn />
                  </div>
                  <div className="link-text-details">
                    <span className="link-sub">LinkedIn</span>
                    <span className="link-val">muneeswaran-anandharaj</span>
                  </div>
                  <FiArrowUpRight className="link-arrow" />
                </a>

                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-link-item"
                  title="GitHub Profile"
                >
                  <div className="link-icon-circle github">
                    <FaGithub />
                  </div>
                  <div className="link-text-details">
                    <span className="link-sub">GitHub</span>
                    <span className="link-val">MuneeswaranAnandharaj</span>
                  </div>
                  <FiArrowUpRight className="link-arrow" />
                </a>
              </div>

              {/* Location & Live Time Card */}
              <div className="location-clock-card">
                <div className="location-row">
                  <FiMapPin className="pin-icon" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="clock-row">
                  <FiClock className="clock-icon" />
                  <span>
                    Local Time: <strong>{currentTime || 'IST'}</strong> (IST, UTC+5:30)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            className="contact-form-column"
            initial={{ opacity: 0, x: 35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form className="contact-form-glass" onSubmit={handleSubmit}>
              <div className="form-head">
                <div className="form-head-icon">
                  <FiMessageSquare />
                </div>
                <div>
                  <h3>Send a Direct Message</h3>
                  <p>Fill out the form below to initiate an email thread.</p>
                </div>
              </div>

              {submitted && (
                <div className="form-success-banner">
                  <FiCheck className="banner-check" />
                  <div>
                    <strong>Thank you!</strong>
                    <p>Your email client is opening. Looking forward to speaking with you!</p>
                  </div>
                </div>
              )}

              {/* Inquiry Type Chips */}
              <div className="form-field-group">
                <label className="field-label">Purpose of Contact</label>
                <div className="inquiry-type-row">
                  {[
                    'Full-Time Opportunity',
                    'Freelance Project',
                    'Technical Discussion',
                    'Other',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`inquiry-chip ${
                        formState.inquiryType === type ? 'active' : ''
                      }`}
                      onClick={() => setFormState((p) => ({ ...p, inquiryType: type }))}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-grid-two">
                <div className="form-field-group">
                  <label htmlFor="name" className="field-label">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Morgan"
                    className="form-input-modern"
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="email" className="field-label">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. alex@company.com"
                    className="form-input-modern"
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label htmlFor="subject" className="field-label">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Full-Stack Developer Role / Project Proposal"
                  className="form-input-modern"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="message" className="field-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Share details about your requirements, project timeline, or questions..."
                  className="form-input-modern form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-submit-modern"
              >
                {isSubmitting ? (
                  <span>Preparing Email...</span>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
