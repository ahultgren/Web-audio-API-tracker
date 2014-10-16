'use strict';

var Wad = require('wad/src/wad');

var laser = new Wad({
  source  : 'sawtooth',
  volume  : 0.5,
  pitch   : 2993,
  env     : {
    attack  : 0.0,
    decay   : 0.2717,
    sustain : 0.01,
    hold    : 0.1443,
    release : 0
  },
  filter: [
    {
      type      : 'highpass',
      frequency : 2414,
      q         : 1
    }
  ]
});

exports.play = function playCoin () {
  laser.play();

  setTimeout(function () {

  }, 420);
};
