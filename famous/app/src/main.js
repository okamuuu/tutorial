define(function(require, exports, module) {
  'use strict';
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');

  var mainContext = Engine.createContext();

/*
  function createSurface() {
    var surface = new Surface({
      size: [100, 100],
      content: 'surface',
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F'
      }
    });

    mainContext.add(surface);
  }

  function createModifiedSurface() {
    var modifiedSurface = new Surface({
      size: [100, 100],
      content: 'modified surface',
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F'
      }
    });

    var stateModifier = new StateModifier({
      transform: Transform.translate(150, 100, 0)
    });

    mainContext.add(stateModifier).add(modifiedSurface);
  }
*/

  var translateModifierOne = new StateModifier({
    transform: Transform.translate(200, 0, 0)
  });

  var translateModifierTwo = new StateModifier({
    transform: Transform.translate(200, 0, 0)
  });

  var rotateModifierOne = new StateModifier({
    transform: Transform.rotateZ(Math.PI/4)
  });

  var rotateModifierTwo = new StateModifier({
    transform: Transform.rotateZ(Math.PI/4)
  });

  var redSurface = new Surface({
    size: [100, 100],
    classes: ['red-bg']
  });

  var greySurface = new Surface({
    size: [100, 100],
    classes: ['grey-bg']
  });

  mainContext
    .add(translateModifierOne)
    .add(rotateModifierOne)
    .add(redSurface);

  mainContext
    .add(translateModifierTwo)
    .add(rotateModifierTwo)
    .add(greySurface);

  //createSurface();
  //createModifiedSurface();
});
