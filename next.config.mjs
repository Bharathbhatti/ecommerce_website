/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["i.ibb.co",'avatars.githubusercontent.com',"platform-lookaside.fbsbx.com","lh3.googleusercontent.com"],
    remotePatterns:[
      {
        protocol:"https",
        hostname:"fakestoreapi.com",
      }
    ]
    
  },
};

export default nextConfig;
