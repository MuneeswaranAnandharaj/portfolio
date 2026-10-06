import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  FaPython,
  FaReact,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaRobot,
} from 'react-icons/fa'
import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiTailwindcss,
  SiRedux,
  SiOpenai,
} from 'react-icons/si'
import { skillCategories, skillsData } from '../data/portfolioData'

const iconMap = {
  Python: FaPython,
  'Django & DRF': SiDjango,
  FastAPI: SiFastapi,
  'Natural Language Processing': FaRobot,
  'Machine Learning & BERT': FaRobot,
  'OpenAI API & Generative AI': SiOpenai,
  'React.js': FaReact,
  'Redux Toolkit': SiRedux,
  'HTML5 & Modern CSS3': FaHtml5,
  'Tailwind CSS & Bootstrap': SiTailwindcss,
  'AWS Cloud': FaAws,
  'PostgreSQL & MySQL': SiPostgresql,
  'Celery & Redis': SiRedis,
  'Git & GitHub': FaGitAlt,
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-wrap text-center">
          <span className="section-pill">Technical Arsenal</span>
          <h2 className="section-heading">
            Tools & Technologies I Use to <span className="gradient-text">Build Production Software</span>
          </h2>
          <p className="section-subtitle">
            Categorized overview of backend frameworks, AI/ML tools, frontend technologies, and cloud databases.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="skillFilterPill"
                  className="filter-pill-active"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="skills-cards-grid">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = iconMap[skill.name] || FaPython
              return (
                <motion.div
                  layout
                  key={skill.name}
                  className="skill-card-modern"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className="skill-card-top">
                    <div
                      className="skill-icon-cube"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}08)`,
                        borderColor: `${skill.color}40`,
                      }}
                    >
                      <Icon style={{ color: skill.color }} />
                    </div>
                    <div className="skill-badge-wrap">
                      <span className={`proficiency-badge ${skill.proficiency.toLowerCase()}`}>
                        {skill.proficiency}
                      </span>
                    </div>
                  </div>

                  <div className="skill-card-body">
                    <h4>{skill.name}</h4>
                    <span className="skill-cat-tag">{skill.category}</span>
                    <p className="skill-desc-text">{skill.description}</p>
                  </div>

                  <div className="skill-meter-wrap">
                    <div className="meter-label-row">
                      <span>Competency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="meter-track">
                      <motion.div
                        className="meter-fill"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, #a855f7)`,
                        }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.04, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
