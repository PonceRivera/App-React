import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StoresSection() {
  // Estados para cada carrusel
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activePtrImageIndex, setActivePtrImageIndex] = useState(0);
  const [activeMontajeImageIndex, setActiveMontajeImageIndex] = useState(0);

  // Arrays de imágenes
  const racksImages = [
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_4.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_5.jpeg'
  ];
  const ptrImages = [
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr4.jpeg'
  ];
  const raksMontajeImages = [
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje4.jpeg'
  ];

  const [activeSuministrosIndex, setActiveSuministrosIndex] = useState(0);
  const [activeHdpeIndex, setActiveHdpeIndex] = useState(0);
  const [activeEzProIndex, setActiveEzProIndex] = useState(0);
  const [activeTabletIndex, setActiveTabletIndex] = useState(0);
  const suministrosImages = [
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros4.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros5.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros6.jpeg'
  ];
  const hdpeImages = [
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/HDPE%20negras1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/HDPE%20negras2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/HDPE%20negras3.jpeg'
  ];
  const ezProImages = [
    '/products/EZ pro1.jpeg',
    '/products/EZ pro2.jpeg',
    '/products/EZ pro3.jpeg'
  ];
  const tabletImages = [
    '/products/soporte para tablet1.jpeg',
    '/products/soporte para tablet2.jpeg',
    '/products/soporte para tablet3.jpeg',
    '/products/soporte para tablet4.jpeg',
    '/products/soporte para tablet5.jpeg'
  ];
  const ezProDivisionesImages = [
    '/products/ez-pro con divisiones1.jpeg',
    '/products/ez-pro con divisiones2.jpeg',
    '/products/ez-pro con divisiones3.jpeg'
  ];
  const [activeEzProDivisionesIndex, setActiveEzProDivisionesIndex] = useState(0);

  const stores = [
    {
      id: 1,
      title: "Racks de Pipe y PTR",
      subtitle: "Estructuras modulares de alta calidad",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "COMPRAR",
      hasCarousel: true,
      images: racksImages,
      activeIndex: activeImageIndex,
      setActiveIndex: setActiveImageIndex,
      handlePrev: () => setActiveImageIndex((prev) => (prev === 0 ? racksImages.length - 1 : prev - 1)),
      handleNext: () => setActiveImageIndex((prev) => (prev === racksImages.length - 1 ? 0 : prev + 1)),
    },
    {
      id: 2,
      title: "Racks de PTR",
      subtitle: "Estructuras versátiles y resistentes",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "COMPRAR",
      hasCarousel: true,
      images: ptrImages,
      activeIndex: activePtrImageIndex,
      setActiveIndex: setActivePtrImageIndex,
      handlePrev: () => setActivePtrImageIndex((prev) => (prev === 0 ? ptrImages.length - 1 : prev - 1)),
      handleNext: () => setActivePtrImageIndex((prev) => (prev === ptrImages.length - 1 ? 0 : prev + 1)),
    },
    {
      id: 3,
      title: "Soportes de racks para montaje de pantalla y controladores",
      subtitle: "Soluciones para montaje profesional de pantallas y controladores",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "VER MÁS",
      hasCarousel: true,
      images: raksMontajeImages,
      activeIndex: activeMontajeImageIndex,
      setActiveIndex: setActiveMontajeImageIndex,
      handlePrev: () => setActiveMontajeImageIndex((prev) => (prev === 0 ? raksMontajeImages.length - 1 : prev - 1)),
      handleNext: () => setActiveMontajeImageIndex((prev) => (prev === raksMontajeImages.length - 1 ? 0 : prev + 1)),
    },
    {
      id: 4,
      title: "Racks suministros de materiales",
      subtitle: "Soluciones para suministro eficiente de materiales",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "VER MÁS",
      hasCarousel: true,
      images: suministrosImages,
      activeIndex: activeSuministrosIndex,
      setActiveIndex: setActiveSuministrosIndex,
      handlePrev: () => setActiveSuministrosIndex((prev) => (prev === 0 ? suministrosImages.length - 1 : prev - 1)),
      handleNext: () => setActiveSuministrosIndex((prev) => (prev === suministrosImages.length - 1 ? 0 : prev + 1)),
    },
    {
      id: 5,
      title: "Cajas HDPE negras",
      subtitle: "Almacenaje resistente y seguro",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "VER MÁS",
      hasCarousel: true,
      images: hdpeImages,
      activeIndex: activeHdpeIndex,
      setActiveIndex: setActiveHdpeIndex,
      handlePrev: () => setActiveHdpeIndex((prev) => (prev === 0 ? hdpeImages.length - 1 : prev - 1)),
      handleNext: () => setActiveHdpeIndex((prev) => (prev === hdpeImages.length - 1 ? 0 : prev + 1)),
    },
    {
      id: 6,
      title: "Cajas EZ-Pro",
      subtitle: "Cajas plásticas EZ-Pro para almacenamiento industrial",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "VER MÁS",
      hasCarousel: true,
      images: ezProImages,
      activeIndex: activeEzProIndex,
      setActiveIndex: setActiveEzProIndex,
      handlePrev: () => setActiveEzProIndex((prev) => (prev === 0 ? ezProImages.length - 1 : prev - 1)),
      handleNext: () => setActiveEzProIndex((prev) => (prev === ezProImages.length - 1 ? 0 : prev + 1)),
    },
    {
      id: 7,
      title: "Cajas ez-pro con divisiones",
      subtitle: "Cajas plásticas EZ-Pro con divisiones para organización avanzada",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "VER MÁS",
      hasCarousel: true,
      images: ezProDivisionesImages,
      activeIndex: activeEzProDivisionesIndex,
      setActiveIndex: setActiveEzProDivisionesIndex,
      handlePrev: () => setActiveEzProDivisionesIndex((prev) => (prev === 0 ? ezProDivisionesImages.length - 1 : prev - 1)),
      handleNext: () => setActiveEzProDivisionesIndex((prev) => (prev === ezProDivisionesImages.length - 1 ? 0 : prev + 1)),
      wide: true
    },
    {
      id: 8,
      title: "Soportes para tablet",
      subtitle: "Soluciones para montaje de tablets en racks y estaciones",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "VER MÁS",
      hasCarousel: true,
      images: tabletImages,
      activeIndex: activeTabletIndex,
      setActiveIndex: setActiveTabletIndex,
      handlePrev: () => setActiveTabletIndex((prev) => (prev === 0 ? tabletImages.length - 1 : prev - 1)),
      handleNext: () => setActiveTabletIndex((prev) => (prev === tabletImages.length - 1 ? 0 : prev + 1)),
      wide: true
    }
  ];

  return (
    <section style={{
      padding: '5rem 1rem 10rem 1rem',
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
          gridTemplateColumns: 'repeat(2, minmax(450px, 1fr))',
          gap: '2rem',
          alignItems: 'start'
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
                position: 'relative',
                gridColumn: store.wide ? 'span 1' : undefined
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
                    height: '400px',
                    background: '#f3f3f3',
                    overflow: 'hidden'
                  }}>
                    <motion.img
                      key={store.activeIndex}
                      src={store.images[store.activeIndex]}
                      alt={store.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        background: '#f3f3f3',
                        display: 'block'
                      }}
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = 'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/fallback-image.png';
                        e.target.style.background = '#f3f3f3';
                      }}
                    />
                    {/* Fallback visual si la imagen no carga */}
                    {(!store.images[store.activeIndex] || store.images[store.activeIndex] === '') && (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#f3f3f3',
                        color: '#999',
                        fontSize: '2rem'
                      }}>
                        <span>Imagen no disponible</span>
                      </div>
                    )}
                    {/* Botones de navegación */}
                    <button
                      onClick={store.handlePrev}
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
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
                      <ChevronLeft size={24} color="#000" />
                    </button>
                    <button
                      onClick={store.handleNext}
                      style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
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
                      <ChevronRight size={24} color="#000" />
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
                      {store.images.map((_, idx) => (
                        <div
                          key={idx}
                          style={{
                            width: idx === store.activeIndex ? '24px' : '8px',
                            height: '8px',
                            background: idx === store.activeIndex ? '#0052A6' : 'rgba(255, 255, 255, 0.5)',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                          onClick={() => store.setActiveIndex(idx)}
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
