'use strict';

var Song = module.exports = function Song (tracks) {
  this.tracks = tracks;
};

Song.prototype.play = function() {
  this.tracks.forEach(function (track) {
    track.notes.forEach(function (note, i) {
      if(note !== '') {
        track.instrument.play({
          pitch: note,
          wait: i * 1/track.bps
        });
      }
    });
  });
};
