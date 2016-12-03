var App = (props) => (

  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer/>
    </div>
    <div className="col-md-5">
      <VideoList videos={props.videolist}/>
    </div>
  </div>
);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//            <Nav />
//            <div className="col-md-7">
//              <VideoPlayer/>
//            </div>
//            <div className="col-md-5">
//              <VideoList videos={this.props.videos}/>
//            </div>
//          </div>
//     );
//   }
// }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
