define(function(require, exports, module) {
  'use strict';
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');

  var mainContext = Engine.createContext();

  var downMod = new StateModifier({
    transform: Transform.translate(0, 100, 0)
  });

  var rightMod = new StateModifier({
    transform: Transform.translate(150, 0, 0)
  });

  var leftSurface = new Surface({
    size: [120, 100],
    content: 'left surface',
    classes: ['red-bg']
  });

  var rightSurface = new Surface({
    size: [120, 100],
    content: 'content',
    classes: ['grey-bg']
  });

  var node = mainContext.add(downMod);
  node.add(leftSurface);
  node.add(rightMod).add(rightSurface);
});
