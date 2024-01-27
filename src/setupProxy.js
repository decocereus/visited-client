const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      [
        "/auth/google/callback",
        "/auth/google",
        "/auth/getCurrentUser",
        "/auth/logout",
      ],
      {
        target: "http://localhost:4500/api/v1",
        changeOrigin: true,
      }
    )
  );
};
