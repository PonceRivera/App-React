import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section style={{
      padding: '5rem 1rem',
      background: '#ffffff'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
            fontWeight: 700,
            color: '#cbd5e1',
            marginBottom: '1.5rem'
          }}>
            EXPERIENCIA
          </h2>
          <h3 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: '#475569'
          }}>
            Somos una empresa 100%<br />Mexicana
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <div style={{
            background: '#ffffff',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#cbd5e1',
              marginBottom: '0.5rem'
            }}>
              10 Años de Experiencia
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '1rem'
            }}>
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 800,
                color: '#1e40af'
              }}>
                100+
              </div>
              <div style={{
                color: '#475569',
                fontWeight: 600
              }}>
                PROYECTOS
              </div>
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '1rem'
            }}>
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 800,
                color: '#1e40af'
              }}>
                5
              </div>
              <div style={{
                color: '#475569',
                fontWeight: 600
              }}>
                PAÍSES
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
