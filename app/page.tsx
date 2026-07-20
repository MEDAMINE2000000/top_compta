'use client';

import { FormEvent, useState } from 'react';
import Hero from './components/Hero';

export default function Home() {
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
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="announcement">
        <div className="announcement-inner container">
          <span>🎉 Nouvelle facturation électronique disponible</span>
          <a href="#contact">En savoir plus →</a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <img src="/images/logo.png" alt="TOP-COMPTA" style={{ height: '50px', width: 'auto' }} />
          <div className="nav-links">
            <a href="#offres">Notre offre</a>
            <a href="#plateforme">Plateforme</a>
            <a href="#externalisation">Externalisation</a>
            <a href="#avis">Avis clients</a>
          </div>
          <div className="nav-actions">
            <a href="#contact" className="btn btn-secondary">Demander un devis</a>
            <a href="https://customer.mycompanyfiles.fr" className="btn btn-primary">Espace client</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* PLATFORM SECTION */}
        <section style={{ padding: '82px 0', background: 'var(--white)' }}>
          <div className="container">
            <div className="section-head">
              <span className="tag">Plateforme</span>
              <h2>Un espace client pour piloter vos pièces, vos documents et votre activité.</h2>
              <p>Les captures sont intégrées dans des cadres premium. Les données client visibles sont masquées pour garantir la confidentialité.</p>
            </div>
            <div className="platform-grid">
              <div className="platform-card large" style={{ position: 'relative' }}>
                <img src="/images/dashboard.jpg" alt="Dashboard" />
                <span className="platform-label">Tableaux de bord</span>
                <span className="platform-accent"></span>
              </div>
              <div className="platform-stack">
                <div className="platform-card" style={{ position: 'relative' }}>
                  <img src="/images/caisse.jpg" alt="Caisse" />
                  <span className="platform-label">Gestion caisse</span>
                </div>
                <div className="platform-card" style={{ position: 'relative' }}>
                  <img src="/images/facturation.jpg" alt="Facturation" />
                  <span className="platform-label">Facturation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE SECTION — 6 cartes, comme la capture "Une solution comptable lisible..." */}
        <section style={{ padding: '82px 0', background: 'var(--fond-clair)' }}>
          <div className="container">
            <div className="section-head">
              <h2>Une solution comptable lisible, connectée et rassurante.</h2>
            </div>
            <div className="value-grid">
              <div className="value-card" style={{ textAlign: 'left' }}>
                <div className="bar" style={{ margin: '0 0 28px' }}></div>
                <h3>GED sécurisée</h3>
                <p>Vos pièces consultables et téléchargeables à tout moment.</p>
              </div>
              <div className="value-card" style={{ textAlign: 'left' }}>
                <div className="bar" style={{ margin: '0 0 28px' }}></div>
                <h3>Tableaux de bord</h3>
                <p>Votre tableau de bord actualisé consultable.</p>
              </div>
              <div className="value-card" style={{ textAlign: 'left' }}>
                <div className="bar" style={{ margin: '0 0 28px' }}></div>
                <h3>Assistance téléphonique</h3>
                <p>Relation client disponible par téléphone, mail et outils digitaux.</p>
              </div>
              <div className="value-card" style={{ textAlign: 'left' }}>
                <div className="bar" style={{ margin: '0 0 28px' }}></div>
                <h3>Bilan et liasse fiscale</h3>
                <p>Plaquette comptes annuels, liasse fiscale, compte de résultat SIG.</p>
              </div>
              <div className="value-card" style={{ textAlign: 'left' }}>
                <div className="bar" style={{ margin: '0 0 28px' }}></div>
                <h3>Outils en ligne</h3>
                <p>Application smartphone, ordinateur, scanner, connexion internet.</p>
              </div>
              <div className="value-card" style={{ textAlign: 'left' }}>
                <div className="bar" style={{ margin: '0 0 28px' }}></div>
                <h3>Facturation électronique</h3>
                <p>Préparer l'entreprise à la digitalisation des factures.</p>
              </div>
            </div>
            <div className="cta-row" style={{ marginTop: '36px' }}>
              <a href="#offres" className="btn btn-gold">Découvrir nos formules</a>
              <a href="#contact" className="btn btn-secondary">Être rappelé par un conseiller</a>
            </div>
          </div>
        </section>

        {/* OFFERS SECTION — Essentiel / Confort / Indépendant, comme la capture "Des formules claires..." */}
        <section id="offres" className="offers-section" style={{ padding: '82px 0', background: 'var(--white)' }}>
          <div className="container">
            <div className="section-head">
              <span className="tag">Notre offre Top-Compta</span>
              <h2>Des formules claires selon votre situation</h2>
              <p>Services, GED, assistance téléphonique et outils en ligne pour piloter votre comptabilité avec plus de simplicité.</p>
            </div>
            <div className="offer-grid">
              <div className="offer-card">
                <div className="top-line"></div>
                <span className="offer-label">Formule Essentiel</span>
                <h3>Pour lancer votre activité avec une base comptable solide.</h3>
                <p>Vous êtes en lancement d'entreprise, en franchise en base de TVA ou vous prenez en charge une partie de vos obligations.</p>
                <ul>
                  <li>Comptabilité</li>
                  <li>Saisie courante</li>
                  <li>Reportings trimestriels</li>
                  <li>Tableaux de bord mensuels</li>
                </ul>
                <button className="btn btn-primary">Demander un devis</button>
              </div>

              <div className="offer-card featured">
                <div className="top-line"></div>
                <span className="offer-label">Formule Confort</span>
                <h3>Pour déléguer davantage et suivre votre activité simplement.</h3>
                <p>Vous voulez vous consacrer au développement de votre entreprise et être plus tranquille au quotidien.</p>
                <ul>
                  <li>Comptabilité</li>
                  <li>Saisie courante</li>
                  <li>Reportings trimestriels</li>
                  <li>Tableaux de bord mensuels</li>
                </ul>
                <button className="btn btn-primary">Demander un devis</button>
              </div>

              <div className="offer-card">
                <div className="top-line"></div>
                <span className="offer-label">Formule Indépendant</span>
                <h3>Pour les dirigeants et indépendants qui veulent optimiser leur suivi.</h3>
                <p>Vous voulez déléguer la gestion du RSI, avoir l'esprit tranquille et développer votre business.</p>
                <ul>
                  <li>Comptabilité</li>
                  <li>Saisie courante</li>
                  <li>Reportings trimestriels</li>
                  <li>Tableaux de bord mensuels</li>
                </ul>
                <button className="btn btn-primary">Demander un devis</button>
              </div>
            </div>
          </div>
        </section>

        {/* DARK BAND SECTION — Externalisation, comme la capture "L'externalisation comptable..." */}
        <section id="externalisation" className="dark-band" style={{ padding: '82px 0' }}>
          <div className="container">
            <div className="split">
              <div>
                <span className="tag">Externalisation comptable</span>
                <h2>L'externalisation comptable au service de la gestion d'entreprise.</h2>
                <p>Nous sommes bien plus qu'un comptable. Nous sommes votre partenaire dévoué, offrant des conseils avec passion pour vous guider vers une excellence financière durable.</p>
                <button className="btn btn-gold">Être rappelé par un conseiller</button>
              </div>
              <div className="text-grid">
                <div className="text-card">
                  <h3>Votre outil de gestion en ligne sécurisé</h3>
                  <ul>
                    <li>Votre tableau de bord actualisé consultable</li>
                    <li>Une innovation adossée à la comptabilité que nous vous produisons</li>
                    <li>Vos pièces consultables et téléchargeables à tout moment</li>
                  </ul>
                </div>
                <div className="text-card">
                  <h3>Nous vous livrons</h3>
                  <ul>
                    <li>Plaquette comptes annuels</li>
                    <li>Liasse fiscale</li>
                    <li>Compte de résultat SIG</li>
                    <li>Tableau de bord mensuel</li>
                    <li>Statistiques actualisées</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BILAN SECTION — comme la capture "Bilan comptable pour PME" */}
        <section style={{ padding: '82px 0', background: 'var(--fond-clair)' }}>
          <div className="container">
            <div className="split">
              <div>
                <span className="tag">Facturation électronique</span>
                <h2>Bilan comptable pour PME</h2>
                <p>Optimisez la santé financière de votre entreprise avec notre service de bilan comptable sur mesure, conçu spécialement pour les travailleurs indépendants, les PME et les start-ups.</p>
                <ul className="text-card" style={{ border: 'none', boxShadow: 'none', background: 'transparent', padding: 0, marginBottom: '28px' }}>
                  <li>Application complète à partir d'un PC, tablette ou portable</li>
                  <li>Accès sécurisé à votre GED</li>
                  <li>CRM gestion commerciale en ligne</li>
                  <li>Formation permanente à l'utilisation des outils</li>
                </ul>
                <button className="btn btn-cyan">Préparer ma facturation électronique</button>
              </div>
              <div className="text-card">
                <h3 style={{ fontSize: '19px' }}>Un pilotage clair de votre activité</h3>
                <p style={{ fontSize: '15px', marginBottom: '20px' }}>Chiffre d'affaires, TVA, charges, résultat estimé, échéances et documents suivis dans un espace sécurisé.</p>
                <div className="floating-note" style={{ marginTop: 0 }}>
                  <div className="mini-stat">
                    <span>CA</span>
                    <strong>42 800 €</strong>
                  </div>
                  <div className="mini-stat">
                    <span>TVA</span>
                    <strong>3 240 €</strong>
                  </div>
                  <div className="mini-stat">
                    <span>Résultat</span>
                    <strong>8 950 €</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION — comme la capture "Un cabinet digital avec un vrai suivi comptable." */}
        <section style={{ padding: '82px 0', background: 'var(--white)' }}>
          <div className="container">
            <div className="section-head center">
              <span className="tag" style={{ justifyContent: 'center' }}>Accompagnement humain</span>
              <h2>Un cabinet digital avec un vrai suivi comptable.</h2>
              <p>La plateforme facilite les échanges. L'accompagnement humain reste au centre de la relation client.</p>
            </div>
            <div className="text-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', maxWidth: 'none' }}>
              <div className="text-card">
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'var(--bleu-nuit)', color: 'var(--white)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 900, marginBottom: '16px'
                }}>1</div>
                <h3 style={{ fontSize: '18px' }}>Vous déposez vos pièces</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px' }}>Les documents sont déposés dans votre espace client sécurisé.</p>
              </div>
              <div className="text-card">
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'var(--bleu-nuit)', color: 'var(--white)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 900, marginBottom: '16px'
                }}>2</div>
                <h3 style={{ fontSize: '18px' }}>Nous traitons votre dossier</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px' }}>Votre comptabilité est suivie avec méthode et régularité.</p>
              </div>
              <div className="text-card">
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'var(--bleu-nuit)', color: 'var(--white)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 900, marginBottom: '16px'
                }}>3</div>
                <h3 style={{ fontSize: '18px' }}>Vous suivez vos indicateurs</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px' }}>Vous consultez vos tableaux de bord et vos documents.</p>
              </div>
              <div className="text-card">
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'var(--bleu-nuit)', color: 'var(--white)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 900, marginBottom: '16px'
                }}>4</div>
                <h3 style={{ fontSize: '18px' }}>Vous échangez avec un conseiller</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px' }}>Vous gardez un contact humain pour vos questions importantes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section style={{ padding: '82px 0', background: 'var(--fond-clair)' }}>
          <div className="container">
            <div className="section-head center">
              <span className="tag" style={{ justifyContent: 'center' }}>Fonctionnalités</span>
              <h2>Tout ce qu'il vous faut</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div className="feature-card">
                <img src="/images/dashboard.jpg" alt="Gestion docs" />
                <h3>Gestion des documents</h3>
                <p>Déposez et suivez vos pièces comptables</p>
              </div>
              <div className="feature-card">
                <img src="/images/caisse.jpg" alt="Tableaux" />
                <h3>Tableaux de bord</h3>
                <p>Visualisez vos KPIs en temps réel</p>
              </div>
              <div className="feature-card">
                <img src="/images/facturation.jpg" alt="Communication" />
                <h3>Communication</h3>
                <p>Échangez avec votre comptable</p>
              </div>
              <div className="feature-card">
                <img src="/images/kilometrique.jpg" alt="Sécurité" />
                <h3>Sécurité</h3>
                <p>Espace client sécurisé et certifié</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section style={{ padding: '82px 0', background: 'var(--white)' }}>
          <div className="container">
            <div className="section-head center">
              <span className="tag" style={{ justifyContent: 'center' }}>FAQ</span>
              <h2>Questions fréquentes</h2>
            </div>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Quels sont les délais de facturation ?</h3>
                <p>Les factures sont établies mensuellement. Vous recevrez votre devis dans les 48h suivant votre demande.</p>
              </div>
              <div className="faq-item">
                <h3>Puis-je changer de formule ?</h3>
                <p>Oui, vous pouvez évolutionner vers une formule supérieure à tout moment en contactant notre équipe.</p>
              </div>
              <div className="faq-item">
                <h3>Vos données sont-elles sécurisées ?</h3>
                <p>Absolument. Nous utilisons le chiffrement AES-256 et les serveurs sont certifiés ISO 27001.</p>
              </div>
              <div className="faq-item">
                <h3>Quel support client proposez-vous ?</h3>
                <p>Un support par email et téléphone pendant les horaires de bureau. Premium = support 24/7.</p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION — avec barres de notation, comme la capture Trustpilot */}
        <section id="avis" style={{ padding: '82px 0', background: 'var(--fond-clair)' }}>
          <div className="container">
            <div className="reviews-card" style={{ maxWidth: '780px' }}>
              <span className="tag" style={{ justifyContent: 'center', margin: '0 auto 16px' }}>Trustpilot</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center', textAlign: 'left' }}>
                <div style={{ textAlign: 'center' }}>
                  <div className="reviews-score">4,6</div>
                  <h3>Excellent</h3>
                  <div className="reviews-stars" style={{ color: 'var(--trustpilot)' }}>★★★★★</div>
                  <p className="reviews-count">49 avis vérifiés</p>
                  <a href="https://fr.trustpilot.com/review/top-compta.fr" className="btn btn-secondary">
                    Voir nos avis Trustpilot
                  </a>
                </div>
                <div className="rating-bars" style={{ margin: 0 }}>
                  <div className="rating-row">
                    <span>5 étoiles</span>
                    <div className="bar-track"><div className="bar-fill" style={{ width: '82%', background: 'var(--trustpilot)' }}></div></div>
                  </div>
                  <div className="rating-row">
                    <span>4 étoiles</span>
                    <div className="bar-track"><div className="bar-fill" style={{ width: '13%', background: 'var(--trustpilot)' }}></div></div>
                  </div>
                  <div className="rating-row">
                    <span>3 étoiles</span>
                    <div className="bar-track"><div className="bar-fill" style={{ width: '3%' }}></div></div>
                  </div>
                  <div className="rating-row">
                    <span>2 étoiles</span>
                    <div className="bar-track"><div className="bar-fill" style={{ width: '1%' }}></div></div>
                  </div>
                  <div className="rating-row">
                    <span>1 étoile</span>
                    <div className="bar-track"><div className="bar-fill" style={{ width: '1%' }}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ padding: '82px 0', background: 'var(--white)', textAlign: 'center' }}>
          <div className="container final-cta">
            <h2>Vos chiffres, enfin pilotés</h2>
            <p>Un cabinet comptable digital, une GED sécurisée, des tableaux de bord et un accompagnement humain pour avancer avec plus de clarté.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <a href="#contact" className="btn btn-primary">Demander un devis</a>
              <a href="#offres" className="btn btn-gold">Découvrir nos formules</a>
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <aside className="contact-panel">
              <span className="tag">Demande de devis</span>
              <h2>Parlez-nous de votre situation.</h2>
              <p className="large-text">Un formulaire court pour qualifier votre besoin et vous orienter vers la bonne formule.</p>

              <div className="contact-item">
                <div className="contact-icon">↗</div>
                <div>
                  <strong>Objectif</strong>
                  <p>Comprendre votre besoin comptable, GED, bilan, paie ou facturation électronique.</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✓</div>
                <div>
                  <strong>Réponse</strong>
                  <p>Être rappelé par un conseiller ou recevoir un retour adapté à votre activité.</p>
                </div>
              </div>
            </aside>

            <form className="form-card" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Nom et prénom</label>
                  <input name="name" type="text" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input name="email" type="email" placeholder="votre@email.fr" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Téléphone</label>
                  <input name="phone" type="tel" placeholder="Votre téléphone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="company">Nom de l'entreprise</label>
                  <input name="company" type="text" placeholder="Votre société" value={formData.company} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="status">Statut</label>
                  <select name="status" value={formData.status} onChange={handleChange}>
                    <option>Indépendant</option>
                    <option>SASU</option>
                    <option>SAS</option>
                    <option>SARL</option>
                    <option>SCI</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="need">Besoin principal</label>
                  <select name="need" value={formData.need} onChange={handleChange}>
                    <option>Comptabilité</option>
                    <option>GED</option>
                    <option>Bilan en retard</option>
                    <option>Facturation électronique</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" placeholder="Décrivez votre besoin" value={formData.message} onChange={handleChange} rows={5} />
                </div>
                <div className="field full">
                  <label className="consent">
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
                    <span>J'accepte que Top-Compta me recontacte</span>
                  </label>
                </div>
                <div className="field full">
                  <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Envoyer ma demande</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <img src="/images/logo.png" alt="TOP-COMPTA" />
              <p>Cabinet comptable digital, GED sécurisée, accompagnement humain et facturation électronique.</p>
            </div>
            <div>
              <h3>Navigation</h3>
              <a href="#offres">Nos offres</a>
              <a href="#plateforme">Plateforme</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h3>Actions</h3>
              <a href="#contact">Demander un devis</a>
              <a href="https://customer.mycompanyfiles.fr">Espace client</a>
              <a href="https://fr.trustpilot.com/review/top-compta.fr">Trustpilot</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '12px', opacity: 0.5 }}>
            <p>© 2024 Top-Compta. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
}