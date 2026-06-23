import type { NextConfig } from 'next';

  const nextConfig: NextConfig = {
    // Force standalone output to ensure server tracing runs
    output: 'standalone',
    // Ensure outputFileTracingRoot is set to monorepo root
    // This makes Next.js trace files relative to the monorepo root
    // which produces both symlink and real paths in .nft.json
    outputFileTracingRoot: '../../',
  };

  export default nextConfig;
