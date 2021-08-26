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
          target: 'http://47e6-85-140-4-43.ngrok.io/',
        }
      }
    }
}