const authRoutes = require('./auth');
const customersRoutes = require('./customers');

module.exports = (app) => {
  app.use('/api/v1/customer', customersRoutes);
  app.use('/api/v1/auth', authRoutes);
};