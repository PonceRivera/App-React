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
      background: '#f5f5f5'
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
            color: '#333'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '2rem',
            color: '#333'
          }}>
            ¿TIENE ALGUNA PREGUNTA?
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: '#666',
            marginBottom: '2rem'
          }}>
            Contáctenos para discutir sus requerimientos.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: '#333'
              }}>
                Email
              </h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem'
              }}>
                contacto@trilogiq.com
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: '#333'
              }}>
                Teléfono
              </h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem'
              }}>
                +34 91 000 0000
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: '#333'
              }}>
                Horario
              </h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem'
              }}>
                Lun - Vie: 9:00 - 18:00
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            background: 'white',
            padding: '2.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre *"
              required
              style={{
                width: '100%',
                background: '#f9f9f9',
                border: '1px solid #e0e0e0',
                color: '#333',
                padding: '0.75rem 1rem',
                fontSize: '0.95rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = '#0066cc'}
              onBlur={e => e.target.style.borderColor = '#e0e0e0'}
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Teléfono *"
              required
              style={{
                width: '100%',
                background: '#f9f9f9',
                border: '1px solid #e0e0e0',
                color: '#333',
                padding: '0.75rem 1rem',
                fontSize: '0.95rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = '#0066cc'}
              onBlur={e => e.target.style.borderColor = '#e0e0e0'}
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              required
              style={{
                width: '100%',
                background: '#f9f9f9',
                border: '1px solid #e0e0e0',
                color: '#333',
                padding: '0.75rem 1rem',
                fontSize: '0.95rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = '#0066cc'}
              onBlur={e => e.target.style.borderColor = '#e0e0e0'}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensaje *"
              required
              rows={5}
              style={{
                width: '100%',
                background: '#f9f9f9',
                border: '1px solid #e0e0e0',
                color: '#333',
                padding: '0.75rem 1rem',
                fontSize: '0.95rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease',
                outline: 'none',
                resize: 'none',
                fontFamily: 'inherit'
              }}
              onFocus={e => e.target.style.borderColor = '#0066cc'}
              onBlur={e => e.target.style.borderColor = '#e0e0e0'}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#2c2c2c',
                color: '#ffffff',
                fontWeight: 700,
                padding: '0.875rem 1.5rem',
                fontSize: '1rem',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={e => e.target.style.background = '#1a1a1a'}
              onMouseOut={e => e.target.style.background = '#2c2c2c'}
            >
              ENVIAR
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
