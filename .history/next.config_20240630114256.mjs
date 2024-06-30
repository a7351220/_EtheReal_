/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: config => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding');
      return config;
    },
    images: {
      domains: ['images.pexels.com','thumb.photo-ac.com'],
    },
  }
  
  
export default nextConfig;
