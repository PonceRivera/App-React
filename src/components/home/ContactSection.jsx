import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Nos pondremos en contacto pronto.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" style={{
      padding: '5rem 1rem',
      background: 'linear-gradient(to bottom right, #0f172a, #1e293b)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            color: '#ffffff'
          }}
        >
          <p style={{
            color: '#facc15',
            marginBottom: '1rem',
            fontSize: '1rem'
          }}>
            Ya llego hasta aquí y sabemos que tiene preguntas
          </p>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            marginBottom: '2rem'
          }}>
            HABLEMOS
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                Estamos En
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem'
              }}>
                Saltillo, Coahuila
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                Tome El Primer Paso<br />Nosotros Nos<br />Encargaremos<br />Del Resto
              </h3>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                Prefiere Llamarnos?
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '0.5rem'
              }}>
                844 603 5776
              </p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                cotiz@solidindustriales.com
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                Horario De Oficina
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '0.25rem'
              }}>
                Lun - Vie: 9am - 6pm
              </p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Sab: 10am - 4pm
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            position: 'relative'
          }}
        >
          {/* Logo Background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.05
          }}>
            <div style={{
              fontSize: '5rem',
              fontWeight: 800,
              color: '#ffffff'
            }}>
              SOLID
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative',
            zIndex: 10
          }}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="* Nombre"
              required
              style={{
                width: '100%',
                background: 'transparent',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                paddingBottom: '0.5rem',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 1)'}
              onBlur={e => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)'}
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="* Teléfono"
              required
              style={{
                width: '100%',
                background: 'transparent',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                paddingBottom: '0.5rem',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 1)'}
              onBlur={e => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)'}
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="* Email"
              required
              style={{
                width: '100%',
                background: 'transparent',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                paddingBottom: '0.5rem',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 1)'}
              onBlur={e => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)'}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="* Escriba su mensaje"
              required
              rows={6}
              style={{
                width: '100%',
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                padding: '0.5rem',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                outline: 'none',
                resize: 'none',
                fontFamily: 'inherit'
              }}
              onFocus={e => e.target.style.border = '1px solid rgba(255, 255, 255, 1)'}
              onBlur={e => e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)'}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#1e40af',
                color: '#ffffff',
                fontWeight: 700,
                padding: '0.75rem 1.5rem',
                fontSize: '1.125rem',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={e => e.target.style.background = '#1e3a8a'}
              onMouseOut={e => e.target.style.background = '#1e40af'}
            >
              HABLEMOS
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
