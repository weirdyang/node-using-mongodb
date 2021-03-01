const { addnewProduct, getProductWithID, getProducts } = require('../controllers/controllers');

const routes = (app) => {
  app.route('/products')
    .post(addnewProduct)
    .get(getProducts);

  app.route('/products/:ProductID')
    .get(getProductWithID);
};

export default routes;
