import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiMail, FiCheck, FiCopy, FiTerminal, FiLayers, FiAward } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub, FaPython, FaReact, FaAws } from 'react-icons/fa'
import { SiFastapi, SiDjango } from 'react-icons/si'
import { personalInfo } from '../data/portfolioData'

const codeSnippets = {
  python: `# developer.py
class SoftwareEngineer:
    def __init__(self):
        self.name = "Muneeswaran Anandharaj"
        self.focus = ["AI & NLP", "Full-Stack SaaS", "Cloud Systems"]
        self.stack = ["Python", "Django", "FastAPI", "React", "AWS"]
        self.published = "IJIRT Research Paper (May 2025)"
        self.status = "Available for high-impact opportunities"

    def mission(self):
        return "Building resilient systems that turn ideas into reality."`,
  json: `{
  "engineer": "Muneeswaran Anandharaj",
  "location": "Madurai, India (IST)",
  "specialties": [
    "Machine Learning & Sentiment NLP",
    "Multi-Tenant SaaS Architectures",
    "Asynchronous Task Workers (Celery/Redis)"
  ],
  "certifications": [
    "AWS Cloud Architecting",
    "AI Full Stack Developer",
    "Full Stack Python"
  ]
}`,
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeTab, setActiveTab] = useState('python')
  const [copiedCode, setCopiedCode] = useState(false)

  const roles = personalInfo.roles
  const currentRole = roles[roleIndex]
  const displayText = currentRole.slice(0, charIndex)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setCharIndex((c) => c + 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2200)
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((c) => c - 1)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((r) => (r + 1) % roles.length)
      }
    }, isDeleting ? 40 : 85)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentRole, roles.length])

  const copySnippet = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab])
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-ambient-glow" />
      <div className="hero-grid-pattern" />

      <div className="container hero-container">
        {/* Left Column: Introductions & CTAs */}
        <motion.div
          className="hero-main-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Availability Badge */}
          <div className="hero-badge-pill">
            <span className="beacon-indicator">
              <span className="beacon-core" />
              <span className="beacon-wave" />
            </span>
            <span>Available for Full-Time & Freelance Roles</span>
          </div>

          <p className="hero-intro">Hello, I'm</p>

          <h1 className="hero-name-heading">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Animated Dynamic Role */}
          <div className="hero-dynamic-role">
            <span className="role-prefix">&gt; </span>
            <span className="role-text">{displayText}</span>
            <span className="role-cursor">|</span>
          </div>

          <p className="hero-bio-summary">
            Computer Science engineer specialized in building production-grade web applications,
            intelligent NLP pipelines, and multi-tenant cloud platforms using Python, Django, FastAPI, and React.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <button className="btn btn-primary hero-btn-glow" onClick={() => scrollTo('projects')}>
              Explore Projects
            </button>

            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFilename}
              className="btn btn-secondary"
            >
              <FiDownload /> Download CV
            </a>

            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              <FiMail /> Contact Me
            </button>
          </div>

          {/* Social Row with Tooltips */}
          <div className="hero-social-strip">
            <span className="social-label">Find me on:</span>
            <div className="social-links-row">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={personalInfo.social.email}
                className="social-icon-btn"
                title="Send an Email"
                aria-label="Email"
              >
                <FiMail />
              </a>
              <a
                href={personalInfo.social.phone}
                className="social-icon-btn"
                title="Call Directly"
                aria-label="Phone"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Terminal Preview */}
        <motion.div
          className="hero-code-showcase"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-dot red" />
                <span className="control-dot yellow" />
                <span className="control-dot green" />
              </div>

              <div className="terminal-tabs">
                <button
                  className={`terminal-tab ${activeTab === 'python' ? 'active' : ''}`}
                  onClick={() => setActiveTab('python')}
                >
                  <FaPython className="tab-icon python" />
                  <span>developer.py</span>
                </button>
                <button
                  className={`terminal-tab ${activeTab === 'json' ? 'active' : ''}`}
                  onClick={() => setActiveTab('json')}
                >
                  <FiTerminal className="tab-icon" />
                  <span>profile.json</span>
                </button>
              </div>

              <button
                className="terminal-copy-btn"
                onClick={copySnippet}
                title="Copy code"
                aria-label="Copy code"
              >
                {copiedCode ? <FiCheck className="copied-check" /> : <FiCopy />}
              </button>
            </div>

            <div className="terminal-body">
              <pre>
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>

            {/* Micro Tech Ticker in Terminal footer */}
            <div className="terminal-footer">
              <span className="footer-label">Tech Highlights:</span>
              <div className="tech-badge-mini">
                <FaPython /> Python
              </div>
              <div className="tech-badge-mini">
                <SiDjango /> Django
              </div>
              <div className="tech-badge-mini">
                <SiFastapi /> FastAPI
              </div>
              <div className="tech-badge-mini">
                <FaReact /> React
              </div>
              <div className="tech-badge-mini">
                <FaAws /> AWS
              </div>
            </div>
          </div>

          {/* Quick Floating Spotlight Cards */}
          <div className="hero-spotlight-cards">
            <div className="spotlight-card">
              <FiAward className="spotlight-icon gold" />
              <div>
                <strong>IJIRT Published</strong>
                <p>AI Petition Monitoring Research</p>
              </div>
            </div>

            <div className="spotlight-card">
              <FiLayers className="spotlight-icon cyan" />
              <div>
                <strong>AWS Academy</strong>
                <p>Cloud Architecting Certified</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Stats Ribbon */}
      <div className="hero-stats-ribbon">
        <div className="container">
          <div className="stats-ribbon-grid">
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-ribbon-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <span className="stat-number">{stat.value}</span>
                <span className="stat-title">{stat.label}</span>
                <span className="stat-detail">{stat.note}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
