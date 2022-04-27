// Now coming to the index.js file which is on the root level of our application, 
// here we need some changes like this:

const app = require('./app');
const server = require('http').Server(app);
server.listen(4001,'localhost', ()=> {
    console.log('Server Started');
});1
