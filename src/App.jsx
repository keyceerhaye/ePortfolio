import { useEffect } from 'react'
import { motion } from 'framer-motion'
import CustomCursor from './components/common/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import Navigation from './components/common/Navigation'
import Footer from './components/common/Footer'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      <Navigation />
      <main className="relative">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </motion.div>
  )
}

export default App 