import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ModalWrapper from './ModalWrapper';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'kaushiksharma1432@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Communication Channel // Contact Kaushik">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Header */}
        <div>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase', marginBottom: '4px' }}>
            05 // Get In Touch
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F5F7FA' }}>Let's Build Something Amazing.</h2>
          <p style={{ color: '#A0A8B5', fontSize: '0.95rem', marginTop: '6px', maxWidth: '600px' }}>
            I am currently seeking AI or software development opportunities. Reach out via email, social channels, or send a direct message below.
          </p>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          
          {/* Left: Interactive Glass Contact Form */}
          <div className="glass-panel" style={{ padding: '28px', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.02)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '20px' }}>Send Direct Message</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#A0A8B5', marginBottom: '6px' }}>YOUR NAME</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    color: '#F5F7FA',
                    outline: 'none',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-main)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#A0A8B5', marginBottom: '6px' }}>YOUR EMAIL</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    color: '#F5F7FA',
                    outline: 'none',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-main)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#A0A8B5', marginBottom: '6px' }}>MESSAGE</label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Write your message or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    color: '#F5F7FA',
                    outline: 'none',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-main)',
                    resize: 'none'
                  }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitted}
                style={{
                  background: submitted ? '#00C896' : 'linear-gradient(135deg, #4F7CFF 0%, #7C5CFF 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '14px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background 0.3s ease'
                }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </motion.button>
            </form>
          </div>

          {/* Right: Direct Channels & Quick Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Email Quick Copy Box */}
            <div className="glass-panel" style={{ padding: '20px', borderRadius: '20px', background: 'rgba(79, 124, 255, 0.05)', border: '1px solid rgba(79, 124, 255, 0.2)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF', textTransform: 'uppercase', marginBottom: '8px' }}>
                DIRECT EMAIL ADDRESS
              </div>
              <div style={{ fontSize: '0.95rem', color: '#F5F7FA', fontWeight: 600, marginBottom: '12px', wordBreak: 'break-all' }}>
                {email}
              </div>
              <button
                onClick={handleCopyEmail}
                style={{
                  background: copied ? 'rgba(0, 200, 150, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                  color: copied ? '#00C896' : '#F5F7FA',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
              >
                {copied ? '✓ Copied to Clipboard' : '📋 Copy Email'}
              </button>
            </div>

            {/* Quick Action Links Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <a 
                href="https://linkedin.com/in/kaushik-sharma-982748286" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border)',
                  color: '#F5F7FA',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#7C5CFF' }}>LINKEDIN</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Connect ↗</span>
              </a>

              <a 
                href="https://github.com/Kaushiksharma12" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border)',
                  color: '#F5F7FA',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#4F7CFF' }}>GITHUB</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Repositories ↗</span>
              </a>

              <a 
                href="/resume.pdf" 
                download="Kaushik_Sharma_Resume.pdf"
                style={{
                  gridColumn: 'span 2',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(0, 200, 150, 0.08)',
                  border: '1px solid rgba(0, 200, 150, 0.2)',
                  color: '#F5F7FA',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#00C896' }}>OFFICIAL RESUME</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Download PDF CV</div>
                </div>
                <span style={{ fontSize: '1.2rem' }}>↓</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </ModalWrapper>
  );
}
