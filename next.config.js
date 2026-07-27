/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', 'gsap'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
