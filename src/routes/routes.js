const {
  addnewProduct, getProductWithID, getProducts, updateProduct, deleteProduct,
} = require('../controllers/controllers');

const routes = (app) => {
  app.route('/products')
    .post(addnewProduct)
    .get(getProducts);

  app.route('/products/:ProductID')
    .get(getProductWithID)
    .put(updateProduct)
    .delete(deleteProduct);
};

module.exports = (app) => routes(app);
