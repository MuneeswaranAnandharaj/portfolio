import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [clicked, setClicked] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isPointerFine, setIsPointerFine] = useState(false)

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsPointerFine(true)
    } else {
      return
    }

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const down = () => setClicked(true)
    const up = () => setClicked(false)
    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [visible])

  if (!isPointerFine || !visible) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: clicked ? 0.6 : 1,
        }}
        transition={{ type: 'tween', duration: 0 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: clicked ? 1.3 : 1,
          borderColor: clicked ? 'rgba(99, 102, 241, 0.8)' : 'rgba(99, 102, 241, 0.35)',
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 20, mass: 0.1 }}
      />
    </>
  )
}
