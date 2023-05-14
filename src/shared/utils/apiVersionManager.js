const path = require('path');
const fs = require('fs');

const apiVersionManager = (config, callback) => {
    const defaultConfig = {
      test: /\/api\/(v[0-9]+).*/,
      entryPoint: 'app.js',
      apiPath: '',
      instance: null
    };
  
    const mergedConfig = {
      ...defaultConfig,
      ...config
    };
  
    const {
      test,
      entryPoint,
      apiPath,
      instance
    } = mergedConfig;
  
    return (httpRequest, httpResponse, next) => {
      if (!apiPath) {
        return callback({
          code: 101,
          message: 'You must explicitly specify a path to where the APIs reside'
        }, httpRequest, httpResponse, next);
      }
  
      if (!instance) { 
        return callback({
          code: 102,
          message: 'You must explicitly set an instance of express'
        }, httpRequest, httpResponse, next);
      }
  
      if (typeof instance !== 'function') {
        return callback({
          code: 105,
          message: `An instance of express must be a function but got type ${typeof instance}`
        }, httpRequest, httpResponse, next);
      }
  
      const testUrl = httpRequest.url.match(test);
      const version = testUrl ? testUrl[1] : '';
  
      if (version) {
       
        const fullPath = path.normalize(`${apiPath}/${version}/${entryPoint}`);
        if (fs.existsSync(fullPath)) {
          if (typeof require(fullPath).default === 'function') {
            require(fullPath).default(instance); 
          } else {
            require(fullPath)(instance);
          }
          return callback(null, httpRequest, httpResponse, next);
        }
        return callback({
          code: 103,
          message: 'Entry point not Found'
        }, httpRequest, httpResponse, next); 
      }
      return callback({
        code: 104,
        message: 'No version number found'
      }, httpRequest, httpResponse, next);
    };
};
  
module.exports = apiVersionManager;