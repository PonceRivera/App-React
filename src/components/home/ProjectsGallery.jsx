import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectsGallery() {
  const projects = [
    {
      title: "Racks De Pipe y PTR",
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80"
      ]
    },
    {
      title: "Racks De PTR",
      images: [
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
      ]
    },
    {
      title: "Cajas",
      subtitle: "Cajas para la industria Automotriz",
      description: "También hacemos fabricación de cajas especiales! Ya que el EZ-PRO (AMARILLO) es súper ligero",
      buttonText: "Learn more"
    },
    {
      title: "EZ-PRO",
      subtitle: "También hacemos fabricación de cajas especiales! Ya que el EZ-PRO (AMARILLO) es súper ligero",
      buttonText: "Learn more"
    },
    {
      title: "Cajas de Material HDP",
      images: [
        "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80"
      ]
    },
    {
      title: "Rack Suministro De Materiales",
      images: [
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
      ]
    },
    {
      title: "Cajas De EZ PRO",
      images: [
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80"
      ]
    },
    {
      title: "Soporte Con Tablet",
      images: [
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
      ]
    },
    {
      title: "Soporte Por Tablet",
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
      ]
    },
    {
      title: "Cajas En Material HDPE Negro De 10 MM",
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
      ]
    }
  ];

  const [currentIndexes, setCurrentIndexes] = useState(projects.map(() => 0));

  const handlePrev = (projectIndex) => {
    setCurrentIndexes(prev => {
      const newIndexes = [...prev];
      const imagesLength = projects[projectIndex].images?.length || 1;
      newIndexes[projectIndex] = (prev[projectIndex] - 1 + imagesLength) % imagesLength;
      return newIndexes;
    });
  };

  const handleNext = (projectIndex) => {
    setCurrentIndexes(prev => {
      const newIndexes = [...prev];
      const imagesLength = projects[projectIndex].images?.length || 1;
      newIndexes[projectIndex] = (prev[projectIndex] + 1) % imagesLength;
      return newIndexes;
    });
  };

  return (
    <section style={{
      padding: '5rem 1rem',
      background: 'transparent',
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
            color: '#1e40af'
          }}>
            NUESTROS DISEÑOS
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem'
        }}>
          {projects.map((project, projectIndex) => (
            <motion.div
              key={projectIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: projectIndex * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: 'transparent',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ position: 'relative' }}>
                {project.images ? (
                  <div style={{
                    position: 'relative',
                    height: '320px',
                    background: '#e2e8f0'
                  }}>
                    <img
                      src={project.images[currentIndexes[projectIndex]]}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    {project.images.length > 1 && (
                      <>
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '1rem'
                        }}>
                          <button
                            onClick={() => handlePrev(projectIndex)}
                            style={{
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.8)',
                              backdropFilter: 'blur(4px)',
                              border: 'none',
                              padding: '0.5rem',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseOver={e => e.target.style.background = 'rgba(255, 255, 255, 1)'}
                            onMouseOut={e => e.target.style.background = 'rgba(255, 255, 255, 0.8)'}
                          >
                            <ChevronLeft size={20} style={{ color: '#1f2937' }} />
                          </button>
                          <button
                            onClick={() => handleNext(projectIndex)}
                            style={{
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.8)',
                              backdropFilter: 'blur(4px)',
                              border: 'none',
                              padding: '0.5rem',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseOver={e => e.target.style.background = 'rgba(255, 255, 255, 1)'}
                            onMouseOut={e => e.target.style.background = 'rgba(255, 255, 255, 0.8)'}
                          >
                            <ChevronRight size={20} style={{ color: '#1f2937' }} />
                          </button>
                        </div>
                        <div style={{
                          position: 'absolute',
                          bottom: '1rem',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          display: 'flex',
                          gap: '0.5rem'
                        }}>
                          {project.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => {
                                setCurrentIndexes(prev => {
                                  const newIndexes = [...prev];
                                  newIndexes[projectIndex] = imgIndex;
                                  return newIndexes;
                                });
                              }}
                              style={{
                                width: currentIndexes[projectIndex] === imgIndex ? '1.5rem' : '0.5rem',
                                height: '0.5rem',
                                borderRadius: '9999px',
                                background: currentIndexes[projectIndex] === imgIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div style={{
                    height: '320px',
                    background: 'linear-gradient(to bottom right, #3b82f6, #1e3a8a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
                      <h3 style={{
                        fontSize: '1.875rem',
                        fontWeight: 700,
                        marginBottom: '1rem'
                      }}>
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p style={{
                          fontSize: '1rem',
                          marginBottom: '1.5rem',
                          lineHeight: 1.5
                        }}>
                          {project.subtitle}
                        </p>
                      )}
                      {project.description && (
                        <p style={{
                          fontSize: '0.875rem',
                          marginBottom: '1.5rem',
                          opacity: 0.9,
                          lineHeight: 1.5
                        }}>
                          {project.description}
                        </p>
                      )}
                      {project.buttonText && (
                        <button style={{
                          background: '#ffffff',
                          color: '#1e40af',
                          padding: '0.5rem 1.5rem',
                          borderRadius: '0.25rem',
                          fontWeight: 700,
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={e => e.target.style.background = '#f3f4f6'}
                        onMouseOut={e => e.target.style.background = '#ffffff'}
                        >
                          {project.buttonText}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: '#64748b'
                }}>
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
