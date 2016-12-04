// var Search = (props) => {
//   var clickHandler = function (event) {
//     console.log($(event.target), ' event target');
//     event.preventDefault();
//     var inputVal = $(event.target).val();
//     console.log(inputVal + ' input');
//     props.onSearch(inputVal);
//   };
//   return (
//     <div className="search-bar form-inline">
//     <input onChange={clickHandler} className="form-control" type="text" />
//     <button className="btn hidden-sm-down" /* onClick={function() {
//        this.getVideos(this.state.search);
//     }}*/>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
//   );
// };

class Search extends React.Component {
  constructor (props) {
    super (props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      textInput: ''
    };
  }
  clickHandler (event) {
    // console.log($(event.target), ' event target');
    const {onSearch} = this.props;
    onSearch(event.target.value);
    this.setState({
      textInput: event.target.value
    });
  }
  render () {
    return (
      <div className="search-bar form-inline">
      <input onChange={this.clickHandler} className="form-control" type="text" />
      <button className="btn hidden-sm-down" /* onClick={function() {
         this.getVideos(this.state.search);
      }}*/>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
