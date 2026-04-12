import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    // Para deploy estático, precisamos desabilitar otimização de imagens
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'files.catbox.moe',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Configuração para base path caso precise
  // basePath: '/pasta-do-site',
  
  // Configurações para CSS estático
  experimental: {
    cssChunking: false,
  },
  
  // Garantir que o CSS seja incluído no HTML
  generateEtags: false,
  
  // Configuração para build estático
  distDir: 'out',
};

export default nextConfig;
