module.exports = {
  lintOnSave: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      stylus: {
        include: [ process.cwd() + '/node_modules' ],
        use: [ require('stylus-less')({ cache: false }) ],
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
  }
}
