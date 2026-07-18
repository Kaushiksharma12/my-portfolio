import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

function ProjectsApp() {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Card 0 transforms
  const yCard0 = useTransform(smoothProgress, [0, 0.3, 0.5], [0, 0, -40]);
  const scaleCard0 = useTransform(smoothProgress, [0, 0.3, 0.5], [1, 1, 0.93]);
  const opacityCard0 = useTransform(smoothProgress, [0, 0.3, 0.5], [1, 1, 0.4]);
  const filterCard0 = useTransform(smoothProgress, [0, 0.3, 0.5], ["blur(0px)", "blur(0px)", "blur(4px)"]);

  // Card 1 transforms
  const yCard1 = useTransform(smoothProgress, [0, 0.35, 0.5, 0.7, 0.85], [800, 800, 0, 0, -40]);
  const scaleCard1 = useTransform(smoothProgress, [0, 0.35, 0.5, 0.7, 0.85], [0.98, 0.98, 1, 1, 0.93]);
  const opacityCard1 = useTransform(smoothProgress, [0, 0.35, 0.5, 0.7, 0.85], [0, 0, 1, 1, 0.4]);
  const filterCard1 = useTransform(smoothProgress, [0, 0.35, 0.5, 0.7, 0.85], ["blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(4px)"]);

  // Card 2 transforms
  const yCard2 = useTransform(smoothProgress, [0, 0.7, 0.85], [800, 800, 0]);
  const scaleCard2 = useTransform(smoothProgress, [0, 0.7, 0.85], [0.98, 0.98, 1]);
  const opacityCard2 = useTransform(smoothProgress, [0, 0.7, 0.85], [0, 0, 1]);

  // If mobile or reduced motion is active, render normal scroll flow
  const animateCards = isDesktop && !prefersReducedMotion;

  return (
    <div ref={containerRef} className={animateCards ? "projects-track" : ""}>
      <div className={animateCards ? "projects-sticky" : ""}>
        <div className="container">
          
          <div className="projects-header-row">
            <div>
              <span className="section-eyebrow">03 / projects</span>
              <h2 class="section-heading">Systems & Scraping Engines</h2>
            </div>
            <div className="projects-legend" aria-label="Project type key">
              <div className="legend-item">
                <span className="legend-dot self" aria-hidden="true"></span>
                <span>self project</span>
              </div>
              <div className="legend-item">
                <span class="legend-dot internship" aria-hidden="true"></span>
                <span>internship project</span>
              </div>
            </div>
          </div>

          <div className={animateCards ? "projects-grid-stack" : "projects-grid"}>
            
            {/* Card 0: Pocket ArcadeX */}
            <motion.div 
              className="project-card-wrapper"
              style={animateCards ? {
                y: yCard0,
                scale: scaleCard0,
                opacity: opacityCard0,
                filter: filterCard0
              } : {}}
            >
              <div className="project-card featured">
                <div className="card-header">
                  <div>
                    <span className="badge badge-self" style={{ marginBottom: '8px', display: 'inline-block' }}>Featured Self Project</span>
                    <h3 className="project-title">Pocket ArcadeX</h3>
                  </div>
                </div>
                
                <div className="project-highlights" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '16px 0' }}>
                  <span className="highlight-badge">5 Multiplayer Games</span>
                  <span className="highlight-badge">Progressive Web App (PWA)</span>
                  <span className="highlight-badge">Cross Platform (Android, iOS & Web)</span>
                  <span className="highlight-badge">Offline Support</span>
                  <span className="highlight-badge">Online Multiplayer</span>
                  <span className="highlight-badge">React 19</span>
                  <span className="highlight-badge">Next.js 16</span>
                  <span className="highlight-badge">TypeScript</span>
                  <span className="highlight-badge">Capacitor</span>
                  <span className="highlight-badge">Responsive Design</span>
                </div>

                <p className="project-desc">
                  A premium, cross-platform multiplayer board gaming platform allowing users to play instantly from any device without installation. Designed with a mobile-first philosophy.
                </p>

                <ul className="project-features" style={{ marginBottom: '28px' }}>
                  <li><strong>Architecture:</strong> Modular, decoupled application architecture leveraging Next.js App Router, optimized for multi-platform wrapping with Capacitor.</li>
                  <li><strong>Features:</strong> Integrated 5 popular board games (Ludo, Chess, Tic-Tac-Toe, Connect 4, Snakes & Ladders) with unified multiplayer state management.</li>
                  <li><strong>Game Modes:</strong> Supports single-player with adjustable difficulty AI bots, local pass-and-play, and real-time online multiplayer.</li>
                  <li><strong>Synchronization:</strong> Real-time room creation and gameplay sync using web sockets, with robust connection recovery after user disconnect/refresh.</li>
                  <li><strong>PWA Structure:</strong> Implemented service workers for offline asset caching, installation prompts, and seamless background updates.</li>
                  <li><strong>Performance:</strong> Eliminated JS heap memory leaks during game session destruction and optimized asset loading for instant starts.</li>
                </ul>

                <div className="project-actions" style={{ display: 'flex', gap: '16px', marginBottom: '28px', flexWrap: 'wrap' }}>
                  <a href="https://pocket-arcade-x.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: 'var(--amber)', borderColor: 'var(--amber)', color: '#101B2E' }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth="2" style={{ marginRight: '6px', verticalAlign: 'middle' }}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    Live Demo
                  </a>
                  <a href="https://github.com/Kaushiksharma12" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--bg)' }}>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ marginRight: '6px', verticalAlign: 'middle' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub Repo
                  </a>
                </div>

                <div className="tech-chips">
                  <span className="tech-chip">Next.js</span>
                  <span className="tech-chip">React</span>
                  <span className="tech-chip">TypeScript</span>
                  <span className="tech-chip">Capacitor</span>
                  <span className="tech-chip">PWA</span>
                  <span className="tech-chip">Tailwind CSS</span>
                  <span className="tech-chip">Service Workers</span>
                  <span className="tech-chip">Vercel</span>
                  <span className="tech-chip">Git</span>
                </div>
              </div>
            </motion.div>

            {/* Card 1: Lead Scraping Automation Tool */}
            <motion.div 
              className="project-card-wrapper"
              style={animateCards ? {
                y: yCard1,
                scale: scaleCard1,
                opacity: opacityCard1,
                filter: filterCard1
              } : {}}
            >
              <div className="project-card">
                <div className="card-header">
                  <h3 className="project-title">Lead Scraping Automation Tool</h3>
                  <span className="badge badge-internship">internship project</span>
                </div>
                <p className="project-desc">
                  An automated browser-based scraping pipeline engineered to collect, validate, and store structured lead records, removing repetitive manual operations.
                </p>
                <ul className="project-features" style={{ marginBottom: '20px' }}>
                  <li><strong>Automation:</strong> Built an automated browser-based scraping pipeline to collect and store 1,000+ structured lead records, eliminating repetitive manual data entry and saving 10+ hours weekly.</li>
                  <li><strong>Data Storage:</strong> Designed robust validation and storage logic in MongoDB with pagination support across large result sets exceeding 500 entries per query.</li>
                  <li><strong>Technologies:</strong> Utilized Playwright and Puppeteer browser automation for lead scraping and session handling.</li>
                </ul>
                <div className="tech-chips">
                  <span className="tech-chip">Playwright</span>
                  <span className="tech-chip">Puppeteer</span>
                  <span className="tech-chip">Node.js</span>
                  <span className="tech-chip">MongoDB</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Attendance Bot Dashboard */}
            <motion.div 
              className="project-card-wrapper"
              style={animateCards ? {
                y: yCard2,
                scale: scaleCard2,
                opacity: opacityCard2
              } : {}}
            >
              <div className="project-card">
                <div className="card-header">
                  <h3 className="project-title">Attendance Bot Dashboard</h3>
                  <span className="badge badge-internship">internship project</span>
                </div>
                <p className="project-desc">
                  A dashboard interface designed to visualize real-time employee attendance records and secure administrator session routes.
                </p>
                <ul className="project-features" style={{ marginBottom: '20px' }}>
                  <li><strong>Dashboard UI:</strong> Built a dashboard interface to visualize attendance records, integrating frontend components with 5+ backend API endpoints for real-time data display.</li>
                  <li><strong>Authentication:</strong> Secured application access with JWT-based authentication and session management, protecting 100% of user routes.</li>
                </ul>
                <div className="tech-chips">
                  <span className="tech-chip">Next.js</span>
                  <span className="tech-chip">REST APIs</span>
                  <span className="tech-chip">MongoDB</span>
                  <span className="tech-chip">JWT</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

// Mount the React app to the root
const rootElement = document.getElementById('projects-root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<ProjectsApp />);
}
