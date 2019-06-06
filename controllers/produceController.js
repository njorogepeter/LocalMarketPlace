const db = require('../models');

// Routes
// =============================================================
module.exports = {

  //@route GET api/produce
  findAll: function(req, res) {
    db.Produce
    .find(req.query)
    .then(dbProduce => res.json(dbProduce))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Produce
      .findById(req.params.id)
      .then(dbProduce => res.json(dbProduce))
      .catch(err => res.status(422).json(err));
  },

  // @route Post api/produce
  // @decs Create A Post
  create: function(req, res) {
    db.Produce
    .create(req.body)
    .then(dbProduce => res.json(dbProduce)) 
    .catch(err => res.status(422).json(err));

  
  },

  update: function(req, res) {
    db.Produce
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbProduce => res.json(dbProduce))
      .catch(err => res.status(422).json(err));
  },


  // @route DELETE api/produce
  //@desc Delete A Produce
  remove: function(req, res) {
    db.Produce
      .findById({ _id: req.params.id })
      .then(dbProduce => dbProduce.remove())
      .then(dbProduce => res.json(dbProduce))
      .catch(err => res.status(422).json(err)); 
  }

};
