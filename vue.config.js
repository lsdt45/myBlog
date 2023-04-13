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
};


