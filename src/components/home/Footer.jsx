import React from 'react';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#1C1C1C',
      color: '#e0e0e0',
      padding: '3rem 2rem 2rem',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      {/* Newsletter Section */}
      <div style={{
        background: '#0052A6',
        color: 'white',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        marginBottom: '3rem',
        borderRadius: '0.5rem'
      }}>
        <h3 style={{
          fontSize: '1.75rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          fontFamily: 'Montserrat, sans-serif'
        }}>
          MANTÉNGASE EN CONTACTO
        </h3>
        <p style={{ 
          fontSize: '0.95rem',
          marginBottom: '1.5rem',
          color: 'rgba(255, 255, 255, 0.95)',
          fontFamily: 'Montserrat, sans-serif'
        }}>
          Suscríbase a nuestro boletín (máximo 1 por mes)
        </p>
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <input
            type="email"
            placeholder="Email"
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              border: 'none',
              borderRadius: '0.25rem',
              fontSize: '0.95rem',
              background: 'white',
              color: '#333',
              fontFamily: 'Montserrat, sans-serif'
            }}
          />
          <button style={{
            padding: '0.75rem 1.5rem',
            background: '#FF7A00',
            border: 'none',
            color: 'white',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div>
          <h4 style={{
            fontSize: '0.95rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
            color: 'white',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            NUESTROS PRODUCTOS
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Productos estándar
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Productos configurados
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Componentes
              </a>
            </li>
            <li>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Descargar catálogos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{
            fontSize: '0.95rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
            color: 'white',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            SOLID
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Contáctarnos
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Términos y Condiciones
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Aviso Legal
              </a>
            </li>
            <li>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Cookies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{
            fontSize: '0.95rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
            color: 'white',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            EMPRESA
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Sobre nosotros
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Servicios
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Clientes
              </a>
            </li>
            <li>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                Publicaciones
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        fontSize: '0.85rem',
        color: '#999',
        fontFamily: 'Montserrat, sans-serif'
      }}>
        <p>© 2024 SOLID. Todos los derechos reservados.</p>
        <select style={{
          background: 'transparent',
          border: '1px solid #666',
          color: '#ccc',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontFamily: 'Montserrat, sans-serif'
        }}>
          <option>ES - Español</option>
          <option>EN - English</option>
        </select>
      </div>
    </footer>
  );
}
