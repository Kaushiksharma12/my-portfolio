import React from 'react';
import { motion } from 'framer-motion';
import ModalWrapper from './ModalWrapper';

export default function ExperienceModal({ isOpen, onClose }) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Build Log // Deployment & Experience History">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        
        {/* Header */}
        <div>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase', marginBottom: '4px' }}>
            02 // Chronological Pipeline
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F5F7FA' }}>Experience & Deployments</h2>
          <p style={{ color: '#A0A8B5', fontSize: '0.95rem', marginTop: '6px' }}>
            Software engineering deployments, automation systems, and organizational contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', paddingLeft: '24px' }}>
          
          {/* Vertical Progress Line */}
          <div style={{
            position: 'absolute',
            left: '7px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: 'linear-gradient(to bottom, #00C896 0%, #4F7CFF 50%, rgba(255,255,255,0.1) 100%)'
          }} />

          {/* Pipeline Success Marker */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-24px', width: '16px', height: '16px', borderRadius: '50%', background: '#00C896', boxShadow: '0 0 12px #00C896' }} />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#00C896', fontWeight: 600 }}>[BUILD SUCCESSFUL]</span>
          </div>

          {/* Autowhat AI Internship Entry */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel"
            style={{
              padding: '24px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border)',
              marginBottom: '32px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', fontWeight: 600 }}>DEC 2025 – FEB 2026</span>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', background: 'rgba(0, 200, 150, 0.15)', color: '#00C896', padding: '2px 8px', borderRadius: '6px' }}>
                ✓ Completed
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '4px' }}>
              Artificial Intelligence Intern
            </h3>
            <div style={{ fontSize: '0.9rem', color: '#7C5CFF', fontWeight: 600, marginBottom: '16px' }}>
              Autowhat (APML) — <span style={{ color: '#A0A8B5', fontWeight: 400 }}>Mumbai, Maharashtra (On-site)</span>
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#A0A8B5', fontSize: '0.9rem', lineHeight: 1.6, paddingLeft: '18px', marginBottom: '20px' }}>
              <li>Developed 10+ responsive frontend interfaces in Next.js with reusable UI components and modular routing, reducing page development time by approximately 30% through a scalable project architecture.</li>
              <li>Built core features of the TenderMatch System, an AI-driven tender matching platform, contributing to system design and workflow planning that automated matching across 100+ tender listings.</li>
              <li>Engineered a lead scraping pipeline using Playwright and Puppeteer browser automation, collecting and storing 1,000+ structured lead records in MongoDB while eliminating manual data entry.</li>
              <li>Developed the Attendance Bot X-force Dashboard with attendance tracking logic, dashboard UI, and 5+ REST API integrations, enabling real-time monitoring of employee attendance data.</li>
              <li>Implemented OTP-based and JWT authentication securing 100% of user sessions, conducted REST API testing across 20+ endpoints with Postman, and managed version control using Git.</li>
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Next.js', 'React', 'MongoDB', 'Playwright', 'Puppeteer', 'JWT', 'Postman', 'Git'].map((t, idx) => (
                <span key={idx} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', color: '#F5F7FA', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--border)' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* System Initialized Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-24px', width: '16px', height: '16px', borderRadius: '50%', background: '#4F7CFF', boxShadow: '0 0 10px #4F7CFF' }} />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF' }}>[SYSTEM INITIALIZED]</span>
          </div>

        </div>

      </div>
    </ModalWrapper>
  );
}
