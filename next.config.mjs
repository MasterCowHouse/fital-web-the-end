/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
  reactStrictMode: false,
  env: {
    CRM_URL: process.env.CRM_URL,
  },
};

export default nextConfig;
