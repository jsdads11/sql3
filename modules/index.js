// Index.js which is a module file, this will decide it should call 
// which controller and when.
// In this file, we are initializing the local object of the application 
// inside its constructor. 
// Then using the init() method we will initialize our controller.

class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const productcontroller = require('./product/product.controller');
    new productcontroller(this.app);
   }
  }
  module.exports = Module;
