const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/page-list-vue/',
  // publicPath: '/',
  productionSourceMap: false,
  assetsDir: 'assest',
  filenameHashing: false
})