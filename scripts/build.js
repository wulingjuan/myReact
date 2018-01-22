// deploy.js
const fs = require('fs-extra');
const routes = require('./route.js');
const path = require('path');
routes.forEach((route) => {
    fs.copySync('index.html', path.join(route, 'index.html'))
});