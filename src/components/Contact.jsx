import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formState
    window.location.href = `mailto:muneeswarananandharaj@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  const contactItems = [
    { icon: FiMail, label: 'Email', value: 'muneeswarananandharaj@gmail.com', href: 'mailto:muneeswarananandharaj@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 9344272624', href: 'tel:+919344272624' },
    { icon: FiMapPin, label: 'Location', value: 'Madurai, India', href: null },
    { icon: FaLinkedinIn, label: 'LinkedIn', value: 'muneeswaran-anandharaj', href: 'https://linkedin.com/in/muneeswaran-anandharaj' },
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Work Together</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

            <div className="contact-items">
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href || '#'}
                  className={`contact-item ${!item.href ? 'no-link' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon-box">
                    <item.icon />
                  </div>
                  <div className="contact-text">
                    <h4>{item.label}</h4>
                    <span>{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Your Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Your Email</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Subject</label>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="4"
                required
                placeholder=" "
              />
              <label>Your Message</label>
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary btn-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
