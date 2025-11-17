import React from 'react';
import { MessageCircle, Facebook, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#0f172a',
      color: '#cbd5e1',
      padding: '4rem 1rem',
      borderTop: '1px solid rgba(226, 232, 240, 0.1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        textAlign: 'center'
      }}>
        <div>
          <div style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#cbd5e1',
            marginBottom: '0.5rem'
          }}>
            SOLID
          </div>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
            Soluciones y Diseños<br />Industriales en Saltillo
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'flex-start' }}>
          <a href="#" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            background: 'rgba(226, 232, 240, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            color: '#cbd5e1',
            border: '1px solid rgba(226, 232, 240, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(30, 64, 175, 0.2)';
            e.target.style.borderColor = '#3b82f6';
            e.target.style.color = '#93c5fd';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(226, 232, 240, 0.1)';
            e.target.style.borderColor = 'rgba(226, 232, 240, 0.2)';
            e.target.style.color = '#cbd5e1';
          }}>
            <MessageCircle size={18} />
          </a>
          <a href="#" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            background: 'rgba(226, 232, 240, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            color: '#cbd5e1',
            border: '1px solid rgba(226, 232, 240, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(30, 64, 175, 0.2)';
            e.target.style.borderColor = '#3b82f6';
            e.target.style.color = '#93c5fd';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(226, 232, 240, 0.1)';
            e.target.style.borderColor = 'rgba(226, 232, 240, 0.2)';
            e.target.style.color = '#cbd5e1';
          }}>
            <Facebook size={18} />
          </a>
          <a href="#" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            background: 'rgba(226, 232, 240, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            color: '#cbd5e1',
            border: '1px solid rgba(226, 232, 240, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(30, 64, 175, 0.2)';
            e.target.style.borderColor = '#3b82f6';
            e.target.style.color = '#93c5fd';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(226, 232, 240, 0.1)';
            e.target.style.borderColor = 'rgba(226, 232, 240, 0.2)';
            e.target.style.color = '#cbd5e1';
          }}>
            <Send size={18} />
          </a>
        </div>

        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
            © 2025 SOLID Industriales<br />Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
