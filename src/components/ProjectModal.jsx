import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheckCircle, FiExternalLink, FiGithub, FiLayers, FiAward, FiCpu } from 'react-icons/fi'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <div className="modal-header">
            <div className="modal-title-group">
              <span className={`project-badge ${project.badgeType}`}>
                {project.badge}
              </span>
              <h2>{project.title}</h2>
              <p className="modal-tagline">{project.tagline}</p>
            </div>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <FiX />
            </button>
          </div>

          <div className="modal-body">
            {project.publication && (
              <div className="modal-publication-box">
                <FiAward className="pub-icon" />
                <div>
                  <strong>Academic Research Publication</strong>
                  <p>{project.publication}</p>
                </div>
              </div>
            )}

            <div className="modal-section">
              <h3>System Overview</h3>
              <p>{project.description}</p>
            </div>

            <div className="modal-section">
              <h3>Key Architecture & Features</h3>
              <div className="modal-features-list">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="modal-feature-item">
                    <FiCheckCircle className="check-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h3>Technologies & Tools</h3>
              <div className="modal-tech-wrap">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag modal-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-meta-grid">
              <div className="modal-meta-card">
                <FiLayers />
                <div>
                  <small>Project Scope</small>
                  <strong>{project.team}</strong>
                </div>
              </div>
              <div className="modal-meta-card">
                <FiCpu />
                <div>
                  <small>Key Highlight</small>
                  <strong>{project.metrics}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FiGithub /> View on GitHub
            </a>
            <button className="btn btn-outline" onClick={onClose}>
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
