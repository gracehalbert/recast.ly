// var App = (props) => (
//
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={props.videolist}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={props.videolist}/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: [],
      nowPlaying: null,
      key: 'AIzaSyBVtvAiN9TvtcmYie4XrNZgsJoOHd7nd_c'
    };

    this.getVideos = this.getVideos.bind(this);
    this.setNowPlaying = this.setNowPlaying.bind(this);
  }

  componentDidMount() {
    this.getVideos();
    // console.log('some shit');

  }
  getVideos(query) {
    // console.log(YOUTUBE_API_KEY);
    var options = {
      key: this.state.key,
      query: query || 'cats'
    };
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videoList: videos,
        nowPlaying: videos[0]
      });
    }
    );
    // console.log('hi');
  }
  setNowPlaying(index) {
    this.setState ({
      nowPlaying: this.state.videoList[index]
    });
  }

  debounce(query) {
    _.debounce(this.getVideos.bind(this), 500)(query);
  }

  render() {
    return (
      <div>
           <Nav onSearch={this.debounce.bind(this)}/>
           <div className="col-md-7">
             <VideoPlayer video={this.state.nowPlaying}/>
           </div>
           <div className="col-md-5">
             <VideoList videos={this.state.videoList} setNowPlaying={this.setNowPlaying}/>
           </div>
         </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
