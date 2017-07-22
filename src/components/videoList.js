angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    handleclick: '<'
  },

  templateUrl: 'src/templates/videoList.html'
});
