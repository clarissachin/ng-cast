angular.module('video-player')
.component('search', {
  bindings: {
    handlesearch: '<',
    livesearch: '<'
  },

  templateUrl: 'src/templates/search.html'
});
