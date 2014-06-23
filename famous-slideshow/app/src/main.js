/* main.js */

define(function(require, exports, module) {
  'use strict';
  var Engine = require('famous/core/Engine');

  // import the AppView class using require
  var AppView = require('views/AppView');

  var mainContext = Engine.createContext();

  var appView = new AppView();

  mainContext.add(appView);
});
