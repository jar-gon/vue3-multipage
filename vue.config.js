const glob = require('glob')
const pagesInfo = require('./page.config')
const pages = {}

glob.sync('./src/pages/**/main.js').forEach(entry => {
  const chunk = entry.match(/\.\/src\/pages\/(.*)\/main\.js/)[1]
  const curr = pagesInfo[chunk]
  if (curr) {
    pages[chunk] = {
      entry,
      ...curr,
      chunk: [ "chunk-vendors", "chunk-common", chunk ]
    }
  }
})

module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      stylus: {
        include: [ process.cwd() + '/node_modules' ],
        use: [ require('stylus-less')({
          cache: false
        }) ],
        sourcemap: {
          inline: true
        }
      },
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  chainWebpack: config => {
    config => config.plugins.delete("named-chunks")
    return config
  },
  pages
}
