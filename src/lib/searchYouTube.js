var searchYouTube = (options, callback) => {
//   fetch('https://www.googleapis.com/youtube/v3/search', {
//     method: 'GET',
//     q: options.query,
//     maxResults: options.max,
//     videoEmbeddable: 'true',
//     type: 'video',
//     part: 'snippet',
//     key: options.key || 'AIzaSyBVtvAiN9TvtcmYie4XrNZgsJoOHd7nd_c'
//   }).then(function(data) {
//     console.log('successful AJAX call');
//     if (callback) {
//       callback(data.items);
//     }
//   });
// };

//
//
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
