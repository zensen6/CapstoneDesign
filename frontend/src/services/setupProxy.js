const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      //target 에다가 연결할 백엔드 서버를 적어준다. 
      target: 'https://2702bc6d-3d49-435f-afd1-12e9275037a6.mock.pstmn.io',
      changeOrigin: true,
      
    })
  );
};