'use strict';

var Song = module.exports = function Song (tracks) {
  this.tracks = tracks;
};

Song.prototype.play = function() {
  this.tracks.forEach(function (track) {

    new Array(track.loop + 1).join(' ').split('').forEach(function(_, loop){
      track.notes.forEach(function (noteInfo, i) {
        var data;
        var noteInfoArr = noteInfo.split(/ +/);
        var note = noteInfoArr[0];
        var duration = noteInfoArr[1];

        if(note !== '') {
          data = {
            pitch: note,
            wait: i * 1/track.bps + (loop * track.notes.length * 1/track.bps),
            volume: track.volume
          };

          if(duration) {
            data.env = {
              decay: 1/track.bps * duration
            };
          }

          track.instrument.play(data);
        }
      });
    });
  });
};
