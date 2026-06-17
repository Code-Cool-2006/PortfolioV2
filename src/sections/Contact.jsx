import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import ProfileCard from '../components/ProfileCard'
import profilePic from '../assets/Screenshot_2025-08-10-11-24-11-05.png'

const Contact = () => {
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, success: false, error: null })

    try {
      const form = e.target
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null })
        form.reset()
      } else {
        const data = await response.json()
        throw new Error(data.message || 'Failed to submit the form.')
      }
    } catch (err) {
      setStatus({ 
        submitting: false, 
        success: false, 
        error: err.message || 'There was an issue sending your message. Please try again.' 
      })
    }
  }

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Code-Cool-2006', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Email', href: 'mailto:rchavadar@gmail.com', icon: Mail }
  ]

  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mb-6 text-white">Get In Touch</h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto font-light">
            Have an opportunity, a project proposal, or simply want to connect? Send me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-7 glass-card p-8 rounded-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status.success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-pulse" />
                  <h3 className="text-2xl font-bold font-display text-white">Message Sent!</h3>
                  <p className="text-slate-300 max-w-sm">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus(prev => ({ ...prev, success: false }))}
                    className="mt-6 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-all border border-slate-700"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  action="https://formsubmit.co/ajax/rchavadar@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {status.error && (
                    <div className="p-4 rounded-lg bg-red-950/50 border border-red-500/30 flex items-start gap-3 text-red-300 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent text-white placeholder-slate-600 transition-all outline-none text-sm md:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent text-white placeholder-slate-600 transition-all outline-none text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent text-white placeholder-slate-600 transition-all outline-none resize-none text-sm md:text-base"
                      placeholder="What's on your mind?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 disabled:from-indigo-800 disabled:to-indigo-900 text-white rounded-xl font-bold shadow-lg shadow-indigo-950/50 hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Profile Card Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="w-full max-w-sm">
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
                onContactClick={() => {
                  const nameInput = document.getElementById('name');
                  if (nameInput) nameInput.focus();
                }}
                showIcon={false}
                showBehindGlow={true}
                behindGlowColor="rgba(99, 102, 241, 0.45)"
              />
            </div>
          </motion.div>
        </div>

        {/* Footer & Socials */}
        <div className="mt-28 pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} Rishab Chavadar. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:scale-105 transition-all duration-300"
                  title={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
