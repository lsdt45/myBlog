const path = require('path');
module.exports = {
  devServer: {
    proxy: {
      // api是后端数据接口的上下文路径
      '/api': {
        // 后端接口地址
        target: 'http://127.0.0.1:8010',
        // 允许跨域
        changeOrigin: true
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts'
    }
  },
  configureWebpack: {
    devtool: 'source-map',
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //         prependData: `
  //         @import "./src/assets/scss/index.scss";`,
  //     },
  //   },    
  // }
  // chainWebpack: config => {
  //   const oneOfsMap = config.module.rule('scss').oneOfs.store
  //   oneOfsMap.forEach(item => {
  //     item
  //       .use('sass-resources-loader')
  //       .loader('sass-resources-loader')
  //       .options({
  //         // Provide path to the file with resources
  //         resources: './src/assets/scss/index.scss',
  //       })
  //       .end()
  //   })
  // },
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'scss',
  //     patterns: [path.resolve(__dirname, './src/assets/scss/index.scss')]
  //   }
  // },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //         prependData: `@import "./src/assets/scss/index.scss";`,
  //     },
  //   },
  // },
};


