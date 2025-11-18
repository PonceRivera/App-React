import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ServiceCarousel() {
  const productCategories = [
    { 
      id: 1,
      title: "Espacios de trabajo",
      subtitle: "Logística de producción",
      color: "#c41e3a"
    },
    { 
      id: 2,
      title: "Mesas",
      subtitle: "Las Indispensables",
      color: "#1a5a7a"
    },
    { 
      id: 3,
      title: "Carros",
      subtitle: "Transporte logístico interno",
      color: "#d4a574"
    },
    { 
      id: 4,
      title: "Puestos de trabajo",
      subtitle: "Montaje, instalación y control",
      color: "#1e5a9a"
    },
    { 
      id: 5,
      title: "Estanterías de flujo",
      subtitle: "FIFO",
      color: "#c41e3a"
    },
    { 
      id: 6,
      title: "Expositores",
      subtitle: "La recogida",
      color: "#1a1a1a"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section style={{
      padding: '5rem 1rem',
      background: '#ffffff',
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
            marginBottom: '4rem',
            textAlign: 'left'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4.5vw, 2.5rem)',
            fontWeight: 700,
            color: '#333',
            marginBottom: '1rem'
          }}>
            Nuestras gamas de productos
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {productCategories.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                background: product.color,
                color: 'white',
                padding: '3rem 2rem',
                borderRadius: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                minHeight: '280px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                {product.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                opacity: 0.95,
                lineHeight: 1.4
              }}>
                {product.subtitle}
              </p>

              <button style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '0.6rem 1.2rem',
                borderRadius: '2rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                alignSelf: 'flex-start',
                marginTop: '1.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = product.color;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
              }}
              >
                DESCUBRIR
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
