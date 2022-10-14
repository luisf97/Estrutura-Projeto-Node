const User = require('../router/User');

function initializeRoutes(app) {
    app.use('/', User);
}

module.exports = initializeRoutes;