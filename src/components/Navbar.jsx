import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ activeSection, onToggleCommandMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        setHidden(true); // Hide on scroll down
      } else {
        setHidden(false); // Reveal on scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', id: 'about', label: 'About' },
    { href: '#projects', id: 'projects', label: 'Projects' },
    { href: '#skills', id: 'skills', label: 'Skills' },
    { href: '#experience', id: 'experience', label: 'Experience' },
    { href: '#contact', id: 'contact', label: 'Contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: scrolled ? '12px' : '20px',
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 20px',
      pointerEvents: 'none',
      transform: hidden ? 'translateY(-90px)' : 'translateY(0px)',
      opacity: hidden ? 0 : 1,
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, top 0.3s ease'
    }}>
      <motion.div 
        animate={{
          scale: scrolled ? 0.98 : 1,
          padding: scrolled ? '6px 14px 6px 20px' : '8px 16px 8px 24px'
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="glass-pill"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          width: '100%',
          maxWidth: scrolled ? '880px' : '960px',
          pointerEvents: 'auto'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            background: 'none',
            border: 'none',
            color: '#F9FAFB',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none'
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00C896', display: 'inline-block', boxShadow: '0 0 10px #00C896' }} />
          <span>Kaushik.sharma</span>
        </a>

        {/* Center Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                style={{
                  position: 'relative',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: isActive ? 'rgba(79, 124, 255, 0.15)' : 'transparent',
                  color: isActive ? '#4F7CFF' : '#D1D5DB',
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, background 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9999px',
                      border: '1px solid rgba(79, 124, 255, 0.4)',
                      zIndex: -1
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Side Actions: Command Palette & Persistent Resume */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Command Palette trigger */}
          <button
            onClick={onToggleCommandMenu}
            aria-label="Open Command Menu"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '6px 10px',
              color: '#D1D5DB',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>⌘K</span>
          </button>

          {/* Persistent Resume Download CTA */}
          <a
            href="/resume.pdf"
            download="Kaushik_Sharma_Resume.pdf"
            className="icon-rotate"
            style={{
              background: 'linear-gradient(135deg, #4F7CFF 0%, #7C5CFF 100%)',
              color: '#FFFFFF',
              borderRadius: '9999px',
              padding: '6px 16px',
              fontSize: '0.8rem',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Resume</span>
          </a>
        </div>
      </motion.div>
    </header>
  );
}
