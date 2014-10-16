'use strict';

var coin = require('./sounds/coin');
var laser = require('./sounds/laser');
var sid = require('./sounds/sid');

var tggs = require('./songs/tggs');
var tgl = require('./songs/tgl');

document.getElementById('play-coin').addEventListener('mousedown', function () {
  coin.play();
}, false);

document.getElementById('play-laser').addEventListener('mousedown', function () {
  laser.play();
}, false);

document.getElementById('play-sid').addEventListener('mousedown', function () {
  sid.play({
    env: {
      decay: 1
    }
  });
}, false);

document.getElementById('play-song').addEventListener('mousedown', function () {
  tggs.play();
}, false);

document.getElementById('play-tgl').addEventListener('mousedown', function () {
  tgl.play();
}, false);
