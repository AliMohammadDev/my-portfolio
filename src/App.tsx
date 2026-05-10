/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Server, 
  Code, 
  LayoutDashboard, 
  ShoppingBag, 
  ChevronRight, 
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  ArrowUp,
  Database,
  ArrowRight
} from 'lucide-react';
import { 
  personalData, 
  skills, 
  projects, 
  services, 
  experience, 
  testimonials, 
  blogPosts 
} from './data';

// --- Custom Components ---

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent"
        >
          {personalData.name.split(' ')[0]}<span className="text-slate-400 font-light">.dev</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 dark:border-slate-800"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-emerald-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-emerald-500 font-semibold mb-2"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold"
    >
      {children}
    </motion.h2>
    <div className="w-20 h-1.5 bg-emerald-500 mt-4 rounded-full" />
  </div>
);

const SkillCard = ({ name, level, index }: { name: string; level: number; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="font-medium text-slate-700 dark:text-slate-300">{name}</span>
      <span className="text-slate-500">{level}%</span>
    </div>
    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
      />
    </div>
  </motion.div>
);

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -10 }}
    className="glass rounded-2xl overflow-hidden shadow-sm group"
  >
    <div className="relative h-60 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <div className="flex gap-4">
          <a href={project.github} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
            <Github size={20} />
          </a>
          <a href={project.demo} className="p-2 bg-emerald-500 rounded-full text-white hover:bg-emerald-600 transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        {project.category}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{project.title}</h3>
      <p className="text-slate-500 text-sm mb-4 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-slate-600 dark:text-slate-400">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate success
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-500">Name</label>
          <input required type="text" className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="John Doe" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-500">Email</label>
          <input required type="email" className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="john@example.com" />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-slate-500">Message</label>
        <textarea required rows={4} className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 transition-all outline-none" placeholder="How can I help you?" />
      </div>
      <button 
        type="submit"
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98]"
      >
        {status === 'success' ? 'Message Sent!' : 'Send Message'}
      </button>
    </form>
  );
};

// --- Main App Component ---

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <header id="home" className="min-h-screen flex items-center section-padding pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-emerald-500/10 text-emerald-500 font-bold px-4 py-2 rounded-full text-sm mb-6 uppercase tracking-widest"
            >
              Available for Hire
            </motion.span>
            <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-tight">
              Building <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Robust & Scalable</span> Backend Solutions.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm <span className="text-slate-900 dark:text-white font-semibold">{personalData.name}</span>, a Senior {personalData.role} dedicated to engineering performance-driven systems and seamless user experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#projects" 
                className="bg-emerald-500 text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-emerald-500/25 hover:bg-emerald-600 hover:-translate-y-1 transition-all flex items-center gap-3"
              >
                View Projects <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-10 py-5 rounded-full font-bold border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all shadow-lg"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
          
          {/* Animated Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-padding overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden glass p-4 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
            
            {/* Floating Bento Pieces */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-5 rounded-2xl shadow-xl z-20 border-l-4 border-emerald-500"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Code size={16} />
                </div>
                <p className="text-sm font-bold">Clean Code</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-6 glass p-6 rounded-3xl shadow-xl z-20 max-w-[280px]"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                  <Database size={24} />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">Architecture</p>
                  <p className="text-xs text-slate-500 leading-tight">Expert in scalable systems & database design.</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 blur-[100px] rounded-full -z-10" />
          </motion.div>

          <div>
            <SectionHeading subtitle="Who I am">About Me</SectionHeading>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-light">
              I'm a dedicated <span className="text-slate-900 dark:text-white font-semibold">Backend Architect</span> with a passion for building robust digital ecosystems. {personalData.bio}
            </p>
            
            {/* Bento Grid Stats */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-[2rem] border-b-4 border-emerald-500"
              >
                <MapPin className="text-emerald-500 mb-4" size={24} />
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Location</p>
                <p className="font-bold text-lg">{personalData.location}</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-[2rem] border-b-4 border-blue-500"
              >
                <Code className="text-blue-500 mb-4" size={24} />
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Degree</p>
                <p className="font-bold text-lg">Informatics Eng.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-[2rem] border-b-4 border-purple-500"
              >
                <LayoutDashboard className="text-purple-500 mb-4" size={24} />
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Experience</p>
                <p className="font-bold text-lg">4+ Years</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-[2rem] border-b-4 border-orange-500"
              >
                <Sun className="text-orange-500 mb-4" size={24} />
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Status</p>
                <p className="font-bold text-lg">Open to Hire</p>
              </motion.div>
            </div>

            <div className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Professional Journey</h4>
              <div className="space-y-12">
                {experience.map((exp: any, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform duration-300" />
                        <div className="w-0.5 h-20 bg-slate-200 dark:bg-slate-800" />
                      </div>
                      <div className="-mt-1 flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-bold text-xl group-hover:text-emerald-500 transition-colors">
                            {exp.url ? (
                              <a href={exp.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                {exp.company} <ExternalLink size={16} />
                              </a>
                            ) : exp.company}
                          </h5>
                          <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full text-slate-500">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-emerald-500 mb-3">{exp.role}</p>
                        <p className="text-slate-500 leading-relaxed text-sm">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-slate-100 dark:bg-slate-900/50 py-24">
        <div className="section-padding">
          <SectionHeading subtitle="My Toolbox">Technical Proficiency</SectionHeading>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Server className="text-emerald-500" /> Backend Core
              </h3>
              {skills.backend.map((skill, i) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Code className="text-blue-500" /> Frontend UI
              </h3>
              {skills.frontend.map((skill, i) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading subtitle="Success Stories">Selected Projects</SectionHeading>
          <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl mb-12 md:mb-0">
            {['all', 'SaaS', 'E-commerce', 'Backend'].map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${activeTab === category ? 'bg-white dark:bg-slate-800 shadow-sm text-emerald-500' : 'text-slate-500'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {projects
              .filter(p => activeTab === 'all' || p.category.includes(activeTab))
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-900 text-white py-24">
        <div className="section-padding">
          <SectionHeading subtitle="What I Offer">Specialized Services</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  {service.icon === 'Server' && <Server />}
                  {service.icon === 'Code' && <Code />}
                  {service.icon === 'LayoutDashboard' && <LayoutDashboard />}
                  {service.icon === 'ShoppingBag' && <ShoppingBag />}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a href="#contact" className="mt-6 flex items-center gap-2 text-emerald-500 font-bold text-sm">
                  Learn More <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Resume Section */}
      <section className="section-padding bg-emerald-500/5 dark:bg-emerald-500/10 rounded-[4rem] mx-6">
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeading subtitle="Resume">Ready to Work Together?</SectionHeading>
          <p className="text-lg text-slate-500 mb-10">
            For more details about my technical journey, university background, and complete project list, feel free to download my full CV or reach out directly.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-3 active:scale-95">
              <Download size={24} /> Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <SectionHeading subtitle="Get in touch">Contact Me</SectionHeading>
            <p className="text-lg text-slate-500 mb-12">
              Have a project in mind or want to discuss a potential partnership? I'm always open to new opportunities and technical challenges.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                  <Mail size={24} className="group-hover:text-emerald-500 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Me</p>
                  <p className="text-xl font-bold">{personalData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                  <Phone size={24} className="group-hover:text-emerald-500 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Me</p>
                  <p className="text-xl font-bold">{personalData.phone}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={personalData.github} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"><Github size={20}/></a>
              <a href={personalData.linkedin} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"><Linkedin size={20}/></a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"><Mail size={20}/></a>
            </div>
          </div>

          <div className="glass p-10 rounded-[2.5rem] shadow-xl">
            <h3 className="text-2xl font-bold mb-8">Send me a message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-slate-500">&copy; 2026 {personalData.name}. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href="#home" className="text-sm font-medium hover:text-emerald-500">Home</a>
            <a href="#projects" className="text-sm font-medium hover:text-emerald-500">Privacy Policy</a>
            <a href="#about" className="text-sm font-medium hover:text-emerald-500">Terms of Use</a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:-translate-y-2 transition-all transition-duration-300 z-50 active:scale-90"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

