import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ExperienceSection({ id }) {
  const shouldReduceMotion = useReducedMotion();

  const textAnimation = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  };

  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Autowhat AI',
      period: 'Oct 2024 – Nov 2024',
      location: 'Remote',
      type: 'Internship',
      bullets: [
        'Built an automated browser-based scraping pipeline using Playwright and Puppeteer to collect and store 1,000+ structured lead records in MongoDB, saving 10+ manual operational hours weekly.',
        'Designed a Next.js attendance bot monitoring dashboard frontend, integrating 5+ REST API endpoints for real-time employee data visualization.',
        'Implemented JWT-based authentication and session route protection, securing 100% of internal administrative user routes.'
      ],
      tags: ['Playwright', 'Puppeteer', 'Next.js', 'MongoDB', 'JWT', 'REST APIs', 'Node.js']
    }
  ];

  return (
    <section id={id} className="window-section" style={{ scrollMarginTop: '100px' }}>
      {/* Window OS Header Bar */}
      <div className="window-header">
        <div className="window-dots">
          <span className="window-dot close" />
          <span className="window-dot minimize" />
          <span className="window-dot maximize" />
        </div>
        <div className="window-title">experience_build_log.sys</div>
        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF' }}>04 // EXPERIENCE</div>
      </div>

      {/* Window OS Content Area */}
      <div className="window-content">
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <motion.span 
            {...textAnimation}
            style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase' }}
          >
            Work History // Build Log
          </motion.span>
          <motion.h2 
            {...textAnimation}
            transition={{ ...textAnimation.transition, delay: 0.08 }}
            style={{ fontSize: '2rem', fontWeight: 800, color: '#F9FAFB', marginTop: '4px' }}
          >
            Industry Experience
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              {...textAnimation}
              transition={{ ...textAnimation.transition, delay: idx * 0.1 }}
              className="glass-panel"
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F9FAFB' }}>{exp.role}</h3>
                  <div style={{ fontSize: '1rem', color: '#4F7CFF', fontWeight: 600, marginTop: '2px' }}>
                    {exp.company} • <span style={{ color: '#9CA3AF', fontSize: '0.9rem', fontWeight: 400 }}>{exp.location}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(0, 200, 150, 0.12)',
                    color: '#00C896',
                    border: '1px solid rgba(0, 200, 150, 0.3)'
                  }}>
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Accomplishment Bullets with Minimal Text Animation */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px', color: '#D1D5DB', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {exp.bullets.map((b, bIdx) => (
                  <motion.li 
                    key={bIdx}
                    {...textAnimation}
                    transition={{ ...textAnimation.transition, delay: bIdx * 0.06 }}
                  >
                    {b}
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                {exp.tags.map((t, tIdx) => (
                  <span key={tIdx} style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', background: 'rgba(255, 255, 255, 0.05)', color: '#F9FAFB', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--border)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
