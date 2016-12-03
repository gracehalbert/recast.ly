var searchYouTube = (options, callback) => {
  // TODO
  var defaults = {
    key: YOUTUBE_API_KEY,
    max: 5,
    q: 'cats'
  };
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: _.defaults(options, defaults),
    // console.log(data),
    maxResults: defaults.max,
    contentType: 'json',
    success: function(data) {
      callback(data);
    }
  });
};

window.searchYouTube = searchYouTube;
