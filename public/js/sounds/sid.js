'use strict';

var Wad = require('wad/src/wad');

var sid = new Wad({
  source  : 'square',
  volume  : 0.5,
  env     : {
    attack  : 0.0,
    decay   : 0.3,
    sustain : 0.01,
    hold    : 0.1443,
    release : 0
  },
  tremolo: {
    shape: 'sine',
    magnitude: 1.8,
    speed: 8.376,
    attack: 0.1
  }
});

module.exports = sid;
