import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  "UI Design", "UX Research", "Prototyping"
  , "Frontend Dev", "Figma",
  "React", "TailwindCSS", "JavaScript" , "Git" , "GitHub" , "Python"
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div ref={ref} className="about-bg py-20">
      <div className="section-container">
        <motion.h2 
          className="text-4xl md:text-5xl font-display font-bold text-center mb-8 text-primary dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          About Me
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          I'm a passionate UI/UX designer and developer with a keen eye for creating beautiful, functional, and user-centered digital experiences. My approach combines creative design thinking with technical expertise to build solutions that users love.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default About 