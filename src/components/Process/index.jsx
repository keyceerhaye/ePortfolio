import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const processSteps = [
  {
    icon: "🔍",
    title: "Research",
    description: "Understanding user needs through research and analysis"
  },
  {
    icon: "✨",
    title: "Design",
    description: "Creating intuitive and beautiful user interfaces"
  },
  {
    icon: "🛠️",
    title: "Prototype",
    description: "Building interactive prototypes for testing"
  },
  {
    icon: "🧪",
    title: "Test",
    description: "Conducting user testing and gathering feedback"
  }
]

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div ref={ref} className="process-bg py-20">
      <div className="section-container">
        <motion.h2 
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-primary dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          My Design Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map(({ icon, title, description }, index) => (
            <motion.div
              key={title}
              className="p-6 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-4xl mb-4 block">{icon}</span>
              <h3 className="text-2xl font-display font-bold mb-3 text-primary dark:text-white">
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white">
            Design Tools I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Process 