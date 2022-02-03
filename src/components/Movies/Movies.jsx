import { useState, useEffect } from 'react';

import classes from './Movies.module.css';

const MY_API_KEY = import.meta.env.VITE_APP_API_KEY;

const Movies = () => {

  const [ movies, setMovies ] = useState([]);
  // cosnt [ page, setPage ] = useState(1);

  const baseFetchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${MY_API_KEY}`

  // const searchFetchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${MY_API_KEY}`
  
  // useEffect(() => {
  //   fetchMovies(baseFetchUrl);
  // }, [])
  
  const fetchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
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
