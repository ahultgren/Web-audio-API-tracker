'use strict';

var Song = require('../song');
var Track = require('../track');
var sid = require('../../sounds/sid');

var lead = require('./lead.txt').trim().split('\n');

module.exports = new Song([
  new Track({
    instrument: sid,
    notes: lead,
    bps: 4
  })
]);
