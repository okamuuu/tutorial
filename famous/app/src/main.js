define(function(require, exports, module) {
  'use strict';
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');

  var mainContext = Engine.createContext();

  function createSurface() {
    var firstSurface = new Surface({
      size: [200, 100],
      content: 'Hello Famo.us',
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F'
      }
    });
    mainContext.add(firstSurface);
  }
 
  createSurface();
});
