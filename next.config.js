/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: [
      'placehold.co',
      'd383kuiij66lee.cloudfront.net',
      'myawsbucketodoo-1.s3.ap-south-1.amazonaws.com'
    ],
  },
};

module.exports = nextConfig;
