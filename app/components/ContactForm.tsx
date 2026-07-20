'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    status: 'Indépendant',
    need: 'Comptabilité',
    employees: '',
    pieces: '',
    callback: 'Oui',
    message: '',
    consent: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Merci ! Votre demande a été envoyée.');
  };

  return (
    <section id="contact" style={{ padding: '60px 0', background: 'var(--white)' }}>
      <div style={{
        width: 'min(var(--max), calc(100% - 40px))',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.2fr',
        gap: '60px',
        alignItems: 'start'
      }}>
        <aside style={{ position: 'sticky', top: '100px' }}>
          <span style={{
            display: 'inline-block',
            background: 'var(--soft-blue)',
            color: 'var(--bleu-action)',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 700,
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>Demande de devis</span>
          <h2>Parlez-nous de votre situation.</h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'var(--muted)',
            marginBottom: '32px'
          }}>Un formulaire court pour qualifier votre besoin et vous orienter vers la bonne formule.</p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <div style={{ fontSize: '24px', minWidth: '32px', textAlign: 'center', color: 'var(--bleu-action)' }}>↗</div>
            <div>
              <strong>Objectif</strong>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: '0' }}>Comprendre votre besoin comptable, GED, bilan, paie ou facturation électronique.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ fontSize: '24px', minWidth: '32px', textAlign: 'center', color: 'var(--bleu-action)' }}>✓</div>
            <div>
              <strong>Réponse</strong>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: '0' }}>Être rappelé par un conseiller ou recevoir un retour adapté à votre activité.</p>
            </div>
          </div>
        </aside>

        <form onSubmit={handleSubmit} style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          boxShadow: 'var(--shadow-soft)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--bleu-nuit)' }}>Nom et prénom</label>
            <input
              name="name"
              type="text"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: '12px 16px',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--bleu-nuit)' }}>Email</label>
            <input
              name="email"
              type="email"
              placeholder="votre@email.fr"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: '12px 16px',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--bleu-nuit)' }}>Téléphone</label>
            <input
              name="phone"
              type="tel"
              placeholder="Votre téléphone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                padding: '12px 16px',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--bleu-nuit)' }}>Nom de l'entreprise</label>
            <input
              name="company"
              type="text"
              placeholder="Votre société"
              value={formData.company}
              onChange={handleChange}
              style={{
                padding: '12px 16px',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--bleu-nuit)' }}>Statut</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={{
                padding: '12px 16px',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            >
              <option>Indépendant</option>
              <option>SASU</option>
              <option>SAS</option>
              <option>SARL</option>
              <option>SCI</option>
              <option>Autre</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--bleu-nuit)' }}>Besoin principal</label>
            <select
              name="need"
              value={formData.need}
              onChange={handleChange}
              style={{
                padding: '12px 16px',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            >
              <option>Comptabilité</option>
              <option>GED</option>
              <option>Bilan en retard</option>
              <option>Paie / social</option>
              <option>SCI</option>
              <option>Facturation électronique</option>
              <option>Autre</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--bleu-nuit)' }}>Nombre de salariés</label>
            <input
              name="employees"
              type="text"
              placeholder="Exemple : 0, 2, 10"
              value={formData.employees}
              onChange={handleChange}
              style={{
                padding: '12px 16px',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--bleu-nuit)' }}>Volume de pièces par mois</label>
            <input
              name="pieces"
              type="text"
              placeholder="Exemple : 30 pièces"
              value={formData.pieces}
              onChange={handleChange}
              style={{
                padding: '12px 16px',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--bleu-nuit)' }}>Souhaitez-vous être rappelé ?</label>
            <select
              name="callback"
              value={formData.callback}
              onChange={handleChange}
              style={{
                padding: '12px 16px',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            >
              <option>Oui</option>
              <option>Non</option>
            </select>
          </div>
          <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: 'var(--bleu-nuit)' }}>Message libre</label>
            <textarea
              name="message"
              placeholder="Décrivez votre besoin"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              style={{
                padding: '12px 16px',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              style={{ width: '18px', height: '18px', marginTop: '2px' }}
            />
            <span style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--muted)' }}>
              J'accepte que Top-Compta me recontacte au sujet de ma demande. Les données sont utilisées uniquement pour traiter la demande.
            </span>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <button
              type="submit"
              style={{
                width: '100%',
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
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 18px 42px rgba(36, 87, 255, 0.25)'
              }}
            >
              Envoyer ma demande
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}