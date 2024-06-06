/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/weather-app',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
