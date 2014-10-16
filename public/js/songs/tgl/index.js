'use strict';

var Wad = require('wad/src/wad');
var Song = require('../song');
var Track = require('../track');
var bass = require('../../sounds/bass');
var flute = require('../../sounds/sid');
var snare = new Wad(Wad.presets.hiHatClosed);

var drum1 = require('./snare.txt').split('\n');
var bassLine = require('./bass.txt').trim().split('\n');
var lead = require('./lead.txt').trim().split('\n');

var baseTempo = 4*72/60;

module.exports = new Song([
  new Track({
    instrument: snare,
    notes: drum1,
    bps: baseTempo,
    loop: 16
  }),
  new Track({
    instrument: bass,
    notes: bassLine,
    volume: 0.3,
    bps: baseTempo
  }),
  new Track({
    instrument: flute,
    notes: lead,
    volume: 0.6,
    bps: baseTempo * 2
  })
]);
