angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query, callback) {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        key: YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        part: 'snippet'
      }
    }).then(callback);
  };
});