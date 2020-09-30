const AuthController = require('../controllers/AuthController');

module.exports = function (app) {
    app.get('/register', AuthController.register);
    app.post('/register', AuthController.createAccount)
}