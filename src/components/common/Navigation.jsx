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
  const [isOpen, setIsOpen] = useState(false)
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

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

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

        {/* Hamburger Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Menu Toggle</title>
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
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

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-800"
      >
        <ul className="px-4 py-2">
          {navItems.map(({ name, href }) => (
            <motion.li
              key={name}
              whileHover={{ x: 4 }}
              className="py-2"
            >
              <a
                href={href}
                onClick={closeMenu}
                className="block text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                {name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}

export default Navigation 