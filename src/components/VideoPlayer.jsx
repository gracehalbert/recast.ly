var VideoPlayer = ({video}) => {
  if (!video) {
    console.log('video not defined');
    return (
      <div className="video-player">
        <h2>'nothing loaded'</h2>
      </div>
    );
  } else {
    console.log(video, 'video');
    return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + video.id.videoId} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
    );
  }
};

// class VideoPlayer extends React.Component {
//   constructor (props) {
//     super (props);
//   }
//   render () {
//     return (
//       <div className="video-player">
//         <div className="embed-responsive embed-responsive-16by9">
//           <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.id.videoId} allowFullScreen></iframe>
//         </div>
//         <div className="video-player-details">
//           <h3>Video Title</h3>
//           <div>Video Description</div>
//         </div>
//       </div>
//     );
//   }
// }

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
