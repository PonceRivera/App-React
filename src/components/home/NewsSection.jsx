import React from 'react';
import { motion } from 'framer-motion';

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Promociones",
      subtitle: "Las mejores relaciones calidad/precio.",
      color: "#3d3d3d",
      button: "COMPRAR"
    },
    {
      id: 2,
      title: "Los más vendidos",
      subtitle: "Nuestros productos más útiles y más utilizados.",
      color: "#e8e8e8",
      textColor: "#333",
      button: "DESCUBRIR"
    },
    {
      id: 3,
      title: "Nuevos productos",
      subtitle: "Diseños innovadores para tu empresa",
      color: "#0052A6",
      button: "DESCUBRIR"
    },
    {
      id: 4,
      title: "Innovaciones",
      subtitle: "Research at the service of innovation",
      color: "#e8e8e8",
      textColor: "#333",
      button: "DESCUBRIR"
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
          News
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: item.color,
                color: item.textColor || 'white',
                padding: '2.5rem 2rem',
                borderRadius: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '280px',
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
                  fontSize: '1.375rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  opacity: 0.85,
                  lineHeight: 1.5,
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  {item.subtitle}
                </p>
              </div>

              <button style={{
                background: 'transparent',
                color: item.textColor || 'white',
                border: `2px solid ${item.textColor || 'white'}`,
                padding: '0.6rem 1.2rem',
                borderRadius: '2rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                alignSelf: 'flex-start',
                marginTop: '1.5rem',
                fontFamily: 'Montserrat, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = item.textColor || 'white';
                e.target.style.color = item.color;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = item.textColor || 'white';
              }}
              >
                {item.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
