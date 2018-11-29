const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;
  this.mountainsData = [];
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Mountains:data-ready', (event) => {
    this.mountainsData = event.detail;
    this.populate(this.filterRegions());
  });

  this.container.addEventListener('change', (evt) => {
    const selectedRegion = evt.target.value;
    PubSub.publish('SelectView:change', selectedRegion);
  });
};

SelectView.prototype.filterRegions = function () {
  const regions = this.mountainsData;
  return regions
  .map(mountain => mountain.region)
  .filter((region, index, regions) => regions.indexOf(region) === index);
};

SelectView.prototype.populate = function (regions) {
  regions.forEach((region, index) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = region;
    this.container.appendChild(option);
  });
};

module.exports = SelectView;
