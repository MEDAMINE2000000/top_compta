'use client';

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(246, 248, 252, 0.9)',
      borderBottom: '1px solid rgba(221, 229, 241, 0.9)',
      backdropFilter: 'blur(18px)'
    }}>
      <div style={{
        width: 'min(1180px, calc(100% - 40px))',
        height: '86px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '22px'
      }}>
        <img 
          src="/images/logo.png" 
          alt="TOP-COMPTA" 
          style={{
            height: '50px',
            width: 'auto',
            objectFit: 'contain'
          }}
        />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '22px',
          color: '#334155',
          fontSize: '14px',
          fontWeight: 800
        }}>
          <a href="#offres" style={{ textDecoration: 'none', color: 'inherit' }}>Notre offre</a>
          <a href="#plateforme" style={{ textDecoration: 'none', color: 'inherit' }}>Plateforme</a>
          <a href="#externalisation" style={{ textDecoration: 'none', color: 'inherit' }}>Externalisation</a>
          <a href="#avis" style={{ textDecoration: 'none', color: 'inherit' }}>Avis clients</a>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <a href="#contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50px',
            padding: '0 24px',
            borderRadius: '999px',
            border: '1px solid #DDE5F1',
            fontSize: '15px',
            fontWeight: 900,
            textDecoration: 'none',
            color: '#101B3D',
            background: '#FFFFFF',
            cursor: 'pointer'
          }}>
            Demander un devis
          </a>
          <a href="https://customer.mycompanyfiles.fr" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50px',
            padding: '0 24px',
            borderRadius: '999px',
            fontSize: '15px',
            fontWeight: 900,
            textDecoration: 'none',
            color: '#FFFFFF',
            background: '#2457FF',
            cursor: 'pointer'
          }}>
            Espace client
          </a>
        </div>
      </div>
    </nav>
  );
}