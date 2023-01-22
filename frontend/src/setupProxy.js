const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/v1", {
      target: "https://api.kakaobrain.com/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5001/",
      changeOrigin: true,
    })
  );
};
