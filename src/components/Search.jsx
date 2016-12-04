var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={this.props.search()} />
    <button className="btn hidden-sm-down" /* onClick={function() {
       this.getVideos(this.state.search);
    }}*/>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);




// var handleTextChange = function(e) {
//   this.setState({search: e.target.value});
// };



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
