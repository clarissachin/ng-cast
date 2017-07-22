angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    handleclick: '<'
  },

  controller: function() {
    this.name = 'kevin';
  },
  
  templateUrl: 'src/templates/videoListEntry.html'
});
