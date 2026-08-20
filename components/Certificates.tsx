'use client'

import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const certificates = [
  {
    title: 'Product Management Certificate',
    issuer: 'Professional Certification',
    date: '2024',
    description: 'Comprehensive training in product lifecycle management, roadmap planning, and go-to-market strategies.',
    skills: ['Product Strategy', 'Roadmapping', 'User Research'],
    link: '#',
  },
  {
    title: 'Business Analysis Professional',
    issuer: 'Industry Certification',
    date: '2023',
    description: 'Mastered requirements gathering, stakeholder management, and business process modeling techniques.',
    skills: ['Requirements Analysis', 'BRD/FSD', 'Process Modeling'],
    link: '#',
  },
  {
    title: 'Agile & Scrum Masterclass',
    issuer: 'Agile Certification',
    date: '2023',
    description: 'Deep dive into Agile methodologies, Scrum framework, sprint planning, and team facilitation.',
    skills: ['Scrum', 'Sprint Planning', 'Kanban'],
    link: '#',
  },
  {
    title: 'Data Analytics with SQL & Python',
    issuer: 'Data Science Certification',
    date: '2022',
    description: 'Hands-on experience with data querying, analysis, visualization, and storytelling using SQL and Python.',
    skills: ['SQL', 'Python', 'Data Visualization'],
    link: '#',
  },
  {
    title: 'Power BI Dashboard Design',
    issuer: 'Microsoft Certification',
    date: '2022',
    description: 'Created interactive dashboards and reports for business intelligence and data-driven decision making.',
    skills: ['Power BI', 'DAX', 'Data Modeling'],
    link: '#',
  },
  {
    title: 'Cloud Foundations',
    issuer: 'Cloud Certification',
    date: '2021',
    description: 'Fundamentals of cloud computing including AWS, Azure, and GCP services and architecture.',
    skills: ['AWS', 'Azure', 'Cloud Architecture'],
    link: '#',
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
