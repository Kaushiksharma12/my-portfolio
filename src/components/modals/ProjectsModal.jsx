import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalWrapper from './ModalWrapper';

export default function ProjectsModal({ isOpen, onClose }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'pocket-arcadex',
      title: 'Pocket ArcadeX',
      category: 'self',
      categoryLabel: 'Featured Self Project',
      badgeColor: '#7C5CFF',
      featured: true,
      description: 'A premium, cross-platform multiplayer board gaming platform allowing users to play instantly from any device without installation. Designed with a mobile-first philosophy.',
      problem: 'Traditional mobile and web gaming platforms require bulky installations, app store approvals, and separate codebase management for iOS, Android, and Web, resulting in high latency and complex multiplayer state sync across devices.',
      solution: 'Engineered a unified Progressive Web App (PWA) powered by Next.js 16 and Capacitor. Implemented web-socket room synchronization for real-time multiplayer, AI bot fallback engines, and offline asset caching via service workers.',
      challenges: [
        'Memory Leak Elimination: Fixed JS heap leaks during frequent game room destruction by implementing explicit cleanup handlers for web sockets and timers.',
        'Cross-Platform Capacitor Wrapper: Unified Next.js SSG asset bundling with Capacitor native bridges for native Android/iOS shell execution.'
      ],
      highlights: [
        '5 Multiplayer Games',
        'Progressive Web App (PWA)',
        'Cross Platform (Android, iOS & Web)',
        'Offline Support',
        'Online Multiplayer',
        'React 19',
        'Next.js 16',
        'TypeScript',
        'Capacitor'
      ],
      features: [
        'Architecture: Modular, decoupled application architecture leveraging Next.js App Router, optimized for multi-platform wrapping with Capacitor.',
        'Games Implemented: Integrated 5 popular board games (Ludo, Chess, Tic-Tac-Toe, Connect 4, Snakes & Ladders) with unified multiplayer state management.',
        'Game Modes: Supports single-player with adjustable difficulty AI bots, local pass-and-play, and real-time online multiplayer.',
        'Synchronization: Real-time room creation and gameplay sync using web sockets, with robust connection recovery after user disconnect/refresh.',
        'PWA Structure: Implemented service workers for offline asset caching, installation prompts, and seamless background updates.',
        'Performance: Eliminated JS heap memory leaks during game session destruction and optimized asset loading for instant starts.'
      ],
      tags: ['Next.js', 'React', 'TypeScript', 'Capacitor', 'PWA', 'Tailwind CSS', 'Service Workers', 'Vercel'],
      demoUrl: 'https://pocket-arcade-x.vercel.app/',
      githubUrl: 'https://github.com/Kaushiksharma12'
    },
    {
      id: 'lead-scraping',
      title: 'Lead Scraping Automation Tool',
      category: 'internship',
      categoryLabel: 'Internship Project',
      badgeColor: '#4F7CFF',
      featured: false,
      description: 'An automated browser-based scraping pipeline engineered to collect, validate, and store structured lead records, removing repetitive manual operations.',
      problem: 'Manual lead generation required teams to copy-paste vendor listings across dozens of unstandardized web directories, wasting 10+ hours weekly with a high rate of human error and duplicated records.',
      solution: 'Developed an automated Playwright & Puppeteer scraping engine that handles session cookies, bypasses directory anti-bot rate limits, validates schema integrity, and automatically inserts deduplicated leads directly into MongoDB.',
      challenges: [
        'Dynamic Anti-Bot Bypassing: Utilized stealth Puppeteer plugins and randomized user-agent rotation to prevent rate limiting during 500+ query executions.',
        'MongoDB Schema Validation: Enforced unique constraints on lead emails and phone numbers before batch insertion to guarantee zero duplicate records.'
      ],
      highlights: [
        'Playwright & Puppeteer',
        '1,000+ Lead Records',
        'MongoDB Integration',
        '10+ Hours Saved Weekly'
      ],
      features: [
        'Automation: Built an automated browser-based scraping pipeline to collect and store 1,000+ structured lead records, eliminating repetitive manual data entry.',
        'Data Storage: Designed robust validation and storage logic in MongoDB with pagination support across large result sets exceeding 500 entries per query.',
        'Technologies: Utilized Playwright and Puppeteer browser automation for lead scraping and session handling.'
      ],
      tags: ['Playwright', 'Puppeteer', 'Node.js', 'MongoDB', 'JavaScript'],
      githubUrl: 'https://github.com/Kaushiksharma12'
    },
    {
      id: 'attendance-dashboard',
      title: 'Attendance Bot Dashboard',
      category: 'internship',
      categoryLabel: 'Internship Project',
      badgeColor: '#00C896',
      featured: false,
      description: 'A dashboard interface designed to visualize real-time employee attendance records and secure administrator session routes.',
      problem: 'Lack of real-time visibility into bot-automated employee check-ins and absence logs across organizational shifts, creating administrative bottlenecks during payroll auditing.',
      solution: 'Built a sleek Next.js monitoring dashboard connected to 5+ REST API endpoints with JWT session authentication, delivering real-time status widgets, tabular filtering, and instant audit exports.',
      challenges: [
        'Route Security: Implemented middleware-level JWT verification for 100% of admin dashboard endpoints, preventing unauthorized session hijacking.',
        'Real-time Data Polling: Optimized SWR data fetching strategy to update check-in tables without triggering full UI re-renders.'
      ],
      highlights: [
        '5+ REST Endpoints',
        'JWT Auth Secured',
        'Real-time Monitoring',
        'Next.js & MongoDB'
      ],
      features: [
        'Dashboard UI: Built a dashboard interface to visualize attendance records, integrating frontend components with 5+ backend API endpoints for real-time data display.',
        'Authentication: Secured application access with JWT-based authentication and session management, protecting 100% of user routes.'
      ],
      tags: ['Next.js', 'REST APIs', 'MongoDB', 'JWT', 'React'],
      githubUrl: 'https://github.com/Kaushiksharma12'
    }
  ];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = filter === 'all' || p.category === filter;
    const matchesQuery = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Projects & Automated Systems">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Header & Controls Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase', marginBottom: '4px' }}>
              03 // Systems Showcase
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F5F7FA' }}>Deployed Projects</h2>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '6px 12px'
            }}>
              <svg width="14" height="14" fill="none" stroke="#A0A8B5" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#F5F7FA',
                  outline: 'none',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-main)',
                  width: '140px'
                }}
              />
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '4px', background: 'rgba(255, 255, 255, 0.04)', padding: '4px', borderRadius: '10px', border: '1px solid var(--border)' }}>
              {[
                { id: 'all', label: 'All' },
                { id: 'self', label: 'Self' },
                { id: 'internship', label: 'Internship' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  style={{
                    background: filter === f.id ? 'linear-gradient(135deg, #4F7CFF 0%, #7C5CFF 100%)' : 'transparent',
                    color: filter === f.id ? '#FFFFFF' : '#A0A8B5',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {filteredProjects.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#6B7280', fontSize: '0.9rem', gridColumn: '1 / -1' }}>
              No projects found matching "{searchQuery}".
            </div>
          ) : (
            filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6, borderColor: 'rgba(79, 124, 255, 0.4)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)' }}
                onClick={() => setSelectedProject(p)}
                className="glass-panel"
                style={{
                  padding: '24px',
                  borderRadius: '24px',
                  background: p.featured ? 'linear-gradient(135deg, rgba(124, 92, 255, 0.08) 0%, rgba(5, 7, 10, 0.4) 100%)' : 'rgba(255, 255, 255, 0.02)',
                  border: p.featured ? '1px solid rgba(124, 92, 255, 0.3)' : '1px solid var(--border)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div>
                  {/* Category Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      background: `${p.badgeColor}20`,
                      color: p.badgeColor,
                      border: `1px solid ${p.badgeColor}40`,
                      fontWeight: 600
                    }}>
                      {p.categoryLabel}
                    </span>
                    <svg width="16" height="16" fill="none" stroke="#A0A8B5" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '10px' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#A0A8B5', lineHeight: 1.5, marginBottom: '20px' }}>{p.description}</p>

                  {/* Key Highlights Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {p.highlights.slice(0, 4).map((h, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#F5F7FA',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags & Action trigger */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {p.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF' }}>#{t}</span>
                    ))}
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#F5F7FA', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Open Case Study →
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Expanded Case Study Detail Popup */}
        <AnimatePresence>
          {selectedProject && (
            <div 
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1100,
                background: 'rgba(5, 7, 10, 0.88)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px'
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 320, damping: 26 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-panel"
                style={{
                  maxWidth: '800px',
                  width: '100%',
                  maxHeight: '86vh',
                  overflowY: 'auto',
                  padding: '36px',
                  borderRadius: '32px',
                  background: '#0B0D12',
                  border: '1px solid rgba(124, 92, 255, 0.3)',
                  boxShadow: '0 30px 90px rgba(0,0,0,0.9)'
                }}
              >
                {/* Case Study Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '24px' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: selectedProject.badgeColor, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      CASE STUDY // {selectedProject.categoryLabel}
                    </span>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#F5F7FA', marginTop: '6px' }}>{selectedProject.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close Case Study"
                    style={{ background: 'rgba(255,255,255,0.06)', border: 'none', color: '#A0A8B5', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    ✕
                  </button>
                </div>

                {/* Problem Statement */}
                <div style={{ marginBottom: '20px', background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#7C5CFF', textTransform: 'uppercase', marginBottom: '8px' }}>
                    01 // The Problem
                  </h4>
                  <p style={{ color: '#A0A8B5', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: '20px', background: 'rgba(79, 124, 255, 0.04)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(79, 124, 255, 0.2)' }}>
                  <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase', marginBottom: '8px' }}>
                    02 // Engineered Solution
                  </h4>
                  <p style={{ color: '#F5F7FA', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Technical Challenges & Solutions */}
                {selectedProject.challenges && (
                  <div style={{ marginBottom: '20px', background: 'rgba(0, 200, 150, 0.04)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(0, 200, 150, 0.2)' }}>
                    <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#00C896', textTransform: 'uppercase', marginBottom: '8px' }}>
                      03 // Key Technical Challenges & Solutions
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '18px', color: '#A0A8B5', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {selectedProject.challenges.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Architecture Highlights */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: '#F5F7FA', textTransform: 'uppercase', marginBottom: '12px' }}>
                    04 // Architecture & Feature Details
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '20px', color: '#A0A8B5', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {selectedProject.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div style={{ marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#6B7280', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Tech Stack & Tools
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedProject.tags.map((t, idx) => (
                      <span key={idx} style={{ fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', color: '#F5F7FA', padding: '6px 14px', borderRadius: '9999px', border: '1px solid var(--border)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  {selectedProject.demoUrl && (
                    <motion.a 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={selectedProject.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ background: 'linear-gradient(135deg, #4F7CFF 0%, #7C5CFF 100%)', color: '#FFF', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      Launch Live Demo ↗
                    </motion.a>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.a 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ background: 'rgba(255,255,255,0.06)', color: '#F5F7FA', border: '1px solid var(--border)', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      View GitHub Repository ↗
                    </motion.a>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </ModalWrapper>
  );
}
