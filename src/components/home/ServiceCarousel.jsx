import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ServiceCarousel() {
  const services = [
    { title: "Diseño Industrial", description: "Diseños personalizados para tus necesidades" },
    { title: "Fabricación PTR", description: "Racks y estructuras de alta calidad" },
    { title: "Cajas Especiales", description: "Cajas en material HDPE y EZ-PRO" },
    { title: "Consultoría", description: "Asesoramiento técnico profesional" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

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
            marginBottom: '4rem'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '1rem'
          }}>
            NUESTROS SERVICIOS
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveIndex(index)}
              style={{
                padding: '1.5rem',
                borderRadius: '0.75rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                background: activeIndex === index ? '#1e40af' : '#f1f5f9',
                color: activeIndex === index ? 'white' : '#1e293b',
                boxShadow: activeIndex === index 
                  ? '0 20px 25px rgba(0, 0, 0, 0.1)' 
                  : '0 4px 6px rgba(0, 0, 0, 0.05)',
                transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '0.75rem'
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                opacity: 0.9,
                lineHeight: 1.5
              }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
