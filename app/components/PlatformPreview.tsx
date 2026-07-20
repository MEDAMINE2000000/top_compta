export default function PlatformPreview() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '20px',
      boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
      padding: '24px',
      maxWidth: '600px',
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

      {/* Image frame */}
      <div style={{
        border: '1px solid #e2e8f0',
        borderRadius: '14px',
        padding: '16px',
        marginBottom: '16px',
      }}>
        <img
          src="/images/dashboard.jpg"
          alt="Aperçu anonymisé du tableau de bord Top-Compta"
          style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
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
  );
}