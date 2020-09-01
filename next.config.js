const path = require('path')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      const { assetPrefix = '', urlLoaderOptions } = nextConfig

      defaultLoaders.assetsImport = {
        loader: 'url-loader',
        options: Object.assign(
          {},
          {
            emitFile: !isServer,
            limit: 8192,
            name: `static/[path][${dev ? "name" : "hash"}].[ext]`,
            publicPath: `${assetPrefix}/_next/`
          },
          urlLoaderOptions
        )
      }

      config.module.rules.push({
        test: /\.(bmp|gif|jpe?g|png|svg|ttf|eot|woff2?|mp3|wav|mp4|ogg|webm)$/,
        use: defaultLoaders.assetsImport
      })

      config.plugins.push(new webpack.IgnorePlugin(/.\/*.code-workspace/))

      return config
    }
  })
  )
}