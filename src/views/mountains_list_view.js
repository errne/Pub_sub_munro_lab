const PubSub = require('../helpers/pub_sub.js');
const MountainView = require('./views/mountain_view.js');

const MountainsListView = function (container) {
  this.container = container;
  this.mountains = [];
}

MountainsListView.prototype.bindEvents = function () {
  PubSub.subscribe('Mountains:data-ready', (event) => {
    this.mountains = event.detail;
    this.render();
  });
};

MountainsListView.prototype.render = function () {
  this.mountains.forEach((mountain) => {
    const mountainView = new MountainView(this.container, mountain);
    mountainView.render();
  });
};


module.exports = MountainsListView;
