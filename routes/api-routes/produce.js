const router = require('express').Router();
const produceController = require('../../controllers/produceController');

// Matches with "/api/books"
router
  .route('/')
  .get(produceController.findAll)
  .post(produceController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(produceController.findById)
//   .put(produceController.update)
//   .delete(produceController.remove);

module.exports = router;
