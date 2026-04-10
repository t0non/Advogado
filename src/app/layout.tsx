
import type {Metadata} from 'next';
import { Instrument_Sans } from 'next/font/google';
import './globals.css';
import { FAQData } from './data/FAQData';
import { VideoData } from './data/VideoData';
import { TestimonialData } from './data/SEOExtraData';
import FloatingActions from './components/FloatingActions';
import { GoogleTagManager } from '@next/third-parties/google';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-instrument-sans',
});

import drAntonioImg from '@/imagens/foto do profissional.png';
import logoDef from '@/imagens/Logo definitiva.png';

export const metadata: Metadata = {
  title: 'Advogado INSS em BH | Rodrigues Advocacia Previdenciária',
  description: 'O INSS negou seu benefício? Especialistas em aposentadoria, auxílio-doença e revisões com mais de 30 anos de experiência em Belo Horizonte. Fale agora conosco.',
  keywords: ['Advogado INSS BH', 'Benefício Negado INSS', 'Aposentadoria Passo a Passo', 'Advocacia Previdenciária BH', 'Recurso de Auxílio Doença'],
  authors: [{ name: 'Antonio Rodrigues & Daniela Cravo' }],
  metadataBase: new URL('https://antoniorodriguesadv.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Advogado INSS em BH | Rodrigues Advocacia Previdenciária',
    description: 'Especialistas em benefícios negados e revisões de aposentadoria com 30 anos de história.',
    url: 'https://antoniorodriguesadv.com.br',
    siteName: 'Rodrigues Advocacia',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: '/_next/static/media/foto do profissional.png', // Fallback ou uso de metadata dinâmico
        width: 1200,
        height: 630,
        alt: 'Dra. Daniela & Dr. Antônio Rodrigues',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodrigues Advocacia Previdenciária',
    description: 'Especialistas em INSS em BH',
    images: ['/_next/static/media/foto do profissional.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rodrigues Advocacia",
    "url": "https://antoniorodriguesadv.com.br",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://antoniorodriguesadv.com.br/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Rodrigues Advocacia | Advocacia Previdenciária",
    "description": "Especialistas em benefícios negados pelo INSS e revisões de aposentadoria com mais de 30 anos de experiência em Belo Horizonte.",
    "url": "https://antoniorodriguesadv.com.br",
    "telephone": "+55-31-3271-6997",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Carijós, 424, sala 1504/1508",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "30120-064",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.918124,
      "longitude": -43.941657
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": TestimonialData.length.toString()
    },
    "review": TestimonialData.map(t => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString()
      },
      "reviewBody": t.content
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const videoSchemas = VideoData.map(video => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": video.thumbnail,
    "uploadDate": "2023-01-01T08:00:00+08:00", // Data genérica para conteúdo evergreen
    "embedUrl": `https://www.youtube.com/embed/${video.id}`
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://antoniorodriguesadv.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Especialidades",
        "item": "https://antoniorodriguesadv.com.br/#beneficios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Biblioteca",
        "item": "https://antoniorodriguesadv.com.br/#biblioteca"
      }
    ]
  };

  return (
    <html lang="pt-BR" className={`scroll-smooth ${instrumentSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {videoSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-body antialiased">
        {children}
        <FloatingActions />
      </body>
      <GoogleTagManager gtmId="GTM-WK4MHDZH" />
    </html>
  );
}
