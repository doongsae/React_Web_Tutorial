const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use('/api/customers', proxy({ target: 'http://localhost:5000' }));
    // app.use(proxy.createProxyMiddleware("/api/customers", { target: "http://localhost:5000" }));
};