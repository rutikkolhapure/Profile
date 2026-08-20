'use client'

import { motion } from 'framer-motion'
import { FiCompass } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 md:p-10 space-y-6 text-slate-600 leading-relaxed"
        >
          <p>
            I am a Product-minded Business Consultant with{' '}
            <span className="text-primary font-semibold">3+ years</span> of experience turning
            ambiguous problems into shipped solutions across SaaS, BFSI, and enterprise
            technology. I sit at the intersection of product thinking, business analysis, and
            delivery — owning roadmaps, translating stakeholder needs into prioritized
            requirements, and leading cross-functional teams from discovery through
            go-to-market.
          </p>

          <p>
            At <span className="text-secondary font-medium">Techtree IT Systems</span>, I own
            product roadmap and delivery strategy for a portfolio of SaaS products, driving
            data-informed decisions through SQL and Power BI dashboards and presenting weekly
            visibility to senior leadership. Previously, I led a cross-functional team of 8 to
            strategize and ship features that drove a{' '}
            <span className="text-primary font-semibold">30% increase</span> in user engagement
            and a <span className="text-primary font-semibold">20% lift</span> in customer
            satisfaction, while streamlining delivery processes that cut project timelines by{' '}
            <span className="text-primary font-semibold">120 basis points</span>. Recognized as{' '}
            <span className="text-slate-900 font-semibold">Star Performer</span> for high-impact
            delivery during UAT and production deployment.
          </p>

          <p>
            At <span className="text-secondary font-medium">Wipro</span>, I shaped solution
            architecture and pricing strategy for end-to-end RFP proposals across Insurance and
            Banking clients, spanning Data, Analytics, and AI offerings. I designed cloud
            migration architecture for{' '}
            <span className="text-primary font-semibold">7 enterprise clients</span> targeting{' '}
            <span className="text-primary font-semibold">25% improvements</span> in operational
            efficiency and delivered competitive benchmarking analysis that directly shaped
            go-to-market execution.
          </p>

          <p>
            Across key engagements —{' '}
            <span className="text-slate-900 font-medium">
              BFL, Geekay, Beautie&amp;Nutrie, KGen, HOB and CCD
            </span>{' '}
            — I&apos;ve led end-to-end product lifecycles: from stakeholder discovery and
            functional scoping through FSDs, user stories, wireframes, sprint execution, UAT,
            and post-launch adoption. I&apos;m most effective when I can bridge the gap between
            business goals and technical execution, ensuring what gets built is what matters.
          </p>

          <p>
            I hold a PGDM in Analytics and Finance from Xavier Institute of Management and
            Entrepreneurship, Kochi, and a BCA from Rani Channamma University, Belgaum.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 mt-8 border-l-4 border-primary"
        >
          <div className="flex items-center gap-2 mb-3 text-primary font-semibold text-sm uppercase tracking-wide">
            <FiCompass size={18} />
            My Philosophy
          </div>
          <p className="text-slate-700 italic leading-relaxed">
            Real authority isn&apos;t given — it&apos;s earned through understanding. I go deep
            into a system&apos;s workflows, its data, its edges until I know what needs to
            change, then I build it. Because an opinion without a working solution behind it
            isn&apos;t insight — it&apos;s speculation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
