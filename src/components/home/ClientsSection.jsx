import React from 'react';
import { motion } from 'framer-motion';

export default function ClientsSection() {
  const clients = [
    { name: "John Deere", logo: "🚜" },
    { name: "HBPO", logo: "🏭" },
    { name: "GM", logo: "🚗" },
    { name: "Magna Powertrain", logo: "⚙️" },
    { name: "John Deere", logo: "🚜" }
  ];

  return (
    <section style={{
      padding: '5rem 1rem',
      background: '#f1f5f9',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginBottom: '4rem'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
            fontWeight: 700,
            color: '#64748b',
            lineHeight: 1.3
          }}>
            Empresas que han<br />confiado en nosotros
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1.5rem'
        }}>
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: '#ffffff',
                borderRadius: '0.75rem',
                padding: '2rem 1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '0.75rem'
                }}>
                  {client.logo}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#475569'
                }}>
                  {client.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
