import React from 'react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { value: "100S", label: "CLIENTES SATISFECHOS" },
    { value: "100S", label: "PROYECTOS REALIZADOS" },
    { value: "3+", label: "EQUIPOS DE EXPERTOS" },
    { value: "100%", label: "SATISFACCIÓN AL CLIENTE" }
  ];

  return (
    <section style={{
      padding: '5rem 1rem',
      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '1rem'
          }}>
            DISEÑO Y FABRICACION PTR
          </h2>
          <h3 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '1.5rem'
          }}>
            valor agregado
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: '1.5rem',
            maxWidth: '48rem',
            margin: '1.5rem auto 0',
            fontSize: '1.125rem',
            lineHeight: 1.6
          }}>
            Los racks de PTR están construidos con perfiles tubulares de acero en forma rectangular, lo que les proporciona una estructura robusta y una capacidad de carga elevada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            background: '#ffffff',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
            padding: '2rem'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 800,
                  color: '#1e40af',
                  marginBottom: '0.75rem'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#64748b',
                  letterSpacing: '0.05em'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '4rem'
          }}
        >
          <h3 style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
            fontWeight: 700,
            color: '#cbd5e1',
            marginBottom: '0.5rem'
          }}>
            PROYECTOS
          </h3>
          <h4 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: '#cbd5e1'
          }}>
            Recientes
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
