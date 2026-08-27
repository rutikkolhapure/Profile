'use client'

import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiArrowRight, FiZap, FiTrendingUp } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">

      {/* Background decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase">
                Hello, I&apos;m
              </p>

              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="gradient-text">
                  Rutik Kolhapure
                </span>
              </h1>

              <div className="h-16">
                <TypeAnimation
                  sequence={[
                    'Product Manager',
                    2000,
                    'Business Analyst',
                    2000,
                    'Data-Driven Strategist',
                    2000,
                    'AI/ML Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-2xl md:text-3xl text-slate-600"
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              Product-minded Business Consultant with 3+ years of experience
              spanning product management, business analysis, and data-driven
              strategy across SaaS, BFSI, and enterprise technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium transition-all duration-300 hover-glow"
              >
                Get in Touch
                <FiArrowRight className="ml-2" />
              </a>

              <a
                href="/RutikKolhapureResume.pdf"
                download
                className="inline-flex items-center px-6 py-3 border border-primary/50 text-primary hover:bg-primary/10 rounded-lg font-medium transition-all duration-300"
              >
                Download CV
                <FiDownload className="ml-2" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">

              <a
                href="https://linkedin.com/in/rutikkolhapure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://github.com/rutikkolhapure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

            </div>
          </div>


          {/* RIGHT SIDE - PROFILE */}
          <div className="hidden lg:flex justify-center">

            {/* Profile container */}
            <div className="relative w-[400px] h-[400px] overflow-visible">

              {/* Dashed rotating circle */}
              <div className="absolute inset-5 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />

              {/* Profile image */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100 border border-slate-200 shadow-xl shadow-primary/10 z-0">

                <img
                  src="/profile.png"
                  alt="Rutik Kolhapure"
                  className="w-full h-full object-cover object-center"
                />

              </div>


              {/* EXPERIENCE CARD */}
              <div className="absolute top-10 -left-16 bg-white rounded-xl shadow-lg shadow-slate-300/50 border border-slate-100 px-4 py-3 flex items-center gap-3 z-20">

                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FiZap
                    className="text-primary"
                    size={18}
                  />
                </div>

                <div>
                  <div className="font-bold text-slate-900 text-sm leading-tight">
                    3+ Years
                  </div>

                  <div className="text-slate-500 text-xs leading-tight">
                    Product &amp; BA Experience
                  </div>
                </div>

              </div>


              {/* PRODUCTS CARD */}
              <div className="absolute bottom-10 -right-16 bg-white rounded-xl shadow-lg shadow-slate-300/50 border border-slate-100 px-4 py-3 flex items-center gap-3 z-20">

                <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FiTrendingUp
                    className="text-secondary"
                    size={18}
                  />
                </div>

                <div>
                  <div className="font-bold text-slate-900 text-sm leading-tight">
                    8+ Products
                  </div>

                  <div className="text-slate-500 text-xs leading-tight">
                    Delivered
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#experience"
          className="text-slate-500 hover:text-primary"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

    </section>
  )
}
