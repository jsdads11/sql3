// Here, we have added a reference of our dbconnection file 
// and we have created  a class as ProductMSSql and inside that, 
// we are just sending a query to the database.

const mssqlcon = require('../../dbconnection');

class ProductMSSql { 
   async getAllProducts() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from product');
    return res.recordset;
  }
}
module.exports = new ProductMSSql();
