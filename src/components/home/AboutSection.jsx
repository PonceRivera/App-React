import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const features = [
    "Ingeniería industrial",
    "Técnicos certificado",
    "Materiales de calidad",
    "Diseño innovador"
  ];

  return (
    <section style={{
      padding: '5rem 1rem',
      background: '#ffffff',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'left' }}
        >
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4.5vw, 2.75rem)',
            fontWeight: 700,
            color: '#cbd5e1',
            marginBottom: '1.5rem'
          }}>
            Nosotros
          </h2>
          <h3 style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
            fontWeight: 600,
            color: '#334155',
            marginBottom: '2rem'
          }}>
            Entregamos innovación a nivel avanzado.
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <CheckCircle2 style={{ color: '#1e40af', flexShrink: 0 }} size={24} />
                <span style={{
                  fontSize: '1.125rem',
                  color: '#334155',
                  fontWeight: 500
                }}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            position: 'relative'
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
            borderRadius: '1.5rem',
            padding: '3rem',
            aspectRatio: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                fontWeight: 800,
                color: 'rgba(255, 255, 255, 0.15)',
                marginBottom: '1rem'
              }}>
                SOLID
              </div>
              <div style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'white',
                lineHeight: 1.4
              }}>
                Soluciones y Diseños<br />Industriales
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
