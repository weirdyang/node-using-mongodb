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

// keep models in one file
// const Product = mongoose.model('Product', ProductSchema);
// // Virtual for author's full name
// https://medium.com/@lucasdavidferrero/dont-use-arrow-functions-when-you-use-mongoose-schema-method-190b79f1640c
// ProductSchema.virtual('name').get(function () {
//   return this.family_name + ', ' + this.first_name;
// });

// // Virtual for author's lifespan
// AuthorSchema.virtual('lifespan').get(function () {
//   return (
//     this.date_of_death.getYear() - this.date_of_birth.getYear()
//   ).toString();
// });

// // Virtual for author's URL
// AuthorSchema.virtual('url').get(function () {
//   return '/catalog/author/' + this._id;
// });
