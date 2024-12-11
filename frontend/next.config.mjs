import withPWA from "next-pwa";

const pwaConfig = {
  dest: "public", // Location of service worker
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
};

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

export default withPWA({
  ...nextConfig, // Spread next.js configuration
  ...pwaConfig, // Spread PWA configuration
});
