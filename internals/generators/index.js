const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
const modelGenerator = require('./model/index.js');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('model', modelGenerator);

};