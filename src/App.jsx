import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import Navigation from './components/common/Navigation'
import Footer from './components/common/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}

export default App