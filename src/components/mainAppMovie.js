import React, { Component } from 'react';
import MovieSearch from './searchMovie';
import MovieList from './movielist'


class mainApp extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  searchTitle(term) {
    fetch(`http://www.omdbapi.com/?s=${term}&apikey=6a953632`)
    .then(r => r.json())
    .then((data) => {
      this.setState({movies: data.Search})
    })
    .catch(err => console.log('Error:', err))
  }

  render() {
    return (
      <div className="container">
        <h1><center> Selamat Datang di Movie </center></h1>
        <MovieSearch
          searchTitle={this.searchTitle.bind(this)}
        />
        <MovieList
          movies={this.state.movies}
        />
      </div>
    );
  }
}

export default mainApp;
