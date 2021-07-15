const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
  }))
}