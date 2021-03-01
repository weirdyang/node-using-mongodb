const mongoose = require('mongoose');
const debug = require('debug')('app:controllers');
const { ProductSchema } = require('../models/models');

const Product = mongoose.model('Product', ProductSchema);

// should use export default but tests expect this
// eslint-disable-next-line import/prefer-default-export
export const addnewProduct = (req, res) => {
  const newProduct = new Product(req.body);
  // eslint-disable-next-line no-shadow
  newProduct.save((err, Product) => {
    if (err) {
      debug(err.stack);
      res.status(500).send('Something broke!');
    }
    res.json(Product);
  });
};
