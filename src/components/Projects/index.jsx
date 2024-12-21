import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import visualNotesImg from '@assets/images/VisualNote.png'
import SherlockvsMoriarty from '@assets/images/SherlockvsMoriarty.png'
import MPI from '@assets/images/MPI.png'
import PawsitiveAdoptions from '@assets/images/PawsitiveAdoptions.png'

const projects = [
  {
    title: "Visual Notes",
    description: "An AI note taking app that generates notes from images",
    image: visualNotesImg,
    tags: ["OpenAI", "React", "PostgreSQL", "TailwindCSS", "Figma"],
    github: "https://github.com/Illamapalooza/visualnote-ai"
  },
  {
    title: "Sherlock vs. Moriarty goes to CDO",
    description: "A visual novel game built with Renpy and Python about the famous detective and his arch-nemesis",
    image: SherlockvsMoriarty,
    tags: ["Game Development", "Ren'Py", "Python"],
    github: "https://github.com/keyceerhaye/SherlockvsMoriarty"
  },
  {
    title: "Optimising Square Root Count Sort using Message Passing Interface (MPI)",
    description: "This study successfully optimized the Square Root Count Sort algorithm through parallel processing using Message Passing Interface (MPI), resulting in improved computational efficiency and reduced processing time for large datasets",
    image: MPI,
    tags: ["Algorithm", "MPI ", "Parallel Processing", "C++"],
    drive: "https://drive.google.com/file/d/11ZOY1lcs8r6FsCpapZgly84vlF_MAJcc/view"
  },
  {
    title: "Pawsitive Adoptions",
    description: "Pawsitive Adoption is a thoughtfully designed mobile app UI/UX concept streamlining the pet adoption process by connecting potential pet parents with shelter animals through an intuitive interface.",
    image: PawsitiveAdoptions,
    tags: ["UI/UX", "Figma", "Mobile Design", "Prototyping"],
    figma: "https://www.figma.com/design/UmsoDNkohvHSdWHPepU5aP/Pawsitive-Adoption?node-id=1-19&t=kyyJWDYAgcjgvd4R-0"
  }
]

const CodeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <title>Code</title>
    <path d="M8.293 6.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 13 8.293 7.707a1 1 0 0 1 0-1.414z"/>
  </svg>
)

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="projects-bg py-20" ref={ref}>
      <div className="pattern-overlay" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl font-display font-bold text-center mb-12 text-primary dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video bg-gray-100 dark:bg-gray-700">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-sm px-3 py-1 bg-secondary/20 dark:bg-secondary-dark/20 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary dark:bg-primary-dark text-white rounded-lg hover:shadow-md transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <title>GitHub</title>
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </motion.a>
                  )}
                  {(project.figma || project.drive) && (
                    <motion.a
                      href={project.figma || project.drive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary-dark transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CodeIcon />
                      View Link
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 