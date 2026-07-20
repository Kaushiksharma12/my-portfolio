import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalWrapper({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="modal-backdrop"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(5, 7, 10, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 16px',
          overflowY: 'auto'
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 40 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel"
          style={{
            width: '100%',
            maxWidth: '1000px',
            maxHeight: '88vh',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '32px',
            background: '#0B0D12',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.2)',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* macOS Window Header Control Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid var(--border)',
            background: 'rgba(15, 18, 26, 0.7)',
            backdropFilter: 'blur(10px)'
          }}>
            {/* macOS 3 Dots Control */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button 
                onClick={onClose} 
                aria-label="Close modal"
                style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', border: 'none', cursor: 'pointer' }} 
              />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', opacity: 0.8 }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', opacity: 0.8 }} />
            </div>

            {/* Window Title */}
            <div style={{
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              color: '#A0A8B5',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              {title}
            </div>

            {/* Close X Button */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              aria-label="Close modal window"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A0A8B5',
                cursor: 'pointer'
              }}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>

          {/* Modal Body Content (Scrollable) */}
          <div style={{
            padding: '32px',
            overflowY: 'auto',
            flexGrow: 1
          }}>
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
