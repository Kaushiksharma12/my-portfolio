import React from 'react';
import { motion } from 'framer-motion';
import ModalWrapper from './ModalWrapper';

export default function SkillsModal({ isOpen, onClose }) {
  const skillCategories = [
    {
      category: 'Frontend Engineering',
      icon: '🎨',
      color: '#4F7CFF',
      skills: [
        { name: 'React', level: 92, tag: 'Production Ready' },
        { name: 'Next.js', level: 90, tag: 'App Router & SSR' },
        { name: 'TypeScript', level: 85, tag: 'Strongly Typed' },
        { name: 'JavaScript (ES6+)', level: 95, tag: 'Core Logic' },
        { name: 'Tailwind CSS', level: 88, tag: 'Design Systems' },
        { name: 'HTML5 & CSS3', level: 95, tag: 'Semantic & Responsive' }
      ]
    },
    {
      category: 'Backend & Automation',
      icon: '⚙️',
      color: '#7C5CFF',
      skills: [
        { name: 'Node.js', level: 88, tag: 'Runtime Environment' },
        { name: 'Express.js', level: 85, tag: 'REST Architectures' },
        { name: 'Playwright', level: 90, tag: 'Automated Scraping' },
        { name: 'Puppeteer', level: 88, tag: 'Headless Browser' }
      ]
    },
    {
      category: 'Databases & Storage',
      icon: '🗄️',
      color: '#00C896',
      skills: [
        { name: 'MongoDB', level: 86, tag: 'NoSQL & Mongoose' },
        { name: 'MySQL', level: 80, tag: 'Relational Schemas' }
      ]
    },
    {
      category: 'Programming Languages',
      icon: '💻',
      color: '#E8973A',
      skills: [
        { name: 'Python', level: 90, tag: 'AI & Data Pipelines' },
        { name: 'Java', level: 85, tag: 'Object-Oriented' },
        { name: 'C++', level: 80, tag: 'Data Structures' }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: '🛠️',
      color: '#4F7CFF',
      skills: [
        { name: 'Git & GitHub', level: 92, tag: 'Version Control' },
        { name: 'Vercel', level: 95, tag: 'CI/CD & Deployment' },
        { name: 'Capacitor', level: 85, tag: 'Cross-Platform Mobile' },
        { name: 'Postman', level: 90, tag: 'API Testing & Debugging' },
        { name: 'VS Code', level: 95, tag: 'Primary IDE' }
      ]
    }
  ];

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Technology Directory // Stack Capabilities">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Header */}
        <div>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase', marginBottom: '4px' }}>
            04 // Core Competencies
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F5F7FA' }}>Languages, Frameworks & Pipelines</h2>
        </div>

        {/* Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, borderColor: `${cat.color}40` }}
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* Category Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <span style={{ fontSize: '1.4rem' }}>{cat.icon}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F5F7FA' }}>{cat.category}</h3>
              </div>

              {/* Skills Progress List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cat.skills.map((s, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#F5F7FA', fontWeight: 600 }}>{s.name}</span>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#A0A8B5' }}>{s.tag}</span>
                    </div>

                    {/* Progress Bar */}
                    <div style={{
                      width: '100%',
                      height: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      borderRadius: '9999px',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.level}%` }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 * sIdx }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${cat.color}, #00C896)`,
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
    </ModalWrapper>
  );
}
