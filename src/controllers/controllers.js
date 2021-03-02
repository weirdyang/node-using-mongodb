/* eslint-disable no-shadow */
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
      debug(err);
      res.status(400).send(err);
    }
    res.json(Product);
  });
};
// eslint-disable-next-line import/prefer-default-export
export const getProductWithID = (req, res) => {
  // eslint-disable-next-line no-shadow
  Product.findById(req.params.ProductID, (err, Product) => {
    if (err) {
      debug(err);
      res.status(400).send(err);
    }
    res.json(Product);
  });
};

export const getProducts = (req, res) => {
  // eslint-disable-next-line no-shadow
  Product.find({}, (err, Product) => {
    if (err) {
      debug(err);
      res.status(400).send(err);
    }
    res.json(Product);
  });
};

// updating product
export const updateProduct = (req, res) => {
  // made it one line to pass the test shoulnd't be this long!
  // eslint-disable-next-line max-len
  Product.findOneAndUpdate({ _id: req.params.ProductID }, req.body, { new: true, useFindAndModify: false }, (err, Product) => {
    if (err) {
      debug(err);
      res.status(400).json(err);
    }
    res.json(Product);
  });
};

// delete product
export const deleteProduct = (req, res) => {
  // eslint-disable-next-line no-shadow
  Product.deleteOne({ _id: req.params.ProductID }, (err, Product) => {
    if (err) {
      debug(err, Product);
      res.status(400).json(err);
    }
    res.json({ message: 'successfully deleted product' });
  });
};
