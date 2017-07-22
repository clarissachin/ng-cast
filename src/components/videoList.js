angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    handleclick: '<'
  },
  controller: function() {
  },
  templateUrl: 'src/templates/videoList.html'
});
