import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUsers, FiAward, FiExternalLink, FiCalendar, FiTool } from 'react-icons/fi'
import { FaCar, FaPython, FaReact } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'

const projects = [
  {
    title: 'Car Rental Management System',
    badge: 'Solo Project',
    badgeColor: '#22c55e',
    icon: FaCar,
    iconColor: '#22c55e',
    description: 'A full-stack car rental platform built with React and Django. Users can browse available vehicles, make reservations, manage bookings, and process payments. Features an admin dashboard for fleet management, booking analytics, and customer management.',
    features: [
      'Car inventory management & real-time availability',
      'Online booking & reservation system',
      'User authentication & profile management',
      'Admin analytics dashboard',
    ],
    techStack: ['React', 'Django', 'Django REST Framework', 'PostgreSQL', 'Bootstrap', 'JWT Auth', 'Stripe Payments'],
    team: 'Solo',
    publication: null,
  },
  {
    title: 'AI Based Petition Monitoring System',
    badge: 'Featured',
    badgeColor: null,
    icon: FaPython,
    iconColor: null,
    description: 'An NLP-powered system designed to monitor and analyze online petitions using advanced sentiment analysis, keyword extraction, and fraud detection capabilities. This AI-driven solution automates petition categorization, trend detection, and prioritization.',
    features: [
      'Automated petition categorization',
      'Trend detection & prioritization',
      'Fast response & high transparency',
      'Optimized resource allocation',
    ],
    techStack: ['NLP', 'spaCy', 'SVM', 'BERT', 'VADER', 'LSTM', 'Random Forest', 'XG Boost', 'Anomaly Detection'],
    team: 'Team of 2',
    publication: 'Published in IJIRT, Vol 11, May 2025',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

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

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="project-card-wrapper"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
            >
              <motion.div
                className="project-card"
                whileHover={{ y: -5 }}
              >
                <div className="project-glow" style={project.badgeColor ? undefined : { opacity: 0.5 }} />
                <div className="project-content">
                  <div className="project-header">
                    <span
                      className="project-badge"
                      style={project.badgeColor ? { background: project.badgeColor } : undefined}
                    >
                      {project.badge}
                    </span>
                    <motion.div
                      className="project-icon"
                      whileHover={{ rotate: 15 }}
                      style={project.iconColor ? { color: project.iconColor } : undefined}
                    >
                      <project.icon />
                    </motion.div>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-features-grid">
                    {project.features.map((f, i) => (
                      <motion.div
                        key={i}
                        className="project-feature"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + idx * 0.1 + i * 0.1 }}
                      >
                        <FiCalendar />
                        <span>{f}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="project-tech-stack">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={tech}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.6 + idx * 0.05 + i * 0.05 }}
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
                      <span>{project.team}</span>
                    </div>
                    {project.publication && (
                      <div className="project-meta-item publication">
                        <FiAward />
                        <span>{project.publication}</span>
                      </div>
                    )}
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
