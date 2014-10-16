'use strict';

var coin = require('./sounds/coin');
var laser = require('./sounds/laser');

document.getElementById('play-coin').addEventListener('mousedown', function () {
  coin.play();
}, false);

document.getElementById('play-laser').addEventListener('mousedown', function () {
  laser.play();
}, false);
