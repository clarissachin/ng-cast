angular.module('video-player')
.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.video = this.videos[0];
    this.handleclick = (video) => {
      this.video = video;
    };
  },
  

  templateUrl: 'src/templates/app.html'
});