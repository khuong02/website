const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://website-connect-chat.herokuapp.com/',
      changeOrigin: true,
    })
  );
};