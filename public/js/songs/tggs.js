'use strict';

var sid = require('../sounds/sid');
var tempo = 4; // bps

var notes = 'G4G3A4G3a4G3A4G3G4G3C5G3a4G3A4G3G4F3A4F3a4F3C5F3D5F3C5F3a4F3A4F3G4d3A4d3a4d3A4d3G4d3C5d3a4d3A4d3f4D3G4D3A4D3a4D3C5D3D5D3a4D3A4D3'
  .split('').map(function (note, i, array) {
    return note.match(/[A-Za-z]/) ? (note + array[i + 1]) : '';
  }).filter(Boolean)
  .map(function (note) {
    return note.match(/[a-z]/) ? note.charAt(0).toUpperCase() + '#' + note.charAt(1) : note;
  });

exports.play = function () {
  notes.forEach(function (note, i) {
    sid.play({
      pitch: note,
      wait: i * 1/tempo
    });
  });
};
