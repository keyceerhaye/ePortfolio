import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  "UI Design", "UX Research", "Prototyping", 
  "User Testing", "Frontend Dev", "Figma",
  "React", "TailwindCSS", "JavaScript"
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="about-bg py-20">
      <div className="pattern-overlay" />
      <div className="max-w-6xl mx-auto px-4 relative" ref={ref}>
        <motion.h2 
          className="text-4xl font-display font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed">
              I'm a passionate UI/UX designer and developer with a keen eye for creating 
              beautiful, functional, and user-centered digital experiences. My approach 
              combines creative design thinking with technical expertise to build 
              solutions that users love.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 