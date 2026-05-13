import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    year: '2025',
    degree: 'B.E. Computer Science and Engineering',
    institution: 'AAA College of Engineering & Technology',
    detail: 'CGPA: 7.0 (up to 8th semester)',
  },
  {
    year: '2021',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'S.B.K Hr. Sec. School',
    detail: 'Percentage: 83%',
  },
  {
    year: '2019',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'S.B.K Hr. Sec. School',
    detail: 'Percentage: 74.8%',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="timeline">
          {education.map((edu, i) => (
            <motion.div
              key={edu.year}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <motion.div
                className="timeline-dot"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.2 + 0.3, type: 'spring' }}
              />
              <motion.div
                className="timeline-card"
                whileHover={{ scale: 1.02 }}
              >
                <span className="timeline-year">{edu.year}</span>
                <h3>{edu.degree}</h3>
                <p className="timeline-institution">{edu.institution}</p>
                <p className="timeline-detail">{edu.detail}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
