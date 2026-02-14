import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, Loader2 } from 'lucide-react'
import ProfileCard from '../components/ProfileCard'
import profilePic from '../assets/Screenshot_2025-08-10-11-24-11-05.png'

const Contact = () => {


  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Send me a message or connect on social media!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-md border border-slate-700 p-8 rounded-2xl shadow-xl"
          >
            <form
              action="https://formsubmit.co/rchavadar@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://localhost:5173/thank-you" /> {/* Optional: You can create a thank you page */}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <ProfileCard
              name="Rishab Chavadar"
              title="React Developer"
              handle="Code-Cool-2006"
              status="Open to Work"
              contactText="Hire Me"
              avatarUrl={profilePic}
              showUserInfo
              enableTilt={true}
              enableMobileTilt
              onContactClick={() => document.getElementById('name').focus()}
              showIcon={false}
              showBehindGlow={true}
              behindGlowColor="rgba(99, 102, 241, 0.5)"
            />
          </motion.div>
        </div>

        <div className="flex justify-center gap-8 mt-20 mb-12">
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

        <footer className="text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Portfolio. Built with React & Tailwind.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
