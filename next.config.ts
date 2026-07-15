import mdx from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import type { NextConfig } from 'next'; // Import the config type

const nextConfig: NextConfig = {
  output: 'export', // TypeScript now knows this matches "export" | "standalone"
  images: {
    unoptimized: true, 
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

export default withMDX(nextConfig);