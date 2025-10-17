/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // Disable image optimization for local files with spaces
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  async rewrites() {
    return [
      {
        source: '/images/Screenshot%202025-10-14%20at%2012.51.27%20AM.png',
        destination: '/images/Screenshot 2025-10-14 at 12.51.27 AM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.32.07%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.32.07 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.33.04%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.33.04 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.33.26%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.33.26 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.33.47%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.33.47 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.34.23%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.34.23 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.34.34%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.34.34 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.34.53%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.34.53 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.35.10%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.35.10 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.35.37%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.35.37 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.36.34%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.36.34 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.36.51%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.36.51 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.37.40%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.37.40 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.38.01%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.38.01 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.38.10%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.38.10 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.38.36%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.38.36 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.38.58%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.38.58 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.39.29%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.39.29 PM.png',
      },
      {
        source: '/images/Screenshot%202025-10-17%20at%202.40.00%20PM.png',
        destination: '/images/Screenshot 2025-10-17 at 2.40.00 PM.png',
      },
    ];
  },
}

module.exports = nextConfig
