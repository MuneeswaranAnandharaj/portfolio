import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaAws } from 'react-icons/fa'
import { SiDjango, SiPostgresql, SiMysql } from 'react-icons/si'

const skills = [
  { name: 'Python', icon: FaPython, level: 85, color: '#3776AB' },
  { name: 'HTML5', icon: FaHtml5, level: 90, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, level: 85, color: '#1572B6' },
  { name: 'SQL', icon: SiMysql, level: 80, color: '#4479A1' },
  { name: 'Bootstrap', icon: FaBootstrap, level: 80, color: '#7952B3' },
  { name: 'Django', icon: SiDjango, level: 75, color: '#092E20' },
  { name: 'AWS', icon: FaAws, level: 65, color: '#FF9900' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 70, color: '#336791' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="skill-icon-wrapper"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon style={{ color: skill.color }} />
              </motion.div>
              <h3>{skill.name}</h3>
              <div className="skill-bar-container">
                <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar-fill"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                  />
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
