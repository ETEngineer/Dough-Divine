const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://foodapp-01.onrender.com',
      changeOrigin: true,
    })
  );
};