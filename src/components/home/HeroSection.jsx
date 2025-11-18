import React from 'react';
import { Search, Heart, ShoppingCart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#2c2c2c',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '0'
      }}>
        <div style={{
          maxWidth: '100%',
          margin: '0',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            color: 'white',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            letterSpacing: '0.15em',
            fontFamily: 'Arial, sans-serif'
          }}>
            TRILOGIQ <span style={{ color: '#e63946', fontSize: '0.8em' }}>.COM</span>
          </div>
          <nav style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            fontSize: '0.95rem'
          }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>
              PROMOCIONES
            </a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>
              PRODUCTOS
            </a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>
              CATÁLOGOS
            </a>
          </nav>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              <Search size={20} />
            </button>
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              <Heart size={20} />
            </button>
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              <ShoppingCart size={20} />
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
        padding: '2rem',
        position: 'relative',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            maxWidth: '1000px'
          }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.025em',
              color: '#1a1a1a'
            }}
          >
            Configurador 3D
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: '1.25rem',
              marginBottom: '2.5rem',
              color: '#555',
              lineHeight: 1.8
            }}
          >
            Configuración en línea y precios en tiempo real
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onClick={scrollToContact}
            style={{
              background: '#2c2c2c',
              color: 'white',
              border: 'none',
              padding: '0.875rem 2.5rem',
              borderRadius: '2rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            VER
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Chat Button */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 50
      }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{
            width: '4rem',
            height: '4rem',
            background: '#0066cc',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = '#0052a3'}
          onMouseLeave={(e) => e.target.style.background = '#0066cc'}
        >
          <MessageCircle size={24} color="white" />
        </motion.button>
      </div>
    </div>
  );
}