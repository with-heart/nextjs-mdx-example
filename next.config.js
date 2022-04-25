const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-prism')],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})

module.exports = nextConfig
