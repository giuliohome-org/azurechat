/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: "22mb",
  },
  images: {
    remotePatterns: [
        {
           protocol: 'https',
            hostname: '**',
             port: '',
             pathname: '**',
         },
     ],
  },
};

module.exports = nextConfig;
