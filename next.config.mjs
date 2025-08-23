/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: { typedRoutes: true, serverActions: { allowedOrigins: ['*'] } },
  experimental: { serverActions: { allowedOrigins: ['*'] } },
};
export default nextConfig;
