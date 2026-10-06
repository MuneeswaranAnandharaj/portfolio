import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaAws, FaPython, FaRobot } from 'react-icons/fa'
import { FiCalendar, FiCheck, FiAward, FiShield } from 'react-icons/fi'
import { certificationsData } from '../data/portfolioData'

const certIconMap = {
  aws: FaAws,
  python: FaPython,
  ai: FaRobot,
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="certifications-section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-wrap text-center">
          <span className="section-pill">Credentials & Validation</span>
          <h2 className="section-heading">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry-standard certifications validating expertise across cloud architecture, full-stack Python, and AI systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert, idx) => {
            const Icon = certIconMap[cert.iconType] || FaAward

            return (
              <motion.div
                key={cert.title}
                className="cert-card-modern"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                {/* Ambient glow in card background */}
                <div
                  className="cert-card-ambient"
                  style={{
                    background: `radial-gradient(circle at top right, ${cert.color}25, transparent 70%)`,
                  }}
                />

                <div className="cert-card-header">
                  <div
                    className="cert-icon-frame"
                    style={{
                      background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}0a)`,
                      borderColor: `${cert.color}44`,
                    }}
                  >
                    <Icon style={{ color: cert.color }} />
                  </div>

                  <span className="cert-status-badge">
                    <FiShield className="status-shield" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                <div className="cert-card-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>

                  <div className="cert-timeline-row">
                    <FiCalendar className="calendar-icon" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="cert-description">{cert.description}</p>
                </div>

                <div className="cert-card-footer">
                  <div className="cert-verified-pill">
                    <FiCheck />
                    <span>Skills Verified & Assessed</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
