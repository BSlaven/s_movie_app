import { useState, useEffect } from 'react';

import classes from './Movies.module.css';

const MY_API_KEY = import.meta.env.VITE_APP_API_KEY;

const Movies = () => {

  const [ movies, setMovies ] = useState([]);

  const fetchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${MY_API_KEY}`
  
  useEffect(() => {
    fetchMovies(fetchUrl);
  }, [])
  
  const fetchMovies = async url => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
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
