define(function(require, exports, module) {
  'use strict';
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');

  var mainContext = Engine.createContext();

  var surface = new Surface({
    size: [undefined, 100],
    content: 'press a key in the preview window',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  mainContext.add(surface);

  Engine.on('keydown', function(e) {
    surface.setContent(e.which);
  });

});
