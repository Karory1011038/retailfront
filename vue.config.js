module.exports = {
  assetsDir: 'static',
  runtimeCompiler: true,
  productionSourceMap: false,

  pwa: {
    name: 'Retail'
  },
  devServer: {
      proxy: {
        '/api*': {
          // Forward frontend dev server request for /api to django dev server
          target: 'http://51b8-85-140-1-56.ngrok.io/',
        }
      }
    }
}