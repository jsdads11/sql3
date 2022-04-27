// Here, we have added a reference of our product.mssql file 
// and we have created a class as Product. 
// Inside this class, we have a function that 
// invokes the getAllProducts() method of productmssql class, 
// and then it will send its response to the user.

const productMssql = require('./Product.mssql');

class product {
    async getAllProducts(req, res) {
      try {
         const output = await productMssql.getAllProducts();
         res.send(output);
      }
      catch (error) {
      console.log(error);
    }
 }
}
module.exports = new product();
