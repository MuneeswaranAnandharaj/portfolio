import { motion } from 'framer-motion'
import { FiMail, FiArrowUp, FiHeart } from 'react-icons/fi'
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
              Engineering full-stack architectures, high-performance Python services, and intelligent AI solutions.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-nav-col">
            <h4>Navigation</h4>
            <div className="footer-links-list">
              {['about', 'skills', 'projects', 'certifications', 'education', 'contact'].map(
                (sec) => (
                  <button
                    key={sec}
                    className="footer-nav-btn"
                    onClick={() => scrollTo(sec)}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </button>
                )
              )}
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
          <p className="footer-built-with">
            Built with React, Framer Motion & Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
