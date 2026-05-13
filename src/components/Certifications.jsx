import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaAws, FaPython, FaRobot } from 'react-icons/fa'
import { FiCalendar } from 'react-icons/fi'

const certifications = [
  {
    title: 'Full Stack Python Developer',
    institution: 'Certification Program',
    date: 'November 20, 2026 - March 20, 2026',
    icon: FaPython,
    color: '#3776AB',
  },
  {
    title: 'AWS Cloud Architecting',
    institution: 'AWS Academy',
    date: 'Issued on March 8, 2024',
    icon: FaAws,
    color: '#FF9900',
  },
  {
    title: 'AI Full Stack Developer',
    institution: 'Certification Program',
    date: 'March 20, 2026 - April 20, 2026',
    icon: FaRobot,
    color: '#06B6D4',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="cert-card-wrapper"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <motion.div
                className="cert-card"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="cert-glow" style={{
                  background: `radial-gradient(circle, ${cert.color}22, transparent 70%)`
                }} />
                <motion.div
                  className="cert-icon-wrapper"
                  style={{
                    background: `linear-gradient(135deg, ${cert.color}33, ${cert.color}08)`
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <cert.icon style={{ color: cert.color }} />
                </motion.div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p className="cert-institution">{cert.institution}</p>
                  <div className="cert-date">
                    <FiCalendar />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
