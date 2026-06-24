/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static `out/` folder for shared hosting (Apache/Nginx, no Node.js).
  output: 'export',
  // Static export cannot use the on-demand Image Optimization server.
  images: {
    unoptimized: true,
  },
  // Emit folder-style routes (e.g. /about/index.html) so static hosts resolve URLs cleanly.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
