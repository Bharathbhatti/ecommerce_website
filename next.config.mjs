/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["i.ibb.co"],
    remotePatterns:[
      {
        protocol:"https",
        hostname:"fakestoreapi.com",
      }
    ]
    
  },
};

export default nextConfig;
