import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiMail, FiDownload } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const roles = ['Software Developer', 'Python Developer', 'AI/ML Enthusiast', 'Web Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const currentRole = roles[roleIndex]
  const displayText = currentRole.slice(0, charIndex)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setCharIndex(c => c + 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(c => c - 1)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex(r => (r + 1) % roles.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentRole])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-gradient" />

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-badge">
          <span className="pulse-dot" />
          Available for opportunities
        </motion.div>

        <motion.h2 variants={itemVariants} className="hero-greeting">
          Hello, I'm
        </motion.h2>

        <motion.h1 variants={itemVariants} className="hero-name">
          Muneeswaran Anandharaj
        </motion.h1>

        <motion.div variants={itemVariants} className="hero-role">
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="cursor-blink"
          >
            |
          </motion.span>
        </motion.div>

        <motion.p variants={itemVariants} className="hero-description">
          Passionate about building innovative solutions with Python, Django, and AI/ML technologies.
          Turning ideas into impactful digital experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-buttons">
          <a href="/resume.pdf" download="Muneeswaran_A_Resume.pdf" className="btn btn-download">
            <FiDownload /> Download CV
          </a>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('projects')}
          >
            View My Work
          </motion.button>
          <motion.button
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
          >
            <FiMail /> Get In Touch
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-social">
          <motion.a
            href="mailto:muneeswarananandharaj@gmail.com"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiMail />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/muneeswaran-anandharaj"
            target="_blank"
            rel="noopener"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            href="tel:+919344272624"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.button
        className="scroll-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ y: 5 }}
        onClick={() => scrollTo('about')}
      >
        <FiArrowDown />
      </motion.button>
    </section>
  )
}
