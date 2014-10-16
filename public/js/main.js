'use strict';

var coin = require('./sounds/coin');

document.getElementById('play-coin').addEventListener('mousedown', function () {
  coin.play();
}, false);
