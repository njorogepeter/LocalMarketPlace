const db = require('../models');

// Routes
// =============================================================
module.exports = {
  findAll: function(req, res) {
    db.Post.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  },
  create: function(req, res) {
    db.Post.create({
      item: req.body.item,
      body: req.body.body,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  },
};
