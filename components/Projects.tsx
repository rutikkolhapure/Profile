'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiBriefcase } from 'react-icons/fi'

const personalProjects = [
  {
    title: 'T&M Engagement – Business Analysis & Delivery',
    description: 'End-to-end business analysis and delivery management for enterprise SaaS products, including requirements gathering, FSDs, user stories, and stakeholder coordination.',
    tags: ['Business Analysis', 'Agile', 'Stakeholder Management', 'UAT'],
    metrics: [
      { label: 'Stakeholders', value: '15+' },
      { label: 'Sprints', value: '12' },
      { label: 'User Stories', value: '100+' },
    ],
  },
  {
    title: 'SaaS Product Portfolio Management',
    description: 'Owned and managed a portfolio of 3 SaaS products, driving feature delivery, risk management, and executive reporting for improved delivery visibility.',
    tags: ['Product Management', 'SaaS', 'Risk Management', 'Executive Reporting'],
    metrics: [
      { label: 'Products', value: '3' },
      { label: 'Delivery Improvement', value: '40%' },
      { label: 'Team Size', value: '8' },
    ],
  },
  {
    title: 'Cloud Migration Architecture',
    description: 'Designed scalable cloud migration architectures for 7 enterprise clients, leveraging AWS, Azure, and GCP to drive operational efficiency improvements.',
    tags: ['Cloud Architecture', 'AWS', 'Azure', 'GCP', 'Enterprise'],
    metrics: [
      { label: 'Clients', value: '7' },
      { label: 'Efficiency Gain', value: '25%' },
      { label: 'Cloud Platforms', value: '3' },
    ],
  },
  {
    title: 'AI/Data Offering Strategy',
    description: 'Evaluated competitive landscape and identified strategic gaps in Data, Analytics, and AI offerings, analyzing 12 acquisition targets for long-term strategy.',
    tags: ['AI/ML', 'Competitive Analysis', 'Strategy', 'M&A'],
    metrics: [
      { label: 'Targets Evaluated', value: '12' },
      { label: 'Domains', value: '3' },
      { label: 'Impact', value: 'Strategic' },
    ],
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'Built SQL and Power BI dashboards to enable data-driven decisions across business functions, transforming raw data into actionable insights.',
    tags: ['SQL', 'Power BI', 'Data Analytics', 'Dashboarding'],
    metrics: [
      { label: 'Dashboards', value: '5+' },
      { label: 'Data Sources', value: '10+' },
      { label: 'Users Impacted', value: '50+' },
    ],
  },
  {
    title: 'Digital Transformation Roadmap',
    description: 'Led discovery of construction-finance workflows, defining problem statements and creating digital transformation roadmap to reduce manual processes.',
    tags: ['Digital Transformation', 'Process Improvement', 'Wireframing'],
    metrics: [
      { label: 'Process Steps Reduced', value: '30%' },
      { label: 'Turnaround Improvement', value: '25%' },
      { label: 'Workflows Mapped', value: '8' },
    ],
  },
]

const professionalProjects = [
  {
    title: 'Brands For Less',
    industry: 'Apparel',
    responsibilities: [
      'Gathered and documented business and functional requirements from stakeholders to define project scope',
      'Prepared Functional Specification Documents (FSDs), user stories, and wireframes to support development planning',
      'Coordinated with development, QA, and client teams to ensure alignment and timely delivery',
      'Managed sprint backlogs and supported UAT and testing cycles to ensure quality releases',
      'Conducted client demos and status presentations to communicate progress and gather feedback',
      'Created summary reports as requested to keep stakeholders informed',
      'Provided guidance and support to the team on platform-related queries and best practices',
    ],
  },
  {
    title: 'Geekay',
    industry: 'Gaming Retailer, Middle East',
    responsibilities: [
      'Documented business and functional requirements through stakeholder discussions',
      'Prepared FSDs, user stories, and wireframes for development handoff',
      'Coordinated with development, QA, and client teams for smooth execution',
      'Managed sprint backlog; supported UAT and testing cycles',
      'Conducted client demos and status presentations',
    ],
  },
  {
    title: 'Beautie&Nutrie',
    industry: 'Apparel & Accessories, India',
    responsibilities: [
      'Captured business and functional requirements from key stakeholders',
      'Drafted FSDs, user stories, and wireframes to guide the build',
      'Worked closely with development, QA, and client teams to ensure aligned delivery',
      'Owned sprint backlog management and drove UAT/testing cycles',
      'Presented client demos and project status updates',
    ],
  },
  {
    title: 'KGen',
    industry: 'Gamification Services',
    responsibilities: [
      'Captured business and functional requirements from key stakeholders',
      'Drafted FSDs, user stories, and wireframes to guide the build',
      'Worked closely with development, QA, and client teams to ensure aligned delivery',
      'Owned sprint backlog management and drove UAT/testing cycles',
      'Presented client demos and project status updates',
    ],
  },
  {
    title: 'Café Coffee Day',
    industry: 'Food & Beverage',
    responsibilities: [
      'Contributed to app wireframe design in alignment with product requirements',
      'Authored user stories to translate business needs into actionable development tasks',
      'Delivered support and customer success efforts to drive user adoption and satisfaction',
    ],
  },
  {
    title: 'House of Beauty',
    industry: 'Skincare & Wellness',
    responsibilities: [
      'Contributed to app wireframe design in alignment with product requirements',
      'Authored user stories to translate business needs into actionable development tasks',
      'Delivered support and customer success efforts to drive user adoption and satisfaction',
    ],
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional')

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Key engagements and initiatives that delivered measurable impact
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-sm shadow-slate-200/60">
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'professional'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-slate-600 hover:text-primary'
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'personal'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-slate-600 hover:text-primary'
              }`}
            >
              Personal
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'professional' ? (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {professionalProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="glass-card p-6 hover-glow group"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FiBriefcase className="text-primary" size={16} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="inline-block mt-1 px-2.5 py-0.5 bg-secondary/10 text-secondary text-xs rounded-full">
                          {project.industry}
                        </span>
                      </div>
                    </div>

                    {project.responsibilities.length > 0 && (
                      <ul className="space-y-2 mt-4">
                        {project.responsibilities.map((item, i) => (
                          <li key={i} className="text-slate-600 text-sm flex items-start gap-2 leading-relaxed">
                            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {personalProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="glass-card p-6 hover-glow group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <button className="text-slate-600 hover:text-primary transition-colors">
                        <FiGithub size={18} />
                      </button>
                      <button className="text-slate-600 hover:text-primary transition-colors">
                        <FiExternalLink size={18} />
                      </button>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold gradient-text">{metric.value}</div>
                        <div className="text-slate-500 text-xs">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
