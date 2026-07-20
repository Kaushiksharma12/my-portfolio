import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            if (onFinish) onFinish();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: '#05070A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}
      >
        {/* Apple Logo Glowing Minimal Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: '32px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #4F7CFF 0%, #7C5CFF 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 40px rgba(124, 92, 255, 0.5)',
            fontSize: '1.8rem',
            fontWeight: 800,
            color: '#FFFFFF'
          }}>
            K
          </div>
        </motion.div>

        {/* Minimal Progress Indicator */}
        <div style={{
          width: '200px',
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          overflow: 'hidden',
          marginBottom: '16px',
          position: 'relative'
        }}>
          <motion.div 
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #4F7CFF, #7C5CFF, #00C896)',
              borderRadius: '9999px',
              width: `${progress}%`,
              transition: 'width 0.1s ease-out'
            }}
          />
        </div>

        {/* Status Text */}
        <div style={{
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          color: '#A0A8B5',
          letterSpacing: '0.08em'
        }}>
          {progress < 100 ? `INITIALIZING_SYSTEM // ${Math.min(progress, 100)}%` : 'SYSTEM_READY'}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
