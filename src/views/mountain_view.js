const MountainView = function (container, mountain) {
  this.mountainsContainer = container;
  this.mountain = mountain;
};

MountainView.prototype.render = function () {
  const mountainContainer = document.createElement('div');
  mountainContainer.classList.add('mountain');

  const mountainHeader = this.createMountainHeader();
  mountainContainer.appendChild(mountainHeader);

  const mountainDetails = this.createMountainDetails();
  mountainContainer.appendChild(mountainDetails);

  this.mountainsContainer.appendChild(mountainContainer);
};

MountainView.prototype.createMountainHeader = function () {
  const name = document.createElement('h2');
  name.textContent = this.mountain.name;
  return name;
};

MountainView.prototype.createMountainDetails = function () {
  const details = document.createElement('ul');

  const height = document.createElement('li');
  height.textContent = this.mountain.height;
  details.appendChild(height);

  const meaning = document.createElement('li');
  meaning.textContent = this.mountain.meaning;
  details.appendChild(meaning);
  return details;
};




module.exports = MountainView;
