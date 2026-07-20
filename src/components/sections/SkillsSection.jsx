import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function SkillsSection({ id }) {
  const shouldReduceMotion = useReducedMotion();

  const textAnimation = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  };

  const skillCategories = [
    {
      title: 'Languages & Core Systems',
      skills: [
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C#', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'HTML5 & CSS3', level: 95 }
      ]
    },
    {
      title: 'Frontend Frameworks & Architecture',
      skills: [
        { name: 'React.js (v19)', level: 92 },
        { name: 'Next.js (v16)', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Framer Motion', level: 85 },
        { name: 'Capacitor (Mobile Cross-Platform)', level: 80 }
      ]
    },
    {
      title: 'Backend, APIs & Scraping Engines',
      skills: [
        { name: 'Node.js & Express', level: 88 },
        { name: 'Playwright & Puppeteer Automation', level: 92 },
        { name: 'RESTful API Architecture', level: 90 },
        { name: 'WebSockets (Real-time)', level: 85 },
        { name: 'JWT Authentication Middleware', level: 88 }
      ]
    },
    {
      title: 'Databases & DevOps Infrastructure',
      skills: [
        { name: 'MongoDB & Mongoose', level: 85 },
        { name: 'Git & GitHub Workflows', level: 90 },
        { name: 'Vercel Deployment', level: 92 },
        { name: 'PWA Service Workers', level: 82 }
      ]
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
        <div className="window-title">skills_technology_matrix.sys</div>
        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF' }}>03 // SKILLS</div>
      </div>

      {/* Window OS Content Area */}
      <div className="window-content">
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <motion.span 
            {...textAnimation}
            style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase' }}
          >
            Technology Directory // Proficiency Matrix
          </motion.span>
          <motion.h2 
            {...textAnimation}
            transition={{ ...textAnimation.transition, delay: 0.08 }}
            style={{ fontSize: '2rem', fontWeight: 800, color: '#F9FAFB', marginTop: '4px' }}
          >
            Tech Stack & Competencies
          </motion.h2>
        </div>

        {/* Skill Category Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              {...textAnimation}
              transition={{ ...textAnimation.transition, delay: idx * 0.08 }}
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border)'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
                {cat.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.88rem' }}>
                      <span style={{ color: '#F9FAFB', fontWeight: 500 }}>{skill.name}</span>
                      <span style={{ color: '#4F7CFF', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{skill.level}%</span>
                    </div>

                    {/* Animated Progress Meter */}
                    <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: sIdx * 0.04 }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #4F7CFF 0%, #7C5CFF 100%)',
                          borderRadius: '9999px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
