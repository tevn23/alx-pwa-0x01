import withPWA from '@ducanh2912/next-pwa';
import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})(config);
