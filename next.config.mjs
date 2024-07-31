/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
const nextConfig = { async rewrites() { return [{ source: '/webmail', destination: 'https://premium210.web-hosting.com:2096/' }]; } };


export default nextConfig;

