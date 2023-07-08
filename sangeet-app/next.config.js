/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '172.17.0.1',
        port: '1337',
        pathname: '/uploads/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
