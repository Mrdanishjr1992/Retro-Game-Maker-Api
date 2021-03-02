const router = require('express').Router();
const controllers = require('../controllers');

// User login
router.post('/login', controllers.user.login);

// User Create
router.post('/', controllers.user.create);

// User get
router.get('/:id', controllers.user.show);

// User Update
router.put('/:id', controllers.user.update);

// User Delete
router.delete('/:id', controllers.user.destroy);

module.exports = router;
