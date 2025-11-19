  const [activeRaksMontajeIndex, setActiveRaksMontajeIndex] = useState(0);

  // Imágenes de raks para montaje
  const raksMontajeImages = [
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje4.jpeg'
  ];

  const handlePrevRaksMontajeImage = () => {
    setActiveRaksMontajeIndex((prev) => (prev === 0 ? raksMontajeImages.length - 1 : prev - 1));
  };
  const handleNextRaksMontajeImage = () => {
    setActiveRaksMontajeIndex((prev) => (prev === raksMontajeImages.length - 1 ? 0 : prev + 1));
  };
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StoresSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activePtrImageIndex, setActivePtrImageIndex] = useState(0);
  const [activeMontajeImageIndex, setActiveMontajeImageIndex] = useState(0);

  // Imágenes de Racks de Pipe y PTR desde GitHub
  const racksImages = [
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_4.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/rack_5.jpeg'
  ];

  // Imágenes de Racks de PTR desde GitHub
  const ptrImages = [
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/ptr4.jpeg'
  ];
   const raksParaMontajeImages = [
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje1.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje2.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%</span>montaje3.jpeg',
    'https://raw.githubusercontent.com/PonceRivera/App-React/main/src/assets/products/raks%20para%20montaje4.jpeg'
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
      title: "Racks de PTR",
      subtitle: "Estructuras versátiles y resistentes",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "COMPRAR",
      hasCarousel: true
    },
    {
      id: 4,
      title: "Racks para Montaje",
      subtitle: "Soluciones para líneas de ensamblaje",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "COMPRAR",
      hasCarousel: true
    },
    {
      id: 3,
      title: "Soportes de racks para montaje de pantalla y controladores",
      subtitle: "Soluciones para montaje profesional de pantallas y controladores",
      color: "#F0F7FF",
      textColor: "#333",
      borderColor: "#0052A6",
      button: "VER MÁS",
      hasCarousel: true
    }
  ];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? racksImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === racksImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrevPtrImage = () => {
    setActivePtrImageIndex((prev) => (prev === 0 ? ptrImages.length - 1 : prev - 1));
  };

  const handleNextPtrImage = () => {
    setActivePtrImageIndex((prev) => (prev === ptrImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrevMontajeImage = () => {
    setActiveMontajeImageIndex((prev) => (prev === 0 ? raksParaMontajeImages.length - 1 : prev - 1));
  };

  const handleNextMontajeImage = () => {
    setActiveMontajeImageIndex((prev) => (prev === raksParaMontajeImages.length - 1 ? 0 : prev + 1));
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
                      {store.hasCarousel ? (
                        <>
                          {/* Carrusel de imágenes */}
                          <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '400px',
                            background: '#000',
                            overflow: 'hidden'
                          }}>
                            <motion.img
                              key={store.id === 1 ? activeImageIndex : store.id === 2 ? activePtrImageIndex : store.id === 3 ? activeRaksMontajeIndex : undefined}
                              src={store.id === 1 ? racksImages[activeImageIndex] : store.id === 2 ? ptrImages[activePtrImageIndex] : store.id === 3 ? raksMontajeImages[activeRaksMontajeIndex] : undefined}
                              alt={store.title}
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
                              onClick={store.id === 1 ? handlePrevImage : store.id === 2 ? handlePrevPtrImage : store.id === 3 ? handlePrevRaksMontajeImage : undefined}
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
                              onClick={store.id === 1 ? handleNextImage : store.id === 2 ? handleNextPtrImage : store.id === 3 ? handleNextRaksMontajeImage : undefined}
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
                              {(store.id === 1 ? racksImages : store.id === 2 ? ptrImages : store.id === 3 ? raksMontajeImages : []).map((_, idx) => (
                                <div
                                  key={idx}
                                  style={{
                                    width: idx === (store.id === 1 ? activeImageIndex : store.id === 2 ? activePtrImageIndex : store.id === 3 ? activeRaksMontajeIndex : undefined) ? '24px' : '8px',
                                    height: '8px',
                                    background: idx === (store.id === 1 ? activeImageIndex : store.id === 2 ? activePtrImageIndex : store.id === 3 ? activeRaksMontajeIndex : undefined) ? '#0052A6' : 'rgba(255, 255, 255, 0.5)',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                  }}
                                  onClick={() => store.id === 1 ? setActiveImageIndex(idx) : store.id === 2 ? setActivePtrImageIndex(idx) : store.id === 3 ? setActiveRaksMontajeIndex(idx) : undefined}
                                />
                              ))}
                            </div>
                          </div>
                              store.id === 2 ? activePtrImageIndex :
                              activeMontajeImageIndex
                            ) ? '24px' : '8px',
                            height: '8px',
                            background: idx === (
                              store.id === 1 ? activeImageIndex :
                              store.id === 2 ? activePtrImageIndex :
                              activeMontajeImageIndex
                            ) ? '#0052A6' : 'rgba(255, 255, 255, 0.5)',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                          onClick={() => store.id === 1 ? setActiveImageIndex(idx) : store.id === 2 ? setActivePtrImageIndex(idx) : setActiveMontajeImageIndex(idx)}
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
