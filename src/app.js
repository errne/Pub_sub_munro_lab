const Mountains = require('./models/mountains.js');
const ErrorView = require('./views/error_view.js');
const MountainsListView = require('./views/mountains_list_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const mountains = new Mountains();
  mountains.getData();

  const mountainsContainer = document.querySelector('#mountains-container');

  const errorView = new ErrorView(mountainsContainer);
  errorView.bindEvents();

  const mountainsListView = new MountainsListView(mountainsContainer);
  mountainsListView.bindEvents();

  const selectContainer = document.querySelector('#regions')

  const selectView = new SelectView(selectContainer);
  selectView.bindEvents();

})
