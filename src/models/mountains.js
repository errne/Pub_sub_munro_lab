const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Mountains = function () {
  this.data = null;
  this.regions = null;
}

Mountains.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const request = new Request(url);
  request.get()
  .then((banana) => {
    this.data = banana;
    PubSub.publish('Mountains:data-ready', this.data);
  })
  .catch((error) => {
    PubSub.publish('Mountains:error', error);
  });
};

Mountains.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const region = event.detail;
    this.getRegion(region);
  });
};

Mountains.prototype.getRegion = function (name) {
  const requestHelper = new RequestHelper(`https://munroapi.herokuapp.com/api/munros/region/${name}`);
  requestHelper.get((data) => {
    this.regions = data;
    PubSub.publish('Mountains:region-data', this.regions);
    console.log(this.regions);
  });
};



module.exports = Mountains;
