angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    handleclick: '<'
  },
  
  templateUrl: 'src/templates/videoListEntry.html'
});
