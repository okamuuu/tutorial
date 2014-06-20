define(function(require, exports, module) {
  'use strict';
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');

  var mainContext = Engine.createContext();

  var firstSurface = new Surface({
    size: [200, 400],
    content: 'hello world',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });


  mainContext.add(firstSurface);
});
