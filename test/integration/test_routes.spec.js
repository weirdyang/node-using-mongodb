// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');

//const productId = config.productId;
const { config } = require('./config');
process.env.PORT = config.PORT;
// const productId = config.productId;
console.log(process.env.PORT);
console.log(config.productId);
const app = require('../../index');
// Configure chai
chai.use(chaiHttp);
chai.should();

const now = new Date();
const testSubject = {
  name: 'hello',
  description: `item - ${now.toString()}`,
  category: `test: M:${now.getMonth()} D:${now.getDay()}`,
  price: 6,
};

let productId;

describe('Products', () => {
  describe('GET /products', () => {
    // test to seed database
    it('should add one product record', (done) => {
      chai
        .request(app)
        .post('/products')
        .send(testSubject)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          let { _id } = res.body;
          productId = _id;
          done();
        });
    });
    // Test to get all students record
    it('should get all products record', (done) => {
      chai
        .request(app)
        .get('/products')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          done();
        });
    });
    // Test to get single product record
    it('should get a single product record', (done) => {
      const id = productId;
      chai
        .request(app)
        .get(`/products/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    // Test to get single student record
    it('should not get a single product record', (done) => {
      const id = 5;
      chai
        .request(app)
        .get(`/products/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    // Test to get single student record
    it('should delete product record', (done) => {
      chai
        .request(app)
        .delete(`/products/${productId}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
