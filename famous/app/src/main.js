define(function(require, exports, module) {
  'use strict';
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');
  var Easing = require('famous/transitions/Easing');
  var Transitionable = require('famous/transitions/Transitionable');
  var SpringTransition = require('famous/transitions/SpringTransition');
  Transitionable.registerMethod('spring', SpringTransition);

  var mainContext = Engine.createContext();

  var surface = new Surface({
    size: [100, 100],
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F'
    }
  });

  var stateModifier = new StateModifier({
    origin: [0.5, 0]
  });

  mainContext.add(stateModifier).add(surface);

  stateModifier.setTransform(
    Transform.translate(0, 300, 0),
    { method: 'spring', period: 1000, dampingRatio: 0.3 }
  );

});
