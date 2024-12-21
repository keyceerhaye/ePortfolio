import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    const elements = document.querySelectorAll('a, button')
    for (const element of elements) {
      element.addEventListener('mouseenter', handleHoverStart)
      element.addEventListener('mouseleave', handleHoverEnd)
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      for (const element of elements) {
        element.removeEventListener('mouseenter', handleHoverStart)
        element.removeEventListener('mouseleave', handleHoverEnd)
      }
    }
  }, [])

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  )
}

export default CustomCursor 