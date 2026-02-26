
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rodrigues Advocacia | Especialista em INSS e Direito do Trabalho',
  description: 'Especialista em benefícios negados pelo INSS, revisões de aposentadoria e causas trabalhistas com mais de 30 anos de experiência.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
