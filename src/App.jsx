import React, { useState, useEffect } from 'react';
import BackgroundMesh from './components/BackgroundMesh';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommandMenu from './components/CommandMenu';
import LoadingScreen from './components/LoadingScreen';

import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  // IntersectionObserver to sync URL hash with visible section on scroll
  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'experience', 'contact'];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          if (window.location.hash !== `#${id}`) {
            window.history.replaceState(null, '', `#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Global Keyboard Shortcut: ⌘K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandMenuOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#05070A', color: '#F9FAFB', overflowX: 'hidden' }}>
      
      {/* Loading Boot Screen */}
      <LoadingScreen />

      {/* Full-Bleed Interactive Background Canvas */}
      <BackgroundMesh />

      {/* Persistent Glass Pill Header Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onToggleCommandMenu={() => setIsCommandMenuOpen(true)}
      />

      {/* Centered Main Layout Container (max-width: 1440px for 1920px+ monitors) */}
      <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        
        {/* 1. Hero Showcase */}
        <Hero />

        {/* 2. Crawlable In-Page Sections with Terminal OS Window Frame Styling */}
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <SkillsSection id="skills" />
        <ExperienceSection id="experience" />
        <ContactSection id="contact" />

      </main>

      {/* Consolidated Footer */}
      <footer style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid var(--border)',
        padding: '50px 24px 40px 24px',
        background: 'rgba(5, 7, 10, 0.95)',
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '4px' }}>
                Kaushik Sharma
              </div>
              <div style={{ fontSize: '0.85rem', color: '#4F7CFF', fontFamily: 'var(--font-mono)' }}>
                Full Stack Developer | AI & Automation
              </div>
            </div>

            {/* Quick Case Study Links & Profiles */}
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '10px' }}>
                  FEATURED SYSTEMS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
                  <a href="#projects" style={{ color: '#D1D5DB', textDecoration: 'none' }} className="link-underline">Pocket ArcadeX (PWA)</a>
                  <a href="#projects" style={{ color: '#D1D5DB', textDecoration: 'none' }} className="link-underline">Lead Scraping Tool</a>
                  <a href="#projects" style={{ color: '#D1D5DB', textDecoration: 'none' }} className="link-underline">Attendance Bot Dashboard</a>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '10px' }}>
                  PROFILES
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
                  <a href="https://github.com/Kaushiksharma12" target="_blank" rel="noopener noreferrer" style={{ color: '#D1D5DB', textDecoration: 'none' }} className="link-underline">GitHub ↗</a>
                  <a href="https://linkedin.com/in/kaushik-sharma-982748286" target="_blank" rel="noopener noreferrer" style={{ color: '#D1D5DB', textDecoration: 'none' }} className="link-underline">LinkedIn ↗</a>
                  <a href="/resume.pdf" download style={{ color: '#00C896', textDecoration: 'none' }} className="link-underline">Download CV (PDF) ↗</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '0.8rem', color: '#9CA3AF', fontFamily: 'var(--font-mono)' }}>
            <div>© 2026 Kaushik Sharma. All Rights Reserved.</div>
            <div>Built with React 19, Next.js, TypeScript & Vite</div>
          </div>

        </div>
      </footer>

      {/* Command Palette (⌘K) */}
      <CommandMenu 
        isOpen={isCommandMenuOpen} 
        onClose={() => setIsCommandMenuOpen(false)} 
      />

    </div>
  );
}
