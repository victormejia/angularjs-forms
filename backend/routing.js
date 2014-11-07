var registerRoutes = require('./registerRoutes');
module.exports = function(app) {
  app.post('/register', registerRoutes.create);
  app.get('/users', registerRoutes.getUsers)
  app.get('/valid', registerRoutes.checkUsername);
};
