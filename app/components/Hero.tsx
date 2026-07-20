'use client';

export default function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '82px 0 74px' }}>
      <div style={{
        position: 'absolute',
        width: '780px',
        height: '780px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(36, 87, 255, 0.18), transparent 62%)',
        right: '-260px',
        top: '-300px',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        width: 'min(var(--max), calc(100% - 40px))',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: '0.98fr 1.02fr',
        alignItems: 'center',
        gap: '62px'
      }}>
        {/* Colonne gauche */}
        <div>
          <h1 style={{
            fontSize: '44px',
            lineHeight: '1.15',
            fontWeight: 900,
            color: '#0f172a',
            marginBottom: '22px',
          }}>
            Gestion comptable personnalisée pour indépendants, PME et start-up
          </h1>

          <p style={{
            maxWidth: '520px',
            marginBottom: '26px',
            color: '#64748b',
            fontSize: '17px',
            lineHeight: '1.6'
          }}>
            Votre partenaire de confiance en comptabilité, offrant des solutions sur mesure pour les travailleurs indépendants, les PME et les start-ups, pour une gestion financière optimale et innovante.
          </p>

          {/* Bloc "Vos chiffres, enfin pilotés" */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '18px',
            padding: '18px 20px',
            marginBottom: '26px',
            maxWidth: '480px',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              minWidth: '48px',
              borderRadius: '14px',
              background: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#facc15',
              fontSize: '20px',
            }}>
              ↗
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '17px', color: '#0f172a' }}>
                Vos chiffres, enfin pilotés.
              </div>
              <div style={{ fontSize: '14px', color: '#64748b' }}>
                La comptabilité claire, humaine et connectée.
              </div>
            </div>
          </div>

          {/* Boutons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            marginBottom: '22px',
            maxWidth: '480px',
          }}>
            <a href="#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '54px',
              padding: '0 24px',
              borderRadius: '999px',
              fontSize: '16px',
              fontWeight: 800,
              textDecoration: 'none',
              color: '#FFFFFF',
              background: '#2457FF',
              cursor: 'pointer',
              boxShadow: '0 18px 42px rgba(36, 87, 255, 0.25)',
              border: 'none'
            }}>
              Demander un devis
            </a>
            <a href="https://customer.mycompanyfiles.fr" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '54px',
              padding: '0 24px',
              borderRadius: '999px',
              fontSize: '16px',
              fontWeight: 800,
              textDecoration: 'none',
              color: '#101B3D',
              background: '#FFFFFF',
              border: '1px solid #DDE5F1',
              cursor: 'pointer'
            }}>
              Accéder à mon espace client
            </a>
          </div>

          {/* Tags */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            {['GED sécurisée', 'Assistance téléphonique', 'Tableaux de bord'].map((tag) => (
              <div key={tag} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '999px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#0f172a',
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#22d3ee',
                }} />
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite : carte "Aperçu plateforme" */}
        <div style={{
          background: '#fff',
          borderRadius: '20px',
          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
          padding: '24px',
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
          }}>
            <strong style={{ fontSize: '15px', color: '#0f172a' }}>
              Aperçu plateforme Top-Compta
            </strong>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#cbd5e1',
                }} />
              ))}
            </div>
          </div>

          {/* Cadre image */}
          <div style={{
            border: '1px solid #e2e8f0',
            borderRadius: '14px',
            padding: '16px',
            marginBottom: '16px',
          }}>
            <img
              src="/images/dashboard.jpg"
              alt="Aperçu anonymisé du tableau de bord Top-Compta"
              style={{
                width: '100%',
                height: 'auto',
                minHeight: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                display: 'block',
              }}
            />
          </div>

          {/* Badges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
          }}>
            {[
              { label: 'Documents', value: 'Centralisés' },
              { label: 'Suivi', value: 'En ligne' },
              { label: 'Données', value: 'Masquées' },
            ].map((item) => (
              <div key={item.label} style={{
                background: '#f8fafc',
                borderRadius: '12px',
                padding: '12px 14px',
              }}>
                <span style={{ fontSize: '12px', color: '#64748b' }}>{item.label}</span>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}