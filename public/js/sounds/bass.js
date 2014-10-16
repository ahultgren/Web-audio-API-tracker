'use strict';

var Wad = require('wad/src/wad');

var bass = new Wad({
  source  : 'square',
  volume  : 0.5,
  env     : {
    attack  : 0.0,
    decay   : 0.4,
    sustain : 0.2,
    hold    : 0.1,
    release : 0
  }
});

module.exports = bass;
