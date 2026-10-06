import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBookOpen, FiCalendar, FiAward, FiCheckCircle } from 'react-icons/fi'
import { educationData } from '../data/portfolioData'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-wrap text-center">
          <span className="section-pill">Academic Background</span>
          <h2 className="section-heading">
            Education & <span className="gradient-text">Foundational Learning</span>
          </h2>
          <p className="section-subtitle">
            Formal training in Computer Science & Engineering, core algorithms, and foundational sciences.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline-modern">
          <div className="timeline-spine-line" />

          {educationData.map((edu, idx) => {
            const isEven = idx % 2 === 0

            return (
              <motion.div
                key={edu.degree}
                className={`timeline-entry-row ${isEven ? 'left-entry' : 'right-entry'}`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Timeline Center Node */}
                <div className="timeline-node-center">
                  <div className="node-outer-glow" />
                  <div className="node-inner-dot">
                    <FiBookOpen className="node-icon" />
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="timeline-entry-card">
                  <div className="timeline-card-header">
                    <div className="period-pill">
                      <FiCalendar />
                      <span>{edu.period}</span>
                    </div>
                    <span className="grade-badge">{edu.score}</span>
                  </div>

                  <h3 className="timeline-degree-title">{edu.degree}</h3>
                  <p className="timeline-institution-name">{edu.institution}</p>

                  <div className="timeline-highlights-list">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="timeline-highlight-point">
                        <FiCheckCircle className="point-icon" />
                        <span>{item}</span>
                      </div>
                    ))}
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
