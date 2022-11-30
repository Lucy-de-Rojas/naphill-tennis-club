/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   env: {
    username: USERNAME,
   },
  webpack5: true,
  webpack: (config)=> {
    config.resolve.fallback = {fs:false}
    return config;
  }
}

module.exports = nextConfig
