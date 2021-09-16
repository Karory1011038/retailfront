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
          target: 'http://test.posred.xyz:8000/',
        }
      }
    }
}

