const SessionsController = require('../controllers/SessionsController');

module.exports = (app) => {
  app.post('/session/login', SessionsController.createSession());
  app.delete('/session/logoff', SessionsController.endSession());
}