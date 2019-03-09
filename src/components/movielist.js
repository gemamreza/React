import React from 'react';
import Movie from './movie'

const MovieList = (movie) => {
  const movies = movie.movies.map((val) => {
    return (
      <Movie
        key={val.imdbID}
        title={val.Title}
        year={val.Year}
        poster={val.Poster}
      />
    );
  });

return (
    <div className='container'>
        <div className='row justify-content-center'>
            {movies}
        </div>
    </div>
  )
}

export default MovieList
