import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

const GithubIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const TwitterIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

const LinkedinIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const ExternalLinkIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)

const CodeIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
)

const SunIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

// ─── Tech stack data ──────────────────────────────────────────────────────────

const TECH_STACK = [
  { name: 'Power BI', src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'SQL Server', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'Azure', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Microsoft Fabric', src: 'https://debruyn.dev/2023/all-microsoft-fabric-icons-for-diagramming-old-version/Fabric_256.svg' },
  { name: 'Databricks', src: 'https://cdn.brandfetch.io/idSUrLOWbH/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B' },
  // { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'Apache Spark', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
]

// ─── Project data ─────────────────────────────────────────────────────────────

const STATIC_PROJECTS = [
  {
    id: 1,
    title: 'dCalendarioSimples',
    description: 'Standardized, high-performance DAX dimensional model ensuring absolute consistency in time-intelligence across BI reports.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    tags: ['DAX', 'Power BI', 'Modelling'],
    github_url: 'https://github.com/wfcs/dCalendarioSimples',
    live_url: '',
  },
  {
    id: 2,
    title: 'Fabric Analytics Dashboard',
    description: 'End-to-end Microsoft Fabric Lakehouse pipeline with Dataflows Gen2 and semantic model exposing KPIs via REST API.',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80',
    tags: ['Fabric', 'Python', 'Lakehouse'],
    github_url: 'https://github.com/wfcs/',
    live_url: '',
  },
  {
    id: 3,
    title: 'semantic-link-labs',
    description: "Contributing to Microsoft Fabric's Semantic Link to expose enterprise semantic models to programmatic Python analysis.",
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tags: ['Python', 'Fabric', 'OSS'],
    github_url: 'https://github.com/wfcs/semantic-link-labs',
    live_url: '',
  },
  {
    id: 4,
    title: 'DAX Performance Toolkit',
    description: 'Collection of optimized DAX patterns and templates for Power BI enterprise rollouts with governance guardrails.',
    image: 'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=600&q=80',
    tags: ['DAX', 'Power BI', 'Governance'],
    github_url: 'https://github.com/wfcs/',
    live_url: '',
  },
  {
    id: 5,
    title: 'Dimensional Model Generator',
    description: 'Python-based tool to auto-generate star schema dimensional models from source table metadata and business rules.',
    image: 'https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?w=600&q=80',
    tags: ['Python', 'SQL', 'Star Schema'],
    github_url: 'https://github.com/wfcs/',
    live_url: '',
  },
  {
    id: 6,
    title: 'BI Governance Framework',
    description: 'Comprehensive governance templates, naming conventions, and review checklists for enterprise Power BI deployments.',
    image: 'https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?w=600&q=80',
    tags: ['Governance', 'BI', 'Power BI'],
    github_url: 'https://github.com/wfcs/',
    live_url: '',
  },
]

const TAG_COLORS = {
  'DAX': 'bg-blue-100 text-blue-700',
  'Power BI': 'bg-yellow-100 text-yellow-700',
  'Modelling': 'bg-purple-100 text-purple-700',
  'Fabric': 'bg-cyan-100 text-cyan-700',
  'Python': 'bg-green-100 text-green-700',
  'Lakehouse': 'bg-indigo-100 text-indigo-700',
  'OSS': 'bg-pink-100 text-pink-700',
  'Governance': 'bg-orange-100 text-orange-700',
  'SQL': 'bg-gray-100 text-gray-600',
  'Star Schema': 'bg-teal-100 text-teal-700',
  'BI': 'bg-rose-100 text-rose-700',
}
const getTagColor = (tag) => TAG_COLORS[tag] ?? 'bg-gray-100 text-gray-600'

const NAV_LINKS = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

// ─── Dark mode hook ───────────────────────────────────────────────────────────

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return [dark, setDark]
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = ({ activeSection, onNav, dark, setDark }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none select-none cursor-pointer" onClick={() => onNav('home')}>
          <span className="logo-text">{`{007}`}</span>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider">felipedovinho</span>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => onNav(link.toLowerCase().replace(' ', '-'))}
                className={`nav-link ${activeSection === link.toLowerCase().replace(' ', '-') ? 'text-blue-500' : ''}`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: Social + Dark toggle */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/wfcs/" target="_blank" rel="noreferrer" className="social-icon">
            <GithubIcon size={20} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-icon">
            <TwitterIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/wfcs93" target="_blank" rel="noreferrer" className="social-icon">
            <LinkedinIcon size={20} />
          </a>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="flex items-center gap-1.5 ml-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-xs font-medium"
          >
            {dark ? <SunIcon size={15} /> : <MoonIcon size={15} />}
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section id="home" className="hero-section max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <p className="text-3xl md:text-4xl font-bold leading-snug mb-1" style={{ color: 'inherit' }}>
          Hi <span role="img" aria-label="wave">👋</span>,
        </p>
        <p className="text-3xl md:text-4xl font-bold leading-snug mb-1">
          My name is
        </p>
        <p className="text-3xl md:text-4xl font-bold leading-snug mb-1">
          <span className="hero-highlight">Felipe Silva</span>
        </p>
        <p className="text-3xl md:text-4xl font-bold leading-snug">
          I build things for data
        </p>
        <p className="mt-6 hero-sub max-w-md leading-relaxed text-sm">
          Senior BI Analyst transitioning to Analytics Engineering — specializing in
          Microsoft Fabric, Dimensional Modeling, and high-performance DAX architectures.
        </p>

      </motion.div>

      {/* Profile photo — real photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="shrink-0"
      >
        <div className="relative w-52 h-52 md:w-64 md:h-64">
          <div className="absolute inset-0 rounded-full p-[3px]" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)' }}>
            <img
              src="/profile.jpg"
              alt="Felipe Silva"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

// ─── Tech Stack ───────────────────────────────────────────────────────────────

const TechStack = () => (
  <section id="tech-stack" className="tech-section">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">My Tech Stack</h2>
        <p className="section-subtitle">Technologies I've been working with recently</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        {TECH_STACK.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            title={tech.name}
          >
            <div className="tech-icon-card">
              <img src={tech.src} alt={tech.name} className="w-10 h-10 object-contain" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ─── Projects ─────────────────────────────────────────────────────────────────

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.07 }}
    className="project-card"
  >
    <img src={project.image} alt={project.title} />
    <div className="p-4">
      <h3 className="card-title font-bold text-base mb-1" style={{ color: 'inherit' }}>{project.title}</h3>
      <p className="card-desc text-xs leading-relaxed mb-3 line-clamp-3" style={{ color: '#6b7280' }}>{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className={`tag-badge ${getTagColor(tag)}`}>{tag}</span>
        ))}
      </div>
      <div className="flex gap-2 border-t border-gray-100 dark:border-gray-700 pt-3">
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noreferrer" className="btn-primary">
            <ExternalLinkIcon /> Live Preview
          </a>
        )}
        {project.github_url && (
          <a href={project.github_url} target="_blank" rel="noreferrer" className="btn-secondary">
            <CodeIcon /> View Code
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built so far</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STATIC_PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
)

// ─── Contact ──────────────────────────────────────────────────────────────────

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="max-w-2xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title mb-2">Get In Touch</h2>
        <p className="section-subtitle mb-8">
          Whether you have a project, question, or just want to say hi — my inbox is always open.
        </p>
        <a
          href="mailto:felipedovinho@email.com"
          className="inline-block px-10 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-200"
        >
          Say Hello
        </a>
      </motion.div>
    </div>
  </section>
)

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = ({ onNav }) => (
  <footer className="footer">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col leading-none cursor-pointer" onClick={() => onNav('home')}>
          <span className="logo-text">{`{007}`}</span>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider">felipedovinho</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-gray-500">
          <span>+55 (11) 9000-0000</span>
          <span className="hidden md:block">·</span>
          <span>felipedovinho@email.com</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/wfcs/" target="_blank" rel="noreferrer" className="social-icon"><GithubIcon size={18} /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-icon"><TwitterIcon size={18} /></a>
          <a href="https://linkedin.com/in/wfcs93" target="_blank" rel="noreferrer" className="social-icon"><LinkedinIcon size={18} /></a>
        </div>
      </div>

      <div className="footer-divider flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => onNav(link.toLowerCase().replace(' ', '-'))}
              className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>
        <p className="text-xs text-gray-400">
          Designed &amp; Built by{' '}
          <span className="text-blue-600 font-medium">Felipe Silva</span>
          {' '}with ❤️ and Coffee
        </p>
      </div>
    </div>
  </footer>
)

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useDarkMode()
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  // Track active section on scroll via IntersectionObserver
  useEffect(() => {
    const ids = ['home', 'tech-stack', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar
        activeSection={activeSection}
        onNav={scrollToSection}
        dark={dark}
        setDark={setDark}
      />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer onNav={scrollToSection} />
    </div>
  )
}
