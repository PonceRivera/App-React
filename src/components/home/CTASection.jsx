import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      padding: '8rem 1rem',
      background: 'linear-gradient(to bottom right, #1e40af, #1e3a8a, #1e40af)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: `linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%)`,
        backgroundSize: '60px 60px'
      }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1.5rem',
            lineHeight: 1.3
          }}>
            LISTO PARA LLEVAR TU VISION<br />INDUSTRIAL AL SIGUIENTE NIVEL?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            ¡Contáctanos hoy mismo y descubre cómo Solid Industriales puede convertir tus ideas en realidad!
          </p>
          <button
            onClick={scrollToContact}
            style={{
              background: '#ffffff',
              color: '#1e40af',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: 700,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={e => e.target.style.background = '#f3f4f6'}
            onMouseOut={e => e.target.style.background = '#ffffff'}
          >
            Contáctanos
          </button>
        </motion.div>
      </div>
    </section>
  );
}