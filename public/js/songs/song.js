'use strict';

var Song = module.exports = function Song (tracks) {
  this.tracks = tracks;
};

Song.prototype.play = function() {
  this.tracks.forEach(function (track) {

    new Array(track.loop + 1).join(' ').split('').forEach(function(_, loop){
      track.notes.forEach(function (note, i) {
        if(note !== '') {
          track.instrument.play({
            pitch: note,
            wait: i * 1/track.bps + (loop * track.notes.length * 1/track.bps),
            volume: track.volume
          });
        }
      });
    });
  });
};
