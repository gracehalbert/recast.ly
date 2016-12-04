var searchYouTube = (options, callback) => {
//   // TODO
//   var defaults = {
//     key: YOUTUBE_API_KEY,
//     maxResults: options.max || 5,
//     q: options.query
//   };
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     data: _.defaults(options, defaults),
//     // console.log(data),
//     // maxResults: 5,
//     contentType: 'json',
//     // success: function(data) {
//     //   console.log(data);
//     //   callback(data);
//     // }
//   }).done(function(data) {
//     if (callback) {
//       callback(data.items);
//     }
//   });
// };


  $.get('https://www.googleapis.com/youtube/v3/search', {
    q: options.query,
    maxResults: options.max,
    videoEmbeddable: 'true',
    type: 'video',
    part: 'snippet',
    key: options.key || 'AIzaSyBVtvAiN9TvtcmYie4XrNZgsJoOHd7nd_c'
  })
  .done(function(data) {
    console.log('successful AJAX call');
    if (callback) {
      callback(data.items);
    }
  })
  .fail(function(data) {
    console.error('nope');
  });

};
window.searchYouTube = searchYouTube;
