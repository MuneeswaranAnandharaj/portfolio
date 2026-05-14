import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { label: 'Projects', value: '2+' },
    { label: 'Technologies', value: '8+' },
    { label: 'CGPA', value: '7.0' },
    { label: 'HSC %', value: '83%' },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a passionate <span className="highlight">Software Developer</span> with a strong
              foundation in analytics, problem-solving, and emerging technologies. My goal is to drive
              impactful and transformative projects that contribute to industry growth while continuously
              expanding my expertise.
            </p>
            <p>
              I graduated with a degree in <span className="highlight">Computer Science and Engineering</span>,
              where I developed hands-on experience in web development, AI/ML, and cloud technologies.
              I'm dedicated to continuous learning and staying at the forefront of technological innovation.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-info-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="info-card">
            <h4>Name</h4>
            <p>Muneeswaran Anandharaj</p>
          </div>
          <div className="info-card">
            <h4>Email</h4>
            <p>muneeswarananandharaj@gmail.com</p>
          </div>
          <div className="info-card">
            <h4>Location</h4>
            <p>Madurai, India</p>
          </div>
          <div className="info-card">
            <h4>Languages</h4>
            <p>English, Tamil</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
