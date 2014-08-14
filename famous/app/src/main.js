define(function(require, exports, module) {
  'use strict';
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var View = require('famous/core/View');

  var mainContext = Engine.createContext();
  
  var myView = new View();
  mainContext.add(myView);

  var surface = new Surface({
    size: [100, 100],
    content: 'click me',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  myView.add(surface);

  surface.pipe(myView);

  myView._eventInput.on('click', function() {
    surface.setContent('hello');
  });
});
