import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import profilePic from '@assets/images/profilePic.jpg'
import { useTheme } from '@context/ThemeContext'

const Hero = () => {
  const { isDark, toggleTheme } = useTheme()
  const heroRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero-bg min-h-screen flex items-center justify-center dark:bg-background-dark transition-colors duration-0">
      <div className="pattern-overlay" />
      <div className="text-center space-y-8 relative">
        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-4 w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-0 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">
            {isDark ? '🌞' : '🌙'}
          </span>
        </motion.button>

        {/* Profile Picture Container */}
        <motion.div
          className="relative mx-auto mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
        >
          {/* Decorative Background Circles */}
          <div className="absolute inset-0 -m-4 bg-gradient-to-r from-primary/30 via-accent2/30 to-secondary/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent1 to-secondary rounded-full opacity-20" />
          
          {/* Profile Picture Frame */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/50 shadow-xl">
            <img
              src={profilePic}
              alt="Keycee Rhaye"
              className="w-full h-full object-cover"
            />
            
            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 transition-opacity"
              whileHover={{ opacity: 1 }}
            />
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -right-4 -top-4 w-8 h-8 bg-accent2 rounded-full"
            animate={{ y: [-5, 5] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 2 }}
          />
          <motion.div
            className="absolute -left-4 -bottom-4 w-6 h-6 bg-primary rounded-full"
            animate={{ y: [5, -5] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 2.5 }}
          />
        </motion.div>

        <div ref={textRef}>
          <motion.h1 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="text-6xl md:text-8xl font-display font-bold text-primary dark:text-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Hello! I'm Keycee
          </motion.h1>
          <motion.p 
            onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}
            className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-200 mt-4 cursor-pointer hover:text-primary dark:hover:text-primary-dark transition-colors"
            whileHover={{ y: -5 }}
          >
            UI/UX Designer & Developer
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button 
              type="button"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full hover:shadow-lg transition-all"
            >
              View Projects
            </button>
            <button 
              type="button"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border-2 border-primary hover:border-primary/90 text-primary dark:text-white rounded-full hover:bg-primary hover:text-white transition-all"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 