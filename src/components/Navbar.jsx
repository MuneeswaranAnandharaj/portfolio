import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload, FiExternalLink } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map((link) => {
        const el = document.getElementById(link.id)
        if (!el) return { id: link.id, top: 0 }
        return { id: link.id, top: el.getBoundingClientRect().top + window.scrollY - 180 }
      })

      const current = sections.reduce((acc, section) => {
        if (window.scrollY >= section.top) return section.id
        return acc
      }, 'hero')
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('hero')
          }}
        >
          <div className="brand-badge">
            <span>{personalInfo.monogram}</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Muneeswaran</span>
            <span className="brand-sub">.dev</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="nav-desktop">
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <button
                    className={`nav-link-btn ${isActive ? 'active' : ''}`}
                    onClick={() => scrollTo(link.id)}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="active-pill"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Desktop CTA & Status */}
        <div className="nav-actions-desktop">
          <div className="nav-status-badge" title="Open for full-time and project opportunities">
            <span className="status-ping" />
            <span className="status-label">Available for Hire</span>
          </div>

          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFilename}
            className="nav-resume-btn"
            title="Download CV"
          >
            <FiDownload />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-drawer-top">
                <div className="brand-badge small">
                  <span>{personalInfo.monogram}</span>
                </div>
                <button
                  className="mobile-close-btn"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>

              <div className="mobile-status-pill">
                <span className="status-ping" />
                <span>Open for full-time opportunities</span>
              </div>

              <ul className="mobile-nav-list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <button
                      className={`mobile-nav-link ${active === link.id ? 'active' : ''}`}
                      onClick={() => scrollTo(link.id)}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-drawer-footer">
                <a
                  href={personalInfo.resumeUrl}
                  download={personalInfo.resumeFilename}
                  className="btn btn-primary full-width"
                >
                  <FiDownload /> Download Resume
                </a>

                <div className="mobile-social-row">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
