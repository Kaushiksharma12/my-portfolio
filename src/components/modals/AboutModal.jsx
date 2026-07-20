import React from 'react';
import { motion } from 'framer-motion';
import ModalWrapper from './ModalWrapper';

export default function AboutModal({ isOpen, onClose, onOpenExperience }) {
  const education = [
    {
      degree: 'Bachelor of Science (B.Sc.)',
      specialization: 'Computer Science (AI & ML)',
      institution: 'Nagindas Khandwala College, Mumbai University, Maharashtra',
      year: 'Graduation: 2026',
      badge: 'CGPA: 7.83',
      featured: true
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      specialization: 'Science (General)',
      institution: 'Durgadevi Saraf College, Mumbai, Maharashtra',
      year: 'Graduation: 2023',
      badge: '46.83%'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      specialization: 'General Academics',
      institution: 'Aacharya Narendra Dev Vidya High School & Jr. College, Mumbai',
      year: 'Graduation: 2021',
      badge: '72.81%'
    }
  ];

  const certs = [
    { name: 'AI Intern Certificate', issuer: 'Autowhat (APML)', link: '#experience', isInternal: true },
    { name: 'AI-ML Virtual Internship', issuer: 'EduSkills', link: 'https://eduskillsfoundation.org/' },
    { name: 'Web Scraping with Python', issuer: 'Coursera / Duke University', link: 'https://coursera.org' },
    { name: 'Basics of Python', issuer: 'Infosys Springboard', link: 'https://infyspringboard.infosys.com' },
    { name: 'AI, MySQL & UiPath', issuer: 'Great Learning', link: 'https://mygreatlearning.com' },
    { name: 'Core Java, A+ Grade', issuer: 'Max Computer Classes (ID: MAX-JAVA-98)', link: null },
    { name: 'C & C++, A+ Grade', issuer: 'Max Computer Classes (ID: MAX-CPP-76)', link: null }
  ];

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="System Profile // About Kaushik Sharma">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Profile Bio Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase', marginBottom: '8px' }}>
              01 // Overview
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#F5F7FA', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Software Engineer & AI Specialist
            </h2>
            <p style={{ color: '#A0A8B5', lineHeight: 1.6, marginBottom: '16px' }}>
              I am a software engineer specializing in building full-stack web applications and AI-driven automation systems. My work bridges the gap between robust backend pipelines and highly interactive, polished user interfaces.
            </p>
            <p style={{ color: '#A0A8B5', lineHeight: 1.6 }}>
              With a strong foundation in Artificial Intelligence and Machine Learning, I design systems that solve real-world problems—focusing on performance, code readability, and scalability. I thrive on continuous learning and implementing clean architectures that translate directly into production-grade solutions.
            </p>
          </div>

          {/* Facts Card */}
          <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.02)' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#6B7280', textTransform: 'uppercase', marginBottom: '16px' }}>
              SYSTEM_METRICS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'LOCATION', val: 'Mumbai, Maharashtra, IN' },
                { label: 'STUDY_PROGRAM', val: 'B.Sc. CS (AI & ML)' },
                { label: 'MOST_RECENT_ROLE', val: 'AI Intern @ Autowhat (APML)' },
                { label: 'CORE_STACK', val: 'Python, Next.js, MongoDB, Playwright' },
                { label: 'LANGUAGES', val: 'English, Hindi, Marathi' },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#A0A8B5' }}>{f.label}</span>
                  <span style={{ fontSize: '0.85rem', color: '#F5F7FA', fontWeight: 500 }}>{f.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#7C5CFF', textTransform: 'uppercase', marginBottom: '16px' }}>
            02 // Academic Degrees
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: 'rgba(124, 92, 255, 0.4)' }}
                className="glass-panel"
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: edu.featured ? 'rgba(79, 124, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                  border: edu.featured ? '1px solid rgba(79, 124, 255, 0.3)' : '1px solid var(--border)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#A0A8B5' }}>{edu.year}</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '2px 8px', borderRadius: '6px', background: 'rgba(0, 200, 150, 0.15)', color: '#00C896', fontWeight: 600 }}>
                    {edu.badge}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#F5F7FA', fontWeight: 700, marginBottom: '4px' }}>{edu.degree}</h4>
                <div style={{ fontSize: '0.85rem', color: '#4F7CFF', fontWeight: 600, marginBottom: '6px' }}>{edu.specialization}</div>
                <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>{edu.institution}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Courses Grid */}
        <div>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#00C896', textTransform: 'uppercase', marginBottom: '16px' }}>
            03 // Certifications & Training
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {certs.map((c, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2, backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#F5F7FA', fontWeight: 600, marginBottom: '2px' }}>{c.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#A0A8B5' }}>{c.issuer}</div>
                </div>
                {c.link && (
                  c.isInternal ? (
                    <button 
                      onClick={() => { onClose(); onOpenExperience(); }}
                      style={{ background: 'none', border: 'none', color: '#4F7CFF', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      Log →
                    </button>
                  ) : (
                    <a 
                      href={c.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#00C896', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      Verify ↗
                    </a>
                  )
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </ModalWrapper>
  );
}
