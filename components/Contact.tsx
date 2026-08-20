'use client'

import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'rutik.kolhapure@gmail.com',
    href: 'mailto:rutik.kolhapure@gmail.com',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rutikkolhapure',
    href: 'https://linkedin.com/in/rutikkolhapure',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/rutikkolhapure',
    href: 'https://github.com/rutikkolhapure',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Karnataka, India',
    href: '#',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about product and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">{item.label}</p>
                      <p className="text-slate-900 group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Current Focus</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-slate-700">Product Management Roles</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-slate-700">Business Analysis Opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-slate-700">AI/ML Product Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span className="text-slate-700">Open to Freelance Consulting</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-slate-600 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="How can I help you?"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-sm mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium transition-all duration-300 hover-glow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
