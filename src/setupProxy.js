const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://website-chat-server.herokuapp.com/',
      changeOrigin: true,
    })
  );
};