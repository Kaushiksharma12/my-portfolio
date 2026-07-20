import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroSphere from './HeroSphere';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Whole-Line Staggered Reveal Variants (< 0.85s total)
  const headingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const lineRevealVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section style={{
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 0 60px 0',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '48px',
        alignItems: 'center'
      }}>

        {/* Hero Left Content with Whole-Line Staggered Headline Reveal */}
        <motion.div
          variants={headingContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={lineRevealVariants} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(0, 200, 150, 0.08)',
            border: '1px solid rgba(0, 200, 150, 0.25)',
            marginBottom: '24px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#00C896',
              boxShadow: '0 0 12px #00C896',
              animation: shouldReduceMotion ? 'none' : 'pulse-slow 1.8s infinite ease-in-out'
            }} />
            <span style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: '#00C896',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}>
              Status: Open to Opportunities
            </span>
          </motion.div>

          {/* Restructured Editorial Multi-Line Stacked Headline */}
          <motion.h1 style={{
            fontSize: 'clamp(2.4rem, 4.8vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            color: '#F9FAFB',
            marginBottom: '16px'
          }}>
            <motion.span variants={lineRevealVariants} style={{ display: 'block' }}>
              Engineering Fast,
            </motion.span>
            <motion.span variants={lineRevealVariants} style={{ display: 'block' }}>
              Scalable & <em className="gradient-text-accent" style={{ fontStyle: 'italic' }}>AI-Driven</em>
            </motion.span>
            <motion.span variants={lineRevealVariants} style={{ display: 'block' }}>
              Software Systems.
            </motion.span>
            <motion.span variants={lineRevealVariants} style={{ display: 'block', fontSize: '0.5em', fontWeight: 600, marginTop: '10px', color: '#4F7CFF', fontFamily: 'var(--font-mono)' }}>
              Kaushik Sharma • Full Stack Developer | AI & Automation
            </motion.span>
          </motion.h1>

          {/* Lede Description */}
          <motion.p variants={lineRevealVariants} style={{
            fontSize: '1.1rem',
            color: '#D1D5DB',
            lineHeight: 1.65,
            maxWidth: '580px',
            marginBottom: '36px'
          }}>
            I design, build, review, test, debug, and ship modern AI-powered applications. From architecture to deployment, I deliver fast, scalable, and production-ready software using React, Next.js, TypeScript, and automated system workflows.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div variants={lineRevealVariants} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(79, 124, 255, 0.5)' }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              style={{
                background: 'linear-gradient(135deg, #4F7CFF 0%, #7C5CFF 100%)',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '14px 28px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>Explore Deployed Projects</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>

            {/* Persistent Resume Download CTA */}
            <motion.a
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              whileTap={{ scale: 0.96 }}
              href="/resume.pdf"
              download="Kaushik_Sharma_Resume.pdf"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                color: '#F9FAFB',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '14px 24px',
                fontSize: '0.95rem',
                fontWeight: 500,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social Links & Academic Status */}
          <motion.div variants={lineRevealVariants} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            borderTop: '1px solid var(--border)',
            paddingTop: '24px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a 
                href="https://github.com/Kaushiksharma12" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-underline"
                style={{ color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem' }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/kaushik-sharma-982748286" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-underline"
                style={{ color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem' }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75-1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>
            </div>

            <div style={{ height: '16px', width: '1px', backgroundColor: 'var(--border)' }} />

            <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: '#D1D5DB' }}>
              B.Sc. CS (AI & ML) • <span style={{ color: '#00C896' }}>CGPA 7.83</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Right Column: Real 3D WebGL Ambient Sphere Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            minHeight: '380px'
          }}
        >
          <HeroSphere />
        </motion.div>

      </div>
    </section>
  );
}
