/* eslint-disable */
import legacyPlugin from '@vitejs/plugin-legacy';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite'
// @see https://cn.vitejs.dev/config/
export default defineConfig(({
  command,
  mode
}) => {
  let rollupOptions = {};
  let optimizeDeps = {};
  let alias = {
    '.git': path.resolve(__dirname, './.git'),
    '.vscode': path.resolve(__dirname, './.vscode'),
    'node_modules': path.resolve(__dirname, './node_modules'),
    'public': path.resolve(__dirname, './public'),
    'src': path.resolve(__dirname, './src'),
    'VSCodeWorkSpace': path.resolve(__dirname, './VSCodeWorkSpace'),
    '@': path.resolve(__dirname, './src'),
    'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
  }

  let proxy = {
    '/api': {
      "target": "http://127.0.0.1:8010",
      "changeOrigin": true
    },
  }
  
  // todo 替换为原有变量
  let define = {
    // 'process.env.NODE_ENV': command === 'serve' ? '"development"' : '"production"',
    // '__VUE_OPTIONS_API__.0': 't',
    // '__VUE_OPTIONS_API__.1': 'r',
    // '__VUE_OPTIONS_API__.2': 'u',
    // '__VUE_OPTIONS_API__.3': 'e',
    // '__VUE_PROD_DEVTOOLS__.0': 'f',
    // '__VUE_PROD_DEVTOOLS__.1': 'a',
    // '__VUE_PROD_DEVTOOLS__.2': 'l',
    // '__VUE_PROD_DEVTOOLS__.3': 's',
    // '__VUE_PROD_DEVTOOLS__.4': 'e',
    // 'process.env.NODE_ENV': '"development"',
  }

  let esbuild = {}

  return {
    base: './', // index.html文件所在位置
    root: './', // js导入的资源路径，src
    resolve: {
      alias,
    },
    define: define,
    server: {
      // 代理
      proxy,
    },
    build: {
      target: 'es2015',
      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
      manifest: false, // 是否产出maifest.json
      sourcemap: true, // 是否产出soucemap.json
      outDir: 'dist', // 产出目录
      rollupOptions,
    },
    esbuild,
    optimizeDeps,
    plugins: [
      legacyPlugin({
        targets: ['Android > 39', 'Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15'],
      }), vue(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },     
        scss: {
          additionalData: '@import "@/assets/scss/index.scss";',
        }        
      },
      devSourcemap: true,
    },
  };
});