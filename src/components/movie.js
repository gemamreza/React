import React from 'react';

const Movie = (val) => {
  return (
        <div className="card col-md-3 mr-5 mt-3" style={{width: '18rem'}}>
        <img className="card-img-top img" height='300px' src={val.poster} alt="Card image cap" />
        <div className="card-body">
        <h3 className="card-text">{val.title}</h3>
        <p style={{textAlign:'left'}}>movie</p>
        <p style={{textAlign:'left'}}><i> {val.year} </i></p>
        </div>
        </div>
  )
};

export default Movie;
