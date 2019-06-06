const router = require('express').Router();
const produceController = require('../../controllers/produceController');

router
  .route('/')
  .get(produceController.findAll)
  .post(produceController.create)
  
router
  .route('/:id')
  .get(produceController.findById)
  .put(produceController.update)
  .delete(produceController.remove);


module.exports = router;
