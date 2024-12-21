import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' }
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const background = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.95)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      style={{ background }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-sm transition-all ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-display font-bold text-primary"
          whileHover={{ scale: 1.05 }}
        >
          KR
        </motion.a>
        
        <ul className="flex gap-8">
          {navItems.map(({ name, href }) => (
            <motion.li key={name} whileHover={{ y: -2 }}>
              <a
                href={href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navigation 