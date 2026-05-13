import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUsers, FiAward, FiExternalLink } from 'react-icons/fi'
import { SiPython, SiSpacy, SiTensorflow } from 'react-icons/si'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const techStack = [
    'NLP', 'spaCy', 'SVM', 'BERT', 'VADER', 'LSTM',
    'Random Forest', 'XG Boost', 'Anomaly Detection',
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="project-card-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="project-card"
            whileHover={{ y: -5 }}
          >
            <div className="project-glow" />
            <div className="project-content">
              <div className="project-header">
                <span className="project-badge">Featured</span>
                <motion.div
                  className="project-icon"
                  whileHover={{ rotate: 15 }}
                >
                  <SiPython />
                </motion.div>
              </div>

              <h3>AI Based Petition Monitoring System</h3>
              <p className="project-desc">
                An NLP-powered system designed to monitor and analyze online petitions using advanced
                sentiment analysis, keyword extraction, and fraud detection capabilities. This AI-driven
                solution automates petition categorization, trend detection, and prioritization.
              </p>

              <div className="project-features-grid">
                {[
                  { icon: 'FiCheckCircle', text: 'Automated petition categorization' },
                  { icon: 'FiCheckCircle', text: 'Trend detection & prioritization' },
                  { icon: 'FiCheckCircle', text: 'Fast response & high transparency' },
                  { icon: 'FiCheckCircle', text: 'Optimized resource allocation' },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    className="project-feature"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <FiUsers />
                    <span>{f.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="project-tech-stack">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="project-meta-row">
                <div className="project-meta-item">
                  <FiUsers />
                  <span>Team Size: 2</span>
                </div>
                <div className="project-meta-item publication">
                  <FiAward />
                  <span>Published in <strong>IJIRT</strong>, Vol 11, May 2025</span>
                </div>
              </div>

              <motion.button
                className="btn btn-primary project-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink /> View Publication
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
