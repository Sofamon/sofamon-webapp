/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CHROME_EXTENSION_ID:
      process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID,
    NEXT_PUBLIC_CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    CENTER_API_KEY: process.env.CENTER_API_KEY,
  },
};

module.exports = nextConfig;
