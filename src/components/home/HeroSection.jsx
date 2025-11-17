import React from 'react';
import { Facebook, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <header style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '0.1em'
          }}>
            SOLID
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'white', transition: 'color 0.3s' }}>
              <Facebook size={20} />
            </a>
            <a href="#" style={{ color: 'white', transition: 'color 0.3s' }}>
              <Twitter size={20} />
            </a>
            <a href="#" style={{ color: 'white', transition: 'color 0.3s' }}>
              <Youtube size={20} />
            </a>
            <a href="#" style={{ color: 'white', transition: 'color 0.3s' }}>
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        zIndex: 10
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            maxWidth: '900px',
            color: 'white'
          }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: 800,
              marginBottom: '1.5rem',
              letterSpacing: '-0.025em'
            }}
          >
            Solid
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 600,
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Soluciones y Diseños<br />Industriales
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontSize: '1.125rem',
              marginBottom: '2.5rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.8
            }}
          >
            Transformamos tus ideas en soluciones industriales de alta calidad
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={scrollToContact}
            style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              color: 'white',
              border: 'none',
              padding: '0.875rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(30, 64, 175, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(30, 64, 175, 0.3)';
            }}
          >
            Contáctenos
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Chat Buttons */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{
            width: '3.5rem',
            height: '3.5rem',
            background: '#1e40af',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = '#1e3a8a'}
          onMouseLeave={(e) => e.target.style.background = '#1e40af'}
        >
          <MessageCircle size={20} color="white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{
            width: '3.5rem',
            height: '3.5rem',
            background: '#0f172a',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = '#1e3a8a'}
          onMouseLeave={(e) => e.target.style.background = '#0f172a'}
        >
          <MessageCircle size={20} color="white" />
        </motion.button>
      </div>
    </div>
  );
}