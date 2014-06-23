define(function(require, exports, module) {
  'use strict';
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var EventHandler = require('famous/core/EventHandler');

  var eventHandler = new EventHandler();

  var mainContext = Engine.createContext();

  var surface = new Surface({
    size: [100, 100],
    content: 'A<br>click me to emit "hello"',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  surface.on('click', function() {
    eventHandler.emit('hello');
  });

  eventHandler.on('hello', function() {
    surface.setContent('heard hello');
  });

  mainContext.add(surface);

});
