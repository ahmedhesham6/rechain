import { fileURLToPath } from 'node:url';
import bundleAnalyzerPlugin from '@next/bundle-analyzer';

import createJiti from 'jiti';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('@rechain/env/web');

const withBundleAnalyzer = bundleAnalyzerPlugin({
  enabled: process.env['ANALYZE'] === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@rechain/env'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

export default withBundleAnalyzer(nextConfig);
