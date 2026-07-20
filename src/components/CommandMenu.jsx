import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommandMenu({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollToSection = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const options = [
    { id: 'about', label: 'About System Profile', category: 'Navigation', icon: '👤', action: () => scrollToSection('about') },
    { id: 'projects', label: 'Explore Systems & Case Studies', category: 'Navigation', icon: '🚀', action: () => scrollToSection('projects') },
    { id: 'proj-pocket', label: 'Project Case Study: Pocket ArcadeX (PWA & Multiplayer)', category: 'Projects', icon: '🎮', action: () => scrollToSection('projects') },
    { id: 'proj-lead', label: 'Project Case Study: Lead Scraping Automation Tool', category: 'Projects', icon: '⚡', action: () => scrollToSection('projects') },
    { id: 'proj-attend', label: 'Project Case Study: Attendance Bot Dashboard', category: 'Projects', icon: '📊', action: () => scrollToSection('projects') },
    { id: 'skills', label: 'Technology Directory & Skills', category: 'Navigation', icon: '⚙️', action: () => scrollToSection('skills') },
    { id: 'experience', label: 'Build Log & Industry Experience', category: 'Navigation', icon: '📜', action: () => scrollToSection('experience') },
    { id: 'contact', label: 'Contact & Let\'s Build', category: 'Navigation', icon: '✉️', action: () => scrollToSection('contact') },
    { id: 'resume', label: 'Download Resume (PDF)', category: 'Actions', icon: '📄', action: () => { 
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Kaushik_Sharma_Resume.pdf';
      link.click();
      onClose();
    } },
    { id: 'github', label: 'Open GitHub Profile', category: 'Links', icon: '🐙', action: () => { window.open('https://github.com/Kaushiksharma12', '_blank'); onClose(); } },
    { id: 'linkedin', label: 'Open LinkedIn Profile', category: 'Links', icon: '💼', action: () => { window.open('https://linkedin.com/in/kaushik-sharma-982748286', '_blank'); onClose(); } },
  ];

  const filteredOptions = options.filter(opt => 
    opt.label.toLowerCase().includes(query.toLowerCase()) || 
    opt.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredOptions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredOptions.length) % filteredOptions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredOptions[selectedIndex]) {
          filteredOptions[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredOptions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="modal-backdrop" 
        onClick={onClose}
        style={{ zIndex: 2000 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel"
          style={{
            width: '100%',
            maxWidth: '640px',
            padding: 0,
            overflow: 'hidden',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
          }}
        >
          {/* Search Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            borderBottom: '1px solid var(--border)',
            background: 'rgba(15, 18, 26, 0.6)'
          }}>
            <svg width="18" height="18" fill="none" stroke="#D1D5DB" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text"
              placeholder="Search commands, pages, or projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                color: '#F9FAFB',
                fontSize: '1rem',
                outline: 'none',
                fontFamily: 'var(--font-main)'
              }}
            />
            <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontFamily: 'var(--font-mono)' }}>ESC</span>
          </div>

          {/* Results List */}
          <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '8px' }}>
            {filteredOptions.length === 0 ? (
              <div style={{ padding: '24px', textAlign: 'center', color: '#9CA3AF', fontSize: '0.9rem' }}>
                No matching commands or projects found.
              </div>
            ) : (
              filteredOptions.map((opt, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={opt.id}
                    onClick={opt.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      background: isSelected ? 'rgba(79, 124, 255, 0.15)' : 'transparent',
                      color: isSelected ? '#FFFFFF' : '#D1D5DB',
                      border: isSelected ? '1px solid rgba(79, 124, 255, 0.3)' : '1px solid transparent',
                      transition: 'all 0.15s ease',
                      marginBottom: '4px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.2rem' }}>{opt.icon}</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: isSelected ? 600 : 400 }}>{opt.label}</span>
                    </div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      color: isSelected ? '#4F7CFF' : '#9CA3AF',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {opt.category}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Hints */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            borderTop: '1px solid var(--border)',
            background: 'rgba(5, 7, 10, 0.8)',
            fontSize: '0.75rem',
            color: '#9CA3AF',
            fontFamily: 'var(--font-mono)'
          }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
            </div>
            <span>Raycast Command Palette</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
