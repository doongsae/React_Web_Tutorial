const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    // app.use(proxy("/api/customers", { target: "http://localhost:5000" }));
    app.use('/api/customers', proxy({ target: 'http://localhost:5000', changeOrigin: true,}));
};