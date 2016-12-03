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
    this.setNowPlaying = this.setNowPlaying.bind(this);
    this.state = {
      videolist: props.videolist,
      nowPlaying: null
    };
  }
  setNowPlaying(index) {
    this.setState({
      nowPlay: this.state.videolist[index]
    });
  }
  // getInitialState() {
  //   this.state = {
  //     videolist: props.videolist,
  //     nowPlaying: null
  //   };
  // }
  render() {
    console.log(this.props);
    return (
      <div>
           <Nav />
           <div className="col-md-7">
             <VideoPlayer video={this.state.videolist}/>
           </div>
           <div className="col-md-5">
             <VideoList videos={this.state.videolist}/>
           </div>
         </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
