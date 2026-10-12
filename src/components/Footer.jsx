import { motion } from 'framer-motion'
import { FiMail, FiArrowUp } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand info */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <span className="footer-monogram">{personalInfo.monogram}</span>
              <span className="footer-brand-title">Muneeswaran.dev</span>
            </div>
            <p className="footer-tagline">
              Founder of Happy'S Software — Engineering resilient full-stack architectures, high-performance Python services, and intelligent AI solutions.
            </p>
          </div>

          {/* Rearranged Navigation links */}
          <div className="footer-nav-col">
            <h4>Quick Navigation</h4>
            <div className="footer-links-grid">
              <div className="footer-links-subcol">
                <span className="footer-subcol-title">Explore</span>
                <button className="footer-nav-btn" onClick={() => scrollTo('hero')}>
                  <span className="nav-btn-bullet">/</span> Home
                </button>
                <button className="footer-nav-btn" onClick={() => scrollTo('about')}>
                  <span className="nav-btn-bullet">/</span> About Me
                </button>
                <button className="footer-nav-btn" onClick={() => scrollTo('skills')}>
                  <span className="nav-btn-bullet">/</span> Skills
                </button>
                <button className="footer-nav-btn" onClick={() => scrollTo('projects')}>
                  <span className="nav-btn-bullet">/</span> Projects
                </button>
              </div>

              <div className="footer-links-subcol">
                <span className="footer-subcol-title">Credentials</span>
                <button className="footer-nav-btn" onClick={() => scrollTo('certifications')}>
                  <span className="nav-btn-bullet">/</span> Certifications
                </button>
                <button className="footer-nav-btn" onClick={() => scrollTo('education')}>
                  <span className="nav-btn-bullet">/</span> Education
                </button>
                <button className="footer-nav-btn" onClick={() => scrollTo('contact')}>
                  <span className="nav-btn-bullet">/</span> Contact
                </button>
                <a
                  href={personalInfo.resumeUrl}
                  download={personalInfo.resumeFilename}
                  className="footer-nav-btn footer-resume-link"
                >
                  <span className="nav-btn-bullet">/</span> Resume (CV)
                </a>
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div className="footer-social-col">
            <h4>Connect</h4>
            <div className="footer-social-row">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={personalInfo.social.email}
                className="footer-social-btn"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
            <p className="footer-available-note">
              Based in {personalInfo.location} • {personalInfo.timezone}
            </p>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <button
            className="footer-back-to-top-btn"
            onClick={() => scrollTo('hero')}
            title="Scroll to top of page"
          >
            Back to Top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
