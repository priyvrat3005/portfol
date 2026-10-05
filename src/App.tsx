import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          AC
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium">
              {link}
            </a>
          ))}
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 px-6 py-4 space-y-3">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors text-sm font-medium">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="text-center relative z-10 max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for work
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Alex Chen</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          A full-stack developer crafting beautiful, performant web experiences with modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">About Me</h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">Passionate about creating impactful digital experiences</p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center">
              <div className="text-8xl">👨‍💻</div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-2xl opacity-20 blur-xl"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I'm a full-stack developer with 5+ years of experience building web applications. I specialize in React, TypeScript, and Node.js, with a keen eye for design and user experience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while reading about the latest in tech.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS']
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Tools & Other',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma', 'Agile']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">Skills & Expertise</h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">Technologies I work with on a daily basis</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map(category => (
            <div key={category.title} className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, checkout, and payment integration. Built with React, Node.js, and Stripe.',
      tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      color: 'from-blue-500 to-cyan-500',
      emoji: '🛒'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop boards, and team chat.',
      tags: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB'],
      color: 'from-purple-500 to-pink-500',
      emoji: '📋'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts, interactive maps, and severe weather alerts.',
      tags: ['React', 'D3.js', 'OpenWeather API', 'Tailwind'],
      color: 'from-orange-500 to-red-500',
      emoji: '🌤️'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by GPT with conversation memory, context awareness, and multi-language support.',
      tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
      color: 'from-green-500 to-emerald-500',
      emoji: '🤖'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness app with workout logging, progress charts, and personalized training plans.',
      tags: ['React Native', 'Firebase', 'Charts', 'Auth'],
      color: 'from-indigo-500 to-violet-500',
      emoji: '💪'
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, SEO optimization, and a beautiful reading experience.',
      tags: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
      color: 'from-teal-500 to-blue-500',
      emoji: '✍️'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">Featured Projects</h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">A selection of my recent work</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.title} className="group rounded-2xl bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.emoji}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">alex@example.com</p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">San Francisco, CA</p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Status</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Open to opportunities</p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © 2024 Alex Chen. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
