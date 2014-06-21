define(function(require, exports, module) {
  'use strict';
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');
  var View = require('famous/core/View');

  var mainContext = Engine.createContext();

  var aligin = [0.5, 0.5];
  var origin = [0.5, 0.5];

  mainContext.add(modifier).add(surface);

  var view = new View();

  view.add(new Surface({
    properties: {
      backgroundColor: '#FA5C4F'
    }
  }));

  var viewModifier = new StateModifier({
    size: [200, 200],
    origin: origin,
    aligin: aligin
  });

  var positions = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
  ];

  for (var i = 0; i < positions.length; i++) {
    var surface = new Surface({
      size: [true, true],
      content: 'origin:<br />' + positions[i]
    });

    var modifier = new StateModifier({
      origin: positions[i],
      align: positions[i]
    });

    view.add(modifier).add(surface);
  }

  mainContext.add(viewModifier).add(view);

  for (var j = 0; j < positions.length; j++) {
    var _surface = new Surface({
      size: [true, true],
      content: 'align:<br>' + positions[j]
    });
    
    var _modifier = new StateModifier({
      origin: positions[j],
      align: positions[j]
    });
    
    mainContext.add(_modifier).add(_surface);
  }
});
