import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import profilePic from '@assets/images/profile.jpg'

const Hero = () => {
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
    <section ref={heroRef} className="hero-bg min-h-screen flex items-center justify-center">
      <div className="pattern-overlay" />
      <div className="text-center space-y-8 relative">
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
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          />
          <motion.div
            className="absolute -left-4 -bottom-4 w-6 h-6 bg-primary rounded-full"
            animate={{ y: [5, -5] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.5 }}
          />
        </motion.div>

        <div ref={textRef}>
          <motion.h1 
            className="text-6xl md:text-8xl font-display font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            Hello! I'm Keycee
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl font-light text-textColor mt-4"
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
              className="px-6 py-3 bg-primary rounded-full text-white hover:shadow-lg transition-all"
            >
              View Projects
            </button>
            <button 
              type="button"
              className="px-6 py-3 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition-all"
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