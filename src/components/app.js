angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.video = this.videos[0];
    this.handleclick = (video) => {
      this.video = video;
    };
    this.cb = () => (console.log('got result'));
    this.handlesearch = (query) => {
      youTube.search(query, (results) => {
        this.videos = results.data.items;
        this.video = this.videos[0];
      });
    };
  },
  

  templateUrl: 'src/templates/app.html'
});