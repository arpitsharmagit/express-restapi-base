const path = require('path');
const apiVersionManager = require('./shared/utils/apiVersionManager');

const registerAPIRoutes = (app) => {
    const config = {
        apiPath: path.join(__dirname, './routes'),
        test: /\/api\/(v[0-9]+).*/,
        entryPoint: 'index.js',
        instance: app
      };
    app.use(apiVersionManager(config, (error, req, res, next) => {
        next();
    }));
}

module.exports = registerAPIRoutes