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

function playCoin () {
  console.log(coin.play());
  coin.play({
    detune: 500,
    wait: 0.094
  });

  setTimeout(coin.stop.bind(coin), 420);
  setTimeout(coin.stop.bind(coin), 420);
}

playCoin();
