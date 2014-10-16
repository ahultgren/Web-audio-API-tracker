'use strict';

module.exports = function Track (options) {
  this.instrument = options.instrument;
  this.notes = options.notes || [];
  this.bps = options.bps || 4;
  this.volume = options.volume || 0;
  this.loop = options.loop || 1;
};
