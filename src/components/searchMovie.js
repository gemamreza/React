import React, {Component} from 'react';

class MovieSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchMov: ''
    }
  } 

  handleFilmBtnSubmit(event) {
    event.preventDefault();
    this.props.searchTitle(this.state.searchMov);
    this.setState({searchMov:''});
  }

  render() {
    return (
        <form onSubmit={this.handleFilmBtnSubmit.bind(this)}> 
            <div className="row">
                <div className="col-md-4">
                    <input type="text" className="form-control" value={this.state.searchMov}
                    onChange={e => this.setState({searchMov: e.target.value})}
                    />
                </div>
                <div className="col-md-2">
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
             </div>
        </form>
    )
  }
};

export default MovieSearch;
