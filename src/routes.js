const path = require('path');
const apiVersionManager = require('./shared/utils/apiVersionManager');
const { response } = require('./app');

const registerAPIRoutes = (app) => {
    const config = {
        apiPath: path.join(__dirname, './routes'),
        test: /\/api\/(v[0-9]+).*/,
        entryPoint: 'index.js',
        instance: app
      };
    app.use(apiVersionManager(config, (error, req, res, next) => {
        console.log(error);
        console.log(req);
        console.log(res);
        next();
    }));
}

module.exports = registerAPIRoutes