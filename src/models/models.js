/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
const mongoose = require('mongoose');
// const debug = require('debug')('app:models');

// const { Schema } = mongoose;
// should use destructuring but tests expects this :(
const Schema = mongoose.Schema;

// should use export default but tests expect this
export const ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a product name',
  },
  description: {
    type: String,
    required: 'Enter a description',
  },
  category: String,
  price: Number,
  created_date: { type: Date, default: Date.now },
});
