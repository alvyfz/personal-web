/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.linkpicture.com",
      "raw.githubusercontent.com",
      "i.postimg.cc",
    ],
  },
};

module.exports = nextConfig;
