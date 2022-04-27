// Here in app.js, we are just defining our application-level settings.
// This app.js will also have an init() method through which it can call 
// the module file (index.js).

const express = require('express');
const app = express();
async function init() {
  const approuting = require('./modules');
  const appmodules = new approuting(app);
  appmodules.init();
}
init();
module.exports = app;