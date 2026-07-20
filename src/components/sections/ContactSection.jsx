import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ContactSection({ id }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const textAnimation = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kaushiksharma.dev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id={id} className="window-section" style={{ scrollMarginTop: '100px' }}>
      {/* Window OS Header Bar */}
      <div className="window-header">
        <div className="window-dots">
          <span className="window-dot close" />
          <span className="window-dot minimize" />
          <span className="window-dot maximize" />
        </div>
        <div className="window-title">contact_transmission.sys</div>
        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF' }}>05 // CONTACT</div>
      </div>

      {/* Window OS Content Area */}
      <div className="window-content">
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <motion.span 
            {...textAnimation}
            style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase' }}
          >
            Transmission // Let's Build
          </motion.span>
          <motion.h2 
            {...textAnimation}
            transition={{ ...textAnimation.transition, delay: 0.08 }}
            style={{ fontSize: '2rem', fontWeight: 800, color: '#F9FAFB', marginTop: '4px' }}
          >
            Get In Touch
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
          
          {/* Primary Contact Form */}
          <motion.div 
            {...textAnimation}
            className="glass-panel" 
            style={{ padding: '28px', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border)' }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '20px' }}>
              Send Direct Message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'rgba(0, 200, 150, 0.1)',
                  border: '1px solid rgba(0, 200, 150, 0.3)',
                  padding: '24px',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>✓</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#00C896', marginBottom: '4px' }}>Transmission Sent!</h4>
                <p style={{ fontSize: '0.88rem', color: '#D1D5DB' }}>Thank you for reaching out. I will respond to your message promptly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '6px' }}>
                    YOUR NAME
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      color: '#F9FAFB',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '6px' }}>
                    YOUR EMAIL ADDRESS
                  </label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      color: '#F9FAFB',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '6px' }}>
                    MESSAGE
                  </label>
                  <textarea 
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss project inquiries, engineering opportunities, or technology collaborations..."
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      color: '#F9FAFB',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #4F7CFF 0%, #7C5CFF 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '14px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    marginTop: '8px'
                  }}
                >
                  Send Message ➔
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Details & Copy Action Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Quick Copy Email Card */}
            <motion.div 
              {...textAnimation}
              transition={{ ...textAnimation.transition, delay: 0.1 }}
              className="glass-panel" 
              style={{ padding: '24px', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border)' }}
            >
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '6px' }}>
                DIRECT EMAIL ADDRESS
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#F9FAFB', marginBottom: '16px' }}>
                kaushiksharma.dev@gmail.com
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopyEmail}
                style={{
                  width: '100%',
                  background: copiedEmail ? 'rgba(0, 200, 150, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  border: copiedEmail ? '1px solid rgba(0, 200, 150, 0.4)' : '1px solid var(--border)',
                  color: copiedEmail ? '#00C896' : '#F9FAFB',
                  borderRadius: '10px',
                  padding: '10px 16px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>{copiedEmail ? '✓ Email Copied to Clipboard!' : '📋 Copy Email Address'}</span>
              </motion.button>
            </motion.div>

            {/* Social Profiles */}
            <motion.div 
              {...textAnimation}
              transition={{ ...textAnimation.transition, delay: 0.15 }}
              className="glass-panel" 
              style={{ padding: '24px', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border)' }}
            >
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '12px' }}>
                DEVELOPER PROFILES
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a 
                  href="https://github.com/Kaushiksharma12"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    color: '#F9FAFB',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span>GitHub Profile</span>
                  </div>
                  <span style={{ color: '#4F7CFF' }}>↗</span>
                </a>

                <a 
                  href="https://linkedin.com/in/kaushik-sharma-982748286"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    color: '#F9FAFB',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75-1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span>LinkedIn Profile</span>
                  </div>
                  <span style={{ color: '#7C5CFF' }}>↗</span>
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
