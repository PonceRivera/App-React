import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingCart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#1C1C1C',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '0'
      }}>
        <div style={{
          maxWidth: '100%',
          margin: '0',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 1,
            minWidth: '200px'
          }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ 
                fontFamily: 'Montserrat, Arial, sans-serif', 
                fontWeight: 'bold', 
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
                color: '#0052A6', 
                letterSpacing: '0.1rem', 
                display: 'block' 
              }}>SOLID</span>
              <span style={{ 
                fontFamily: 'Montserrat, Arial, sans-serif', 
                fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)', 
                color: '#2196f3', 
                letterSpacing: '0.05rem', 
                display: 'block', 
                marginTop: '0.25rem' 
              }}>soluciones y diseños industriales</span>
            </div>
          </div>
          <nav style={{
            display: isMobile ? 'none' : 'flex',
            gap: '2rem',
            alignItems: 'center',
            fontSize: '0.95rem',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>
              PRODUCTOS
            </a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>
              SERVICIOS
            </a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>
              CATÁLOGOS
            </a>
          </nav>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            alignItems: 'center',
            flexShrink: 0
          }}>
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}>
              <Search size={18} />
            </button>
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}>
              <Heart size={18} />
            </button>
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}>
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 4vw, 2rem)',
        position: 'relative',
        background: 'transparent',
        minHeight: 'calc(100vh - 120px)'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            maxWidth: '1000px',
            width: '100%',
            padding: '0 1rem'
          }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: 900,
              marginBottom: '1rem',
              letterSpacing: '0.1em',
              color: '#0052A6',
              fontFamily: 'Arial Black, Arial, sans-serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            SOLID
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: '2.5rem',
              color: '#0052A6',
              lineHeight: 1.4,
              fontFamily: 'Arial Black, Arial, sans-serif',
              fontWeight: 700,
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
            }}
          >
            Soluciones y Diseños Industriales
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onClick={scrollToContact}
            style={{
              background: '#0052A6',
              color: 'white',
              border: 'none',
              padding: '0.875rem 2.5rem',
              borderRadius: '2rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 82, 166, 0.3)',
              transition: 'all 0.3s ease',
              fontFamily: 'Montserrat, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 82, 166, 0.4)';
              e.target.style.background = '#003A7A';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 82, 166, 0.3)';
              e.target.style.background = '#0052A6';
            }}
          >
            VER MÁS
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Chat Button */}
      <div style={{
        position: 'fixed',
        bottom: 'clamp(1rem, 4vw, 2rem)',
        right: 'clamp(1rem, 4vw, 2rem)',
        zIndex: 50
      }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{
            width: 'clamp(3rem, 12vw, 4rem)',
            height: 'clamp(3rem, 12vw, 4rem)',
            background: '#0052A6',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 82, 166, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = '#003A7A'}
          onMouseLeave={(e) => e.target.style.background = '#0052A6'}
        >
          <MessageCircle size={isMobile ? 18 : 24} color="white" />
        </motion.button>
      </div>
    </div>
  );
}