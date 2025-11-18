import React from 'react';
import { motion } from 'framer-motion';

export default function StoresSection() {
  const stores = [
    {
      id: 1,
      title: "Productos estándar",
      subtitle: "Productos que se entregan montados",
      color: "#1C1C1C",
      button: "COMPRAR"
    },
    {
      id: 2,
      title: "Proyectos para nuestros clientes",
      subtitle: "Galería para inspirarse",
      color: "#f5f5f5",
      textColor: "#333",
      button: "COMPRAR"
    },
    {
      id: 3,
      title: "Configurador de placas",
      subtitle: "Fabricamos placas a la medida",
      color: "#0052A6",
      button: "CONFIGURAR"
    }
  ];

  return (
    <section style={{
      padding: '5rem 1rem',
      background: '#ffffff',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: 'clamp(1.875rem, 4.5vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '3rem',
            textAlign: 'left',
            color: '#333',
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          Stores
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: store.color,
                color: store.textColor || 'white',
                padding: '3rem 2rem',
                borderRadius: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '300px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  {store.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  opacity: 0.9,
                  lineHeight: 1.5,
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  {store.subtitle}
                </p>
              </div>

              <button style={{
                background: store.color === '#f5f5f5' ? '#1C1C1C' : 'transparent',
                color: store.color === '#f5f5f5' ? 'white' : 'inherit',
                border: store.color === '#f5f5f5' ? 'none' : `2px solid ${store.textColor || 'white'}`,
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                alignSelf: 'flex-start',
                marginTop: '1.5rem',
                fontFamily: 'Montserrat, sans-serif'
              }}
              onMouseEnter={(e) => {
                if (store.color === '#f5f5f5') {
                  e.target.style.background = '#555';
                } else {
                  e.target.style.background = store.textColor || 'white';
                  e.target.style.color = store.color;
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.background = store.color === '#f5f5f5' ? '#1C1C1C' : 'transparent';
                e.target.style.color = store.color === '#f5f5f5' ? 'white' : 'inherit';
              }}
              >
                {store.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
