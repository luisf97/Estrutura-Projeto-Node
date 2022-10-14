const router = require('express').Router();
const User = require('../controllers/UserController');

router.get('/users', User().getUsers);

module.exports = router;