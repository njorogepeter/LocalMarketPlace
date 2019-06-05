const router = require('express').Router();
const produceRoutes = require('./produce');
const userRoutes = require('./users');

// Book routes
router.use('/produce', produceRoutes);
router.use('/users', userRoutes);

module.exports = router;
