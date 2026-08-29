'use client'

import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const certificates = [
  {
    title: 'Product Management Essentials',
    issuer: 'IBM',
    date: 'Oct, 2025',
    description: 'Comprehensive training in product lifecycle management, roadmap planning, and go-to-market strategies.',
    skills: ['Product Strategy', 'Roadmapping', 'User Research'],
    link: 'https://www.credly.com/badges/b7817cdb-270a-4618-9813-3cccb5cc7e2b/linked_in_profile',
  },
  {
    title: 'Google Project Management Professional Certificate (v2)',
    issuer: 'Coursera',
    date: 'Jun 2025',
    description: 'Mastered requirements gathering, stakeholder management, and business process modeling techniques.',
    skills: ['Agile Project Management', 'Project Scoping And Planning', 'Risk Management', 'Stakeholder Management', 'Process Improvement'],
    link: 'https://www.credly.com/badges/7364c228-09aa-4067-968e-7c50f23e6d20/linked_in_profile',
  },
  {
    title: 'Power BI Fundamentals',
    issuer: 'Agile Certification',
    date: 'Apr 2025',
    description: 'Created interactive dashboards and reports for business intelligence and data-driven decision making',
    skills: ['Dashboard Creation', 'Data Modeling', 'Business Reporting', 'Data Modeling'],
    link: 'https://www.coursera.org/account/accomplishments/verify/X9XGQWDLA9PV',
  },
  {
    title: 'Financial Technology (Fintech) Innovations',
    issuer: 'University of Michigan',
    date: 'Mar 2025',
    description: 'Gained knowledge of the Fintech solutions.',
    skills: ['Artificial Intelligence', 'Blockchain and Cryptocurrency', 'Credit Tech, Coin Offerings, and Crowdfunding'],
    link: 'https://www.coursera.org/account/accomplishments/specialization/MDDSSAT8GIQP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=s12n',
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'IBM',
    date: '2022',
    description: 'Mastered Artificial intelligence skills.',
    skills: ['LLM Application', 'Machine Learning Methods', 'Retrieval-Augmented Generation'],
    link: 'https://www.coursera.org/account/accomplishments/verify/EYEUDV5FDSYU',
  },
  {
    title: 'Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft Certified',
    date: 'Nov, 2022',
    description: 'Fundamentals of cloud computing including Azure services and architecture.',
    skills: [ 'Azure', 'Cloud Architecture', 'Data Fundamentals'],
    link: 'https://www.credly.com/badges/883b61a6-1e82-4c70-8cfb-47212d887673/linked_in?t=rlj5x7',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Continuous learning and professional development to stay ahead
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FiAward className="text-primary text-xl" />
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  <FiExternalLink size={18} />
                </a>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-secondary text-sm">{cert.issuer}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 text-sm">{cert.date}</span>
              </div>

              <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
