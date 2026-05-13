import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => {
        const el = document.getElementById(link.id)
        if (!el) return { id: link.id, top: 0 }
        return { id: link.id, top: el.getBoundingClientRect().top + window.scrollY - 200 }
      })

      const current = sections.reduce((acc, section) => {
        if (window.scrollY >= section.top) return section.id
        return acc
      }, 'hero')
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <motion.a
          href="#hero"
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => { e.preventDefault(); scrollTo('hero') }}
        >
          My Profile
        </motion.a>

        <ul className="nav-links desktop">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <button
                className={`nav-link ${active === link.id ? 'active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
                {active === link.id && (
                  <motion.div
                    layoutId="navIndicator"
                    className="nav-indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </ul>

        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                className={`mobile-nav-link ${active === link.id ? 'active' : ''}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
