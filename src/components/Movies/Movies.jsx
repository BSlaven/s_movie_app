import { useState, useEffect } from 'react';

import MovieCard from '../MovieCard/MovieCard';
import classes from './Movies.module.css';

const MY_API_KEY = import.meta.env.VITE_APP_API_KEY;

const Movies = () => {

  const [ movies, setMovies ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');
  const [ page, setPage ] = useState(1);

  const baseFetchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${MY_API_KEY}&page=${page}`

  const searchFetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&query=${searchValue}&page=${page}`
  
  useEffect(() => {
    if(!searchValue) {
      fetchMovies(baseFetchUrl);
    } else {
      fetchMovies(searchFetchUrl);
    }
  }, [page]);
  
  const fetchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  }

  const inputChangeHandler = e => {
    const value = e.target.value.trim()
    setSearchValue(value);
  }

  const formSubmitHanlder = e => {
    e.preventDefault();
    if(!searchValue) return;
    fetchMovies(searchFetchUrl);
  }

  const pageUp = e => {
    setPage(page + 1)
  }

  const pageDown = e => {
    setPage(page - 1)
  }

  return (
    <div className={classes.movies}>
      <h2 className={classes.moviesTitle}>All your movies right here</h2>
      <form className={classes.form} onSubmit={formSubmitHanlder}>
        <input 
          onChange={inputChangeHandler}
          placeholder='Search'
          value={searchValue || ''}
          className={classes.searchInput}
          type="text"
          name="search"
          id="search" />
      </form>
      <p className={classes.pageSelect}>
        <span onClick={pageDown}>-</span>
          {page}
        <span onClick={pageUp}>+</span>
      </p>
      <div className={classes.moviesContainer}>
        {movies && movies.map(movie => <MovieCard {...movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Movies;
