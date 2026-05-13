import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicked(true)
    const up = () => setClicked(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: 'tween', duration: 0 }}
        style={{ opacity: clicked ? 0.8 : 1, scale: clicked ? 0.5 : 1 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      />
    </>
  )
}
