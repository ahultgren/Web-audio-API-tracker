'use strict';

var Wad = require('wad/src/wad');
var Song = require('../song');
var Track = require('../track');
//var sid = require('../../sounds/sid');
var snare = new Wad(Wad.presets.hiHatClosed);

var drum1 = require('./snare.txt').split('\n');

module.exports = new Song([
  new Track({
    instrument: snare,
    notes: drum1,
    bps: 4,
    loop: 4
  })
]);
