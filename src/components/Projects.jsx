import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiAward, FiCheckCircle, FiExternalLink, FiGithub, FiLayers, FiMaximize2 } from 'react-icons/fi'
import { FaRobot, FaShareAlt, FaCar, FaTools } from 'react-icons/fa'
import { projectCategories, projectsData } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

const projectIconMap = {
  'petition-ai': FaRobot,
  'saas-scheduler': FaShareAlt,
  'car-rental': FaCar,
  'feedback-board': FaTools,
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-wrap text-center">
          <span className="section-pill">Featured Work</span>
          <h2 className="section-heading">
            Production Systems & <span className="gradient-text">Applied Engineering</span>
          </h2>
          <p className="section-subtitle">
            Explore full-stack platforms, asynchronous SaaS engines, and peer-reviewed AI research.
          </p>
        </div>

        {/* Project Category Filters */}
        <div className="projects-filter-tabs">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="projectFilterPill"
                  className="filter-pill-active"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-cards-grid">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const Icon = projectIconMap[project.id] || FaRobot

              return (
                <motion.article
                  layout
                  key={project.id}
                  className="project-card-premium"
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  {/* Glowing corner gradient */}
                  <div
                    className="project-corner-glow"
                    style={{
                      background: `radial-gradient(circle at top right, ${project.accentColor}33, transparent 70%)`,
                    }}
                  />

                  {/* Header Row */}
                  <div className="project-top-row">
                    <div className="project-icon-box" style={{ borderColor: `${project.accentColor}44` }}>
                      <Icon style={{ color: project.accentColor }} />
                    </div>

                    <div className="project-badges-row">
                      <span className={`project-badge ${project.badgeType}`}>
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Academic paper banner */}
                  {project.publication && (
                    <div className="project-pub-banner">
                      <FiAward className="pub-badge-icon" />
                      <span>{project.publication}</span>
                    </div>
                  )}

                  {/* Title & Tagline */}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline-text">{project.tagline}</p>
                  <p className="project-body-desc">{project.description}</p>

                  {/* Highlight Features */}
                  <div className="project-features-list">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="feature-line">
                        <FiCheckCircle className="feat-check" style={{ color: project.accentColor }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="project-stack-wrap">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="project-footer-actions">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FiMaximize2 /> View Architecture
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      title="View GitHub Repository"
                    >
                      <FiGithub /> Repository
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* In-depth Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
