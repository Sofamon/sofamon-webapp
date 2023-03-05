/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CHROME_EXTENSION_ID:
      process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID,
    ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
    INFURA_API_KEY: process.env.INFURA_API_KEY,
    INFURA_API_KEY_SECRET: process.env.INFURA_API_KEY_SECRET,
  },
};

module.exports = nextConfig;
