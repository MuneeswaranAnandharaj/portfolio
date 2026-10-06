import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiAward,
  FiBookOpen,
  FiMapPin,
  FiGlobe,
  FiCode,
  FiCpu,
  FiServer,
  FiCheck,
  FiDownload,
  FiMail,
} from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const valuePillars = [
    {
      icon: FiServer,
      title: 'Scalable Backends',
      desc: 'Architecting robust RESTful microservices, JWT authentication, and ORM schemas with Django & FastAPI.',
    },
    {
      icon: FiCpu,
      title: 'Applied AI & NLP',
      desc: 'Developing practical NLP pipelines, BERT classifiers, sentiment scoring, and Generative AI integrations.',
    },
    {
      icon: FiCode,
      title: 'Full-Stack SPAs',
      desc: 'Building responsive, reactive user interfaces with modern React, Redux Toolkit, and Tailwind CSS.',
    },
  ]

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-wrap text-center">
          <span className="section-pill">About Me</span>
          <h2 className="section-heading">
            Engineering High-Performance Solutions with <span className="gradient-text">Precision & Innovation</span>
          </h2>
          <p className="section-subtitle">
            A look into my engineering background, technical philosophy, and published research.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="about-bento-grid">
          {/* Card 1: Visual Portrait Card */}
          <motion.div
            className="bento-card bento-portrait"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bento-portrait-frame">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="bento-portrait-img"
              />
              <div className="bento-portrait-overlay" />
              <div className="bento-portrait-info">
                <span className="portrait-role-badge">Software Developer</span>
                <h3>{personalInfo.name}</h3>
                <p className="portrait-location">
                  <FiMapPin /> {personalInfo.location}
                </p>
              </div>
            </div>

            <div className="bento-portrait-actions">
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFilename}
                className="btn btn-secondary btn-sm full-width"
              >
                <FiDownload /> Download Resume (CV)
              </a>
            </div>
          </motion.div>

          {/* Card 2: Main Story */}
          <motion.div
            className="bento-card bento-story"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bento-card-header">
              <span className="card-badge">Biography</span>
              <h3>Building with Intent & Rigor</h3>
            </div>
            <div className="bento-story-body">
              <p>
                I am a <strong>Software Developer</strong> holding a degree in{' '}
                <strong>Computer Science & Engineering</strong>. My work focuses on solving complex
                computational and product problems through clean software architecture, data modeling,
                and applied artificial intelligence.
              </p>
              <p>
                From architecting multi-tenant SaaS platforms with asynchronous Celery queues to implementing
                BERT-driven NLP classification models, I build systems engineered for reliability, speed, and real user value.
              </p>
            </div>

            <div className="story-highlights-list">
              <div className="story-highlight-item">
                <FiCheck className="highlight-check" />
                <span>Specialized in Python ecosystem (Django, FastAPI, Celery, NumPy)</span>
              </div>
              <div className="story-highlight-item">
                <FiCheck className="highlight-check" />
                <span>Hands-on cloud orchestration with AWS Academy certification</span>
              </div>
              <div className="story-highlight-item">
                <FiCheck className="highlight-check" />
                <span>Production experience connecting React frontend with secure REST APIs</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Research Spotlight Card */}
          <motion.div
            className="bento-card bento-research"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="research-badge-row">
              <span className="card-badge gold">Peer-Reviewed Paper</span>
              <span className="paper-year">May 2025</span>
            </div>
            <div className="research-content">
              <FiAward className="research-trophy" />
              <h4>AI-Based Petition Monitoring System</h4>
              <p className="research-journal">
                Published in <em>International Journal of Innovative Research in Technology (IJIRT)</em>, Volume 11.
              </p>
              <p className="research-abstract">
                Authored peer-reviewed research analyzing automated civic petition classification,
                fraud identification, and public sentiment extraction using spaCy, BERT, and ensemble machine learning models.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Quick Facts & Specs */}
          <motion.div
            className="bento-card bento-facts"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bento-card-header">
              <span className="card-badge">Quick Specs</span>
              <h3>At a Glance</h3>
            </div>
            <div className="facts-list">
              <div className="fact-item">
                <FiMapPin className="fact-icon" />
                <div>
                  <span className="fact-label">Location</span>
                  <span className="fact-value">{personalInfo.location}</span>
                </div>
              </div>
              <div className="fact-item">
                <FiGlobe className="fact-icon" />
                <div>
                  <span className="fact-label">Timezone</span>
                  <span className="fact-value">{personalInfo.timezone}</span>
                </div>
              </div>
              <div className="fact-item">
                <FiBookOpen className="fact-icon" />
                <div>
                  <span className="fact-label">Education</span>
                  <span className="fact-value">B.E. Computer Science (CGPA: 7.0)</span>
                </div>
              </div>
              <div className="fact-item">
                <FiCode className="fact-icon" />
                <div>
                  <span className="fact-label">Languages</span>
                  <span className="fact-value">English (Professional), Tamil (Native)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Engineering Pillars Row */}
        <div className="about-pillars-grid">
          {valuePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              className="pillar-card"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + idx * 0.1 }}
            >
              <div className="pillar-icon-box">
                <pillar.icon />
              </div>
              <h4>{pillar.title}</h4>
              <p>{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
