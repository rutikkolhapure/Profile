'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Product & Business',
    skills: [
      { name: 'Product Management', level: 95 },
      { name: 'Business Analysis', level: 90 },
      { name: 'Agile/Scrum', level: 90 },
      { name: 'Stakeholder Management', level: 85 },
      { name: 'Go-to-Market Strategy', level: 80 },
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'SQL', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'Power BI', level: 85 },
      { name: 'Tableau', level: 80 },
      { name: 'Databricks', level: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Jira', level: 90 },
      { name: 'Confluence', level: 85 },
      { name: 'Excel', level: 90 },
      { name: 'PowerPoint', level: 85 },
      { name: 'Figma', level: 70 },
    ],
  },
  {
    title: 'Domains',
    skills: [
      { name: 'SaaS', level: 90 },
      { name: 'BFSI', level: 80 },
      { name: 'Enterprise Technology', level: 85 },
      { name: 'AI/ML Products', level: 75 },
      { name: 'Data & Analytics', level: 85 },
    ],
  },
]

const certifications = [
  'Product Management',
  'Business Analysis',
  'Agile methodologies',
  'Data Analytics',
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building and scaling products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-slate-900 font-medium">PGDM, Analytics and Finance</h4>
                  <p className="text-slate-600 text-sm">Xavier Institute of Management and Entrepreneurship, Kochi</p>
                  <p className="text-primary text-sm">April 2026</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-slate-900 font-medium">Bachelor of Computer Application</h4>
                  <p className="text-slate-600 text-sm">Rani Channamma University, Belgaum</p>
                  <p className="text-primary text-sm">September 2021</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Certifications & Learning</h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm border border-primary/20"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
