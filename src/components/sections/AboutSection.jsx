import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AboutSection({ id }) {
  const shouldReduceMotion = useReducedMotion();

  const textAnimation = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  };

  const certifications = [
    { title: 'Generative AI Overview for Project Managers', org: 'PMI', year: '2025', link: 'https://www.credly.com/badges/991a0c0a-01c0-449e-8c38-518ee1cb239e/linked_in_profile' },
    { title: 'Foundational C# with Microsoft', org: 'freeCodeCamp', year: '2024', link: 'https://freecodecamp.org/certification/fcc004ecf2d-8e65-4f40-84a1-77fb25ddba2b/foundational-c-sharp-with-microsoft' },
    { title: 'Aspects of Software Engineering', org: 'Great Learning', year: '2024', link: 'https://verify.mygreatlearning.com/verify/QLAKXEZW' },
    { title: 'Introduction to Agile Methodology', org: 'Great Learning', year: '2024', link: 'https://verify.mygreatlearning.com/verify/GQEYPABR' },
    { title: 'Python Programming', org: 'Great Learning', year: '2024', link: 'https://verify.mygreatlearning.com/verify/NSSXWMTN' },
    { title: 'Git & GitHub Tutorial', org: 'Great Learning', year: '2024', link: 'https://verify.mygreatlearning.com/verify/HQWSEWFA' },
    { title: 'Java Programming', org: 'Great Learning', year: '2024', link: 'https://verify.mygreatlearning.com/verify/XROBSEUN' }
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
        <div className="window-title">about_system_profile.sys</div>
        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF' }}>01 // ABOUT</div>
      </div>

      {/* Window OS Content Area */}
      <div className="window-content">
        
        {/* Header Title */}
        <div style={{ marginBottom: '32px' }}>
          <motion.span 
            {...textAnimation}
            style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase' }}
          >
            System Profile // Overview
          </motion.span>
          <motion.h2 
            {...textAnimation}
            transition={{ ...textAnimation.transition, delay: 0.08 }}
            style={{ fontSize: '2rem', fontWeight: 800, color: '#F9FAFB', marginTop: '4px' }}
          >
            Full Stack Developer | AI & Automation
          </motion.h2>
        </div>

        {/* Bio Paragraph */}
        <motion.div 
          {...textAnimation}
          transition={{ ...textAnimation.transition, delay: 0.12 }}
          style={{ marginBottom: '40px', background: 'rgba(255, 255, 255, 0.02)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}
        >
          <p style={{ color: '#D1D5DB', fontSize: '1.05rem', lineHeight: 1.75 }}>
            I specialize in designing and engineering high-performance web systems, automated data extraction pipelines, and AI-driven workflows. With hands-on industry experience building browser automation tools and JWT-authenticated dashboards, I focus on shipping clean, modular, and scalable software.
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <motion.div 
            {...textAnimation}
            transition={{ ...textAnimation.transition, delay: 0.15 }}
            style={{ background: 'rgba(79, 124, 255, 0.06)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(79, 124, 255, 0.2)' }}
          >
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF' }}>ACADEMIC CGPA</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#4F7CFF', marginTop: '4px' }}>7.83</div>
            <div style={{ fontSize: '0.75rem', color: '#00C896', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>★ Strong Academic Record</div>
          </motion.div>

          <motion.div 
            {...textAnimation}
            transition={{ ...textAnimation.transition, delay: 0.18 }}
            style={{ background: 'rgba(124, 92, 255, 0.06)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(124, 92, 255, 0.2)' }}
          >
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF' }}>DEGREE STATUS</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#7C5CFF', marginTop: '8px' }}>Graduating 2026</div>
            <div style={{ fontSize: '0.75rem', color: '#D1D5DB', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>In Progress • B.Sc. CS (AI & ML)</div>
          </motion.div>

          <motion.div 
            {...textAnimation}
            transition={{ ...textAnimation.transition, delay: 0.21 }}
            style={{ background: 'rgba(0, 200, 150, 0.06)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(0, 200, 150, 0.2)' }}
          >
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF' }}>CERTIFICATIONS</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00C896', marginTop: '4px' }}>7+</div>
            <div style={{ fontSize: '0.75rem', color: '#D1D5DB', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>Verified Professional Credentials</div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div style={{ marginBottom: '40px' }}>
          <motion.h3 
            {...textAnimation}
            style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}
          >
            EDUCATION
          </motion.h3>

          <motion.div 
            {...textAnimation}
            transition={{ ...textAnimation.transition, delay: 0.12 }}
            style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F9FAFB' }}>B.Sc. Computer Science (Specialization in AI & ML)</span>
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#00C896', background: 'rgba(0, 200, 150, 0.12)', padding: '4px 10px', borderRadius: '6px' }}>
                In Progress — Graduating 2026
              </span>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '8px' }}>Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore</div>
            <div style={{ fontSize: '0.85rem', color: '#D1D5DB', fontFamily: 'var(--font-mono)' }}>Cumulative GPA: 7.83</div>
          </motion.div>
        </div>

        {/* Verified Certifications Directory */}
        <div>
          <motion.h3 
            {...textAnimation}
            style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}
          >
            VERIFIED CERTIFICATIONS & CREDENTIALS
          </motion.h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                {...textAnimation}
                transition={{ ...textAnimation.transition, delay: idx * 0.05 }}
                whileHover={{ y: -4, borderColor: 'rgba(79, 124, 255, 0.4)' }}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border)',
                  padding: '16px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#F9FAFB', marginBottom: '4px' }}>{cert.title}</div>
                  <div style={{ fontSize: '0.78rem', color: '#9CA3AF', fontFamily: 'var(--font-mono)' }}>{cert.org} • {cert.year}</div>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#4F7CFF', fontWeight: 600 }}>Verify ↗</span>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
