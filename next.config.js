/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    name: process.env.name,
    PORT: process.env.PORT,
    PASSWORD: process.env.PASSWORD,
    USER_NAME: process.env.USER_NAME,
    DATABASE: process.env.DATABASE,
    TABLE_NAME: process.env.TABLE_NAME,
    
    
  },
  
  
  webpack5: true,
  webpack: (config)=> {
    config.resolve.fallback = {fs:false}
    return config;
  }


}

module.exports = nextConfig
