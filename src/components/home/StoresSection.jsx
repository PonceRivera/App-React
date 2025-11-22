import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StoresSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const [activeHybridIndex, setActiveHybridIndex] = useState(0);
  const [activeMontajeImageIndex, setActiveMontajeImageIndex] = useState(0);

  // Combinar solo las tres secciones correctas: Racks de Pipe y PTR, Racks de PTR, y Racks suministro de materiales
  const hybridRacksImages = [
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_4.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_5.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr4.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros4.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros5.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20suministros6.jpeg'
  ];
  const raksMontajeImages = [
    '/products/raks para montaje3.jpeg',
    '/products/raks para montaje4.jpeg'
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
    '/products/raks para montaje1.jpeg',
    '/products/raks para montaje2.jpeg',
    '/products/raks para montaje3.jpeg',
    '/products/raks para montaje4.jpeg',
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

  // Combinar todas las imágenes de la sección unificada
  const unifiedBoxesImages = [
    ...hdpeImages,
    ...ezProImages,
    ...ezProDivisionesImages
  ];
  const [activeUnifiedBoxesIndex, setActiveUnifiedBoxesIndex] = useState(0);

  const stores = [
    {
      id: 1,
      title: "Racks híbridos (Pipe y ptr)",
      subtitle: "Estructuras modulares de alta calidad - Pipe, PTR y suministros de materiales",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "COMPRAR",
      hasCarousel: true,
      images: hybridRacksImages,
      activeIndex: activeHybridIndex,
      setActiveIndex: setActiveHybridIndex,
      handlePrev: () => setActiveHybridIndex((prev) => (prev === 0 ? hybridRacksImages.length - 1 : prev - 1)),
      handleNext: () => setActiveHybridIndex((prev) => (prev === hybridRacksImages.length - 1 ? 0 : prev + 1)),
    },
    {
      id: 2,
      title: "Cajas HDPE, EZ-pro y soportes",
      subtitle: "Diseño y fabricación en HDPE, EZ-pro y materiales varios (MDF forrado, etc)",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "VER MÁS",
      hasCarousel: true,
      images: unifiedBoxesImages,
      activeIndex: activeUnifiedBoxesIndex,
      setActiveIndex: setActiveUnifiedBoxesIndex,
      handlePrev: () => setActiveUnifiedBoxesIndex((prev) => (prev === 0 ? unifiedBoxesImages.length - 1 : prev - 1)),
      handleNext: () => setActiveUnifiedBoxesIndex((prev) => (prev === unifiedBoxesImages.length - 1 ? 0 : prev + 1)),
    },
    {
      id: 3,
      title: "Diseño y fabricación con materiales como HDPE y EZPRO",
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
      wide: false,
      centered: true
    }
  ];

  return (
    <section id="stores" style={{
      padding: isMobile ? '2rem 0.5rem 4rem 0.5rem' : '5rem 1rem 10rem 1rem',
      background: 'transparent',
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
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)'
          }}
        >
          Stores
        </motion.h2>

        {/* Grid superior con las dos primeras secciones */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(300px, 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)',
          alignItems: 'start',
          maxWidth: '100%',
          marginBottom: 'clamp(1rem, 3vw, 2rem)'
        }}>
          {stores.slice(0, 2).map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: store.color,
                color: store.textColor || 'white',
                padding: store.hasCarousel ? '0' : 'clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)',
                borderRadius: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 'clamp(250px, 50vw, 300px)',
                border: store.borderColor ? `2px solid ${store.borderColor}` : 'none',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
                gridColumn: store.wide && !isMobile && !isTablet ? 'span 2' : 'span 1',
                width: '100%',
                maxWidth: '100%'
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
                    height: 'clamp(300px, 50vw, 450px)',
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
                        objectFit: 'cover',
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
                        left: 'clamp(0.5rem, 2vw, 1rem)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: 'none',
                        borderRadius: '50%',
                        width: 'clamp(35px, 8vw, 50px)',
                        height: 'clamp(35px, 8vw, 50px)',
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
                      <ChevronLeft size={isMobile ? 16 : 24} color="#000" />
                    </button>
                    <button
                      onClick={store.handleNext}
                      style={{
                        position: 'absolute',
                        right: 'clamp(0.5rem, 2vw, 1rem)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: 'none',
                        borderRadius: '50%',
                        width: 'clamp(35px, 8vw, 50px)',
                        height: 'clamp(35px, 8vw, 50px)',
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
                      <ChevronRight size={isMobile ? 16 : 24} color="#000" />
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
                    padding: 'clamp(1rem, 4vw, 2rem)',
                    background: store.color,
                    color: store.textColor || 'white',
                    borderTop: store.borderColor ? `2px solid ${store.borderColor}` : 'none',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      right: '-50%',
                      bottom: '-50%',
                      backgroundImage: `url(/Patron.jpeg?v=${Date.now()})`,
                      backgroundSize: '300px 300px',
                      backgroundRepeat: 'repeat',
                      transform: 'rotate(-5deg)',
                      transformOrigin: 'center center',
                      opacity: 0.15,
                      zIndex: 0,
                      pointerEvents: 'none'
                    }}></div>
                    <h3 style={{
                      fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: '1.2'
                    }}>
                      {store.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      opacity: 0.9,
                      lineHeight: 1.5,
                      marginBottom: '1.5rem',
                      fontFamily: 'Montserrat, sans-serif',
                      position: 'relative',
                      zIndex: 1
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
                      fontFamily: 'Montserrat, sans-serif',
                      position: 'relative',
                      zIndex: 1
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
                      fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: '1.2'
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

        {/* Sección centrada para tablet */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '100%'
        }}>
          <div style={{
            width: isMobile ? '100%' : '60%',
            maxWidth: '600px'
          }}>
            {stores.slice(2, 3).map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  background: store.color,
                  color: store.textColor || 'white',
                  padding: store.hasCarousel ? '0' : 'clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 'clamp(250px, 40vw, 350px)',
                  border: store.borderColor ? `2px solid ${store.borderColor}` : 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%'
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
                      height: 'clamp(320px, 45vw, 400px)',
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
                          objectFit: 'cover',
                          background: '#f3f3f3',
                          display: 'block'
                        }}
                        onError={e => {
                          e.target.onerror = null;
                          e.target.src = 'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/fallback-image.png';
                          e.target.style.background = '#f3f3f3';
                        }}
                      />
                      {/* Botones de navegación */}
                      <button
                        onClick={store.handlePrev}
                        style={{
                          position: 'absolute',
                          left: 'clamp(0.5rem, 2vw, 1rem)',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(255, 255, 255, 0.7)',
                          border: 'none',
                          borderRadius: '50%',
                          width: 'clamp(35px, 8vw, 50px)',
                          height: 'clamp(35px, 8vw, 50px)',
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
                        <ChevronLeft size={isMobile ? 16 : 24} color="#000" />
                      </button>
                      <button
                        onClick={store.handleNext}
                        style={{
                          position: 'absolute',
                          right: 'clamp(0.5rem, 2vw, 1rem)',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(255, 255, 255, 0.7)',
                          border: 'none',
                          borderRadius: '50%',
                          width: 'clamp(35px, 8vw, 50px)',
                          height: 'clamp(35px, 8vw, 50px)',
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
                        <ChevronRight size={isMobile ? 16 : 24} color="#000" />
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
                      padding: 'clamp(1rem, 4vw, 2rem)',
                      background: store.color,
                      color: store.textColor || 'white',
                      borderTop: store.borderColor ? `2px solid ${store.borderColor}` : 'none',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        right: '-50%',
                        bottom: '-50%',
                        backgroundImage: `url(/Patron.jpeg?v=${Date.now()})`,
                        backgroundSize: '300px 300px',
                        backgroundRepeat: 'repeat',
                        transform: 'rotate(-5deg)',
                        transformOrigin: 'center center',
                        opacity: 0.15,
                        zIndex: 0,
                        pointerEvents: 'none'
                      }}></div>
                      <h3 style={{
                        fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                        fontFamily: 'Montserrat, sans-serif',
                        lineHeight: '1.2'
                      }}>
                        {store.title}
                      </h3>
                      <p style={{
                        fontSize: '0.95rem',
                        opacity: 0.9,
                        lineHeight: 1.5,
                        marginBottom: '1.5rem',
                        fontFamily: 'Montserrat, sans-serif',
                        position: 'relative',
                        zIndex: 1
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
                        fontFamily: 'Montserrat, sans-serif',
                        position: 'relative',
                        zIndex: 1
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
                        fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                        fontFamily: 'Montserrat, sans-serif',
                        lineHeight: '1.2'
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
      </div>
    </section>
  );
}