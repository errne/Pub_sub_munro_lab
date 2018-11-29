const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Mountains = function () {
  this.data = null;
}

Mountains.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const request = new Request(url);
  request.get()
  .then((banana) => {
    this.data = banana;
    console.log(this.data);
    PubSub.publish('Mountains:data-ready', this.data);
  })
  .catch((error) => {
    PubSub.publish('Mountains:error', error);
  });
};

module.exports = Mountains;
