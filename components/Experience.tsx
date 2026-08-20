'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Associate Business Consultant',
    company: 'Techtree IT Systems Pvt Ltd',
    location: 'Belgaum, Karnataka',
    period: 'April 2026 – Present',
    highlights: [
      'Own product roadmap and delivery strategy for a portfolio of 2 SaaS products',
      'Present weekly progress and risk reporting to senior leadership',
      'Improved delivery visibility and accelerated issue resolution by 40%',
      'Build SQL and Power BI dashboards for data-informed product decisions',
    ],
  },
  {
    title: 'Product Intern',
    company: 'Sukruni Agencies and Technologies',
    location: 'Belgaum, Karnataka',
    period: 'May 2025 – July 2025',
    highlights: [
      'Led rapid discovery of construction-finance workflows',
      'Defined problem statements shaping digital transformation roadmap',
      'Created process flows, wireframes, and feature documentation',
      'Identified automation and analytics-driven product opportunities',
    ],
  },
  {
    title: 'Associate Business Consultant',
    company: 'Techtree IT Systems Pvt Ltd',
    location: 'Belgaum, Karnataka',
    period: 'March 2023 – July 2024',
    highlights: [
      'Led cross-functional team of 8 to ship SaaS product features',
      'Drove 30% increase in user engagement',
      'Lifted customer satisfaction by 20% through product improvements',
      'Recognized as Star Performer for high-impact delivery',
    ],
  },
  {
    title: 'Scholar Trainee',
    company: 'Wipro',
    location: 'Bangalore, Karnataka',
    period: 'October 2021 – February 2023',
    highlights: [
      'Shaped solution architecture for end-to-end RFP proposals',
      'Evaluated 12 potential acquisition targets for AI/Data strategy',
      'Designed cloud migration architecture for 7 enterprise clients',
      'Targeted 25% improvements in operational efficiency',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Building products and driving impact across SaaS, BFSI, and enterprise technology
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-silver hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center`}
              >
                <div className="w-full md:w-5/12">
                  <div className="glass-card p-6 hover-glow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                    <p className="text-secondary mb-1">{exp.company}</p>
                    <p className="text-slate-500 text-sm mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-start gap-2 leading-relaxed">
                          <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex w-1/12 justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md shadow-slate-300" />
                </div>

                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
