import React from 'react';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#1C1C1C',
      color: '#e0e0e0',
      padding: '0 2rem 4rem',
      fontFamily: 'Montserrat, sans-serif',
      opacity: 1,
      marginTop: '-5px'
    }}>
      {/* Newsletter Section */}
      <div style={{
        background: '#1C4283',
        color: 'white',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        marginBottom: '0',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        opacity: 1
      }}>
        <img src="/lgo.jpeg" alt="Logo SOLID" style={{ 
          width: 'clamp(200px, 50vw, 320px)', 
          maxWidth: '90vw', 
          height: 'auto', 
          margin: '0 auto 0.5rem auto', 
          display: 'block', 
          border: 'none', 
          outline: 'none', 
          background: '#1C4283',
          objectFit: 'contain'
        }} />
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
          <div style={{ textAlign: 'center', marginBottom: '0' }}>
            <span style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#1C4283', letterSpacing: '0.15rem', display: 'block' }}>SOLID</span>
            <span style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1rem', color: '#1C4283', letterSpacing: '0.04rem', display: 'block', marginTop: '0.3rem' }}>soluciones y diseños industriales</span>
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
