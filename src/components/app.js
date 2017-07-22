angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = [];
    this.video = null;
    this.handleclick = (video) => {
      this.video = video;
    };
    this.handlesearch = (query) => {
      youTube.search(query, (results) => {
        this.videos = results.data.items;
        this.video = this.videos[0];
      });
    };
    this.livesearch = _.debounce(this.handlesearch, 500);
    this.handlesearch('cats');
  },

  templateUrl: 'src/templates/app.html'
});
