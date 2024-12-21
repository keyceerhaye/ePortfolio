import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { GitHubIcon, LinkedInIcon, FacebookIcon, DiscordIcon } from '../common/SocialIcons'

const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/keyceerhaye',
    icon: GitHubIcon
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/keycee-rivas-854855264/',
    icon: LinkedInIcon
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/keycee.rhaye.2024/',
    icon: FacebookIcon
  },
  {
    platform: 'Discord',
    url: 'https://discordapp.com/users/412289341482729472',
    icon: DiscordIcon
  }
]

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        'service_7m9bszj', 
        'template_77o5x3i', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        's-CwQi4ltSfs1sAKm' 
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div ref={ref} className="contact-bg py-20">
      <div className="section-container">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-center mb-8 text-primary dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="max-w-xl mx-auto space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition-all resize-none"
              required
            />
          </div>

          {status.message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center ${
                status.type === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg transition-all ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        {/* Divider */}
        <div className="max-w-4xl mx-auto flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <p className="text-gray-400 dark:text-gray-500">or</p>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Social Links */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-display font-medium text-gray-600 dark:text-gray-300 mb-6">
            Connect with me on social media
          </h3>
          <div className="flex justify-center gap-8">
            {socialLinks.map(({ platform, url, icon: Icon }) => (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
                whileHover={{ y: -3 }}
                title={platform}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 