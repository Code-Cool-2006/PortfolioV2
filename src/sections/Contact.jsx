import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-8 text-white"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-bold shadow-lg hover:shadow-purple-500/25 transition-all text-lg"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </motion.div>

        <div className="flex justify-center gap-8 mb-12">
          {[Github, Linkedin, Twitter].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>

        <footer className="text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Portfolio. Built with React & Tailwind.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
