import { useState, useEffect } from 'react';

import classes from './Movies.module.css';

const Movies = () => {

  const [ movies, setMovies ] = useState([]);
  
  // useEffect(() => {
  //   fetchMovies();
  // }, [])
  
  const fetchMovies = url => {
    
  }

  return (
    <div className={classes.movies}>
      <h2>All your movies right here</h2>
      <div className={classes.moviesContainer}>

      </div>
    </div>
  );
};

export default Movies;
