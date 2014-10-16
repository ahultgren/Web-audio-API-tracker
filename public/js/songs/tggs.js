'use strict';

var sid = require('../sounds/sid');
var tempo = 4; // bps
var lead = require('../tracks/tggs.lead.txt');
var notes = lead.trim().split('\n');

exports.play = function () {
  notes.forEach(function (note, i) {
    sid.play({
      pitch: note,
      wait: i * 1/tempo
    });
  });
};
