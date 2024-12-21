import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const processSteps = [
  {
    title: "Research",
    description: "Understanding user needs through research and analysis",
    icon: "🔍",
    color: "bg-primary/20"
  },
  {
    title: "Design",
    description: "Creating intuitive and beautiful user interfaces",
    icon: "✨",
    color: "bg-secondary/20"
  },
  {
    title: "Prototype",
    description: "Building interactive prototypes for testing",
    icon: "🛠️",
    color: "bg-accent1/20"
  },
  {
    title: "Test",
    description: "Conducting user testing and gathering feedback",
    icon: "📊",
    color: "bg-accent2/20"
  }
]

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="process-bg py-20" ref={ref}>
      <div className="pattern-overlay" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.h2
          className="text-4xl font-display font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          My Design Process
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className={`${step.color} rounded-xl p-6 hover:shadow-lg transition-all`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">Design Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white rounded-full shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process 