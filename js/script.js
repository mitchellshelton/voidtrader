// Configure require.js and define directories
requirejs.config({
  urlArgs: "v=" + (new Date()).getTime(),
  // Third party libraries
  baseUrl: 'js/lib',
  // Application path
  paths: {
    app: '../app',
  },
});

// Define and load all libraries
requirejs([
  'jquery',
  'backbone',
  'underscore'
],
function ($, Backbone, _) {
  // All libraries loaded
});

// Load the main application
requirejs([
  'app/main'
],
function (main) {
  // Application loaded
});