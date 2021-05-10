module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 4000,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8088/api/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/img': {
        target: 'http://localhost:8088/img',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/img': ''
        }
      }
    }
  }
}
