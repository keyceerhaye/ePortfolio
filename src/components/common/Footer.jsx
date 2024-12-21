import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="pattern-overlay opacity-[0.02]" />
      <div className="max-w-6xl mx-auto px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300">
            © {currentYear} Keycee Rhaye Rivas. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Made with ❤️ using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 