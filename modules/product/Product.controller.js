
// This Product controller will call the method of Product.js based 
//  on which type of HTTP request is made with its URL. 
// Moreover, we have also added the ‘base path’ for 
// the product module in app.use() method.

const product = require('./Product');
const express = require('express');
const router = express.Router();

class ProductController {
    constructor(app) {
      router.get('/', product.getAllProducts);
      app.use('/api/v1/products', router);
    }
 }
module.exports = ProductController;