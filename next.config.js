const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'buildkit-v3-demo.netlify.app'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
