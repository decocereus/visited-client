// const { createProxyMiddleware } = require("http-proxy-middleware");
// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware(
//       [
//         "/auth/google/callback",
//         "/auth/google",
//         "/auth/getCurrentUser",
//         "/auth/logout",
//         "/database/getVisitedURLs",
//       ],
//       {
//         target: "https://visited-server-backend.onrender.com/api/v1",
//         changeOrigin: true,
//       }
//     )
//   );
// };
