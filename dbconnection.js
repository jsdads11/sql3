// Now let’s make one class as dbconnection.js where we will have configurations 
// of our database like this:


const mssql = require('mssql');
class DBConnection {
  async getConnection() {
     try {
       return await mssql.connect({  // connect() method in which you can pass parameters of your database name, password, port number, etc.
              user: 'sa',
              password: 'London01',
              server: 'localhost',
              database: 'Demo',
              options: {
                trustedconnection:  true,
                encrypt: true,
                enableArithAbort:  true,
                trustServerCertificate: true,
                instancename:  '127.0.0.1'  // SQL Server instance name
              },
              port: 1433
       });
    }
    catch(error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();   // this object/class is exposed as a module and can then 'require'd by anyone else who wants to use it 