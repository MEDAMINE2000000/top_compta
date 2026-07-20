import type { Metadata } from 'next';
// @ts-ignore: global stylesheet import declaration
import './globals.css';

export const metadata: Metadata = {
  title: 'TOP-COMPTA - Cabinet comptable digital',
  description: 'Comptabilité digital, GED sécurisée et accompagnement humain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}