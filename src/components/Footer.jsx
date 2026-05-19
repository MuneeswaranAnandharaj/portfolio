import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <span className="footer-logo">My Profile</span>
          <p>&copy; {new Date().getFullYear()} Muneeswaran Anandharaj. All rights reserved.</p>
        </div>
        <div className="footer-social">
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
            href="https://github.com/MuneeswaranAnandharaj"
            target="_blank"
            rel="noopener"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="tel:+919344272624"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
