import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StoresSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Imágenes de Racks de Pipe y PTR
  const racksImages = [
    '/src/assets/products/WhatsApp Image 2025-11-17 at 8.31.35 PM.jpeg',
    '/src/assets/products/WhatsApp Image 2025-11-17 at 8.31.35 PM (1).jpeg',
    '/src/assets/products/WhatsApp Image 2025-11-17 at 8.31.36 PM.jpeg',
    '/src/assets/products/WhatsApp Image 2025-11-17 at 8.31.36 PM (1).jpeg',
    '/src/assets/products/WhatsApp Image 2025-11-17 at 8.31.36 PM (2).jpeg'
  ];

  const stores = [
    {
      id: 1,
      title: "Racks de Pipe y PTR",
      subtitle: "Estructuras modulares de alta calidad",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "COMPRAR",
      hasCarousel: true
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

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? racksImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === racksImages.length - 1 ? 0 : prev + 1));
  };

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
                padding: store.hasCarousel ? '0' : '3rem 2rem',
                borderRadius: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '300px',
                border: store.borderColor ? `2px solid ${store.borderColor}` : 'none',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative'
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
              {store.hasCarousel ? (
                <>
                  {/* Carrusel de imágenes */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '280px',
                    background: '#000',
                    overflow: 'hidden'
                  }}>
                    <motion.img
                      key={activeImageIndex}
                      src={racksImages[activeImageIndex]}
                      alt="Racks de Pipe y PTR"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />

                    {/* Botones de navegación */}
                    <button
                      onClick={handlePrevImage}
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.9)'}
                      onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.7)'}
                    >
                      <ChevronLeft size={20} color="#000" />
                    </button>

                    <button
                      onClick={handleNextImage}
                      style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.9)'}
                      onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.7)'}
                    >
                      <ChevronRight size={20} color="#000" />
                    </button>

                    {/* Indicadores de imagen */}
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '0.5rem',
                      zIndex: 10
                    }}>
                      {racksImages.map((_, idx) => (
                        <div
                          key={idx}
                          style={{
                            width: idx === activeImageIndex ? '24px' : '8px',
                            height: '8px',
                            background: idx === activeImageIndex ? '#0052A6' : 'rgba(255, 255, 255, 0.5)',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                          onClick={() => setActiveImageIndex(idx)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div style={{
                    padding: '2rem',
                    background: store.color,
                    color: store.textColor || 'white',
                    borderTop: store.borderColor ? `2px solid ${store.borderColor}` : 'none'
                  }}>
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
                      marginBottom: '1.5rem',
                      fontFamily: 'Montserrat, sans-serif'
                    }}>
                      {store.subtitle}
                    </p>

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
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
