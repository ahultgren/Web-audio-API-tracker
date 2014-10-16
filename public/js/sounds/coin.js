'use strict';

var Wad = require('wad/src/wad');

var coin = new Wad({
  source  : 'square',
  volume  : 0.5,
  pitch   : 828,
  detune  : 0,
  env     : {
    attack  : 0.0,
    decay   : 0.2384,
    sustain : 0.4918,
    hold    : 0.0005912,
    release : 0
  }
});

exports.play = function playCoin (options) {
  coin.play(options);
  coin.play({
    detune: 500,
    wait: 0.094 + (options && options.wait || 0)
  });

  setTimeout(function () {
    coin.stop();
    coin.stop();
  }, 420);
};
